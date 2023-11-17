import React from 'react'
import PropTypes from 'prop-types'
import { BinarySearch } from './binary-search'
import { Rect } from '@negiganaito/vector'
import { AbstractDraggableItem } from './abstract-draggable-item'
import { DOMDimensions } from './dom-dimensions'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { mergeClasses } from '@griffel/react'

export class AbstractDraggableList extends React.PureComponent<any, any> {
  private $6: any

  // @ts-ignore
  private sourceIndex: any
  private sourceElem: any

  private $5 = (a: any) => {
    this.$6 = a
  }

  private $7 = (a: any) => {
    var c = this.$6,
      e = c.childNodes
    c = e.length - 1 - (this.state.targetIndex !== null ? 1 : 0)
    a = BinarySearch.leastUpperBound(
      (a: any) => {
        this.sourceIndex <= a && (a += 1)
        this.state.targetIndex !== null &&
          this.state.targetIndex <= a &&
          (a += 1)
        a = new Rect(e[a])
        return (a.t + a.b) / 2
      },
      a,
      0,
      c,
      (a: any, b: any) => {
        return a - b
      },
    )
    return this.sourceIndex <= a ? a + 1 : a
  }

  private $4 = (a: any, c: any) => {
    this.sourceIndex = this.props.itemIDs.indexOf(a)
    this.sourceElem = c
    a = DOMDimensions.getElementDimensions(this.sourceElem)
    c = a.height
    this.setState({
      sourceHeight: c,
    })
    this.$2()
  }

  private $2 = () => {
    var a: any = new Rect(this.sourceElem)
    a = (a.t + a.b) / 2
    a = this.$7(a)
    while (
      a !== this.props.itemIDs.length &&
      (!this.props.itemsByID[this.props.itemIDs[a]].isMovable ||
        a === this.sourceIndex)
    )
      a += 1
    this.setState({
      targetIndex: a,
    })
  }

  private $3 = () => {
    var a = this.props.itemIDs[this.sourceIndex],
      b =
        this.state.targetIndex !== this.props.itemIDs.length
          ? this.props.itemIDs[this.state.targetIndex]
          : null
    this.endDrag()
    this.props.onReorder(a, b)
  }

  private $1 = () => {
    this.endDrag()
  }

  private endDrag = () => {
    delete this.sourceIndex,
      delete this.sourceElem,
      this.setState({
        sourceHeight: null,
        targetIndex: null,
      })
  }

  constructor(props: any) {
    super(props)

    this.state = {
      targetIndex: null,
      sourceHeight: null,
    }
  }

  render() {
    let a = this
    const {
      className,
      itemIDs,
      itemsByID,
      itemsRenderer,
      onRemove,
      onReorder,
      onSettingsClick,
      placeholderProps,
      placeholderRenderer,
      ...rest
    } = this.props

    const n = itemIDs.map(function (b: any) {
      return jsx(
        itemsRenderer,
        {
          className,
          item: itemsByID[b],
          onCancelDrag: a.$1,
          onDrag: a.$2,
          onDrop: a.$3,
          onGrab: a.$4,
          onRemove: onRemove,
          onSettingsClick: onSettingsClick,
        },
        b,
      )
    })

    if (this.state.targetIndex !== null) {
      let e = itemIDs[this.sourceIndex]
      e = itemsByID[e]
      let m = placeholderRenderer
        ? jsx(
            placeholderRenderer,
            Object.assign(
              {
                height: this.state.sourceHeight,
              },
              placeholderProps || {},
            ),
            '_placeholder',
          )
        : jsx(
            'li',
            {
              className: e.placeholderClassName || '_58-9',
              style: {
                height: this.state.sourceHeight,
              },
            },
            '_placeholder',
          )
      n.splice(this.state.targetIndex, 0, m)
    }

    return jsx(
      'ul',
      Object.assign({}, rest, {
        ref: this.$5,
        className: mergeClasses(className, '_58-a'),
        children: n,
      }),
    )
  }
}

// @ts-ignore
AbstractDraggableList.propTypes = {
  className: PropTypes.string,
  itemIDs: PropTypes.array.isRequired,
  itemsByID: PropTypes.object.isRequired,
  itemsRenderer: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  onRemove: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func,
  placeholderRenderer: PropTypes.func,
  placeholderProps: PropTypes.object,
}

// @ts-ignore
AbstractDraggableList.defaultProps = {
  itemsRenderer: AbstractDraggableItem,
}
