import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometDialogLoadingStateImpl } from './comet-dialog-loading-state-impl'
import { CometDialogHeader } from './comet-dialog-header'
import { CometDialogPage } from './comet-dialog-page'

type CometDialogPageLoadingStateProps = {
  onClose?: any
}

export function CometDialogPageLoadingState({
  onClose,
}: CometDialogPageLoadingStateProps) {
  return jsx(CometDialogPage, {
    footer: null,
    header: jsx(CometDialogHeader, {
      onClose,
    }),
    children: jsx(CometDialogLoadingStateImpl, {}),
  })
}
