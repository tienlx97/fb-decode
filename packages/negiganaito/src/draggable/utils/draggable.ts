import { Rect, Vector } from '@negiganaito/vector'
import { DOM } from './dom'
import { Drag } from './drag'
import { Collection } from './collection'
import Event from './event'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import { Scroller } from './scroller'

export class Draggable {
  private _onclick: any
  private _shouldKillEvents: any
  private _onmousedown: any
  private draggableInitialVector: any
  private cursorPositionVector: any
  private grabPctX: any
  private grabPctY: any
  // private gutter: any
  private cursorInitialVector: any
  private dom: any
  private _killUnlessActive: any
  //
  private data: any
  // private handles: any
  private boundingBox: any
  private useScroller: any
  private scrollParents: any
  private manualPositioner: any
  private _setInactiveTimeout: any

  //

  ondrag = emptyFunction
  ongrab = emptyFunction
  ondrop = emptyFunction
  private gutter: number = 0
  private handles: any = null

  //
  private active: any
  private scrollers: any
  private oldPosition: any
  private oldTop: any
  private absolute: any
  private namespace: any
  private lastDragOver: any

  constructor(c: any) {
    var d = this
    this._onclick = function (a: any) {
      if (!d._shouldKillEvents) return !0
      // @ts-ignore
      if (d.active) return Event.kill(a)
    }
    this._onmousedown = function (a: any) {
      if (!((a.which && a.which === 1) || (a.button && a.button === 1))) return
      var c = a.getTarget()
      if (
        DOM.isNodeOfType(c, ['input', 'select', 'textarea', 'object', 'embed'])
      )
        return !0
      c = Vector.getEventPosition(a)
      var e = Vector.getElementDimensions(d.dom)
      d.draggableInitialVector = Vector.getElementPosition(d.dom)
      d.cursorPositionVector = c.sub(d.draggableInitialVector)
      d.grabPctX = e.x === 0 ? 0 : d.cursorPositionVector.x / e.x
      d.grabPctY = e.y === 0 ? 0 : d.cursorPositionVector.y / e.y
      Drag.grab(d, a)
      d.gutter ? (d.cursorInitialVector = c) : (d._setActive(!0), d._ongrab(c))
      // @ts-ignore
      return !d._shouldKillEvents ? !0 : Event.kill(a)
    }
    this._killUnlessActive = function (a: any) {
      if (!d._shouldKillEvents) return
      if (a.getTarget() !== document.activeElement) return a.kill()
    }
    if (!c) throw new Error('Element should be a DOM node')
    if (!(this instanceof Draggable))
      if (c instanceof Array) {
        var e: any = []
        c.forEach(function (b) {
          e.push(new Draggable(b))
        })
        // @ts-ignore
        return new Collection(Draggable, e)
      } else return new Draggable(c)
    else
      (this.data = {}),
        (this.handles = []),
        (this.dom = c),
        (this.boundingBox = null),
        (this.useScroller = !0),
        (this.scrollParents = null),
        (this.manualPositioner = null),
        (this.grabPctX = this.grabPctY = 0),
        (this._shouldKillEvents = !0),
        (this._setInactiveTimeout = null),
        this.addHandle(this.dom)
  }

  destroy() {
    var a = this
    this.handles.forEach(function (b: any) {
      return a.removeHandle(b.obj)
    })
    this.data = this.dom = null
  }
  adjustCursorPosition() {
    var a = Vector.getElementDimensions(this.dom)
    // @ts-ignore
    this.cursorPositionVector = new Vector(
      // @ts-ignore
      parseInt(this.grabPctX * a.x, 10),
      // @ts-ignore
      parseInt(this.grabPctY * a.y, 10),
    )
  }

  _ongrab(a: any) {
    // @ts-ignore
    this.ongrab(a)
    this.useScroller &&
      (this.scrollers ||
        (this.scrollers = this.scrollParents
          ? this.scrollParents.map(function (a: any) {
              return new Scroller(a)
            })
          : [new Scroller(Scroller.findScrollParent(this.dom))]),
      this.scrollers.forEach(function (a: any) {
        return a.activate()
      }))
    if (this.active) {
      this.oldPosition || (this.oldPosition = this.dom.style.position)
      this.oldTop || (this.oldTop = this.dom.style.top)
      var c = Drag.getOffsetParent(this.dom)
      c !== document.body && (a = a.sub(Vector.getElementPosition(c)))
      this.dom.style.position = this.absolute ? 'absolute' : 'relative'
      a.sub(this.cursorPositionVector).setElementPosition(this.dom)
    }
  }

  _onmousemove(a: any) {
    this.active ||
      (a.distanceTo(this.cursorInitialVector) >= this.gutter &&
        (this._setActive(!0), this._ongrab(a)))
    if (this.active) {
      var c = a.sub(this.cursorPositionVector)
      if (this.boundingBox) {
        var d: any = Rect.newFromVectors(
          c,
          Vector.getElementDimensions(this.dom),
        )
        d = d.boundWithin(this.boundingBox)
        c = d.getPositionVector()
        this.boundingBox.w() === 0 && this.boundingBox.h() === 0
          ? (d = new Vector(
              this.draggableInitialVector.x,
              this.draggableInitialVector.y,
              'document',
            ))
          : this.boundingBox.w() === 0
          ? (d = new Vector(this.draggableInitialVector.x, c.y, 'document'))
          : this.boundingBox.h() === 0
          ? (d = new Vector(c.x, this.draggableInitialVector.y, 'document'))
          : (d = c)
      } else d = c
      c = Drag.getOffsetParent(this.dom)
      c !== document.body && (d = d.sub(Vector.getElementPosition(c)))
      this.manualPositioner
        ? this.manualPositioner.updateMousePosition(d)
        : d.setElementPosition(this.dom)
      //@ts-ignore
      this.ondrag(a)
    }
  }

  _ondrop() {
    var a = this
    this.scrollers &&
      this.scrollers.forEach(function (a: any) {
        return a.deactivate()
      })
    this.active &&
      ((this._setInactiveTimeout = setTimeout(function () {
        ;(a._setInactiveTimeout = null), a._setActive(!1)
      }, 0)),
      // @ts-ignore
      this.ondrop(this.scrollers && this.scrollers[0].cursor),
      this.lastDragOver && this.lastDragOver.ondrop(this))
  }
  killDrag() {
    this._setActive(!1), Drag._onmouseup()
  }
  forceDrop() {
    Drag._onmouseup()
  }
  triggerMouseDown(a: any) {
    this._onmousedown(a)
  }

  setBoundingBox(a: any) {
    this.boundingBox = a
    return this
  }

  resetPosition() {
    var a
    this.dom.style.position = this.oldPosition
    this.oldPosition = null
    this.dom.style.left = ''
    this.dom.style.top = (a = this.oldTop) != null ? a : ''
    this.oldTop = null
    return this
  }

  setUseAbsolute(a: any) {
    this.absolute = a
    return this
  }

  setDragHandler(a: any) {
    this.ondrag = a
    return this
  }

  setGrabHandler(a: any) {
    this.ongrab = a
    return this
  }

  setDropHandler(a: any) {
    this.ondrop = a
    return this
  }

  setGutter(a: any) {
    this.gutter = a
    return this
  }

  setNamespace(a: any) {
    this.namespace = a
    return this
  }
  setUseScroller(a: any) {
    this.useScroller = a
    return this
  }

  setScrollParents(a: any) {
    this.scrollParents = a
    return this
  }

  setAvoidKillingEvents(a: any) {
    this._shouldKillEvents = !a
    return this
  }

  setManualPositioner(a: any) {
    this.manualPositioner = a
    return this
  }

  addHandle(a: any) {
    this.handles.length == 1 &&
      this.handles[0].obj == this.dom &&
      this.removeHandle(this.dom)
    this.handles.push({
      obj: a,

      evt: [
        // @ts-ignore
        Event.listen(a, 'mousedown', this._onmousedown),
        // @ts-ignore
        Event.listen(a, 'click', this._onclick),
        // @ts-ignore
        Event.listen(a, 'drag', this._killUnlessActive),
        // @ts-ignore
        Event.listen(a, 'selectstart', this._killUnlessActive),
      ],
    })
    return this
  }

  removeHandle(a: any) {
    this.handles = this.handles.filter(function (b: any) {
      if (b.obj != a) return !0
      else {
        b.evt.forEach(function (a: any) {
          a.remove()
        })
        return !1
      }
    })
  }

  getDOM() {
    return this.dom
  }

  setKey(a: any, b: any) {
    this.data[a] = b
    return this
  }

  getKey(a: any) {
    return this.data[a]
  }

  _setActive(a: any) {
    if (!this.dom) return
    a &&
      this._setInactiveTimeout != null &&
      clearTimeout(this._setInactiveTimeout)
    this.dom.activeDrag = this.active = a
    for (var b = 0; b < this.handles.length; b++)
      this.handles[b].obj.activeDrag = a
  }
}
