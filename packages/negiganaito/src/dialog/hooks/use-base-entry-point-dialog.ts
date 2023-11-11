import { useCallback, useContext } from 'react'
import { CometDialogContext } from '../context/comet-dialog-context'
import { useCometEntryPointPrerendererWithQueryTimeout } from './use-comet-entry-point-prerenderer-with-query-timeout'
import { CometSuspendedDialogImpl } from '../components/comet-suspended-dialog-impl'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

function l(a: any) {
  var b = a.onClose,
    c = a.onHide,
    e = a.otherProps
  a = a.preloadedEntryPoint
  e = Object.assign({}, e, {
    onClose: b,
    onHide: c,
  })
  // return i.jsx(d('CometRelay').EntryPointContainer, {
  //   entryPointReference: a,
  //   props: e,
  // })

  return jsx(a, e)
}

export function useBaseEntryPointDialog(
  entryPoint: any, // entryPoint
  preloadParams: any,
  preloadTrigger: any, // button
  fallback: any,
  f?: any,
) {
  const g = useContext(CometDialogContext)
  // const h =

  const i = !f ? void 0 : f.baseModalProps

  let b = useCometEntryPointPrerendererWithQueryTimeout(
    entryPoint,
    preloadParams,
    preloadTrigger,
    {
      // eslint-disable-next-line camelcase
      queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:
        f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    },
  )

  const m = b[0]
  f = b[1]
  const n = b[2],
    o = b[3]
  b = b[4]

  const h = l

  const p = useCallback(
    (b: any, f: any, j: any) => {
      m((f: any, k: any) => {
        g(
          CometSuspendedDialogImpl,
          {
            dialog: h,
            dialogProps: {
              otherProps: b,
              preloadedEntryPoint: f,
            },
            fallback: fallback,
          },
          {
            loadType: 'entrypoint',
            preloadTrigger: preloadTrigger,
            // tracePolicy:
            //   (f = j) != null
            //     ? f
            //     : c('tracePolicyFromResource')('comet.dialog', a.root),
          },
          k,
          {
            baseModalProps: i,
          },
        )
      }, f)
    },
    [g, i, h, entryPoint.root, fallback, preloadTrigger, m],
  )
  return [p, f, n, o, b]
}
