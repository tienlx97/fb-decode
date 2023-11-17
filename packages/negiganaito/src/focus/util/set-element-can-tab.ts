// TODO
// let c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex')
// let d = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'tabIndex')

let e = function (a: any) {
  return a
}
// let g = c ? c.set : e,
//   h = d ? d.set : e

function i(a: any) {
  let c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex')
  let d = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'tabIndex')
  let g = c ? c.set : e
  let h = d ? d.set : e

  return a instanceof SVGElement ? h : g
}
export function setElementCanTab(a: any, b: any, c?: any) {
  c === void 0 && (c = !1)
  let d = a._tabIndexState,
    e = i(a)
  if (!d) {
    b && c && a.tabIndex < 0 && (a.tabIndex = 0)
    let f = {
      value: a.tabIndex,
      canTab: b,
    }
    a._tabIndexState = f
    b || (a.tabIndex = -1)
    Object.defineProperty(a, 'tabIndex', {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return f.canTab ? f.value : -1
      },
      set: function (a) {
        f.canTab && typeof e === 'function' && e.call(this, a), (f.value = a)
      },
    })
  } else
    d.canTab !== b &&
      typeof e === 'function' &&
      (e.call(a, b ? d.value : -1), (d.canTab = b))
}
export function canElementTab(a: any) {
  let b = a._tabIndexState
  if (!b) return a.tabIndex > 0
  else return b.canTab
}
