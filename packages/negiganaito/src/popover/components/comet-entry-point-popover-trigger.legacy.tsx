import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPopoverLoadingState } from './comet-popover-loading-state'
import { BaseEntryPointPopoverTrigger } from './base-entry-point-popover-trigger'

type CometEntryPointPopoverTriggerProps = any

export function CometEntryPointPopoverTrigger({
  fallback,
  ...rest
}: CometEntryPointPopoverTriggerProps) {
  return jsx(
    BaseEntryPointPopoverTrigger,
    Object.assign(
      {
        fallback:
          fallback ??
          jsx(CometPopoverLoadingState, {
            withArrow: true,
          }),
      },
      rest,
    ),
  )
}
