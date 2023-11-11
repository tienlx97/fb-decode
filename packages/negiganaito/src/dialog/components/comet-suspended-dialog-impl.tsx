import { CometPlaceholder } from '@negiganaito/placeholder'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometSuspendedDialogImplProps = {
  dialog?: any
  dialogProps?: any
  fallback?: any
  onClose?: any
  onHide?: any
}

export function CometSuspendedDialogImpl({
  dialog,
  dialogProps,
  fallback,
  onClose,
  onHide,
}: CometSuspendedDialogImplProps) {
  return jsx(CometPlaceholder, {
    fallback: fallback(onClose),
    children: jsx(
      dialog,
      Object.assign({}, dialogProps, {
        onClose,
        onHide,
      }),
    ),
  })
}
