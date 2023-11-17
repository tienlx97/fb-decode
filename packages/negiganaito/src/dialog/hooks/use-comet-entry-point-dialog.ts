import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometDialogLoadingState } from '../components'
import { useBaseEntryPointDialog } from './use-base-entry-point-dialog'

const defaultFallback = (onClose: any) => {
  return jsx(CometDialogLoadingState, {
    onClose,
  })
}

export function useCometEntryPointDialog(
  entryPoint: any,
  preloadParams: any,
  preloadTrigger: any, // button , ...
  fallback?: any, // loading state
  f?: any,
) {
  return useBaseEntryPointDialog(
    entryPoint,
    preloadParams,
    preloadTrigger,
    fallback ?? defaultFallback,
    f,
    //  (a = e) != null ? a : j, f
  )
}
