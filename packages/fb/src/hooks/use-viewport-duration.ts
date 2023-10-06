import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'

import BaseViewportMarginsContext from '@fb/context/base-viewport-margins-context'
import HiddenSubtreePassiveContext from '@fb/context/hidden-subtree-passive-context'
import cometVisibilityUserActivityMonitor from '@fb/event/utils/comet-visibility-user-activity-monitor'
import { onBeforeUnload } from '@fb/utils/comet-run'
import { getIntersectionMarginFromViewportMargin } from '@fb/utils/get-intersection-margin-from-viewport-margin'
import { getStyleProperty } from '@fb/utils/get-style-property'
import { intersectionObserverEntryIsIntersecting } from '@fb/utils/intersection-observer-entry-is-intersecting'

// eslint-disable-next-line camelcase
import useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED from './use-double-effect-hack_DO_NOT_USE_THIS_IS_TRACKED'
import useIntersectionObserver from './use-intersection-observer'

export default function useViewportDuration(
  entry: IntersectionObserverEntry & any,
) {
  let b,
    e,
    f,
    g = arguments,
    o,
    p,
    q = entry.onHidden,
    r = entry.onIntersection,
    s = entry.onVisibilityDurationUpdated,
    t = entry.onVisible,
    u = entry.options,
    v = u === void 0 ? {} : u,
    w = entry.threshold,
    x = (b = v.hiddenWhenZeroArea) != null ? b : !1,
    y = (e = v.hiddenWhenCSSStyleHidden) != null ? e : !1,
    z =
      (f = v.isEntryInViewport) != null
        ? f
        : intersectionObserverEntryIsIntersecting,
    A = useRef(null),
    B = useRef(!1),
    C = useRef<any>(null),
    D = useRef<any>(null),
    E = useRef<any>(null),
    F = useContext(HiddenSubtreePassiveContext),
    G =
      v.activityMonitorOverride !== void 0
        ? v.activityMonitorOverride
        : cometVisibilityUserActivityMonitor

  let H = useCallback(
    function (a: any) {
      if (G && !G.isUserActive()) return 'USER_INACTIVE'
      let b = F.getCurrentState()
      if (b.hidden) return 'PUSH_VIEW_HIDDEN'
      if (b.backgrounded) return 'BACKGROUNDED'
      if (B.current === !1) return 'NOT_IN_VIEWPORT'
      if (x === !0 && n(a)) return 'TARGET_SIZE_0'
      if (y === !0) {
        b = m(a)
        if (b !== null) return b
      }
      return null
    },
    [G, F, y, x],
  )

  const I = useCallback(
    (a: any) => {
      return H(a) === null
    },
    [H],
  )

  const J = useCallback(
    (a: any, b: any, c: any) => {
      let d: any = A.current != null
      if (!d && c) {
        let e: any = Date.now()
        // @ts-ignore
        A.current = e
        t != null &&
          b != null &&
          t({
            entry: b,
            visibleTime: e,
          })
      } else if (d && !c) {
        d = (e = A.current) != null ? e : 0
        c = Date.now()
        if (q != null) {
          e = a || (b && H(b)) || 'UNKNOWN'
          q({
            entry: b,
            hiddenReason: e,
            hiddenTime: c,
            visibleDuration: c - d,
            visibleTime: d,
          })
        }
        A.current = null
      }
    },
    [H, q, s, t],
  )

  const K = useRef(J)
  useLayoutEffect(
    function () {
      K.current = J
    },
    [J],
  )

  useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED(function () {
    return function () {
      K.current('COMPONENT_UNMOUNTED', null, !1),
        C.current != null && (C.current(), (C.current = null)),
        E.current != null && (E.current.remove(), (E.current = null)),
        D.current != null && (D.current.remove(), (D.current = null))
    }
    // @ts-ignore
  }, [])

  let L = useCallback(
    function (a: any) {
      // c('nullIntersectionObserverEntryLogger')(
      //   a,
      //   'IntersectionObserverEntry is null. num_arguments=' + g.length,
      // )
      let b = (B.current = z(a))
      r &&
        r({
          entry: a,
          isElementVisible: I(a),
        })
      C.current == null
        ? b &&
          ((C.current =
            G &&
            G.subscribe(function (b: any) {
              return K.current('USER_INACTIVE', a, I(a))
            })),
          (E.current = F.subscribeToChanges(function (b: any) {
            return K.current(
              b.hidden ? 'PUSH_VIEW_HIDDEN' : 'BACKGROUNDED',
              a,
              I(a),
            )
          })),
          // c('gkx')('5223') && D.current != null && D.current.remove(),
          (D.current = onBeforeUnload(function (a: any) {
            K.current('PAGE_UNLOAD', null, !1)
          }, !1)))
        : b ||
          (C.current != null && (C.current(), (C.current = null)),
          E.current && (E.current.remove(), (E.current = null)),
          D.current != null && (D.current.remove(), (D.current = null)))
      K.current(null, a, I(a))
    },
    [I, G, F, z, r],
  )

  const M = useContext(BaseViewportMarginsContext)

  const N = useMemo(
    function () {
      return {
        bottom: M.bottom + 1,
        left: M.left + 1,
        right: M.right + 1,
        top: M.top + 1,
      }
    },
    [M.bottom, M.left, M.right, M.top],
  )

  const O = (o = v.root) != null ? o : null,
    P =
      (p = v.rootMargin) != null
        ? p
        : getIntersectionMarginFromViewportMargin(N)

  return useIntersectionObserver(L, {
    root: O,
    rootMargin: P,
    threshold: w,
  })
}

const m = function (a: any) {
  if (a.target == null) {
    return null
  }
  if (getStyleProperty(a.target, 'opacity') === '0') {
    return 'TARGET_TRANSPARENT'
  }
  return getStyleProperty(a.target, 'visibility') === 'hidden'
    ? 'TARGET_HIDDEN'
    : null
}

const n = function (a: any) {
  return (
    a.boundingClientRect &&
    (a.boundingClientRect.height === 0 || a.boundingClientRect.width === 0)
  )
}
