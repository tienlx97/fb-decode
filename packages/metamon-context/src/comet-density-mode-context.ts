import { createContext, useContext } from 'react'

const densityMode = false

export const CometDensityModeContext = createContext([densityMode, () => {}])

export const useCometDensityModeContext = () => {
  const context = useContext(CometDensityModeContext)
  if (context === undefined) {
    throw new Error(
      'useCometDensityModeContext was used outside of its Provider',
    )
  }
  return context
}
