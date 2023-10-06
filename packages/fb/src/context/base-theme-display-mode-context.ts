import { createContext } from 'react'

type BaseThemeDisplayModeContextProps = any
const BaseThemeDisplayModeContext = createContext<
  BaseThemeDisplayModeContextProps | undefined
>(undefined)

export default BaseThemeDisplayModeContext
