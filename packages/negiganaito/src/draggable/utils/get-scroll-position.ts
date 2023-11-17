import { getDocumentScrollElement } from '@negiganaito/utils/common/get-document-scroll-element'
import { getUnboundedScrollPosition } from './get-unbounded-scroll-position'

export function getScrollPosition(a: any) {
  var b = getDocumentScrollElement(a.ownerDocument || a.document)
  a.Window && a instanceof a.Window && (a = b)
  var d = getUnboundedScrollPosition(a)
  b = a === b ? a.ownerDocument.documentElement : a
  var e = a.scrollWidth - b.clientWidth
  a = a.scrollHeight - b.clientHeight
  d.x = Math.max(0, Math.min(d.x, e))
  d.y = Math.max(0, Math.min(d.y, a))
  return d
}
