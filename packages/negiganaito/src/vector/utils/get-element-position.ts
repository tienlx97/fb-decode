import { getElementRect } from './get-element-rect'

export function getElementPosition(a: any) {
  a = getElementRect(a)
  return {
    x: a.left,
    y: a.top,
    width: a.right - a.left,
    height: a.bottom - a.top,
  }
}
