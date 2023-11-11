import { FBLogger } from '@negiganaito/error'
import { useCallback } from 'react'
import { useCometEntryPointPrerendererWithQueryTimeoutPrivate } from './use-comet-entry-point-prerenderer-with-query-timeout-private'

export function useCometEntryPointPrerendererWithQueryTimeout(
  a: any, // {root: a, getPreloadProps: ƒ}
  b: any,
  d: any, // button
  e: any,
) {
  a = useCometEntryPointPrerendererWithQueryTimeoutPrivate(a, b, d, e)
  const f = a[0]
  b = a[1]
  d = b.onHighIntent
  e = b.onHoverIn
  a = b.onHoverOut
  b = b.onPressIn
  const g = useCallback(
    (a: any, b: any) => {
      const d = f()
      if (d == null) {
        FBLogger('comet_ui')
          .blameToPreviousFrame()
          .mustfix(
            'Unable to present comet page EntryPoint component, preloadParams not set',
          )
        return
      }
      const e = function () {
        b && b.apply(void 0, arguments)
        var a = d == null ? void 0 : d.dispose
        a && a()
      }
      a(d, e)
    },
    [f],
  )
  return [g, e, a, b, d]
}
