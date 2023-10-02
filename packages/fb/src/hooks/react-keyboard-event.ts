import { useEffect } from 'react'
import ReactUseEvent from './react-use-event'

const i = {
  passive: !0,
}

export function useKeyboard(a: any, b: any) {
  var d = b.disabled,
    e = d === void 0 ? !1 : d,
    f = b.onKeyDown,
    g = b.onKeyUp,
    j = ReactUseEvent('keydown'),
    k = ReactUseEvent('keyup', i)
  useEffect(
    function () {
      var b = a.current
      b !== null &&
        (j.setListener(b, (!e && f) || null),
        k.setListener(b, (!e && g) || null))
    },
    [e, f, j, k, a, g],
  )
}
