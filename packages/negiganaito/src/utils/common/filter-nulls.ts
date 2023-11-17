/* eslint-disable no-self-assign */
/* eslint-disable no-redeclare */
export function filterNulls(a: any) {
  var b = []
  for (
    var a = a,
      c = Array.isArray(a),
      d: any = 0,
      a = c
        ? a
        : a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var e
    if (c) {
      if (d >= a.length) break
      e = a[d++]
    } else {
      d = a.next()
      if (d.done) break
      e = d.value
    }
    e = e
    e != null && b.push(e)
  }
  return b
}
