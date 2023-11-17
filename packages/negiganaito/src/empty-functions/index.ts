import { noop } from './noop'
import { thatReturns } from './return'
import { thatReturnsArgument } from './returns-argument'
import { thatReturnsFalse } from './returns-false'
import { thatReturnNull } from './returns-null'
import { thatReturnsThis } from './returns-this'
import { thatReturnsTrue } from './returns-true'

export const EmptyFunction = {
  noop,
  thatReturns,
  thatReturnsArgument,
  thatReturnsFalse,
  thatReturnNull,
  thatReturnsThis,
  thatReturnsTrue,
}
