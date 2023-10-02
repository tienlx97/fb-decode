/* eslint-disable no-undef */
/* eslint-disable no-self-assign */
/* eslint-disable no-redeclare */

function getTabbableNodes(a: any, b: any) {
  var c = document.activeElement,
    d: any = function (b: any, d: any, e: any) {
      return e === c
        ? !0
        : a(b, d, e) &&
            e.offsetWidth > 0 &&
            e.offsetHeight > 0 &&
            e.tabIndex !== -1 &&
            window.getComputedStyle(e).visibility !== 'hidden'
    }
  b = c ? b.DO_NOT_USE_queryAllNodes(d) : null
  if (b === null) return [null, null, null, 0, null]
  d = {}
  for (
    var e = b,
      f: any = Array.isArray(e),
      g: any = 0,
      e = f
        ? e
        : e[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var h: any
    if (f) {
      if (g >= e.length) break
      h = e[g++]
    } else {
      g = e.next()
      if (g.done) break
      h = g.value
    }
    h = h
    if (
      h instanceof HTMLInputElement &&
      h.tagName === 'INPUT' &&
      h.type === 'radio' &&
      h.name != null
    ) {
      // @ts-ignore
      d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h])
    }
  }
  var j = Object.values(d)
    .map(function (a: any) {
      if (
        a.find(function (a: any) {
          return a.checked
        })
      )
        return a.filter(function (a: any) {
          return !a.checked
        })
      a[0]
      a = a.slice(1)
      return a
    })
    .flat()
  b = b.filter(function (a: any) {
    return !j.includes(a)
  })
  // @ts-ignore
  i = b[0]
  h = b[b.length - 1]
  g = b.indexOf(c)
  f = null
  g !== -1 && (f = b[g])
  // @ts-ignore
  return [b, i, h, g, f]
}

export default getTabbableNodes
export { getTabbableNodes }
