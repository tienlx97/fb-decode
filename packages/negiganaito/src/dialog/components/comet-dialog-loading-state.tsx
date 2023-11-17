import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometDialogLoadingStateContext } from '../context/comet-dialog-loading-state-context'
import CometDialog from './comet-dialog'
import { CometDialogLoadingStateImpl } from './comet-dialog-loading-state-impl'
import { CometDialogLoadingStateHeader } from './comet-dialog-loading-state-header'

type CometDialogLoadingStateProps = {
  id?: string
  onClose?: any
}

export function CometDialogLoadingState({
  id,
  onClose,
}: CometDialogLoadingStateProps) {
  return jsx(CometDialogLoadingStateContext.Provider, {
    value: !0,
    children: jsx(CometDialog, {
      footer: null,
      header: jsx(CometDialogLoadingStateHeader, {
        id,
        onClose,
      }),
      label: 'Loading...',
      onClose,
      children: jsx(CometDialogLoadingStateImpl, {}),
    }),
  })
}
