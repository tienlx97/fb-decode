import { useCallback, useContext } from 'react'
import { CometDialogContext } from '../context/comet-dialog-context'
import { useCometEntryPointPrerendererWithQueryTimeout } from './use-comet-entry-point-prerenderer-with-query-timeout'

function l(a: any) {
  var b = a.onClose,
    c = a.onHide,
    e = a.otherProps
  a = a.preloadedEntryPoint
  e = Object.assign({}, e, {
    onClose: b,
    onHide: c,
  })
  return i.jsx(d('CometRelay').EntryPointContainer, {
    entryPointReference: a,
    props: e,
  })
}

export function useBaseEntryPointDialog(
  a: any,
  b: any,
  d: any,
  e: any,
  f: any,
) {
  const g = useContext(CometDialogContext)
  // const h =

  const i = !f ? void 0 : f.baseModalProps

  b = useCometEntryPointPrerendererWithQueryTimeout(a, b, d, {
    // eslint-disable-next-line camelcase
    queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:
      f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  })

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
          c('CometSuspendedDialogImpl.react'),
          {
            dialog: h,
            dialogProps: {
              otherProps: b,
              preloadedEntryPoint: f,
            },
            fallback: e,
          },
          {
            loadType: 'entrypoint',
            preloadTrigger: d,
            tracePolicy:
              (f = j) != null
                ? f
                : c('tracePolicyFromResource')('comet.dialog', a.root),
          },
          k,
          {
            baseModalProps: i,
          },
        )
      }, f)
    },
    [g, i, h, a.root, e, d, m],
  )
  return [p, f, n, o, b]
}
