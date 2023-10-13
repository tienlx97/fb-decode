import { createContext } from 'react'

type CometMenuContextProps = {
  onClose: any
}

const CometMenuContext = createContext<CometMenuContextProps | undefined>(
  undefined,
)

export default CometMenuContext
