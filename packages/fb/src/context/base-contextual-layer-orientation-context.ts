import { createContext } from 'react'

type BaseContextualLayerOrientationContextProps = {
  align: 'end' | 'middle' | 'start' | 'stretch'
  position: 'above' | 'below' | 'end' | 'start'
}

const initial: BaseContextualLayerOrientationContextProps = {
  align: 'start',
  position: 'below',
}

const BaseContextualLayerOrientationContext =
  createContext<BaseContextualLayerOrientationContextProps>(initial)

export default BaseContextualLayerOrientationContext
