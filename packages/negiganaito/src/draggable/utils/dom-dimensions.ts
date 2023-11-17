import { getDocumentScrollElement } from '@negiganaito/utils/common/get-document-scroll-element'
import { Style } from './style'

function a(a: any) {
  var b = a ? a.offsetHeight : 0
  a = a ? a.offsetWidth : 0
  return {
    height: b,
    width: a,
  }
}
function b(a: any) {
  a = getDocumentScrollElement(a)
  var b = a.scrollWidth || 0
  a = a.scrollHeight || 0
  return {
    width: b,
    height: a,
  }
}
function d(a: any, b: any, d: any, e: any, f: any) {
  let g: any
  switch (b) {
    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      g = [b]
      break
    case 'width':
      g = ['left', 'right']
      break
    case 'height':
      g = ['top', 'bottom']
      break
    default:
      throw Error('Invalid plane: ' + b)
  }
  b = function (b: any, d: any) {
    var e = 0
    for (var f = 0; f < g.length; f++)
      // @ts-ignore
      e += parseFloat(Style.get(a, b + '-' + g[f] + d)) || 0
    return e
  }
  return (
    (d ? b('padding', '') : 0) +
    (e ? b('border', '-width') : 0) +
    (f ? b('margin', '') : 0)
  )
}

export const DOMDimensions = {
  getElementDimensions: a,
  getDocumentDimensions: b,
  measureElementBox: d,
}
