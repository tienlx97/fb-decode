import { CometDialogLoadingState } from '../components'
import { useBaseLazyDialog } from './use-base-lazy-dialog'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const defaultFallBack = (onClose: any) => {
  return jsx(CometDialogLoadingState, {
    onClose,
  })
}

export function useCometLazyDialog(comp: any) {
  return useBaseLazyDialog(comp, comp ?? defaultFallBack, 'tracePolicy')
}
