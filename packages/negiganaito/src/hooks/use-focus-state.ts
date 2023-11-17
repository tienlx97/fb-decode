import { useCallback, useState } from 'react'

export function useFocusState(a?: any, b?: any) {
  const [focused, setFocused] = useState(!1)

  const onFocusIn = useCallback(
    (b: any) => {
      setFocused(!0)
      a && a(b)
    },
    [a],
  )
  const onFocusOut = useCallback(
    (a: any) => {
      setFocused(!1)
      b && b(a)
    },
    [b],
  )

  return [focused, onFocusIn, onFocusOut] as const
}
