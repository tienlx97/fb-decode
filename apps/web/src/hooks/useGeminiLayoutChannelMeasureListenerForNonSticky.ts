import { useGeminiLayoutUserSettingsFullWidthMode } from '@/context/gemini-layout-full-width-mode-context'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import { supportsCSSSticky } from '@negiganaito/utils/common/supports-css-sticky'
import { useEffect, useRef, useState } from 'react'

const m = executionEnvironment.canUseDOM ? supportsCSSSticky : !0

export function useGeminiLayoutChannelMeasureListenerForNonSticky(
  a: any,
  b: any,
  isAutoHideEnabled: any,
) {
  let f = useGeminiLayoutUserSettingsFullWidthMode(),
    g = useRef<any>(null),
    h = useRef<any>(null),
    i = useState(function () {
      return {
        nav: a,
        entity: b,
      }
    }),
    n = i[0],
    o = i[1]
  useEffect(
    function () {
      if (m) return
      var a = function () {
        var a = g.current != null ? g.current.getBoundingClientRect().width : b,
          c = h.current != null ? h.current.getBoundingClientRect().width : b
        o({
          nav: a,
          entity: c,
        })
      }
      requestAnimationFrame(a)
      const d = {
        passive: !0,
      }
      window.addEventListener('resize', a, d)
      return function () {
        window.removeEventListener('resize', a, d as any)
      }
    },
    [isAutoHideEnabled, b, f, o],
  )
  i = isAutoHideEnabled ? 95 : n.nav
  return [g, h, i, n.entity]
}
