import { tabbableScopeQuery } from '../util'
import { createFocusTable } from './focus-table'

const a = createFocusTable(tabbableScopeQuery)
export const ChannelGeminiFocusableTable = a[0]
export const WorkGalahadChannelFocusableTableRow = a[1]
export const WorkGalahadChannelFocusableTableCell = a[2]

export const WorkGalahadChannelFocusableScopeQuery = tabbableScopeQuery
