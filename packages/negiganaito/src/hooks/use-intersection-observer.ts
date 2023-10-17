import { useCallback, useLayoutEffect, useRef } from 'react'

import DOM from '@negiganaito/utils/common/dom-rect-read-only'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import JSScheduler from '@negiganaito/utils/common/jss-scheduler'
import { observeIntersection } from '@negiganaito/utils/common/observe-intersection'

import { useDynamicCallbackDANGEROUS } from './use-dynamic-callback-DANGEROUS'

const k = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  l = DOM.fromRect(),
  m = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  }

function n(a: any) {
  var b
  if (a == null) {
    b = k
  } else if (typeof a === 'string') {
    return a
  } else
    typeof a === 'number'
      ? (b = {
          bottom: a,
          left: a,
          right: a,
          top: a,
        })
      : (b = Object.assign({}, k, a))
  a = b
  b = a.bottom
  var c = a.left,
    d = a.right
  a = a.top

  return a + 'px ' + d + 'px ' + b + 'px ' + c + 'px'
}

function o(a: any, b: any, element: any, onIntersect: any) {
  var f = b.root,
    g = b.rootMargin,
    h = b.threshold
  f = f === null ? null : f()
  const i =
    a == null ||
    a.element !== element ||
    a.onIntersect !== onIntersect ||
    a.observedRoot !== f ||
    a.rootMargin !== g ||
    a.threshold !== h
  if (i) {
    a && a.subscription.remove()
    const subscription = observeIntersection(element, onIntersect, {
      root: f,
      rootMargin: n(g),
      threshold: h,
    })
    return Object.assign({}, b, {
      element: element,
      observedRoot: f,
      onIntersect: onIntersect,
      subscription,
    })
  }
  return a
}

function a(a: any, b: any) {
  var e = b.root,
    f = b.rootMargin,
    g = b.threshold,
    k = useRef<any>(null),
    n = useRef<any>(null),
    p = useRef<any>(null),
    q = useRef<any>(null),
    r = useRef(!1),
    s = useDynamicCallbackDANGEROUS(a)
  b = useCallback(
    function (a: any) {
      if (k.current === a) {
        return
      }
      if (k.current != null && a == null) {
        q.current != null && JSScheduler.cancelCallback(q.current)
        var b = k.current
        q.current = JSScheduler.scheduleImmediatePriCallback(function () {
          k.current === null &&
            r.current === !1 &&
            s({
              boundingClientRect: m,
              intersectionRatio: 0,
              intersectionRect: m,
              isIntersecting: !1,
              isVisible: !1,
              rootBounds: l,
              target: b,
              time: Date.now(),
            }),
            (q.current = null)
        })
      }
      k.current = a
      n.current && (n.current.subscription.remove(), (n.current = null))
      p.current && JSScheduler.cancelCallback(p.current)
      p.current = JSScheduler.scheduleImmediatePriCallback(function () {
        k.current &&
          (n.current = o(
            n.current,
            {
              root: e,
              rootMargin: f,
              threshold: g,
            },
            k.current,
            s,
          )),
          (p.current = null)
      })
    },
    [s, e, f, g],
  )
  useLayoutEffect(
    function () {
      p.current != null && JSScheduler.cancelCallback(p.current)
      p.current = JSScheduler.scheduleImmediatePriCallback(function () {
        k.current != null &&
          (n.current = o(
            n.current,
            {
              root: e,
              rootMargin: f,
              threshold: g,
            },
            k.current,
            s,
          )),
          (p.current = null)
      })
      return function () {
        n.current != null &&
          (n.current.subscription.remove(), (n.current = null)),
          p.current != null &&
            (JSScheduler.cancelCallback(p.current), (p.current = null))
      }
    },
    [s, e, f, g],
  )
  useLayoutEffect(function () {
    r.current = !1
    return function () {
      r.current = !0
    }
  }, [])
  return b
}

function b(a: any, b: any, c?: any) {
  return function (a: any) {}
}

export default executionEnvironment.canUseDOM ? a : b
