import { createContext } from 'react'

type HeroCurrentInteractionForLoggingContextProps = {
  current: any
}

const HeroCurrentInteractionForLoggingContext =
  createContext<HeroCurrentInteractionForLoggingContextProps>({
    current: null,
  })

export default HeroCurrentInteractionForLoggingContext
