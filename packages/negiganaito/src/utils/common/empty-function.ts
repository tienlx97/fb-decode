const emptyFunction = () => {}

const noop = (...args: any[]): any => {}

const thatReturns = (a: any) => {
  return () => a
}

const thatReturnsFalse = thatReturns(false)
const thatReturnsTrue = thatReturns(true)
const thatReturnsNull = thatReturns(null)
const thatReturnsThis = () => this
const thatReturnsArgument = (a: any) => a

export {
  noop,
  emptyFunction,
  thatReturns,
  thatReturnsFalse,
  thatReturnsTrue,
  thatReturnsNull,
  thatReturnsThis,
  thatReturnsArgument,
}
