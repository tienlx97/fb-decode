import React, { forwardRef } from 'react'
import CometIcon, { CometIconProps } from './comet-icon'

type TetraIconProps = CometIconProps

const TetraIcon = forwardRef<HTMLElement, TetraIconProps>((props, ref) => {
  return <CometIcon {...props} />
})
