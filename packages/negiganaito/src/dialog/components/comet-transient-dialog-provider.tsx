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
  // var b = a.dialogConfig,
  //   e = a.dialogConfigsRef,
  //   f = a.displayBaseModal_DO_NOT_USE,
  //   g = a.removeDialogConfig,
  const i = useRef<any>(null)
  useEffect(function () {
    return function () {
      i.current != null && window.cancelAnimationFrame(i.current)
    }
  }, [])
  const a = dialogConfig.dialog

  var o = dialogConfig.dialogProps,
    [q, p] = useState(!1)

  const r = useCallback(
      function () {
        for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++)
          d[f] = arguments[f]
        i.current != null && window.cancelAnimationFrame(i.current)
        var h = dialogConfigsRef.current.indexOf(dialogConfig)
        h < 0 &&
          FBLogger('comet_ui')
            .blameToPreviousFrame()
            .mustfix(
              'Attempting to close a dialog that does not exist anymore.',
            )
        i.current = window.requestAnimationFrame(function () {
          removeDialogConfig(dialogConfig, d), (i.current = null)
        })
      },
      [dialogConfig, dialogConfigsRef, removeDialogConfig],
    ),
    s = useCallback(
      function () {
        r(),
          CometPushToast.cometPushErrorToast({
            message:
              "Something isn't working. This may be because of a technical error we're working to fix.",
            truncateText: !1,
          })
      },
      [r],
    )
  const child = jsx(
    a,
    Object.assign({}, o, {
      onClose: r,
      onHide: p,
    }),
  )
  return jsx(CometErrorBoundary, {
    onError: s,
    children:
      displayBaseModal_DO_NOT_USE === !0
        ? jsx(BaseCometModal, {
            hidden: q,
            interactionDesc: dialogConfig.interactionDesc,
            interactionUUID: dialogConfig.interactionUUID,
            isOverlayTransparent:
              (o = dialogConfig.baseModalProps) == null
                ? void 0
                : o.isOverlayTransparent,
            stackingBehavior: 'above-nav',
            children: child,
          })
        : child,
  })
}

export function CometTransientDialogProvider({
  displayBaseModal_DO_NOT_USE = true,
  ...rest
}: CometTransientDialogProviderProps) {
  const [g, h] = useState<any>([])

  const a = useIsCalledDuringRender()

  const cometDialogContextValue = useCallback(
    function (
      dialogComp: any,
      dialogProps: any,
      e: any,
      onClose: any,
      option?: any,
    ) {
      // var j = e.loadType,
      //   k = e.preloadTrigger,
      //   l = e.tracePolicy
      var m = 'Dialog'
      h(function (b: any) {
        return b.concat({
          baseModalProps: !option ? void 0 : option.baseModalProps,
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

  const p = useRef(g)
  useEffect(
    function () {
      p.current = g
    },
    [g],
  )

  const q = useIsMountedRef()

  const r = useCallback(
    function (a: any, c: any) {
      if (!q.current) return
      h(function (b: any) {
        // @ts-ignore
        const c = b.indexOf(a)
        return c < 0 ? b : b.slice(0, c)
      })
      a.onClose && a.onClose.apply(a, c)
      // b('cr:945') && b('cr:945').logClose(a.tracePolicy, a.interactionUUID)
    },
    [q],
  )

  return jsxs(CometDialogContext.Provider, {
    value: cometDialogContextValue,
    children: [
      rest.children,
      g.map(function (a: any, b: any) {
        return jsx(
          o,
          {
            dialogConfig: a,
            dialogConfigsRef: p,
            displayBaseModal_DO_NOT_USE,
            removeDialogConfig: r,
          },
          b,
        )
      }),
    ],
  })
}
