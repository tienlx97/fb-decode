import { createContext } from 'react'

type BaseButtonPopoverContextProps = {
  bottom: number
  left: number
  right: number
  top: number
}

const BaseViewportMarginsContext = createContext<BaseButtonPopoverContextProps>(
  { bottom: 0, left: 0, right: 0, top: 0 },
)

export default BaseViewportMarginsContext
