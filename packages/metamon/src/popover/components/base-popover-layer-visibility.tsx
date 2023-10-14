import { HiddenSubtreePassiveContext } from '@metamon/context'
import { emptyFunction } from '@metamon/utils/common/empty-function'
import { ReactNode, useContext, useEffect, useRef } from 'react'

type BasePopoverLayerVisibilityProps = {
  children?: ReactNode
  onLayerDetached?: any
}

export function BasePopoverLayerVisibility({
  children,
  onLayerDetached = emptyFunction,
}: BasePopoverLayerVisibilityProps) {
  const { getCurrentState, subscribeToChanges } = useContext(
    HiddenSubtreePassiveContext,
  )

  const g = useRef(!getCurrentState().hiddenOrBackgrounded)

  useEffect(() => {
    const cb = subscribeToChanges(({ hiddenOrBackgrounded }: any) => {
      const _hiddenOrBackgrounded = !hiddenOrBackgrounded

      g.current !== _hiddenOrBackgrounded &&
        !_hiddenOrBackgrounded &&
        onLayerDetached()
      g.current = _hiddenOrBackgrounded
    })
    return function () {
      cb.remove()
    }
  }, [onLayerDetached, subscribeToChanges])

  const onLayerDetachedRef = useRef(onLayerDetached)

  useEffect(() => {
    onLayerDetachedRef.current = onLayerDetached
  }, [onLayerDetached])

  const l = useRef<any>(null)

  useEffect(() => {
    if (l.current) {
      window.clearTimeout(l.current)
      l.current = null
    }

    return function () {
      l.current = window.setTimeout(onLayerDetachedRef.current, 1)
    }
  }, [])

  return children
}
