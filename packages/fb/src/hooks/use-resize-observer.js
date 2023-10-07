/* eslint-disable camelcase */
import { FBLogger } from '@fb/error/errorguard'
import { uniqueID } from '@fb/utils/unique-id'
import { useCallback, useLayoutEffect, useRef } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

import ResizeObserverPolyfill from 'resize-observer-polyfill'

export function useResizeObserver(a) {
  const b = useRef(null),
    c = useRef(a)
  useLayoutEffect(
    function () {
      c.current = a
    },
    [a],
  )
  return useCallback(function (d) {
    const a = function (a, b, d) {
      c.current && c.current(a, b, d)
    }
    d = d == null ? null : o(d, a)
    b.current && b.current()
    b.current = d
  }, [])
}
let k = null
const l = new Map()

function m() {
  k == null && (k = new ResizeObserverPolyfill(n))
  return k
}

function n(a) {
  const b = new Map(),
    e = new Map(
      a.map(function (a) {
        const d = a.contentRect
        // false
        // if (c('gkx')('1470120')) {
        //   const e = b.get(a.target)
        //   if (e == null) {
        //     const f = w(a.target)
        //     b.set(a.target, f)
        //     d = f
        //   } else d = e
        // }
        return [a.target, d]
      }),
    ),
    f = new Set(l.keys())
  unstable_batchedUpdates(function () {
    for (
      let b = Array.isArray(e),
        d = 0,
        a = b
          ? a
          : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
      ;

    ) {
      let g
      if (b) {
        if (d >= a.length) break
        g = a[d++]
      } else {
        d = a.next()
        if (d.done) break
        g = d.value
      }
      // eslint-disable-next-line no-self-assign
      g = g
      const h = g[0]
      g = g[1]
      const i = l.get(h)
      if (i != null)
        for (
          let j = Array.isArray(i),
            k = 0,
            i = j
              ? i
              : i[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          let m
          if (j) {
            if (k >= i.length) break
            m = i[k++]
          } else {
            k = i.next()
            if (k.done) break
            m = k.value
          }
          // eslint-disable-next-line no-self-assign
          m = m
          m = m[1]
          try {
            m(g, h, e)
          } catch (a) {
            FBLogger('useResizeObserver').catching(a)
          }
        }
      else
        f.has(h) ||
          FBLogger('useResizeObserver').mustfix(
            'ResizeObserver observed resizing of an element that it should not be observing',
          )
    }
  })
}

function o(a, b) {
  let d,
    e = uniqueID()
  d = (d = l.get(a)) != null ? d : new Map()
  d.set(e, b)
  l.set(a, d)
  m().observe(a)
  return p(a, e)
}

function p(a, b) {
  return function () {
    const c = l.get(a)
    if (c == null) return
    c['delete'](b)
    c.size === 0 && (m().unobserve(a), l['delete'](a))
  }
}

function q(a) {
  return parseFloat(a) || 0
}

function r(a) {
  return (a =
    a == null
      ? void 0
      : (a = a.ownerDocument) == null
      ? void 0
      : a.defaultView) != null
    ? a
    : window
}

function s(a, b, c, d) {
  return {
    x: a,
    y: b,
    width: c,
    height: d,
  }
}

const t = s(0, 0, 0, 0)
function u(a) {
  const b = ['top', 'right', 'bottom', 'left'],
    c = {}
  for (let d = 0; d < b.length; d++) {
    const e = b[d],
      f = a['padding-' + e]
    c[e] = q(f)
  }
  return c
}

function v(a) {
  for (
    var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
    d < b;
    d++
  )
    c[d - 1] = arguments[d]
  return c.reduce(function (b, c) {
    c = a['border-' + c + '-width']
    return b + q(c)
  }, 0)
}

function w(a) {
  const b = a.clientWidth,
    c = a.clientHeight
  if (!b && !c) return t
  a = r(a).getComputedStyle(a)
  const d = u(a),
    e = d.left + d.right,
    f = d.top + d.bottom
  let g = q(a.width)
  let h = q(a.height)
  a.boxSizing === 'border-box' &&
    (Math.round(g + e) !== b && (g -= v(a, 'left', 'right') + e),
    Math.round(h + f) !== c && (h -= v(a, 'top', 'bottom') + f))
  return s(d.left, d.top, g, h)
}
