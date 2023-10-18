import { useCallback, useMemo, useRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BasePopoverTrigger } from './base-popover-trigger'
import { CometPopoverLoadingState } from './comet-popover-loading-state'
import { deepEquals } from '@negiganaito/utils/common/deepEquals'
import { BasePopoverTriggerProps } from './base-popover-trigger/base-popover-trigger'

type CometEntryPointPopoverTriggerProps = BasePopoverTriggerProps & {
  entryPointParams?: any
  otherProps?: any
  popoverEntryPoint?: any
}

export function CometEntryPointPopoverTrigger({
  doNotCloseOnOutsideClick,
  entryPointParams,
  fallback,
  onVisibilityChange,
  otherProps,
  popoverEntryPoint,
  preloadTrigger,
  tracePolicy,
  ...rest
}: CometEntryPointPopoverTriggerProps) {
  // var p = c('useCometRelayEntrypointContextualEnvironmentProvider')()
  // p = d('CometRelay').useEntryPointLoader(p, m)
  // var q = p[0],
  //   r = p[1]
  // p = p[2]

  var s = useRef(null),
    onHighIntentPreload = useCallback(
      function () {
        if (entryPointParams == null) return
        // if (q !== null && deepEquals(s.current, entryPointParams)) return
        s.current = entryPointParams
        // r(entryPointParams)
      },
      [
        entryPointParams,
        // q, r
      ],
    )

  const popoverProps = useMemo(
    function () {
      return {
        entryPointParams: entryPointParams,
        // entryPointReference: q,
        load: onHighIntentPreload,
        otherProps: otherProps,
      }
    },
    [
      entryPointParams,
      // q,
      onHighIntentPreload,
      otherProps,
    ],
  )
  const onVisibilityChangeCb = useCallback(
    function (...val: any) {
      onVisibilityChange && onVisibilityChange(val)
    },
    [onHighIntentPreload, onVisibilityChange],
  )
  return jsx(
    BasePopoverTrigger,
    Object.assign(
      {
        doNotCloseOnOutsideClick: doNotCloseOnOutsideClick,
        fallback:
          fallback ??
          jsx(CometPopoverLoadingState, {
            withArrow: !0,
          }),
        interactionTracker: false,
        onHighIntentPreload: onHighIntentPreload,
        // onLayerDetached: p,
        onVisibilityChange: onVisibilityChangeCb,
        popover: `c('CometEntryPointPopoverContainer.react')`,
        popoverPreloadResource: popoverEntryPoint.root,
        popoverProps: popoverProps,
        preloadTrigger: preloadTrigger,
      },
      rest,
    ),
  )
}
