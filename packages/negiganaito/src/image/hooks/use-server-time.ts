import JSScheduler from '@negiganaito/utils/common/jss-scheduler'
import { useEffect, useState } from 'react'

const l = 6e4,
  m = new Set()
let n: any = null
let o = !1

function p() {
  m.forEach(function (a: any) {
    return a()
  }),
    (o = !1)
}
function q(a: any) {
  a === void 0 && (a = l),
    setInterval(function () {
      o || ((o = !0), JSScheduler.scheduleSpeculativeCallback(p))
    }, a)
}
function r() {
  m.size === 0 && (clearInterval(n), (n = null))
}
function s(a: any, b: any) {
  b === void 0 && (b = l)
  m.add(a)
  n == null && q(b)
  return function () {
    m['delete'](a), r()
  }
}
function t() {
  return new Date(d('ServerTime').getMillis())
}

function a(a: any) {
  a === void 0 && (a = l)
  var b = useState(function () {
      return t()
    }),
    c = b[0],
    d = b[1],
    e = function () {
      return d(t())
    }
  useEffect(
    function () {
      return s(e, a)
    },
    [a],
  )
  return c
}
