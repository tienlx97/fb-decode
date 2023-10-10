import { createContext } from 'react'

type BaseContextualLayerLayerAdjustmentContextProps = number

const BaseContextualLayerLayerAdjustmentContext = createContext<
  BaseContextualLayerLayerAdjustmentContextProps | undefined
>(undefined)

export default BaseContextualLayerLayerAdjustmentContext
