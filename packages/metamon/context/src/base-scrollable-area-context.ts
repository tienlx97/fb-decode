import { createContext } from 'react'

type BaseScrollableAreaContextProps = any

const BaseScrollableAreaContext = createContext<BaseScrollableAreaContextProps>(
  [],
)

export default BaseScrollableAreaContext
