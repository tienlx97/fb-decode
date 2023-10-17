import { createContext } from 'react'

type BaseThemeConfigContextProps = {
  darkClassName: any
  darkVariables: any
  lightClassName: any
  lightVariables: any
}

const BaseThemeConfigContext = createContext<BaseThemeConfigContextProps>({
  darkClassName: null,
  darkVariables: {},
  lightClassName: null,
  lightVariables: {},
})

export default BaseThemeConfigContext
