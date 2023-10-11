import React from 'react'
import CometKeyCommandWidget from './comet-key-command-widget'

export default function CometKeyCommandWrapper({ children, ...props }: any) {
  return (
    <CometKeyCommandWidget.Wrapper {...props}>
      {children}
    </CometKeyCommandWidget.Wrapper>
  )
}
