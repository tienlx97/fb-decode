import { BaseThemeDisplayModeContext } from '@metamon/context'
import { useContext } from 'react'

const defaultTheme = 'light'

export function useCurrentDisplayMode() {
  return useContext(BaseThemeDisplayModeContext) ?? defaultTheme
}
