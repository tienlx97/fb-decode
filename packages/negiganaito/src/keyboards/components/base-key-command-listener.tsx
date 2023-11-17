import { recoverableViolation } from '@negiganaito/error'
// eslint-disable-next-line camelcase
import { useUnsafeRef_DEPRECATED } from '@negiganaito/hooks'
import { useCallback, useContext, useMemo, useRef } from 'react'
import { flushSync } from 'react-dom'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometKeyCommandUtilsContext } from '../context'
import { CometGlobalKeyCommandWidget } from './comet-global-key-command-widget'
import { getActiveCommands } from './get-active-commands'
import { useGetComposingState } from './use-get-composing-state'
import { getKeyCommand } from './get-key-command'
import { applyKeyCommand } from './apply-key-command'
import { useGlobalEventListener } from '../hooks/use-global-event-listener'

function p(a: any, b: any) {
  let c: any
  return function () {
    window.clearTimeout(c)
    c = window.setTimeout(a, b)
  }
}

const q = 100

type BaseKeyCommandListenerProps = {
  children?: any
  observersEnabled?: boolean
  className?: string
}

export function BaseKeyCommandListener({
  children: b,
  className,
  observersEnabled: e,
}: BaseKeyCommandListenerProps) {
  // let b = a.children,
  //   e = a.observersEnabled
  // a = a.xstyle

  const f = useRef<any>(null),
    g = useRef<any>(null),
    j = useRef<any>(new Set()),
    r = useContext(CometGlobalKeyCommandWidget.Context)
  let s: any = useCallback(
      (a: any) => {
        if (!e)
          return {
            getActiveCommands: function () {
              recoverableViolation(
                'Key Command observers are not supported in this context',
                'comet_ax',
              )
              return null
            },
            remove: function () {},
          }
        let b = j.current
        b.add(a)
        return {
          getActiveCommands: function () {
            return getActiveCommands(g.current, f.current, r)
          },
          remove: function () {
            b['delete'](a)
          },
        }
      },
      [r, e],
    ),
    t = useCallback(
      (a: any) => {
        e &&
          j.current.forEach((b: any) => {
            return b({
              key: a,
              type: 'triggered',
            })
          })
      },
      [e],
    ),
    u = useMemo(
      function () {
        return p(function () {
          e &&
            j.current.forEach((a: any) => {
              return a({
                type: 'update',
              })
            })
        }, q)
      },
      [e],
    ),
    v = useCallback(
      (a: any) => {
        let b = f.current !== a
        f.current = a
        b && u()
      },
      [u],
    ),
    w = useCallback(
      (a: any) => {
        let b = g.current !== a
        g.current = a
        b && u()
      },
      [u],
    )

  s = useUnsafeRef_DEPRECATED({
    addObserver: s,
    notifyCommandUpdate: u,
    setActiveLayer: v,
    setActiveWrapper: w,
  })

  v = useCallback(
    function () {
      let a = g.current !== null
      g.current = null
      a && u()
    },
    [u],
  )
  let x = useGetComposingState()
  w = useCallback(
    (a: any) => {
      if (x(a)) return
      flushSync(function () {
        let b: any = applyKeyCommand(a, g.current, f.current, r)
        if (b) {
          b = getKeyCommand(a)
          t(b)
        }
      })
    },
    [x, r, t],
  )
  useGlobalEventListener('keydown', w)
  useGlobalEventListener('keyup', w)
  return jsx(CometKeyCommandUtilsContext.Provider, {
    value: s.current,
    children: jsx('div', {
      className,
      onBlurCapture: v,
      children: b,
    }),
  })
}
