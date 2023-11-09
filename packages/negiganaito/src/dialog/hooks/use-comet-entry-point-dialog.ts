import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometDialogLoadingState } from '../components'

const j = (onClose: any) => {
  return jsx(CometDialogLoadingState, {
    onClose,
  })
}

export function useCometEntryPointDialog(
  a: any,
  b: any,
  d: any,
  e: any,
  f?: any,
) {
  return c('useBaseEntryPointDialog')(a, b, d, (a = e) != null ? a : j, f)
}
