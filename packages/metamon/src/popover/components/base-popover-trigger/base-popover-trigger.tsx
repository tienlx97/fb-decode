import { CometPlaceholder } from '@metamon/placeholder'
import { getCurrentQueueTime } from '@metamon/utils/common/comet-event-timings'
import React, {
  ReactNode,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

// p = c('gkx')('8058')
const p = true

function q({ content, fallback }: any) {
  return jsx(CometPlaceholder, {
    fallback: fallback ?? null,
    children: content,
  })
}

function r({ contextualLayerRef }: any) {
  useLayoutEffect(() => {
    const curr = contextualLayerRef.current
    curr &&
      curr.reposition({
        autoflip: true,
      })
  }, [contextualLayerRef])
  return null
}

type BasePopoverTriggerProps = {
  children?: ReactNode
  doNotCloseOnOutsideClick?: boolean
  fallback?: ReactNode
  imperativeRef?: any
  interactionTracker?: any
  onHighIntentPreload?: any
  onLayerDetached?: any
  onVisibilityChange?: any
  popover?: any
  popoverRenderer?: any
  popoverPreloadResource?: ReactNode
  popoverProps?: any
  popoverType?: string
  preloadTrigger?: any
  tracePolicy?: any
  visibleOnLoad?: boolean
  triggerOutsideClickOnDrag?: any
}

export function BasePopoverTrigger({
  children,
  doNotCloseOnOutsideClick = false,
  fallback,
  imperativeRef,
  interactionTracker,
  onHighIntentPreload,
  onLayerDetached,
  onVisibilityChange,
  popover,
  popoverRenderer = q,
  popoverPreloadResource,
  popoverProps,
  popoverType = 'dialog',
  preloadTrigger,
  tracePolicy,
  visibleOnLoad = false,
  triggerOutsideClickOnDrag,
  ...rest
}: BasePopoverTriggerProps) {
  const H = useRef(false)
  const [I, J] = useState(false)

  const [K, L] = useState(null)
  const M = useRef(null)
  const N = useRef(null)
  const O = useCallback(
    (a: any) => {
      J(a)
      if (onVisibilityChange) {
        onVisibilityChange(a)
      }
    },
    [onVisibilityChange],
  )

  const P = useCallback(() => {
    O(!1)
    L(null)
    N.current = null
  }, [O])

  const Q = useCallback(
    (a?: any) => {
      if (!I)
        if (!interactionTracker) {
          O(!0)
        } else {
          const [b, a0] = getCurrentQueueTime(a ?? a.timeStamp)

          interactionTracker(
            (e: any) => {
              N.current = e
              O(!0)
              // L(
              //   c('CometHeroLogging').genHeroInteractionUUIDAndMarkStart(
              //     e.getTraceId(),
              //   ),
              // )
            },
            b,
            a0,
          )
        }
    },
    [I, interactionTracker, O],
  )

  useImperativeHandle(
    imperativeRef,
    function () {
      return {
        hide: function () {
          P()
        },
        show: function () {
          Q()
        },
      }
    },
    [Q, P],
  )

  const D = useCallback(
    (a: any) => {
      // b('cr:1791018') &&
      //   a != null &&
      //   K != null &&
      //   b('cr:1791018').addMutationRootForTraceId(K, a)
    },
    [K],
  )

  const R = useRef(null)
  useCometPreloaderImpl = useCometPrerenderer(
    popoverRenderer,
    I,
    popoverPreloadResource,
    onHighIntentPreload,
  )
}
