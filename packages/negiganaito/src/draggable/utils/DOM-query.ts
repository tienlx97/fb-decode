/* eslint-disable no-useless-escape */
/*

__d("DOMQuery", 
["CSS", //
"FBLogger",// 
"containsNode", //
"createArrayFromMixed",//
"createObjectFrom", //
"ge", //
"ifRequired", 
"isElementNode", 
"isNode"], //
*/

import createArrayFromMixed from 'fbjs/lib/createArrayFromMixed'
import isNode from 'fbjs/lib/isNode'

import containsNode from 'fbjs/lib/containsNode'
import { ge } from './ge'
import { isElementNode } from './is-element-node'
import { css } from '@negiganaito/styles'
import { FBLogger } from '@negiganaito/error'
import { createObjectFrom } from './create-object-from'

let h = /^\.-?[_a-zA-Z]+[\w-]*$/

function i(a: any, b: any) {
  return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
}

export function find(a: any, b: any) {
  a = scry(a, b)
  return a[0]
}

export function findPushSafe(a: any, b: any, c: any) {
  b = scry(a, b)
  a = scry(a, c)
  b.length === 1 && a.length === 1 && b[0] === a[0]
    ? (c = b)
    : (c = b.concat(a))
  return c[0]
}

export function scry(a: any, b: any) {
  if (!a || !a.getElementsByTagName) return []
  b = b.split(' ')
  var e = [a]
  for (var f = 0; f < b.length; f++) {
    if (e.length === 0) break
    if (b[f] === '') continue
    var g = b[f],
      j = b[f],
      k = [],
      l = !1
    if (g.charAt(0) == '^')
      if (f === 0) (l = !0), (g = g.slice(1))
      else return []
    g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, ' $&')
    g = g.split(' ')
    var m = g[0] || '*',
      n = m == '*',
      o = g[1] && g[1].charAt(0) == '#'
    if (o) {
      o = ge(g[1].slice(1), a, m)
      if (o && (n || o.tagName.toLowerCase() == m))
        for (var p: any = 0; p < e.length; p++)
          if (l && containsNode(o, e[p])) {
            k = [o]
            break
          } else if (
            document == e[p] ||
            (containsNode(e[p], o) && e[p] !== o)
          ) {
            k = [o]
            break
          }
    } else {
      o = []
      p = e.length
      var q,
        r = !l && j.indexOf('[') < 0 && document.querySelectorAll
      for (var s = 0; s < p; s++) {
        if (l) {
          q = []
          var t = e[s].parentNode
          while (isElementNode(t))
            (n || t.tagName.toLowerCase() == m) && q.push(t), (t = t.parentNode)
        } else
          r
            ? h.test(j)
              ? (q = e[s].getElementsByClassName(j.substring(1)))
              : (q = e[s].querySelectorAll(j))
            : (q = e[s].getElementsByTagName(m))
        t = q.length
        for (var u: any = 0; u < t; u++) o.push(q[u])
      }
      if (!r)
        for (q = 1; q < g.length; q++) {
          t = g[q]
          u = t.charAt(0) == '.'
          n = t.substring(1)
          for (s = 0; s < o.length; s++) {
            p = o[s]
            // @ts-ignore
            if (!p || p.nodeType !== 1) continue
            if (u) {
              css.hasClass(p, n) || delete o[s]
              continue
            } else {
              j = t.slice(1, t.length - 1)
              m = j.indexOf('=')
              if (m < 0) {
                if (!i(p, j)) {
                  delete o[s]
                  continue
                }
              } else {
                r = j.substr(0, m)
                j = j.substr(m + 1)
                j = j.slice(1, j.length - 1)
                if (p.getAttribute(r) != j) {
                  delete o[s]
                  continue
                }
              }
            }
          }
        }
      for (s = 0; s < o.length; s++)
        if (o[s]) {
          k.push(o[s])
          if (l) break
        }
    }
    e = k
  }
  return e
}

export function getSelection() {
  let a: any = window.getSelection
  if (a) return a() + ''
  else {
    a = (document as any).selection
    if (a) return a.createRange().text
  }
  return null
}

export function contains(a: any, b: any) {
  ;(typeof a === 'string' || typeof b === 'string') &&
    FBLogger('dom_query').info(
      'Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead',
    )
  return containsNode(ge(a), ge(b))
}

export function getRootElement() {
  // @ts-ignore
  // var a = c('ifRequired')('Quickling', function (a: any) {
  //   return a.isActive() ? ge('content') : null
  // })
  // return a || document.body

  return document.body
}

export function isNodeOfType(a: any, b: any) {
  b = createArrayFromMixed(b).join('|').toUpperCase().split('|')
  b = createObjectFrom(b)
  return isNode(a) && a.nodeName in b
}

export function isInputNode(a: any) {
  return isNodeOfType(a, ['input', 'textarea']) || a.contentEditable === 'true'
}

export const DOMQuery = {
  find,
  findPushSafe,
  scry,
  getSelection,
  contains,
  getRootElement,
  isNodeOfType,
  isInputNode,
}
