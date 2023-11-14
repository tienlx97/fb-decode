import { useCometEntryPointDialog } from '@negiganaito/dialog'
import React, { useCallback, useRef } from 'react'

type CometEntryPointDialogTriggerProps = {
  children?: any
  dialogEntryPoint?: any
  fallback?: any
  onHide?: any
  onShow?: any
  otherProps?: any
  preloadParams?: any
  preloadTrigger?: any
  tracePolicy?: any
}

export function CometEntryPointDialogTrigger({
  children,
  dialogEntryPoint,
  fallback,
  onHide,
  onShow,
  otherProps,
  preloadParams,
  preloadTrigger,
  tracePolicy,
}: CometEntryPointDialogTriggerProps) {
  useRef(null)

  const [trigger, onHoverIn, onHoverOut, onPressIn] = useCometEntryPointDialog(
    dialogEntryPoint,
    preloadParams,
    preloadTrigger,
    fallback,
  )

  const onPress = useCallback(() => {
    trigger(otherProps, onHide, tracePolicy)
    !onShow ? undefined : onShow()
  }, [trigger, otherProps, onHide, tracePolicy, onShow])

  // onPress: any,
  // onHoverIn: any,
  // onHoverOut: any,
  // onPressIn: any,
  return children(onPress, onHoverIn, onHoverOut, onPressIn)
}
