import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useCometTheme } from '@negiganaito/hooks'
import { CometProgressRingIndeterminate } from '@negiganaito/popover'
import { TetraTextPairing } from '@negiganaito/text'

import { BaseTooltipImpl } from './base-tooltip-impl'

type CometTooltipDeferredImplProps = {
  tooltipTheme?: string
  align?: 'above' | 'middle' | 'start' | 'end'
  position?: 'end' | 'start' | 'above' | 'below'
  contentKey?: string
  contextRef?: any
  id?: string
  isVisible: boolean
  tooltip?: any

  headline?: any
}

export default function CometTooltipDeferredImpl({
  headline,
  tooltip,
  tooltipTheme = 'invert',
  ...rest
}: CometTooltipDeferredImplProps) {
  const [Wrapper, themeClassName] = useCometTheme(tooltipTheme)

  const loadingState = jsx(CometProgressRingIndeterminate, {
    color: 'dark',
    size: 20,
  })

  const tooltipNormalize = tooltip
    ? jsx(TetraTextPairing, {
        body: tooltip,
        bodyColor: 'primary',
        headline,
        headlineColor: 'primary',
        level: 4,
      })
    : null

  return jsx(Wrapper, {
    children: jsx(
      BaseTooltipImpl,
      Object.assign({}, rest, {
        loadingState: loadingState,
        tooltip: tooltipNormalize,
        className: themeClassName,
      }),
    ),
  })
}
