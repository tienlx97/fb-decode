import { emptyFunction } from './empty-function'

export function createCancelableFunction(a: any) {
  var b = a
  a = function () {
    for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
      c[d] = arguments[d]
    // @ts-ignore
    return b.apply(this, c)
  }
  a.cancel = function () {
    b = emptyFunction
  }
  return a
}
