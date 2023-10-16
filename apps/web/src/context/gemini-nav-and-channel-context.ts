import { useHover } from '@metamon/hooks'
import { emptyFunction } from '@metamon/utils/common/empty-function'
import { createContext, useContext, useMemo, useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const m = false // c('gkx')('6525')
const e = {
  isNavHovered: !1,
  isChannelVisible: !0,
  isAutoHideEnabled: !1,
  setIsAutoHideEnabled: emptyFunction,
  onMouseEnter: emptyFunction,
  onMouseLeave: emptyFunction,
}
const GeminiLayoutNavStateContext = createContext(e)
GeminiLayoutNavStateContext.displayName = 'GeminiLayoutNavStateContext'

export function Provider({ children }: any) {
  const [isNavHovered, { onMouseEnter, onMouseLeave }] = useHover()

  const [isAutoHideEnabled, setIsAutoHideEnabled] = useState(!1)
  const isChannelVisible = m
    ? !isAutoHideEnabled
    : isNavHovered || !isAutoHideEnabled
  const geminiLayoutNavStateValue = useMemo(
    function () {
      return {
        isNavHovered: isNavHovered,
        isChannelVisible: isChannelVisible,
        isAutoHideEnabled: isAutoHideEnabled,
        setIsAutoHideEnabled: setIsAutoHideEnabled,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
      }
    },
    [
      isNavHovered,
      isChannelVisible,
      isAutoHideEnabled,
      onMouseEnter,
      onMouseLeave,
    ],
  )
  return jsx(GeminiLayoutNavStateContext.Provider, {
    value: geminiLayoutNavStateValue,
    children: children,
  })
}

export const useNavUIState = function () {
  return useContext(GeminiLayoutNavStateContext)
}

export const GeminiNavAndChannelContext = {
  Provider,
  useNavUIState,
}
