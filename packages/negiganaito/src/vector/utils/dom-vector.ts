import {
  getUnboundedScrollPosition,
  getViewportDimensions,
} from '@negiganaito/draggable'
import { BasicVector } from './basic-vector'
import { getElementPosition as getElementPosition2 } from './get-element-position'
import { getDocumentScrollElement } from '@negiganaito/utils/common/get-document-scroll-element'

export class DOMVector extends BasicVector {
  public domain: string

  constructor(b: any, c: any, d: any) {
    super(b, c)
    this.domain = d || 'pure'
  }

  // @ts-ignore
  derive(a: any, c: any, d?: any) {
    return new DOMVector(a, c, d || this.domain)
  }

  // @ts-ignore
  add(c: any, d: any) {
    c instanceof DOMVector &&
      c.getDomain() !== 'pure' &&
      (c = c.convertTo(this.domain))
    return DOMVector.prototype.add.call(this, c, d)
  }

  convertTo(a: any) {
    if (a != 'pure' && a != 'viewport' && a != 'document')
      return this.derive(0, 0)
    if (a == this.domain) {
      return this.derive(this.x, this.y, this.domain)
    }
    if (a == 'pure') {
      return this.derive(this.x, this.y)
    }
    if (this.domain == 'pure') {
      return this.derive(0, 0)
    }
    let c = DOMVector.getScrollPosition('document'),
      d = this.x,
      e = this.y
    this.domain == 'document'
      ? ((d -= c.x), (e -= c.y))
      : ((d += c.x), (e += c.y))
    return this.derive(d, e, a)
  }

  getDomain() {
    return this.domain
  }

  static from(a: any, c: any, d?: any) {
    return new DOMVector(a, c, d)
  }

  static getScrollPosition(a?: any) {
    a = a || 'document'
    let b = getUnboundedScrollPosition(window)
    return this.from(b.x, b.y, 'document').convertTo(a)
  }

  static getElementPosition(a: any, b?: any) {
    b = b || 'document'
    a = getElementPosition2(a)
    return this.from(a.x, a.y, 'viewport').convertTo(b)
  }

  static getElementDimensions(a: any) {
    return this.from(a.offsetWidth || 0, a.offsetHeight || 0)
  }

  static getViewportDimensions() {
    let a = getViewportDimensions()
    return this.from(a.width, a.height, 'viewport')
  }

  static getLayoutViewportDimensions() {
    var a = getViewportDimensions.layout()
    return this.from(a.width, a.height, 'viewport')
  }

  static getViewportWithoutScrollbarDimensions() {
    var a = getViewportDimensions.withoutScrollbars()
    return this.from(a.width, a.height, 'viewport')
  }

  static getDocumentDimensions(a: any) {
    a = getDocumentScrollElement(a)
    return this.from(a.scrollWidth, a.scrollHeight, 'document')
  }
}
