/* eslint-disable camelcase */
import { FBLogger } from '@negiganaito/error'
import { DOMQuery } from './DOM-query'
import Event from './event'
import TAAL from '@negiganaito/error/errorguard/taal'
import { _Core } from '@negiganaito/styles'
import createArrayFromMixed from 'fbjs/lib/createArrayFromMixed'
import isNode from 'fbjs/lib/isNode'
import { HTML } from './html'

import isTextNode from 'fbjs/lib/isTextNode'
import { TrustedTypesIEFixDOMPolicy } from './trusted-types-ie-fix-dom-policy'
import { isScalar } from './isScalar'
import { FbtResultBase } from './fbt-result-base'
import { UserAgent_DEPRECATED } from './UserAgent_DEPRECATED'

const a = function (a: any, b: any, c: any) {
  a = document.createElement(a)
  b && DOM.setAttributes(a, b)
  c != null && DOM.setContent(a, c)
  return a
}

export const DOM = {
  find: DOMQuery.find,
  findPushSafe: DOMQuery.findPushSafe,
  scry: DOMQuery.scry,
  getSelection: DOMQuery.getSelection,
  contains: DOMQuery.contains,
  getRootElement: DOMQuery.getRootElement,
  isNodeOfType: DOMQuery.isNodeOfType,
  isInputNode: DOMQuery.isInputNode,
  create: a,
  setAttributes: function (a: any, b: any) {
    b.type && (a.type = b.type)
    for (var d in b) {
      var e = b[d],
        f = /^on/i.test(d)
      f &&
        typeof e !== 'function' &&
        FBLogger('dom').warn(
          'Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s',
          d,
          typeof e,
        )
      if (d == 'type') continue
      else
        d == 'style'
          ? typeof e === 'string'
            ? (a.style.cssText = e)
            : Object.assign(a.style, e)
          : f
          ? // @ts-ignore
            Event.listen(a, d.substr(2), e)
          : d in a
          ? (a[d] = e)
          : a.setAttribute && a.setAttribute(d, e)
    }
  },
  prependContent: function (a: any, b: any) {
    if (!a)
      throw TAAL.blameToPreviousFile(
        new Error('reference element is not a node'),
      )
    return j(b, a, function (b: any) {
      a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
    })
  },
  insertAfter: function (a: any, b: any) {
    if (!a || !a.parentNode)
      throw TAAL.blameToPreviousFile(
        new Error('reference element does not have a parent'),
      )
    var d = a.parentNode
    return j(b, d, function (b: any) {
      a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b)
    })
  },
  insertBefore: function (a: any, b: any) {
    if (!a || !a.parentNode)
      throw TAAL.blameToPreviousFile(
        new Error('reference element does not have a parent'),
      )
    var d = a.parentNode
    return j(b, d, function (b: any) {
      d.insertBefore(b, a)
    })
  },
  setContent: function (a: any, b: any) {
    if (!a)
      throw TAAL.blameToPreviousFile(
        new Error('reference element is not a node'),
      )
    while (a.firstChild) i(a.firstChild)
    return DOM.appendContent(a, b)
  },
  appendContent: function (a: any, b: any) {
    if (!a)
      throw TAAL.blameToPreviousFile(
        new Error('reference element is not a node'),
      )
    return j(b, a, function (b: any) {
      a.appendChild(b)
    })
  },
  replace: function (a: any, b: any) {
    if (!a || !a.parentNode)
      throw TAAL.blameToPreviousFile(
        new Error('reference element does not have a parent'),
      )
    var d = a.parentNode
    return j(b, d, function (b: any) {
      d.replaceChild(b, a)
    })
  },
  remove: function (a: any) {
    i(typeof a === 'string' ? _Core(a) : a)
  },
  empty: function (a: any) {
    a = typeof a === 'string' ? _Core(a) : a
    while (a.firstChild) i(a.firstChild)
  },
}

function i(a: any) {
  a.parentNode && a.parentNode.removeChild(a)
}
function j(a: any, b: any, e: any) {
  a = HTML.replaceJSONWrapper(a)
  if (
    a instanceof HTML &&
    b.firstChild === null &&
    -1 === a.toString().indexOf('<script')
  ) {
    var f = UserAgent_DEPRECATED.ie()
    if (
      !f ||
      (f > 7 &&
        !DOMQuery.isNodeOfType(b, [
          'table',
          'tbody',
          'thead',
          'tfoot',
          'tr',
          'select',
          'fieldset',
        ]))
    ) {
      var g: any = f ? '<em style="display:none;">&nbsp;</em>' : ''
      b.innerHTML = TrustedTypesIEFixDOMPolicy.createHTML(g + a)
      f && b.removeChild(b.firstChild)
      return Array.from(b.childNodes)
    }
  } else if (isTextNode(b)) {
    b.data = a
    return [a]
  }
  g = document.createDocumentFragment()
  var h
  f = []
  b = []
  var i = !1
  a = createArrayFromMixed(a)
  a.length === 1 && a[0] instanceof FbtResultBase && (a = a[0].getContents())
  for (var j = 0; j < a.length; j++) {
    h = HTML.replaceJSONWrapper(a[j])
    if (h instanceof HTML) {
      b.push(h.getAction())
      var k = h.getNodes()
      !i &&
        h.hasInlineJs() &&
        (FBLogger('staticresources').warn(
          'DOM: adding HTML which contains inline JS',
        ),
        (i = !0))
      for (var l: any = 0; l < k.length; l++) f.push(k[l]), g.appendChild(k[l])
    } else if (isScalar(h) || h instanceof FbtResultBase) {
      l = document.createTextNode(h)
      f.push(l)
      g.appendChild(l)
    } else
      isNode(h)
        ? (f.push(h), g.appendChild(h))
        : (Array.isArray(h) &&
            FBLogger('dom').warn('Nest arrays not supported'),
          h !== null && FBLogger('dom').warn('No way to set content %s', h))
  }
  e(g)
  b.forEach(function (a: any) {
    a()
  })
  return f
}
