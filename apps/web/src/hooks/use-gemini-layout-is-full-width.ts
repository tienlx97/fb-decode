import { useEffect, useState } from 'react'

import { useGeminiLayoutUserSettingsFullWidthMode } from '@/context'
import executionEnvironment from '@metamon/utils/common/execution-environment'
import { supportsCSSSticky } from '@metamon/utils/common/supports-css-sticky'

const l = executionEnvironment.canUseDOM ? supportsCSSSticky : !0

export function useGeminiLayoutIsFullWidth() {
  const a = useGeminiLayoutUserSettingsFullWidthMode(),
    b = useState(function () {
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
