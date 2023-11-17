import { joinClasses } from '@negiganaito/error/utils/join-classes'
import React, { Component } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

export class CenteredContainer extends Component<any, any> {
  static defaultProps = {
    fullHeight: !1,
    vertical: !1,
    horizontal: !0,
  }

  constructor() {
    super(arguments)
  }

  render() {
    const { fullHeight, horizontal, vertical, ...rest } = this.props

    const e = (vertical ? '_3bwv' : '') + (horizontal ? ' _3bww' : '')

    const d = React.Children.map(this.props.children, function (a: any) {
      return jsx('div', {
        className: '_3bwx',
        children: a,
      })
    })

    const b = joinClasses(this.props.className, fullHeight ? '_5bpf' : '')

    return jsx(
      'div',
      Object.assign({}, rest, {
        className: b,
        children: jsx('div', {
          className: e,
          children: jsx('div', {
            className: '_3bwy',
            children: d,
          }),
        }),
      }),
    )
  }
}
