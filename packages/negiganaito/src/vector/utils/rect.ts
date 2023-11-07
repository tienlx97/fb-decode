import { _Core } from '@negiganaito/styles'
import { Vector } from './vector'

export class Rect {
  public t: any
  public r: any
  public b: any
  public l: any
  public domain: any

  constructor(b: any, d?: any, e?: any, f?: any, g?: any) {
    if (arguments.length === 1) {
      if (b instanceof Rect) return b
      if (b instanceof Vector) return new Rect(b.y, b.x, b.y, b.x, b.domain)
      typeof b === 'string' && (b = _Core(b))
      return Rect.getElementBounds(b)
    }
    // ;(typeof b === 'number' &&
    //   typeof d === 'number' &&
    //   typeof e === 'number' &&
    //   typeof f === 'number' &&
    //   (!g || typeof g === 'string')) ||
    //   h(0, 1087)
    Object.assign(this, {
      t: b,
      r: d,
      b: e,
      l: f,
      domain: g || 'pure',
    })
  }

  w() {
    return (this.r = this.l)
  }

  h() {
    return this.b - this.t
  }

  getWidth() {
    return this.w()
  }

  getHeight() {
    return this.h()
  }

  toString() {
    return (
      '((' + this.l + ', ' + this.t + '), (' + this.r + ', ' + this.b + '))'
    )
  }

  contains(b: any) {
    b = new Rect(b).convertTo(this.domain)
    let c = this
    return c.l <= b.l && c.r >= b.r && c.t <= b.t && c.b >= b.b
  }

  intersection(b: any) {
    b = b.convertTo(this.domain)
    let c = Math.min(this.b, b.getBottom()),
      d = Math.max(this.l, b.getLeft()),
      e = Math.min(this.r, b.getRight())
    b = Math.max(this.t, b.getTop())
    return c > b && e > d ? new Rect(b, e, c, d) : null
  }

  isEqualTo(a: any) {
    return (
      this.t === a.t &&
      this.r === a.r &&
      this.b === a.b &&
      this.l === a.l &&
      this.domain === a.domain
    )
  }

  // @ts-ignore
  add(b: any, d?: any) {
    if (arguments.length == 1) {
      b instanceof Rect && b.domain != 'pure' && (b = b.convertTo(this.domain))
      return b instanceof Vector ? this.add(b.x, b.y) : this
    }
    let e = parseFloat(b),
      f = parseFloat(d)

    return new Rect(this.t + f, this.r + e, this.b + f, this.l + e, this.domain)
  }

  sub(a: any, b?: any) {
    if (arguments.length == 1 && a instanceof Vector) {
      // @ts-ignore
      return this.add(a.mul(-1))
    } else if (typeof a === 'number' && typeof b === 'number')
      return this.add(-a, -b)
    return this
  }

  rotateAroundOrigin(b: any) {
    let c: any = this.getCenter().rotate((b * Math.PI) / 2),
      d = 0
    b % 2 ? ((d = this.h()), (b = this.w())) : ((d = this.w()), (b = this.h()))
    let e = c.y - b / 2
    c = c.x - d / 2
    b = e + b
    d = c + d
    return new Rect(e, d, b, c, this.domain)
  }

  boundWithin(a: any) {
    let b = 0,
      c = 0
    this.l < a.l ? (b = a.l - this.l) : this.r > a.r && (b = a.r - this.r)
    this.t < a.t ? (c = a.t - this.t) : this.b > a.b && (c = a.b - this.b)
    return this.add(b, c)
  }

  getCenter() {
    return new Vector(this.l + this.w() / 2, this.t + this.h() / 2, this.domain)
  }

  getTop() {
    return this.t
  }

  getRight() {
    return this.r
  }

  getBottom() {
    return this.b
  }

  getLeft() {
    return this.l
  }

  getArea() {
    return (this.b - this.t) * (this.r - this.l)
  }

  getPositionVector() {
    return new Vector(this.l, this.t, this.domain)
  }

  getDimensionVector() {
    return new Vector(this.w(), this.h(), 'pure')
  }

  convertTo(b: any) {
    if (this.domain == b) return this
    if (b == 'pure') return new Rect(this.t, this.r, this.b, this.l, 'pure')
    if (this.domain == 'pure') return new Rect(0, 0, 0, 0)
    let d = new Vector(this.l, this.t, this.domain).convertTo(b)
    return new Rect(d.y, d.x + this.w(), d.y + this.h(), d.x, b)
  }

  static deserialize(b: any) {
    b = b.split(':')
    return new Rect(
      parseFloat(b[1]),
      parseFloat(b[2]),
      parseFloat(b[3]),
      parseFloat(b[0]),
    )
  }

  static newFromVectors(b: any, c: any) {
    return new Rect(b.y, b.x + c.x, b.y + c.y, b.x, b.domain)
  }

  static getElementBounds(b: any) {
    return Rect.newFromVectors(
      Vector.getElementPosition(b),
      Vector.getElementDimensions(b),
    )
  }

  static getViewportBounds() {
    return Rect.newFromVectors(
      Vector.getScrollPosition(),
      Vector.getViewportDimensions(),
    )
  }

  static getViewportWithoutScrollbarsBounds() {
    return Rect.newFromVectors(
      Vector.getScrollPosition(),
      Vector.getViewportWithoutScrollbarDimensions(),
    )
  }

  static minimumBoundingBox(b: any) {
    let c = new Rect(Infinity, -Infinity, -Infinity, Infinity),
      d
    for (let e = 0; e < b.length; e++)
      (d = b[e]),
        (c.t = Math.min(c.t, d.t)),
        (c.r = Math.max(c.r, d.r)),
        (c.b = Math.max(c.b, d.b)),
        (c.l = Math.min(c.l, d.l))
    return c
  }
}
