import { createContext } from 'react'

type BaseButtonPopoverContextProps = {
  top: number
  right: number
  bottom: number
  left: number
}

const initial = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}

const BaseViewportMarginsContext =
  createContext<BaseButtonPopoverContextProps>(initial)

export default BaseViewportMarginsContext
