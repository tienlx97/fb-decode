import { CometMouseActivity } from '@negiganaito/utils/common/comet-mouse-activity'
import JSScheduler from '@negiganaito/utils/common/jss-scheduler'
import { useCallback, useEffect, useRef } from 'react'

function isMousePointerType(a: any) {
  return a.pointerType === 'mouse'
}
function conditionallyInvokeOrPreload(a: any) {
  a && (typeof a === 'function' ? a() : a.preload())
}

const m = 50

export function useCometPreloaderImpl(a: any, b: any, d: any, e?: any) {
  const f = useRef<any>(null)
  const g = useRef<any>(null)
  const n = useRef<any>(null)
  const o = function (a: any) {
    // c('ifRequired')(
    //   'setTimeoutCometInternals',
    //   function (b) {
    //     f.current = b.setTimeoutAtPriority_DO_NOT_USE(
    //       c('JSScheduler').priorities.unstable_UserBlocking,
    //       a,
    //       m,
    //     )
    //   },
    //   function () {
    //     f.current = c('setTimeout')(a, m)
    //   },
    // )
    f.current = b.setTimeoutAtPriority_DO_NOT_USE(
      JSScheduler.priorities.unstable_UserBlocking,
      a,
      m,
    )
  }
  const p = useCallback(
    (e: any, f?: any, g?: any) => {
      if (
        a === 'tooltip' ||
        ((a === 'button' || a === 'button_aggressive') && b != null)
      ) {
        e = () => {
          if (a === 'tooltip') {
            conditionallyInvokeOrPreload(d)
            conditionallyInvokeOrPreload(b)
            // c('Bootloader').forceFlush()
          } else if (a === 'button' || a === 'button_aggressive') {
            conditionallyInvokeOrPreload(b)
            // c('Bootloader').forceFlush()
          }

          f && f()

          // a === 'tooltip'
          //   ? (l(d), l(b), c('Bootloader').forceFlush())
          //   : (a === 'button' || a === 'button_aggressive') &&
          //     (l(b), c('Bootloader').forceFlush()),
          //   f && f()
        }
        o(e)
      }
      if (a === 'button_aggressive') {
        e = function () {
          conditionallyInvokeOrPreload(d), g && g()
        }
        n.current != null && (n.current(), (n.current = null))
        n.current = CometMouseActivity.addOnMouseStopCallbackOnce(e)
      }
    },
    [d, b, a],
  )

  const q = useCallback(() => {
    clearTimeout(f.current)
    f.current = null
    e && e()
    g.current != null && g.current()
    n.current != null && n.current()
  }, [e])

  const r = useCallback(
    (b: any) => {
      if (!isMousePointerType(b)) {
        return
      }

      if (a === 'button' || a === 'button_aggressive') {
        conditionallyInvokeOrPreload(d)
        // c('Bootloader').forceFlush()
      }

      // ;(a === 'button' || a === 'button_aggressive') &&
      //   (l(d), c('Bootloader').forceFlush())
    },
    [d, a],
  )
  const s = useCallback(
    (a: any) => {
      JSScheduler.scheduleSpeculativeCallback(() => {
        if (a) {
          conditionallyInvokeOrPreload(d)
          conditionallyInvokeOrPreload(b)
          // c('Bootloader').forceFlush()
        }
        // a === !0 && (l(d), l(b), c('Bootloader').forceFlush())
      })
    },
    [d, b],
  )

  useEffect(() => {
    return function () {
      g.current != null && g.current()
      n.current != null && n.current()
      clearTimeout(f.current)
    }
  }, [])

  return [p, q, r, s] as const
}
