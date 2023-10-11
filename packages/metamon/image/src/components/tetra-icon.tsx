import React, { forwardRef } from 'react'
import CometIcon, { CometIconProps } from './comet-icon/comet-icon'

type TetraIconProps = CometIconProps

const TetraIcon = forwardRef<HTMLElement, TetraIconProps>((props, ref) => {
  return <CometIcon {...props} ref={ref} />
})

export default TetraIcon
