// @ts-ignore
var g = Object.prototype.hasOwnProperty

export default function memoizeWithArgs(a: any, b: any, c?: any) {
  var d: any
  c = function () {
    d || (d = {})
    var c = b.apply(void 0, arguments)
    g.call(d, c) || (d[c] = a.apply(void 0, arguments))
    return d[c]
  }
  return c
}
