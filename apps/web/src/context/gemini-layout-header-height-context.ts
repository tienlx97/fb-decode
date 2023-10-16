import { createContext, useContext, useMemo, useState } from 'react'

//@ts-ignore
import { jsx } from 'react/jsx-runtime'

const c = {
  height: 0,
  setHeight: function () {},
}
const m = createContext(c)
m.displayName = 'GeminiLayoutHeaderHeightContext'

export function Provider(a: any) {
  a = a.children
  let [height, setHeight] = useState(0)
  const b = useMemo(
    function () {
      return {
        height: height,
        setHeight: setHeight,
      }
    },
    [height],
  )
  return jsx(m.Provider, {
    value: b,
    children: a,
  })
}

export const useGeminiLayoutHeaderHeight = function () {
  return useContext(m)
}
