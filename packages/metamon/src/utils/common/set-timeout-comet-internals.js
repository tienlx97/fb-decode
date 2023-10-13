/* eslint-disable camelcase */
import JSScheduler from './jss-scheduler'

const h = new Map()
let i = 0

export function clearInterval_DO_NOT_USE(a) {
  if (a != null) {
    let b = h.get(a)
    b !== void 0 &&
      (h['delete'](a), JSScheduler.cancelDelayedCallback_DO_NOT_USE(b))
  }
}

export function clearTimeout_DO_NOT_USE(a) {
  if (a != null) {
    const b = h.get(a)
    b !== void 0 &&
      (h['delete'](a), JSScheduler.cancelDelayedCallback_DO_NOT_USE(b))
  }
}

export function setIntervalAtPriority_DO_NOT_USE(a, b, c) {
  for (
    var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
    g < e;
    g++
  )
    f[g - 3] = arguments[g]
  const j = i
  i += 1
  if (typeof b !== 'function') return j
  const k = function e() {
      var g = JSScheduler.scheduleDelayedCallback_DO_NOT_USE(a, c, e)
      h.set(j, g)
      b.apply(void 0, f)
    },
    l = JSScheduler.scheduleDelayedCallback_DO_NOT_USE(a, c, k)
  h.set(j, l)
  return j
}

export function setTimeoutAtPriority_DO_NOT_USE(a, b, c) {
  for (
    var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
    g < e;
    g++
  )
    f[g - 3] = arguments[g]
  var j = i
  i += 1
  if (typeof b !== 'function') return j
  const k = JSScheduler.scheduleDelayedCallback_DO_NOT_USE(a, c, function () {
    h['delete'](j), b.apply(void 0, f)
  })
  h.set(j, k)
  return j
}
