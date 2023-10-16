import { useContext, useEffect, useRef } from 'react'
import { HiddenSubtreePassiveContext } from '@negiganaito/context'
import { isWithinThreshold } from '@negiganaito/utils/common/pointer-event-distance'

export function useOnOutsideClick(a: any, b: any) {
  const e = useRef<any>(null)
  const f = useContext(HiddenSubtreePassiveContext)
  const g = useRef(null)

  useEffect(
    function () {
      const h = e.current
      if (a === null || h == null) {
        return
      }
      var i = b || {},
        j = i.isTargetEligible
      i = i.triggerOutsideClickOnDrag
      var k = i === void 0 ? !1 : i
      function l(a: any) {
        return a instanceof Node && !h.contains(a) && (j == null || j(a))
      }
      function m(a: any) {
        if (a.isPrimary) {
          const b = l(a.target)
          b && (g.current = a)
        }
      }
      function n(b: any) {
        let c = l(b.target)
        if (g.current != null && c && b.isPrimary) {
          c = isWithinThreshold(g.current, b)
          ;(c || k) && a(b)
        }
        g.current = null
      }
      function o(b: any) {
        l(b.target) && a(b)
      }
      let p = 'PointerEvent' in window,
        q = !1
      function r() {
        q ||
          (p
            ? (document.addEventListener('pointerup', n),
              document.addEventListener('pointerdown', m))
            : document.addEventListener('click', o)),
          (q = !0)
      }
      function s() {
        q &&
          (p
            ? (document.removeEventListener('pointerup', n),
              document.removeEventListener('pointerdown', m))
            : document.removeEventListener('click', o)),
          (q = !1)
      }
      i = f.getCurrentState()
      i.hiddenOrBackgrounded || r()
      const t = f.subscribeToChanges(function (a: any) {
        a.hiddenOrBackgrounded
          ? setTimeout(function () {
              s()
            }, 0)
          : r()
      })
      return function () {
        t.remove(), s()
      }
    },
    [a, f, b],
  )
  return e
}
