import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

let h,
  j = '<!--$-->',
  k = '<!--$?-->',
  l = '<!--$!-->',
  m = '<!--/$-->',
  n = new Map(),
  o = new Set()

export const setEnabledBoundaries = function (a: any) {
  o = new Set(a)
}

export const isEnabledBoundary = function (a: any) {
  return o.has(a)
}

export const getBoundarySSRContentID = function (a: any) {
  return 'ssrb_' + a + '_content'
}

export const getBoundaryStartID = function (a: any) {
  return 'ssrb_' + a + '_start'
}
export const getBoundaryEndID = function (a: any) {
  return 'ssrb_' + a + '_end'
}
const r = function (a: any) {
  return '<span id="' + getBoundaryStartID(a) + '" style="display:none"></span>'
}
const s = function (a: any) {
  return '<span id="' + getBoundaryEndID(a) + '" style="display:none"></span>'
}

export const getBoundaryStartOffset = function (a: any, b: any) {
  a = r(a)
  var c = a.length
  a = b.indexOf(a)
  if (a !== -1) {
    if (b.startsWith(j, a + c)) return [a, c + j.length, 'hydrate']
    if (b.startsWith(l, a + c)) return [a, c + l.length, 'fallback']
    if (b.startsWith(k, a + c)) return [a, c + k.length, 'fallback']
  }
  return null
}

export const getBoundaryEndOffset = function (a: any, b: any) {
  a = m + s(a)
  b = b.indexOf(a)
  return b !== -1 ? [b, a.length] : null
}

export const getBoundaryString = function (a: any, b: any) {
  return r(a) + ('' + k + b + m) + s(a)
}
export const getBoundaryStartComponent = function (a: any) {
  return jsx('span', {
    id: getBoundaryStartID(a),
    style: {
      display: 'none',
    },
  })
}
export const getBoundaryEndComponent = function (a: any) {
  return jsx('span', {
    id: getBoundaryEndID(a),
    style: {
      display: 'none',
    },
  })
}

export function tryResolveDisabledBoundaries(a: any) {
  a.forEach(function (a: any) {
    var b = n.get(a) || null
    b &&
      b.resolveFunc &&
      typeof b.resolveFunc === 'function' &&
      (b.resolveFunc(a), n['delete'](a))
  })
}
export const tryGetBoundaryPromise = function (a: any) {
  a = n.get(a)
  return a ? a.promise : null
}
export const updateDisabledBoundariesMap = function (a: any, b: any) {
  n.set(a, b)
}
