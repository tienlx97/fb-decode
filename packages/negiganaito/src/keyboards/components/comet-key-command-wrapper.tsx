import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import CometKeyCommandWidget from './comet-key-command-widget'

export default function CometKeyCommandWrapper({ children, ...props }: any) {
  return jsx(
    CometKeyCommandWidget.Wrapper,
    Object.assign({}, props, { children }),
  )
}
