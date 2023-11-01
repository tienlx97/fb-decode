import { mergeClasses } from '@griffel/react'
import React, { Component } from 'react'

export class List extends Component<any> {
  static defaultProps = {
    border: 'medium',
    spacing: 'medium',
    direction: 'vertical',
    valign: 'top',
    edgepadding: false,
  }

  render() {
    const {
      className,
      border,
      direction,
      spacing,
      valign,
      edgepadding,
      ...otherProps
    } = this.props

    let alignment = direction === 'vertical' ? '_4kg' : ''
    alignment += direction === 'horizontal' ? ' _4ki' : ''
    alignment += valign === 'top' ? ' _509-' : ''
    alignment += valign === 'middle' ? ' _509_' : ''
    alignment += valign === 'bottom' ? ' _50a0' : ''

    let borderStyle
    if (spacing !== 'none' || border !== 'none') {
      borderStyle =
        (border === 'none' ? '_6-i' : '') +
        (border === 'light' ? ' _4ks' : '') +
        (border === 'medium' ? ' _4kt' : '') +
        (border === 'dark' ? ' _4ku' : '')
    }

    let spacingStyle
    if (spacing !== 'none') {
      spacingStyle =
        (edgepadding ? '' : '_6-h') +
        (spacing === 'small' ? ' _704' : '') +
        (spacing === 'medium' ? ' _6-j' : '') +
        (spacing === 'large' ? ' _703' : '')
    }

    const classNames = mergeClasses(
      className,
      'uiList',
      alignment,
      borderStyle,
      spacingStyle,
    )

    return <ul className={classNames} {...otherProps} />
  }
}

export default List
