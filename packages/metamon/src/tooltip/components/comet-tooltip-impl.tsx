import { CometPlaceholder } from '@metamon/placeholder'
import React, { ReactNode } from 'react'
import CometTooltipDeferredImpl from './comet-tooltip-deferred-impl'

// TODO: find props
type CometTooltipImplProps = {
  align?: 'middle' | 'end' | 'start'
  position?: 'end' | 'start' | 'above' | 'below'
  contentKey?: string
  contextRef?: any
  id?: string
  isVisible: boolean
  tooltip?: any
  // never seen
  headline?: any
}

export function CometTooltipImpl(props: CometTooltipImplProps) {
  return (
    <CometPlaceholder fallback={null}>
      <CometTooltipDeferredImpl {...props} />
    </CometPlaceholder>
  )
}
