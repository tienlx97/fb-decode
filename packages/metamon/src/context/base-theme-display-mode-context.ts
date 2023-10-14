import { createContext } from 'react'

type BaseThemeDisplayModeContextProps = 'dark' | 'light'

const BaseThemeDisplayModeContext = createContext<
  BaseThemeDisplayModeContextProps | undefined
>(undefined)

export default BaseThemeDisplayModeContext
