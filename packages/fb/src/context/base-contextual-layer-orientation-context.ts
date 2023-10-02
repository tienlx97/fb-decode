import { createContext } from 'react'

type BaseContextualLayerOrientationContextProps = {
  align?: string
  position?: string
}

const initial: BaseContextualLayerOrientationContextProps = {
  align: 'start',
  position: 'below',
}

const BaseContextualLayerOrientationContext = createContext<
  BaseContextualLayerOrientationContextProps | undefined
>(initial)

export default BaseContextualLayerOrientationContext
