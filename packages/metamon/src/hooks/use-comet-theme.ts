import { useMemo } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useCurrentDisplayMode } from './use-current-display-mode'
import { BaseThemeDisplayModeContext } from '@metamon/context'

const THEME_CLASSES = {
  dark: '__fb-dark-mode ',
  light: '__fb-light-mode ',
}

export default function useCometTheme(val: string) {
  const displayMode = useCurrentDisplayMode()

  let mode: string

  if (val === 'invert') {
    mode = displayMode === 'light' ? 'dark' : 'light'
  } else {
    mode = val
  }

  const wrapper = useMemo(() => {
    return function ({ children }: any) {
      return jsx(BaseThemeDisplayModeContext.Provider, {
        value: mode,
        children,
      })
    }
  }, [mode])

  // @ts-ignore
  return [wrapper, THEME_CLASSES[mode]]
}
