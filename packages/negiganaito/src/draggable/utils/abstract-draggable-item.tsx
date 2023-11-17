import React, { Component } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { FBOverlayElement } from './fb-overlay-element'
import { joinClasses } from '@negiganaito/error/utils/join-classes'
import { CenteredContainer } from './centered-container'
import { Draggable } from './draggable'
import Event from './event'
import { Keys } from './keys'
import { DOMDimensions } from './dom-dimensions'
import { Rect } from '@negiganaito/vector'
import { getViewportDimensions } from './get-viewport-dimensions'
import { getScrollPosition } from './get-scroll-position'
import { FBOverlayContainer } from './fb-overlay-container'

const l = parseInt('1024px', 10),
  m = 250

export class AbstractDraggableItem extends Component<any, any> {
  private $1: any
  private $3: any
  private $4: any

  public $2: any
  public $6: any
  public $7: any
  public $8: any
  public $9: any
  public $10: any

  getDragIcon() {
    return !this.props.item.isMovable
      ? null
      : jsx(FBOverlayElement, {
          horizontal: 'left',
          vertical: 'fit',
          children: jsx(CenteredContainer, {
            className: '_80ep',
            horizontal: !1,
            vertical: !0,
            children: jsx('div', {
              className: '_58zl',
            }),
          }),
        })
  }

  getDragHandle() {
    return jsx(FBOverlayElement, {
      horizontal: 'left',
      vertical: 'fit',
      children: jsx('div', {
        className: '_58zn',
        ref: this.$7,
      }),
    })
  }

  getRootClassName() {
    return (
      (this.props.item.isMovable ? '_58zo' : '') +
      (this.state.dragging ? ' _58zp' : '') +
      ' _58z_' +
      (this.props.item.isMovable ? '' : ' _58-6') +
      ' _58-8'
    )
  }

  $5(a: any) {
    var b = this.$1
    a && !b
      ? (this.$1 = new Draggable(this.$3)
          .setNamespace('AbstractDraggableList')
          .setUseAbsolute(!0)
          .setGrabHandler(this.$8)
          .setDragHandler(this.$9)
          .setDropHandler(this.$10)
          .setUseScroller(this.props.useScroller)
          .addHandle(this.$2))
      : !a && b && (b.active && this.$11(), b.destroy(), (this.$1 = null))
  }

  $11() {
    this.$1 && this.$1.killDrag(), this.$12(), this.props.onCancelDrag()
  }

  $12() {
    this.$1 && this.$1.resetPosition(),
      this.setState({
        dragging: !1,
        width: null,
      }),
      this.$4 && this.$4.remove(),
      delete this.$4
  }

  static defaultProps = {
    useScroller: !0,
  }

  constructor(props: any) {
    super(props)

    // @ts-ignore
    this.$6 = (a: any) => {
      this.$3 = a
    }

    // @ts-ignore
    this.$7 = (a: any) => {
      // @ts-ignore
      this.$2 = a
    }

    // @ts-ignore
    this.$8 = () => {
      if (this.state.dragging) return
      // @ts-ignore
      this.$4 = Event.listen(document, 'keydown', a => {
        a.keyCode === Keys.ESC && (this.$11(), a.preventDefault())
      })
      var a = DOMDimensions.getElementDimensions(this.$3)
      a = a.width
      this.setState({
        dragging: !0,
        width: a,
      })
      this.props.onGrab(this.props.item.id, this.$3)
    }

    // @ts-ignore
    this.$9 = () => {
      var a = this.$3.parentNode
      a = new Rect(a)
      var b = getViewportDimensions(),
        d = getScrollPosition(window),
        f: any = Math.max(b.width, l)
      f = new Rect(
        d.y,
        Math.min(f, a.r + m),
        b.height + d.y,
        Math.max(0, a.l - m),
      )
      this.$1 && this.$1.setBoundingBox(f)
      this.props.onDrag()
    }

    // @ts-ignore
    this.$10 = () => {
      this.$12(), this.props.onDrop()
    }

    this.state = {
      dragging: false,
      width: null,
    }
  }

  componentDidMount() {
    this.$5(this.props.item.isMovable)
  }

  componentWillUnmount() {
    this.$5(!1)
  }

  componentDidUpdate() {
    this.$5(this.props.item.isMovable)
  }

  render() {
    var a = this.props.item,
      b = null
    this.props.item.actionButton &&
      (b = jsx(FBOverlayElement, {
        horizontal: 'right',
        vertical: 'fit',
        children: this.props.item.actionButton,
      }))
    return jsxs(
      FBOverlayContainer,
      {
        // @ts-ignore
        ref: this.$6,
        className: joinClasses(this.getRootClassName(), this.props.className),
        role: this.props.role,
        style: {
          width: this.state.width,
        },
        children: [a.label, this.getDragIcon(), this.getDragHandle(), b],
      },
      a.id,
    )
  }
}
