import { useCallback, useContext } from 'react'
import { CometDialogContext } from '../context/comet-dialog-context'
import { CometSuspendedDialogImpl } from '../components'

export function useBaseLazyDialog(
  dialog: any,
  fallback: any,
  tracePolicy: any,
  e?: any,
) {
  const onOpen = useContext(CometDialogContext)

  const baseModalProps = !e ? void 0 : e.baseModalProps
  const openLazyDialog = useCallback(
    (dialogProps: any, h: any, replaceCurrentDialog?: any) => {
      // var j = c('lazyLoadComponent')(a)
      onOpen(
        CometSuspendedDialogImpl,
        {
          dialog, // j
          dialogProps: dialogProps,
          fallback,
        },
        {
          loadType: 'lazy',
          tracePolicy: tracePolicy,
        },
        h,
        {
          baseModalProps,
          replaceCurrentDialog,
        },
      )
    },
    [onOpen, baseModalProps, dialog, fallback, tracePolicy],
  )
  const h = useCallback(() => {
    dialog.preload()
  }, [dialog])

  return [openLazyDialog, h]
}
