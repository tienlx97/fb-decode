import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import {
  CometSVGIconColor,
  CometSVGIconSize,
  CometSvgIcon,
} from '@negiganaito/image'

type Props = {
  size: CometSVGIconSize
  color: CometSVGIconColor
}

export const CaretDownSvg = ({ className, ...props }: any) => {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.102 8c-1.074 0-1.648 1.265-.94 2.073l5.521 6.31a1.75 1.75 0 0 0 2.634 0l5.522-6.31c.707-.808.133-2.073-.94-2.073H6.101Z"
      />
    </svg>
  )
}

export default function CaretDownFilled({ color, size }: Props) {
  return jsx(CometSvgIcon, { color, size, component: CaretDownSvg })
}
