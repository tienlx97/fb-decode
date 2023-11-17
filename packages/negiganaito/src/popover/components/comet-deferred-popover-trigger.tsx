import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BasePopoverTrigger } from './base-popover-trigger'
import { CometPopoverLoadingState } from './comet-popover-loading-state'

type CometDeferredPopoverTriggerProps = {
  doNotCloseOnOutsideClick?: any
  fallback?: any
  popoverProps?: any
  popoverResource?: any
  preloadTrigger?: any
  tracePolicy?: any
  //
  position?: 'end' | 'start' | 'above' | 'below'
  align?: 'above' | 'middle' | 'start' | 'end'
  children?: any
  onVisibilityChange?: any
  popoverType?: string
}

export function CometDeferredPopoverTrigger({
  doNotCloseOnOutsideClick,
  fallback,
  popoverProps,
  popoverResource,
  preloadTrigger,
  tracePolicy,
  ...rest
}: CometDeferredPopoverTriggerProps) {
  //        h = c("useCometPopoverInteractionTracing")((h = h) != null ? h : c("tracePolicyFromResource")("comet.popover", f), "deferred", g);

  return jsx(
    BasePopoverTrigger,
    Object.assign(
      {
        doNotCloseOnOutsideClick,
        fallback:
          fallback ??
          jsx(CometPopoverLoadingState, {
            withArrow: true,
          }),

        interactionTracker: undefined,
        popover: popoverResource,
        popoverPreloadResource: undefined,
        popoverProps: Object.assign({}, popoverProps, {
          loadImmediately: true,
        }),
        preloadTrigger,
      },
      rest,
    ),
  )
}
