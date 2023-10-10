import { camelize } from './camelize'
import { hyphenate } from './hyphenate'

function h(a: any) {
  return a == null ? '' : String(a)
}
export function getStyleProperty(a: any, b: any) {
  var d
  if (window.getComputedStyle) {
    d = window.getComputedStyle(a, null)
    if (d) return h(d.getPropertyValue(hyphenate(b)))
  }
  if (document.defaultView && document.defaultView.getComputedStyle) {
    d = document.defaultView.getComputedStyle(a, null)
    if (d) return h(d.getPropertyValue(hyphenate(b)))
    if (b === 'display') {
      return 'none'
    }
  }
  return a.currentStyle
    ? b === 'float'
      ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat)
      : h(a.currentStyle[camelize(b)])
    : h(a.style && a.style[camelize(b)])
}
