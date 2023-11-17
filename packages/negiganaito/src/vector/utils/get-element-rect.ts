import containsNode from 'fbjs/lib/containsNode'
import { normalizeBoundingClientRect } from './normalize-bounding-client-rect'

export function getElementRect(a: any) {
  let b
  b =
    a == null
      ? void 0
      : (b = a.ownerDocument) == null
      ? void 0
      : b.documentElement
  return !a || !('getBoundingClientRect' in a) || !containsNode(b, a)
    ? {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: 0,
        height: 0,
      }
    : normalizeBoundingClientRect(a, a.getBoundingClientRect())
}
