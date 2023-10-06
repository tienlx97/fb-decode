export function headerAndSpinnerFocusScopeQuery(a: any, b: any) {
  return a === 'h1' ||
    a === 'h2' ||
    a === 'h3' ||
    (b.role === 'heading' &&
      (b['aria-level'] === 1 ||
        b['aria-level'] === 2 ||
        b['aria-level'] === 3)) ||
    b['aria-busy'] === !0 ||
    b.role === 'progressbar'
    ? !0
    : !1
}
export function focusableScopeQuery(a: any, b: any) {
  return b.tabIndex === -1 &&
    !(
      b.disabled === !0 ||
      b.type === 'hidden' ||
      b['aria-disabled'] === !0 ||
      b['aria-hidden'] === !0
    )
    ? !0
    : tabbableScopeQuery(a, b)
}
function hhh(a: any) {
  return a.type !== 'hidden' && a.type !== 'file'
}
export function inputFirstTabbbableScopeQuery(a: any, b: any) {
  return a === 'input' && hhh(b)
}
export function tabbableScopeQuery(a: any, b: any) {
  if (b.tabIndex === -1 || b.disabled === !0) return !1
  if (b.tabIndex === 0 || b.contentEditable === !0) return !0
  if (a === 'a' || a === 'area')
    return b.href != null && b.href !== '' && b.rel !== 'ignore'
  return a === 'input'
    ? hhh(b)
    : a === 'button' ||
        a === 'textarea' ||
        a === 'select' ||
        a === 'iframe' ||
        a === 'embed'
}

function jjj(a: any) {
  return a.offsetWidth === 0 && a.offsetHeight === 0
}
export function displayedTabbableScopeQuery(a: any, b: any, c: any) {
  return !jjj(c) && tabbableScopeQuery(a, b)
}

export function tableCellScopeQuery(a: any, b: any) {
  return a === 'td' ||
    a === 'th' ||
    b.role === 'gridcell' ||
    b.role === 'columnheader' ||
    b.role === 'rowheader'
    ? !0
    : !1
}
export function tableCellTabbableContentScopeQuery(a: any, b: any) {
  return !tableCellScopeQuery(a, b) && tabbableScopeQuery(a, b)
}

export function headerOrTabbableScopeQuery(a: any, b: any) {
  return headerAndSpinnerFocusScopeQuery(a, b) || tabbableScopeQuery(a, b)
}
export let topLoadingScopeQuery = function (a: any, b: any) {
  return b['data-focus-target'] === !0 &&
    (b['aria-busy'] === !0 || b.role === 'progressbar')
    ? !0
    : !1
}

export let headerFirstTabbableSecondScopeQuery = [
  headerAndSpinnerFocusScopeQuery,
  tabbableScopeQuery,
]
