import { unrecoverableViolation } from '@negiganaito/error'

/* eslint-disable no-self-assign */
const e = {
  GREATEST_LOWER_BOUND: 'GREATEST_LOWER_BOUND',
  GREATEST_STRICT_LOWER_BOUND: 'GREATEST_STRICT_LOWER_BOUND',
  LEAST_STRICT_UPPER_BOUND: 'LEAST_STRICT_UPPER_BOUND',
  LEAST_UPPER_BOUND: 'LEAST_UPPER_BOUND',
  NEAREST: 'NEAREST',
}
var h = function (a: any, b: any) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw unrecoverableViolation(
        'The default comparator can only be used with sequences of numbers.',
        'comet_infra',
      )
    return a - b
  },
  i = e.GREATEST_LOWER_BOUND,
  j = e.GREATEST_STRICT_LOWER_BOUND,
  k = e.LEAST_STRICT_UPPER_BOUND,
  l = e.LEAST_UPPER_BOUND,
  m = e.NEAREST
function n(a: any, b: any, c: any, d: any, e: any) {
  e === void 0 && (e = h)
  var f = l
  f = p(a, b, c, d, e, f)
  if (c <= f && f < d) {
    c = a(f)
    return e(c, b) === 0 ? c : void 0
  } else return void 0
}
function o(a: any, b: any, c: any, d: any, e: any) {
  e === void 0 && (e = h)
  var f = l
  f = p(a, b, c, d, e, f)
  if (c <= f && f < d) return e(a(f), b) === 0 ? f : -1
  else return -1
}
function p(a: any, b: any, d: any, e: any, f: any, g: any) {
  switch (g) {
    case l:
      return q(a, b, d, e, f)
    case i:
      return r(a, b, d, e, f)
    case k:
      return s(a, b, d, e, f)
    case j:
      return t(a, b, d, e, f)
    case m:
      return u(a, b, d, e, f)
    default:
      throw unrecoverableViolation('Invalid mode ' + g, 'comet_infra')
  }
}
function q(a: any, b: any, c: any, d: any, e: any) {
  c = c
  d = d
  while (c + 1 < d) {
    var f = c + Math.floor((d - c) / 2)
    e(a(f), b) >= 0 ? (d = f) : (c = f)
  }
  return c < d && e(a(c), b) >= 0 ? c : d
}
function r(a: any, b: any, c: any, d: any, e: any) {
  return s(a, b, c, d, e) - 1
}
function s(a: any, b: any, c: any, d: any, e: any) {
  c = c
  d = d
  while (c + 1 < d) {
    var f = c + Math.floor((d - c) / 2)
    e(a(f), b) > 0 ? (d = f) : (c = f)
  }
  return c < d && e(a(c), b) > 0 ? c : d
}
function t(a: any, b: any, c: any, d: any, e: any) {
  return q(a, b, c, d, e) - 1
}
function u(a: any, b: any, c: any, d: any, e: any) {
  var f = r(a, b, c, d, e),
    g = Math.abs(e(a(f), b))
  e = Math.abs(e(a(f + 1), b))
  return g < e ? Math.max(f, c) : Math.min(f + 1, d - 1)
}
function a(a: any, b: any, c: any) {
  return n(
    function (b: any) {
      return a[b]
    },
    b,
    0,
    a.length,
    c,
  )
}
function b(a: any, b: any, c: any) {
  return o(
    function (b: any) {
      return a[b]
    },
    b,
    0,
    a.length,
    c,
  )
}
function d(a: any, b: any, c: any, d: any) {
  return p(
    function (b: any) {
      return a[b]
    },
    b,
    0,
    a.length,
    c,
    d,
  )
}

export const BinarySearch = {
  GREATEST_LOWER_BOUND: i,
  GREATEST_STRICT_LOWER_BOUND: j,
  LEAST_STRICT_UPPER_BOUND: k,
  LEAST_UPPER_BOUND: l,
  NEAREST: m,
  find: n,
  findIndex: o,
  findBound: p,
  leastUpperBound: q,
  greatestLowerBound: r,
  leastStrictUpperBound: s,
  greatestStrictLowerBound: t,
  nearest: u,
  findInArray: a,
  findIndexInArray: b,
  findBoundInArray: d,
}
