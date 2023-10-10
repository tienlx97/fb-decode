import { createContext } from 'react'

type ActiveFocusRegion = {
  lastFocused?: any
  scope?: any
  restorationFocusRegionItem?: any
  triggeredFocusRegionItems?: any
}

type ActiveFocusRegionUtilsContextProps = {
  getActiveFocusRegion: () => any
  setActiveFocusRegion: (region: ActiveFocusRegion) => void
}

const ActiveFocusRegionUtilsContext = createContext<
  ActiveFocusRegionUtilsContextProps | undefined
>(undefined)

export default ActiveFocusRegionUtilsContext
