import { joinClasses } from '@negiganaito/error/utils/join-classes'
import React, { PureComponent } from 'react'

const classes = {
  horizontal: {
    left: '_32rg',
    right: '_32rh',
    fit: '_32rg _32rh',
    center: '_1cy5',
    leftOfChild: '_9ppc',
  },
  vertical: {
    top: '_32ri',
    bottom: '_32rj',
    fit: '_32ri _32rj',
    middle: '_1cy6',
  },
}

type FBOverlayElementProps = {
  horizontal: 'left' | 'right' | 'fit' | 'center' | 'leftOfChild'
  vertical: 'top' | 'bottom' | 'fit' | 'middle'
  children: any
}

export class FBOverlayElement extends PureComponent<
  FBOverlayElementProps,
  any
> {
  constructor() {
    // @ts-ignore
    super(arguments)
  }

  render() {
    const { horizontal = 'fit', vertical = 'fit' } = this.props

    const onlyChild = React.Children.only(this.props.children)
    const clazz = joinClasses(
      onlyChild.props.className,
      '_32rk',
      classes.horizontal[horizontal],
      classes.vertical[vertical],
    )
    return React.cloneElement(onlyChild, {
      className: clazz,
    })
  }
}
