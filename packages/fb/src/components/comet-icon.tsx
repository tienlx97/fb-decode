import React from 'react'
import {
  CometSVGIconColor,
  CometSVGIconSize,
  CometSvgIcon,
} from './comet-svg-icon'

type CometIconProps = {
  color: CometSVGIconColor
  icon: any
  size: CometSVGIconSize
}

export default function CometIcon({ color, icon, size }: CometIconProps) {
  return (
    <CometSvgIcon
      color={color}
      component={icon.component ?? icon}
      size={size}
    />
  )
}
