import { createContext, useContext } from 'react'

//@ts-ignore
import { jsx } from 'react/jsx-runtime'

const k = createContext(!1)

k.displayName = 'GeminiLayoutHasFixedBannerContext'

export function Provider(a: any) {
  var b = a.children
  a = a.hasFixedBanner
  return jsx(k.Provider, {
    value: a,
    children: b,
  })
}

export const useGeminiLayoutHasFixedBanner = function () {
  return useContext(k)
}
