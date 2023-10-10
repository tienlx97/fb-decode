export function isElementFixedOrSticky(a: any) {
  let b = a
  while (b != null && b !== a.ownerDocument) {
    let d: any = getComputedStyle(b)
    if (d == null) return !1
    d = d.getPropertyValue('position')
    if (d === 'fixed' || d === 'sticky') return !0
    b = b.parentElement
  }
  return !1
}
