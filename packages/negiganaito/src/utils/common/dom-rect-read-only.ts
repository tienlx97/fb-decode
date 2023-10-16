class Rectangle {
  public bottom: number
  public height: number
  public left: number
  public right: number
  public top: number
  public width: number
  public x: number
  public y: number

  constructor() {
    this.bottom = 0
    this.height = 0
    this.left = 0
    this.right = 0
    this.top = 0
    this.width = 0
    this.x = 0
    this.y = 0
  }

  static fromRect(rectData?: {
    height?: number
    width?: number
    x?: number
    y?: number
  }): Rectangle {
    rectData = rectData || {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
    }

    const c = rectData.height || 0
    const d = rectData.width || 0
    const e = rectData.x || 0
    const b = rectData.y || 0

    const f = new Rectangle()
    f.x = e
    f.y = b
    f.width = d
    f.height = c
    f.top = b
    f.bottom = b + c
    f.right = e + d
    f.left = e
    return f
  }
}

const b = typeof window !== 'undefined' && 'DOMRectReadOnly' in window

const c = b ? window.DOMRectReadOnly.fromRect : undefined

const d = !!c && 'function' === typeof c

const e = d ? window.DOMRectReadOnly : Rectangle

export default e

/*

__d(
  'DOMRectReadOnly',
  [],
  function (a, b, c, d, e, f) {
    'use strict'
    a = (function () {
      function a() {
        ;(this.bottom = 0),
          (this.height = 0),
          (this.left = 0),
          (this.right = 0),
          (this.top = 0),
          (this.width = 0),
          (this.x = 0),
          (this.y = 0)
      }
      a.fromRect = function (b) {
        b = b || {
          height: 0,
          width: 0,
          x: 0,
          y: 0,
        }
        var c = b.height,
          d = b.width,
          e = b.x
        b = b.y
        var f = new a()
        f.x = e
        f.y = b
        f.width = d
        f.height = c
        f.top = b
        f.bottom = b + c
        f.right = e + d
        f.left = e
        return f
      }
      return a
    })()
    b = 'DOMRectReadOnly' in window
    c = b ? window.DOMRectReadOnly.fromRect : void 0
    d = !!c && 'function' === typeof c
    e = d ? window.DOMRectReadOnly : a
    f['default'] = e
  },
  66,
)

*/
