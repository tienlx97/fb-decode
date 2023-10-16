import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPopover } from './comet-popover'
import { CometPopoverLoadingStateContent } from './comet-popover-loading-state-content'

type CometPopoverLoadingStateProps = any

export function CometPopoverLoadingState({
  className,
  ...rest
}: CometPopoverLoadingStateProps) {
  return jsx(
    CometPopover,
    Object.assign(
      {
        label: `h._('__JHASH__6lD-XyRyuHe__JHASH__')`,
      },
      rest,
      {
        children: jsx(CometPopoverLoadingStateContent, {
          className,
        }),
      },
    ),
  )
}
