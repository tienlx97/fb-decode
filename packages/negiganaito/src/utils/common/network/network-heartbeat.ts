import { getSameOriginTransport } from './get-same-origin-transport'
import { killswitch } from './kill-switch'

const h = '/nw/'
let i = 6400
let j = 100
let k: any = null
let l = 0
let m: any = null
let n = killswitch('DISABLE_HEARTBEAT_POLLING')

function o(a: any, b: any) {
  m = getSameOriginTransport()
  m.open('GET', h, !0)
  m.onload = function () {
    m && m.status === 204 && (n = !0), q(a)
  }
  m.onerror = function () {
    r(a, b)
  }
  m.ontimeout = function () {
    r(a, b)
  }
  m.send()
}

function p() {
  m = null
  j = 100
  l = 0
  clearTimeout(k)
}

function q(a: any) {
  p()
  a()
}

function r(a: any, b: any) {
  k = setTimeout(function () {
    maybeStartHeartbeat(a, b, void 0, !0)
  }, j)
  l++
  j < i && (j = Math.min(j * Math.pow(2, l), i))
  b()
}

export function maybeStartHeartbeat(a: any, b: any, c?: any, d?: any) {
  c === void 0 &&
    (c = function () {
      return !0
    }),
    d === void 0 && (d = !1),
    n || ((d || (m == null && c())) && o(a, b))
}

export function isHeartbeatPending() {
  return m != null
}
