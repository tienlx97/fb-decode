const g = window.HTMLElement

export function xplatToDOMRef(a: any) {
  return function (b: any) {
    b = g && b instanceof g ? b : null
    typeof a === 'function'
      ? a(b)
      : a != null && typeof a === 'object' && (a.current = b)
  }
}
const h = window.HTMLInputElement

export function xplatToInputRef(a: any) {
  return function (b: any) {
    b = h && b instanceof h ? b : null
    typeof a === 'function'
      ? a(b)
      : a != null && typeof a === 'object' && (a.current = b)
  }
}
