import isNode from 'fbjs/lib/isNode'

export function isElementNode(node: any) {
  return isNode(node) && node.nodeType == 1
}
