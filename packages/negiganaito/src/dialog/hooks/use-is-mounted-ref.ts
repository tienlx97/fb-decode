import { useLayoutEffect, useRef } from 'react'

export function useIsMountedRef() {
  let a = useRef(!1)
  useLayoutEffect(function () {
    a.current = !0
    return function () {
      a.current = !1
    }
  }, [])
  return a
}
