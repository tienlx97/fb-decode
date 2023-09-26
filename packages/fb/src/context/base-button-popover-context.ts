import { createContext } from 'react'

type BaseButtonPopoverContextProps = {}

const BaseButtonPopoverContext = createContext<
  BaseButtonPopoverContextProps | undefined
>(undefined)

export default BaseButtonPopoverContext
