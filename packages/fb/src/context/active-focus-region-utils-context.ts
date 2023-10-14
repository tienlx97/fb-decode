import { createContext } from 'react'

type ActiveFocusRegionUtilsContextProps = {
  getActiveFocusRegion: (props?: any) => any
  setActiveFocusRegion: (props?: any) => any
}

const ActiveFocusRegionUtilsContext = createContext<
  ActiveFocusRegionUtilsContextProps | undefined
>(undefined)

export default ActiveFocusRegionUtilsContext
