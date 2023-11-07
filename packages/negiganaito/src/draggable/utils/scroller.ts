import { Rect, Vector } from '@negiganaito/vector'
import { Arbiter } from './arbiter'
import { Style } from './style'
import Event from './event'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

export class Scroller {
  private canvas: any
  private scrollZone: any
  private velocity: any
  private coefficient: any
  private cursor: any
  private event: any
  private interval: any

  //
  _onmousemove: any

  constructor(canvas: any) {
    this.canvas = canvas
    this.scrollZone = 50
    this.velocity = 100
    this.coefficient = 1

    this._onmousemove = function (a: any) {
      this.cursor = Vector.getEventPosition(a)
    }
    this.cursor = null
  }

  activate() {
    this.activate = emptyFunction

    // @ts-ignore
    this.event = Event.listen(document, 'mousemove', this._onmousemove)
    this.interval = setInterval(this._intervalHandler.bind(this), 50)

    this.cursor = null
  }

  deactivate() {
    // @ts-ignore
    delete this.activate
    if (this.event) {
      this.event.remove()
    }

    this.event = null
    clearInterval(this.interval)
  }

  _intervalHandler() {
    if (!this.cursor) return

    const viewportBounds =
      this.canvas === document.body
        ? Rect.getViewportBounds()
        : new Rect(this.canvas)
    const cursorRect = new Rect(
      this.cursor.y - viewportBounds.t,
      this.cursor.x - viewportBounds.l,
      this.cursor.y - viewportBounds.b,
      viewportBounds.r - this.cursor.x,
    )

    const scrollVector = new Vector(0, 0)

    if (cursorRect.t < cursorRect.b && cursorRect.t < this.scrollZone) {
      scrollVector.y = -this.scrollZone + cursorRect.t
    } else if (cursorRect.b < this.scrollZone) {
      scrollVector.y = this.scrollZone - cursorRect.b
    }

    scrollVector.y = this._doMath(scrollVector.y)

    if (cursorRect.l < cursorRect.r && cursorRect.l < this.scrollZone) {
      scrollVector.x = -this.scrollZone + cursorRect.l
    } else if (cursorRect.r < this.scrollZone) {
      scrollVector.x = this.scrollZone - cursorRect.r
    }

    scrollVector.x = this._doMath(scrollVector.x)

    if (scrollVector.x || scrollVector.y) {
      scrollVector.scrollElementBy(this.canvas)

      if (document.body === this.canvas) {
        const initialScrollPosition = Vector.getScrollPosition()
        scrollVector.scrollElementBy(this.canvas)
        const finalScrollPosition = Vector.getScrollPosition()
        this.cursor = this.cursor.add(
          finalScrollPosition.sub(initialScrollPosition),
        )
      } else {
        scrollVector.scrollElementBy(this.canvas)
      }

      Arbiter.inform('scroller/scroll', this.cursor)
    }
  }

  _doMath(value: any) {
    value =
      value >= 0
        ? Math.min(value, this.scrollZone)
        : Math.max(value, -this.scrollZone)
    return Math.floor(
      Math.pow((value / this.scrollZone) * this.velocity, this.coefficient),
    )
  }

  static findScrollParent(element: any) {
    let parentElement = element.parentNode
    while (parentElement) {
      if (parentElement.scrollHeight !== parentElement.offsetTop) {
        const overflowY = Style.get(parentElement, 'overflowY')
        if (overflowY === 'scroll' || overflowY === 'auto') {
          return parentElement
        }
      }
      parentElement = parentElement.parentNode
    }
    return document.body
  }
}
