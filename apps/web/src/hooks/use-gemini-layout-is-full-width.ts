import { useEffect, useState } from 'react'

import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import { supportsCSSSticky } from '@negiganaito/utils/common/supports-css-sticky'
import { useGeminiLayoutUserSettingsFullWidthMode } from '@/context/gemini-layout-full-width-mode-context'

const l = executionEnvironment.canUseDOM ? supportsCSSSticky : !0

export function useGeminiLayoutIsFullWidth() {
  const a = useGeminiLayoutUserSettingsFullWidthMode()
  const b = useState(function () {
      let a
      return (a =
        window &&
        window.matchMedia &&
        window.matchMedia('(min-width: 1921px)').matches) != null
        ? a
        : !0
    }),
    c = b[0],
    e = b[1]
  useEffect(function () {
    if (l) return
    var a = window.matchMedia('(min-width: 1921px)'),
      b = function (a: any) {
        e(a.matches)
      }
    a.addListener(b)
    return function () {
      a.removeListener(b)
    }
  }, [])
  return a || !c
}
