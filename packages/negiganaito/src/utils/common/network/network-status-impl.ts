import performanceNow from '../performance-now'
import { isHeartbeatPending, maybeStartHeartbeat } from './network-heartbeat'

let h,
  i: any,
  j: any = [],
  k = typeof window !== 'undefined' ? window : self,
  l = k == null ? void 0 : (h = k.navigator) == null ? void 0 : h.onLine,
  m = 2,
  n = 5e3,
  o: any = [],
  p: any = [],
  q = 0,
  r = !0,
  s = !1,
  t = !1,
  u = function () {
    y(r, !0)
  },
  v = function () {
    y(s, !0)
  }
function w() {
  var a = j.slice()
  a.forEach(function (a: any) {
    a({
      online: l,
    })
  })
}
function x(a: any) {
  a = j.indexOf(a)
  a > -1 && j.splice(a, 1)
}
function y(a: any, b?: any) {
  b === void 0 && (b = !1)
  var c = l === a
  b = !b && a === r && isHeartbeatPending()
  if (c || b) return
  t = t || a === s
  l = a
  l || maybeStartHeartbeat(u, v)
  w()
}
function z() {
  var a = (i || (i = performanceNow))()
  o = o.filter(function (b: any) {
    return A(b.startTime, a)
  })
  p = p.filter(function (b: any) {
    return A(b.startTime, a)
  })
  return p.length / o.length < m
}
var A = function (a: any, b: any) {
  return a > b - n
}

export function isOnline() {
  return l
}

export function onChange(a: any) {
  j.push(a)
  let b = !1
  return {
    remove: function () {
      b || ((b = !0), x(a))
    },
  }
}

export function reportError() {
  let a = (i || (i = performanceNow))()
  o.push({
    startTime: a,
  })
  maybeStartHeartbeat(u, v, z)
}

export function reportSuccess() {
  let a = (i || (i = performanceNow))()
  p.push({
    startTime: a,
  })
  A(q, a) ||
    ((p = p.filter(function (b: any) {
      return A(b.startTime, a)
    })),
    (q = a))
}

export function wasOffline() {
  return t
}

k.addEventListener('online', function () {
  y(r)
})
k.addEventListener('offline', function () {
  y(s)
})
