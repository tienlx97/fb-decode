import { tabbableScopeQuery } from '../util'
import { createFocusTable } from './focus-table'

const focusTable = createFocusTable(tabbableScopeQuery)
export const ChannelGeminiFocusableTable = focusTable[0]
export const WorkGalahadChannelFocusableTableRow = focusTable[1]
export const WorkGalahadChannelFocusableTableCell = focusTable[2]

export const WorkGalahadChannelFocusableScopeQuery = tabbableScopeQuery
