import { useCallback } from 'react'

export function useSetAttributeRef(a: any, b: any) {
  return useCallback(
    function (c: any) {
      c && c.setAttribute(a, b)
    },
    [a, b],
  )
}
