import { intersectionObserverEntryIsIntersecting } from '@negiganaito/utils/common/intersection-observer-entry-is-intersecting'
import { observeIntersection } from '@negiganaito/utils/common/observe-intersection'
import { useCallback, useEffect, useRef } from 'react'

type WorkCometOnVisibleProps = {
  onVisible?: any
  children?: any
  onHidden?: any
}

export function WorkCometOnVisible({
  children,
  onHidden,
  onVisible,
}: WorkCometOnVisibleProps) {
  var f = useRef<any>(null),
    g = useRef(null),
    h = useCallback(
      function () {
        f.current && (f.current.remove(), (f.current = null))
        if (g.current == null) return
        f.current = observeIntersection(
          g.current,
          function (a: any) {
            intersectionObserverEntryIsIntersecting(a)
              ? onVisible()
              : onHidden == null
                ? void 0
                : onHidden()
          },
          {
            rootMargin: '0px',
          },
        )
      },
      [onVisible],
    )
  const a = useCallback(
    function (a: any) {
      g.current = a
      h()
    },
    [h],
  )
  useEffect(
    function () {
      f.current == null && h()
      return function () {
        f.current && (f.current.remove(), (f.current = null))
      }
    },
    [h],
  )
  return children(a)
}
