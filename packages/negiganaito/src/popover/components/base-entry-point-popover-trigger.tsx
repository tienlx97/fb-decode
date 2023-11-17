import { useCallback, useMemo, useRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BasePopoverTrigger } from './base-popover-trigger'
import { deepEquals } from '@negiganaito/utils/common/deepEquals'
import { BasePopoverTriggerProps } from './base-popover-trigger/base-popover-trigger'
import { BaseEntryPointPopoverContainer } from './base-entry-point-popover-container'

type BaseEntryPointPopoverTriggerProps = BasePopoverTriggerProps & {
  entryPointParams?: any
  otherProps?: any
  popoverEntryPoint?: any
}

export function BaseEntryPointPopoverTrigger({
  doNotCloseOnOutsideClick,
  entryPointParams,
  fallback,
  onVisibilityChange,
  otherProps,
  popoverEntryPoint, // root
  preloadTrigger,
  tracePolicy,
  ...rest
}: BaseEntryPointPopoverTriggerProps) {
  // var p = c('useCometRelayEntrypointContextualEnvironmentProvider')()
  // p = d('CometRelay').useEntryPointLoader(p, m)
  // var q = p[0],
  //   r = p[1]
  // p = p[2]

  var s = useRef(null),
    onHighIntentPreload = useCallback(() => {
      if (entryPointParams == null) return
      // if (q !== null && deepEquals(s.current, entryPointParams)) return
      s.current = entryPointParams
      // r(entryPointParams)
    }, [
      entryPointParams,
      // q, r
    ])

  const popoverProps = useMemo(() => {
    return {
      entryPointParams: entryPointParams,
      // entryPointReference: q,
      load: onHighIntentPreload,
      otherProps: otherProps,
    }
  }, [
    entryPointParams,
    // q,
    onHighIntentPreload,
    otherProps,
  ])
  const onVisibilityChangeCb = useCallback(
    (...val: any) => {
      onVisibilityChange && onVisibilityChange(val)
    },
    [onHighIntentPreload, onVisibilityChange],
  )
  return jsx(
    BasePopoverTrigger,
    Object.assign(
      {
        doNotCloseOnOutsideClick,
        fallback,
        interactionTracker: false,
        onHighIntentPreload: onHighIntentPreload,
        // onLayerDetached: p,
        onVisibilityChange: onVisibilityChangeCb,
        // popover: BaseEntryPointPopoverContainer,
        // popoverPreloadResource: popoverEntryPoint.root,
        // popoverProps: popoverProps,
        // preloadTrigger: preloadTrigger,

        popover: popoverEntryPoint.root,
        popoverPreloadResource: undefined,
        popoverProps: popoverProps,
        preloadTrigger: preloadTrigger,
      },
      rest,
    ),
  )
}
