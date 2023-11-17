/* eslint-disable camelcase */
import React, { useMemo } from 'react'
import { CometToasterView_DO_NOT_USEProps } from './comet-toaster-view_DO_NOT_USE'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometErrorBoundary, recoverableViolation } from '@negiganaito/error'
import { CometLazyToasterView_DO_NOT_USE } from './comet-lazy-toaster-view_DO_NOT_USE'

function onError(a: any) {
  recoverableViolation('The toaster is broken', 'CometAppShell', {
    error: a,
  })
}

const set = new Set(['CometToastNotification'])

export const CometToasterRoot = ({
  align,
  maxWidth,
}: CometToasterView_DO_NOT_USEProps) => {
  // const e = useHideNotificationsToasts()
  return useMemo(
    () =>
      jsx(CometErrorBoundary, {
        onError: onError,
        children: jsx(CometLazyToasterView_DO_NOT_USE, {
          align,
          filterToasts: null, // e === !0 ? set : null,
          maxWidth,
        }),
      }),
    [align, maxWidth],
  )
}
