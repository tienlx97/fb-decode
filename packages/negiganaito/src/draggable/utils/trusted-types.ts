import { ENV } from '@negiganaito/utils/common/env'
import { TrustedTypesUtils } from './trusted-types-utils'

function a() {
  return (
    // @ts-ignore
    TrustedTypesUtils.isBrowser && typeof window.trustedTypes !== 'undefined'
  )
}
// @ts-ignore
var i = a() ? window.trustedTypes : null,
  j = new Map(),
  k = {
    createHTML: TrustedTypesUtils.noop,
    createScriptURL: TrustedTypesUtils.noop,
    createScript: TrustedTypesUtils.noop,
  }
function l(a: any, b: any) {
  return function (e: any) {
    for (
      var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), i = 1;
      i < f;
      i++
    )
      g[i - 1] = arguments[i]
    if (ENV.isTrustedTypesReportOnly)
      try {
        return b.apply(void 0, [e].concat(g))
      } catch (b: any) {
        TrustedTypesUtils.logError(
          'Exception in policy ' +
            a +
            ': ' +
            b.message +
            ', returning original string.',
        )
        return a === 'default' ? !1 : e
      }
    return b.apply(void 0, [e].concat(g))
  }
}
function m(a: any, b: any) {
  if (i == null || !ENV.useTrustedTypes) return k
  var e = j.get(a)
  if (e != null) {
    TrustedTypesUtils.logWarning(
      'A policy with name ' + a + ' already exists, returning existing policy.',
    )
    return e
  }
  try {
    var f = i.createPolicy(a, b)
    e = {
      createHTML: l(a, function (a: any) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d]
        return f.createHTML.apply(f, [a].concat(c))
      }),
      createScriptURL: l(a, function (a: any) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d]
        return f.createScriptURL.apply(f, [a].concat(c))
      }),
      createScript: l(a, function (a: any) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d]
        return f.createScript.apply(f, [a].concat(c))
      }),
    }
    j.set(a, e)
    return e
  } catch (a) {
    TrustedTypesUtils.logError('Error creating Trusted Types policy: ' + a)
  }
  return k
}
function b() {
  return j.get('default')
}
function e(a: any) {
  return (a = i == null ? void 0 : i.isHTML(a)) != null ? a : !1
}
function f(a: any) {
  return (a = i == null ? void 0 : i.isScriptURL(a)) != null ? a : !1
}
function n(a: any) {
  return (a = i == null ? void 0 : i.isScript(a)) != null ? a : !1
}
function o(a: any) {
  if (i == null || !ENV.useTrustedTypes) return
  if (!ENV.enableDefaultTrustedTypesPolicy) return
  m('default', a.policy)
}

export const TrustedTypes = {
  isSupportedNatively: a,
  isHTML: e,
  isScript: n,
  isScriptURL: f,
  createPolicy: m,
  getDefaultPolicy: b,
  createDefaultPolicy: o,
}
