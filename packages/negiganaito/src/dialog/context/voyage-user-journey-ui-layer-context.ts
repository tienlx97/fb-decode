import { createContext, useContext } from 'react'

export const VoyageUILayerContext = createContext({
  get: function () {
    return []
  },
})

export function useVoyageUILayerContext() {
  return useContext(VoyageUILayerContext)
}
