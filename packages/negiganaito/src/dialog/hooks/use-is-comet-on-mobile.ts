import { useContext } from 'react'
import { CometOnMobileContext } from '../context/comet-on-mobile-context'

export function useIsCometOnMobile() {
  return useContext(CometOnMobileContext).isCometOnMobile
}
