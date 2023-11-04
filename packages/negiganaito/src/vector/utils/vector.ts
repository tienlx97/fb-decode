import { Scroll } from '@negiganaito/draggable'
import { DOMVector } from './dom-vector'
import { Event } from '@negiganaito/draggable'

export class Vector extends DOMVector {
  constructor(b: any, c: any, d: any) {
    super(parseFloat(b), parseFloat(c), d)
  }

  derive(a: any, c: any, d: any) {
    return new Vector(a, c, d || this.domain)
  }

  setElementPosition(a: any) {
    var b = this.convertTo('document')
    a.style.left = parseInt(b.x, 10) + 'px'
    a.style.top = parseInt(b.y, 10) + 'px'
    return this
  }

  setElementDimensions(a: any) {
    return this.setElementWidth(a).setElementHeight(a)
  }

  setElementWidth(a: any) {
    a.style.width = parseInt(this.x, 10) + 'px'
    return this
  }

  setElementHeight(a: any) {
    a.style.height = parseInt(this.y, 10) + 'px'
    return this
  }

  scrollElementBy(a: any) {
    if (a == document.body) window.scrollBy(this.x, this.y)
    else {
      var b: any
      ;(b = Scroll).setLeft(a, b.getLeft(a) + this.x)
      b.setTop(a, b.getTop(a) + this.y)
    }
    return this
  }

  static from(a: any, c: any, d?: any) {
    return new Vector(a, c, d)
  }

  static getEventPosition(a: any, b?: any) {
    b === void 0 && (b = 'document')
    // @ts-ignore
    a = Event.getPosition(a)
    a = this.from(a.x, a.y, 'document')
    return a.convertTo(b)
  }

  static getTouchEventPosition(a: any, b: any) {
    b === void 0 && (b = 'document')
    a = a.touches[0]
    a = this.from(a.pageX, a.pageY, 'document')
    return a.convertTo(b)
  }

  static deserialize(a: any) {
    a = a.split(',')
    return this.from(a[0], a[1])
  }
}
