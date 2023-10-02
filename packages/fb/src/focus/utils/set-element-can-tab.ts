var c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex')
var d = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'tabIndex')
var e = function (a: any) {
  return a
}
var g = c ? c.set : e,
  h = d ? d.set : e
function i(a: any) {
  return a instanceof SVGElement ? h : g
}
export function setElementCanTab(a: any, b: any, c?: any) {
  c === void 0 && (c = !1)
  var d = a._tabIndexState,
    e = i(a)
  if (!d) {
    b && c && a.tabIndex < 0 && (a.tabIndex = 0)
    var f = {
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
  var b = a._tabIndexState
  if (!b) return a.tabIndex > 0
  else return b.canTab
}
