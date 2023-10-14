import React, { SVGProps } from 'react'

export default function BasePopoverRightEdgeArrow({
  children,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg height={21} viewBox="0 0 12 21" width={12} {...props}>
      {children && <defs>{children}</defs>}
      <path
        d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12Z"
        transform="rotate(-90 10.498 10.488)"
      />
    </svg>
  )
}

BasePopoverRightEdgeArrow._isSVG = true
