import { useLayoutEffect, useRef, useState } from 'react'

type TooltipDelayedContent = {
  delayContentMs: number
  isVisible: boolean
}

export function useTooltipDelayedContent({
  delayContentMs,
  isVisible,
}: TooltipDelayedContent) {
  const visibleRef = useRef(isVisible)
  const f = useRef<any>(null)

  const [isPending, setPending] = useState(() => {
    return isVisible === true && visibleRef.current === !1 && delayContentMs > 0
  })

  useLayoutEffect(() => {
    if (isVisible === !0 && visibleRef.current === !1 && delayContentMs > 0) {
      setPending(!0)
      f.current = setTimeout(() => {
        setPending(!1), (f.current = null)
      }, delayContentMs)
      return function () {
        clearTimeout(f.current)
        f.current = null
      }
    } else
      f.current != null &&
        (setPending(!1), clearTimeout(f.current), (f.current = null))

    visibleRef.current = isVisible
  }, [delayContentMs, isVisible, visibleRef])
  return {
    isPending: isPending,
  }
}
