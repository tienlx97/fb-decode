import { createFocusGroup, tabbableScopeQuery } from '@negiganaito/focus'

const [channelGeminiNavFocusableGroup, workGalahadNavFocusableItem] =
  createFocusGroup(tabbableScopeQuery)

export const ChannelGeminiNavFocusableGroup = channelGeminiNavFocusableGroup
export const WorkGalahadNavFocusableItem = workGalahadNavFocusableItem
export const WorkGalahadNavFocusableScopeQuery = tabbableScopeQuery
