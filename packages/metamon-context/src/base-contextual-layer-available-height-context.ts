import { createContext } from 'react'

type BaseContextualLayerAvailableHeightContextProps = number

const BaseContextualLayerAvailableHeightContext = createContext<
  BaseContextualLayerAvailableHeightContextProps | undefined
>(undefined)

export default BaseContextualLayerAvailableHeightContext
