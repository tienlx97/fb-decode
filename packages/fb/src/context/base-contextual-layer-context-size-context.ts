import { createContext } from 'react'

type BaseContextualLayerContextSizeContextProps = {
  width: number
  height: number
}

const BaseContextualLayerContextSizeContext = createContext<
  BaseContextualLayerContextSizeContextProps | undefined
>(undefined)

export default BaseContextualLayerContextSizeContext
