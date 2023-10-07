let g = 'js_',
  h = 36,
  i = 0

export function uniqueID(a: any, b: any) {
  a === void 0 && (a = g)
  b === void 0 && (b = !1)
  return b ? a : a + (i++).toString(h)
}
