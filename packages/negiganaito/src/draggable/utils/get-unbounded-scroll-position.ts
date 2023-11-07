import { Scroll } from './scroll'

export function getUnboundedScrollPosition(a: any) {
  if (a === window) {
    let c
    return {
      x:
        (c = window.pageXOffset) != null
          ? c
          : Scroll.getLeft(document.documentElement),
      y:
        (c = window.pageYOffset) != null
          ? c
          : Scroll.getTop(document.documentElement),
    }
  }
  return {
    x: Scroll.getLeft(a),
    y: Scroll.getTop(a),
  }
}
