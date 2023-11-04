import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import { isPassiveEventListenerSupported } from '@negiganaito/utils/common/passive-event-listener-util'
import { wrapFunction } from './wrap-function'
import { dedupString } from './dedup-string'

let h = isPassiveEventListenerSupported,
  i: any,
  j: any

// @ts-ignore
window.addEventListener
  ? ((i = function (a: any, c: any, d: any, e: any) {
      e === void 0 && (e = !1),
        (d.wrapper = wrapFunction(
          d,
          'entry',
          dedupString('DOMEventListener.add ' + c),
        )),
        a.addEventListener(c, d.wrapper, h ? e : !1)
    }),
    (j = function (a: any, b: any, c: any, d: any) {
      d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }))
  : // @ts-ignore
  window.attachEvent
  ? ((i = function (a: any, c: any, d: any, e: any) {
      e === void 0,
        (d.wrapper = wrapFunction(d, 'entry', 'DOMEventListener.add ' + c)),
        // a.attachEvent || g(0, 2798),
        a.attachEvent('on' + c, d.wrapper)
    }),
    (j = function (a: any, b: any, c: any, d: any) {
      d === void 0,
        // a.detachEvent || g(0, 2799),
        a.detachEvent('on' + b, c.wrapper)
    }))
  : (j = i = emptyFunction)

export const DOMEventListener = {
  add: function (a: any, b: any, c: any, d: any) {
    d === void 0 && (d = !1)
    i(a, b, c, d)
    return {
      remove: function () {
        j(a, b, c, d)
      },
    }
  },
  remove: j,
}
