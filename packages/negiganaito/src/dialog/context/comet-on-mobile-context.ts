import { createContext } from 'react'

type CometOnMobileContextProps = {
  isCometOnMobile: boolean
}

export const CometOnMobileContext = createContext<CometOnMobileContextProps>({
  isCometOnMobile: false,
})
