import { createContext } from 'react'

type BaseThemeDisplayModeContextProps = string
const BaseThemeDisplayModeContext = createContext<
  BaseThemeDisplayModeContextProps | undefined
>(undefined)

export default BaseThemeDisplayModeContext
