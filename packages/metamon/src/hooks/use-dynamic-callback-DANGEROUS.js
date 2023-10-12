import { useCallback, useLayoutEffect, useRef } from 'react'

export function useDynamicCallbackDANGEROUS(value) {
  var b = useRef(value)
  useLayoutEffect(() => {
    b.current = value
  }, [value])
  return useCallback(() => b.current.apply(b, arguments), [])
}
