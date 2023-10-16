import { createContext, useContext, useEffect, useState } from 'react'

import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import { getLeft } from '@negiganaito/utils/common/scroll'
import { supportsCSSSticky } from '@negiganaito/utils/common/supports-css-sticky'
import { getDocumentScrollElement } from '@negiganaito/utils/common/get-document-scroll-element'

const m = executionEnvironment.canUseDOM ? supportsCSSSticky : !0
const n = createContext(0)

export function useGeminiLayoutHorizontalScrollingListener() {
  const [b, e] = useState(0)

  useEffect(
    function () {
      if (m) return
      const a = function () {
          let a = getDocumentScrollElement()
          a = getLeft(a)
          e(a)
        },
        b = {
          passive: !0,
        }
      window.addEventListener('scroll', a, b)
      return function () {
        window.removeEventListener('scroll', a, b as any)
      }
    },
    [e],
  )
  return b
}

export function useGeminiLayoutHorizontalScrolling() {
  return useContext(n)
}

export const GeminiLayoutHorizontalScrollingContextProvider = n.Provider
