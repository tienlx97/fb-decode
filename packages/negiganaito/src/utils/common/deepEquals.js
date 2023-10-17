/* eslint-disable no-self-assign */

import { isPrimitive } from './is-primitive'

/* eslint-disable no-redeclare */
var h = function (a) {
    return function (b, c) {
      return deepEquals(b, a[c])
    }
  },
  i = function (a, b) {
    return function (c) {
      return c in a && c in b && deepEquals(a[c], b[c])
    }
  },
  j = function (a, b) {
    if (a.size !== b.size) return !1
    b = new Set(b)
    for (
      var a = a.keys(),
        d = Array.isArray(a),
        e = 0,
        a = d
          ? a
          : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
      ;

    ) {
      var f
      if (d) {
        if (e >= a.length) break
        f = a[e++]
      } else {
        e = a.next()
        if (e.done) break
        f = e.value
      }
      f = f
      if (b.has(f)) b['delete'](f)
      else if (isPrimitive(f)) return !1
      else {
        f = k(b, f)
        if (f != null) b['delete'](f)
        else return !1
      }
    }
    return b.size === 0
  }
function k(a, b) {
  for (
    var a = a,
      c = Array.isArray(a),
      d = 0,
      a = c
        ? a
        : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var e
    if (c) {
      if (d >= a.length) break
      e = a[d++]
    } else {
      d = a.next()
      if (d.done) break
      e = d.value
    }
    e = e
    if (deepEquals(e, b)) return e
  }
  return null
}

export function deepEquals(a, b) {
  if (a === b) return !0
  if (isPrimitive(a)) return !1
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b))
    return !1
  if (Array.isArray(a)) return a.length === b.length && a.every(h(b))
  if (a instanceof Set) return j(a, b)
  var d = Object.keys(a)
  return d.length !== Object.keys(b).length ? !1 : d.every(i(a, b))
}
