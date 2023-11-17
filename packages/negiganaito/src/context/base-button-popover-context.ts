import { createContext } from 'react'

type BaseButtonPopoverContextProps = {
  expanded: boolean
  haspopup: string
}

const BaseButtonPopoverContext = createContext<
  BaseButtonPopoverContextProps | undefined
>(undefined)

export default BaseButtonPopoverContext
