import { createContext } from 'react'

export type HeroCurrentInteractionForLoggingContextProps = {
  current: any
}

const HeroCurrentInteractionForLoggingContext =
  createContext<HeroCurrentInteractionForLoggingContextProps>({
    current: null,
  })

export default HeroCurrentInteractionForLoggingContext
