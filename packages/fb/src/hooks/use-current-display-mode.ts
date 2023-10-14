import BaseThemeDisplayModeContext from '@fb/context/base-theme-display-mode-context'
import { useContext } from 'react'

const defaultTheme = 'light'

export function useCurrentDisplayMode() {
  return useContext(BaseThemeDisplayModeContext) ?? defaultTheme
}
