import { LayoutAnimationBoundaryContext } from '@metamon/context'
import { LAYOUT_ANIMATION_EVENT } from '@metamon/utils/common/layout-animation-events'
import { useContext, useEffect, useRef } from 'react'

function useLayoutAnimationEvents(a: any) {
  const b = useContext(LayoutAnimationBoundaryContext)
  const e = useRef([])

  useEffect(
    function () {
      const c = (!b ? void 0 : b.animationEventTargets) || []
      c.forEach(function (b: any) {
        b = b.addListener(LAYOUT_ANIMATION_EVENT, a)
        // @ts-ignore
        e.current = [].concat(e.current, [b])
      })
      return function () {
        e.current.forEach(function (a: any) {
          a.remove()
        }),
          (e.current = [])
      }
    },
    [a, b],
  )
}

export default useLayoutAnimationEvents
