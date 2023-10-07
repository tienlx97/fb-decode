import { createContext } from 'react'

type CometMenuContextProps = any

const CometMenuContext = createContext<CometMenuContextProps | undefined>(
  undefined,
)

export default CometMenuContext
