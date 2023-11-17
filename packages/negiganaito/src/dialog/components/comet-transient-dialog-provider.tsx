/* eslint-disable camelcase */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useIsCalledDuringRender } from '../hooks/use-is-called-during-render'
import { useIsMountedRef } from '../hooks/use-is-mounted-ref'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { CometDialogContext } from '../context/comet-dialog-context'
import { CometErrorBoundary, FBLogger } from '@negiganaito/error'
import { CometPushToast } from '@negiganaito/toaster/components/comet-push-toast'
import { BaseCometModal } from './base-comet-modal'

type CometTransientDialogProviderProps = {
  displayBaseModal_DO_NOT_USE?: any
  children?: any
}

type OProps = {
  dialogConfig?: any
  dialogConfigsRef?: any
  displayBaseModal_DO_NOT_USE?: any
  removeDialogConfig?: any
}

function o({
  dialogConfig,
  dialogConfigsRef,
  displayBaseModal_DO_NOT_USE,
  removeDialogConfig,
}: OProps) {
  // let b = a.dialogConfig,
  //   e = a.dialogConfigsRef,
  //   f = a.displayBaseModal_DO_NOT_USE,
  //   g = a.removeDialogConfig,
  const i = useRef<any>(null)
  useEffect(() => {
    return function () {
      i.current != null && window.cancelAnimationFrame(i.current)
    }
  }, [])
  // const a = dialogConfig.dialog
  // let o = dialogConfig.dialogProps

  const [isHidden, setHidden] = useState(!1)

  const handleDialogClose = useCallback(() => {
    for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++)
      d[f] = arguments[f]
    i.current != null && window.cancelAnimationFrame(i.current)
    let h = dialogConfigsRef.current.indexOf(dialogConfig)
    h < 0 &&
      FBLogger('comet_ui')
        .blameToPreviousFrame()
        .mustfix('Attempting to close a dialog that does not exist anymore.')
    i.current = window.requestAnimationFrame(function () {
      removeDialogConfig(dialogConfig, d), (i.current = null)
    })
  }, [dialogConfig, dialogConfigsRef, removeDialogConfig])

  const onErrorToast = useCallback(() => {
    handleDialogClose()
    CometPushToast.cometPushErrorToast({
      message:
        "Something isn't working. This may be because of a technical error we're working to fix.",
      truncateText: false,
    })
  }, [handleDialogClose])

  const _children = jsx(
    dialogConfig.dialog,
    Object.assign({}, dialogConfig.dialogProps, {
      onClose: handleDialogClose,
      onHide: setHidden,
    }),
  )

  return jsx(CometErrorBoundary, {
    onError: onErrorToast,
    children: displayBaseModal_DO_NOT_USE
      ? jsx(BaseCometModal, {
          hidden: isHidden,
          interactionDesc: dialogConfig.interactionDesc,
          interactionUUID: dialogConfig.interactionUUID,
          isOverlayTransparent: !dialogConfig.baseModalProps
            ? undefined
            : dialogConfig.baseModalProps.isOverlayTransparent,
          stackingBehavior: 'above-nav',
          children: _children,
        })
      : _children,
  })
}

export function CometTransientDialogProvider({
  displayBaseModal_DO_NOT_USE = true,
  ...rest
}: CometTransientDialogProviderProps) {
  const [dialogArr, setDialogArr] = useState<any>([])

  const a = useIsCalledDuringRender()

  const cometDialogContextValue = useCallback(
    (dialogComp: any, dialogProps: any, e: any, onClose: any, option?: any) => {
      // let j = e.loadType,
      //   k = e.preloadTrigger,
      //   l = e.tracePolicy
      let m = 'Dialog'
      setDialogArr((b: any) => {
        return b.concat({
          baseModalProps: !option ? undefined : option.baseModalProps,
          dialog: dialogComp,
          dialogProps: dialogProps,
          interactionDesc: m,
          onClose: onClose,
          // tracePolicy: l,
        })
      })
    },
    [a],
  )

  const dialogConfigsRef = useRef(dialogArr)

  useEffect(() => {
    dialogConfigsRef.current = dialogArr
  }, [dialogArr])

  const mountedRef = useIsMountedRef()

  const removeDialogConfigCB = useCallback(
    (a: any, c: any) => {
      if (!mountedRef.current) {
        return
      }
      setDialogArr((b: any) => {
        // @ts-ignore
        const c = b.indexOf(a)
        return c < 0 ? b : b.slice(0, c)
      })
      a.onClose && a.onClose.apply(a, c)
      // b('cr:945') && b('cr:945').logClose(a.tracePolicy, a.interactionUUID)
    },
    [mountedRef],
  )

  return jsxs(CometDialogContext.Provider, {
    value: cometDialogContextValue,
    children: [
      rest.children,
      dialogArr.map((dialogItem: any, index: any) => {
        return jsx(
          o,
          {
            dialogConfig: dialogItem,
            dialogConfigsRef,
            displayBaseModal_DO_NOT_USE,
            removeDialogConfig: removeDialogConfigCB,
          },
          index,
        )
      }),
    ],
  })
}
