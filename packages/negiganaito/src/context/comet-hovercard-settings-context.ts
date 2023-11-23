import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import { createContext } from 'react'

export const CometHovercardSettingsContext = createContext({
  hovercardInteractionPreference: 2,
  setHovercardInteractionPreference: emptyFunction,
})
