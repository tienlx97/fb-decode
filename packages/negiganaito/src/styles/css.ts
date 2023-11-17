import _Core from './_core'
import { CssCore } from './css-core'

let supports: any = typeof window != 'undefined' ? window.CSS : null,
  i = 'hidden_elem'
supports = supports && supports.supports.bind(supports)

function setClass(a: any, b: any) {
  _Core.fromIDOrElement(a).className = b || ''
  return a
}
function hasClass(a: any, b: any) {
  return a instanceof Document || a instanceof Text
    ? !1
    : CssCore.hasClass(_Core.fromIDOrElement(a), b)
}
function matchesSelector(a: any, b: any) {
  return a instanceof Document || a instanceof Text
    ? !1
    : CssCore.matchesSelector(_Core.fromIDOrElement(a), b)
}
function addClass(a: any, b: any) {
  return CssCore.addClass(_Core.fromIDOrElement(a), b)
}
function removeClass(a: any, b: any) {
  return CssCore.removeClass(_Core.fromIDOrElement(a), b)
}
function conditionClass(a: any, b: any, e: any) {
  return CssCore.conditionClass(_Core.fromIDOrElement(a), b, !!e)
}
function toggleClass(a: any, b: any) {
  return conditionClass(a, b, !hasClass(a, b))
}
function shown(a: any) {
  return !hasClass(a, i)
}
function hide(a: any) {
  return addClass(a, i)
}
function show(a: any) {
  return removeClass(a, i)
}
function toggle(a: any) {
  return toggleClass(a, i)
}
function conditionShow(a: any, b: any) {
  return conditionClass(a, i, !b)
}

export const css = {
  conditionShow,
  toggle,
  show,
  hide,
  shown,
  toggleClass,
  conditionClass,
  removeClass,
  addClass,
  matchesSelector,
  hasClass,
  setClass,
}
