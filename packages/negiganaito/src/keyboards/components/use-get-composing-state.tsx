import { useCallback, useEffect, useRef } from 'react'

export function useGetComposingState() {
  const a = useRef(!1),
    b = useCallback(
      function (b: any) {
        a.current = !0
      },
      [a],
    ),
    c = useCallback(
      function (b: any) {
        a.current = !1
      },
      [a],
    )
  useEffect(
    function () {
      window.addEventListener('compositionstart', b)
      window.addEventListener('compositionend', c)
      return function () {
        window.removeEventListener('compositionstart', b),
          window.removeEventListener('compositionend', c)
      }
    },
    [c, b],
  )
  return function (b: any) {
    return b.isComposing || a.current
  }
}
