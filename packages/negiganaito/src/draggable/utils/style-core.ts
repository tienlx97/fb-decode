import hyphenate from 'fbjs/lib/hyphenate'
import camelize from 'fbjs/lib/camelize'
import getStyleProperty from 'fbjs/lib/getStyleProperty'
import containsNode from 'fbjs/lib/containsNode'

import { getOpacityStyleName } from './get-opacity-style-name'
import { err } from '@negiganaito/error'

function i(a: any, b: any) {
  a = o.get(a, b)
  return a === 'auto' || a === 'scroll'
}
var j = new RegExp(
  '\\s*([^\\s:]+)\\s*:\\s*([^;(\'"]*(?:(?:\\([^)]*\\)|"[^"]*"|\'[^\']*\')[^;(?:\'"]*)*)(?:;|$)',
  'g',
)
function k(a: any) {
  let b: any = {}
  a.replace(j, function (a: any, c: any, d: any) {
    b[c] = d
    return d
  })
  return b
}
function l(a: any) {
  var b = ''
  for (var c in a) a[c] && (b += c + ':' + a[c] + ';')
  return b
}
function m(a: any) {
  return a !== '' ? 'alpha(opacity=' + a * 100 + ')' : ''
}
function n(a: any, b: any, d: any) {
  switch (hyphenate(b)) {
    case 'font-weight':
    case 'line-height':
    case 'opacity':
    case 'z-index':
    case 'animation-iteration-count':
    case '-webkit-animation-iteration-count':
      break
    case 'width':
    case 'height':
      var e = parseInt(d, 10) < 0
    // e && h(0, 11849, a, b, d)
    // eslint-disable-next-line no-fallthrough
    default:
      // isNaN(d) || !d || d === '0' || h(0, 11850, a, b, d, d + 'px')
      break
  }
}
var o = {
  set: function (a: any, b: any, d: any) {
    n('Style.set', b, d)
    if (a == null) return
    a = a.style
    switch (b) {
      case 'opacity':
        getOpacityStyleName() === 'filter' ? (a.filter = m(d)) : (a.opacity = d)
        break
      case 'float':
        a.cssFloat = a.styleFloat = d || ''
        break
      default:
        try {
          a[camelize(b)] = d
        } catch (a) {
          throw err('Style.set: "%s" argument is invalid: %s', b, d)
        }
    }
  },
  apply: function (a: any, b: any) {
    var d
    for (d in b) n('Style.apply', d, b[d])
    'opacity' in b &&
      getOpacityStyleName() === 'filter' &&
      ((b.filter = m(b.opacity)), delete b.opacity)
    var e = k(a.style.cssText)
    for (d in b) {
      var f = b[d]
      delete b[d]
      var g = hyphenate(d)
      for (var h in e) (h === g || h.indexOf(g + '-') === 0) && delete e[h]
      b[g] = f
    }
    Object.assign(e, b)
    a.style.cssText = l(e)
  },
  get: getStyleProperty,
  getFloat: function (a: any, b: any) {
    // @ts-ignore
    // return parseFloat(o.get(a, b), 10)
    return parseFloat(o.get(a, b))
  },
  getOpacity: function (a: any) {
    if (getOpacityStyleName() === 'filter') {
      var b: any = o.get(a, 'filter')
      if (b) {
        b = /(\d+(?:\.\d+)?)/.exec(b)
        if (b) return parseFloat(b.pop()) / 100
      }
    }
    return o.getFloat(a, 'opacity') || 1
  },
  isFixed: function (a: any) {
    while (containsNode(document.body, a)) {
      if (o.get(a, 'position') === 'fixed') return !0
      a = a.parentNode
    }
    return !1
  },
  getScrollParent: function (a: any) {
    if (!a) return null
    while (a && a !== document.body) {
      if (i(a, 'overflow') || i(a, 'overflowY') || i(a, 'overflowX')) return a
      a = a.parentNode
    }
    return window
  },
}

export const StyleCore = o
