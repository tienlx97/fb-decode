import { useCallback, useState } from 'react'

export function useHover(cb?: any) {
  const [isHover, setHover] = useState(!1)

  const onMouseEnter = useCallback(() => {
    cb && cb()
    setHover(!0)
  }, [cb])

  const onMouseLeave = useCallback(function () {
    return setHover(!1)
  }, [])

  return [
    isHover,
    {
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
  ] as const
}
