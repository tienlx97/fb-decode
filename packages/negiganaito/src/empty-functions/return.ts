export const thatReturns = function (a: any) {
  return function () {
    return a
  }
}
