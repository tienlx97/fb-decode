import { removeFromArray } from './remove-from-array'

let h = 50,
  i: any = [],
  j: any = [],
  k: any = null

function l() {
  i.length > 0 &&
    i.forEach(function (a: any) {
      return a()
    }),
    j.length > 0 &&
      (j.forEach(function (a: any) {
        return a()
      }),
      (j = [])),
    (k = null)
}
function m() {
  clearTimeout(k),
    (k = setTimeout(function () {
      l()
    }, h))
}
let n = !1

function init() {
  n || (window.addEventListener('mousemove', m), (n = !0))
  return function () {
    window.removeEventListener('mousemove', m)
  }
}

function addOnMouseStopCallback(a: any) {
  n || init()
  i.push(a)
  return function () {
    removeFromArray(i, a)
  }
}

function addOnMouseStopCallbackOnce(a: any) {
  n || init()
  j.push(a)
  return function () {
    removeFromArray(j, a)
  }
}

export const CometMouseActivity = {
  addOnMouseStopCallback: addOnMouseStopCallback,
  addOnMouseStopCallbackOnce: addOnMouseStopCallbackOnce,
  init: init,
}
