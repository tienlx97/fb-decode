import React, { ReactNode } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseTooltip } from './base-tooltip'
import { CometTooltipImpl } from './comet-tooltip-impl'

type CometTooltipProps = {
  align?: 'above' | 'middle' | 'start' | 'end'
  delayMs?: any
  children?: ReactNode
  position?: 'end' | 'start' | 'above' | 'below'
  tooltip?: any

  // never seen
  headline?: any
}

export default function CometTooltip({ delayMs, ...rest }: CometTooltipProps) {
  return jsx(
    BaseTooltip,
    Object.assign({}, rest, {
      delayTooltipMs: delayMs,
      tooltipImpl: CometTooltipImpl,
    }),
  )
}
