import { useCallback, useEffect, useRef } from 'react'
import { stableStringify } from '../utils/stable-stringify'
import { useCometPrerendererImpl } from '@negiganaito/popover'

const m = 3e4

export function useCometEntryPointPrerendererWithQueryTimeoutPrivate(
  a: any, // {root: a, getPreloadProps: ƒ}
  b: any,
  e: any, // button
  f: any, // queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
) {
  const g = useRef<any>(null)
  const h = stableStringify(b) // {}
  const n = useRef<any>(null)

  const o = useCallback(() => {
    if (n.current == null) return
    clearTimeout(n.current)
    n.current = null
  }, [])

  const p = useCallback(
    function () {
      let a
      o()
      a = !(a = g.current)
        ? void 0
        : !(a = a.preloadedEntryPoint)
        ? void 0
        : a.dispose
      a && a()
      g.current = null
    },
    [o],
  )

  let q = useCallback(() => {
    n.current = setTimeout(() => {
      p()
    }, m)
  }, [p])

  useEffect(() => {
    return p
  }, [p])

  const s = useCallback(() => {
    o()
    if (b == null) {
      return
    }
    if (
      g.current == null ||
      g.current.entryPoint !== a ||
      g.current.preloadParamsHash !== h
    ) {
      p()
      g.current = {
        entryPoint: a.root,
        preloadedEntryPoint: a.root, // d('CometRelay').loadEntryPoint(r, a, b),
        preloadParamsHash: h,
      }
      // var c = l.getModuleIfRequireable()
      // c && a && c.fetchPredictedResources(a, b)
    }
    return !g.current ? void 0 : g.current.preloadedEntryPoint
  }, [o, a, p, h])

  let t = useCallback(() => {
    // var c = l.getModuleIfRequireable()
    // b && c && c.fetchPredictions(a, b)
    // a.root.preload()
    Boolean(
      f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ) && s()
  }, [
    a,
    f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    b,
    s,
  ])

  e = useCometPrerendererImpl(e, !1, t, s, q)

  e[0]
  t = e[1]
  q = e[2]

  let u = e[3]
  e = e[4]

  let v = useCallback(() => {
    var a = s()
    a && (g.current = null)
    return a
  }, [s])

  return [
    v,
    {
      onHighIntent: e,
      onHoverIn: t,
      onHoverOut: q,
      onPressIn: u,
    },
  ]
}
