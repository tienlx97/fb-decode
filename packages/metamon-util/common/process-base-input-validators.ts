/* eslint-disable no-redeclare */
export function processBaseInputValidators(a: any, b: any) {
  if (typeof b === 'function') return [b(a)]
  var c = []
  for (
    var b = b,
      d = Array.isArray(b),
      e: any = 0,
      b = d
        ? b
        : b[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var f
    if (d) {
      if (e >= b.length) break
      f = b[e++]
    } else {
      e = b.next()
      if (e.done) break
      f = e.value
    }
    // eslint-disable-next-line no-self-assign
    f = f
    Array.isArray(f)
      ? c.push.apply(c, processBaseInputValidators(a, f))
      : typeof f === 'function' && c.push(f(a))
  }
  return c.filter(function (a) {
    return a.type !== 'CORRECT'
  })
}
