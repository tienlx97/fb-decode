import React, { Component } from 'react'

export class FBOverlayBase extends Component<any, any> {
  constructor() {
    super(arguments)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
