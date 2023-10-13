import { useRef } from 'react'

function k(a) {
  return a.pointerType === 'mouse'
}
function l(a) {
  a && (typeof a === 'function' ? a() : a.preload())
}
var m = 50
function useCometPreloaderImpl(a: any, b: any, d: any, e: any) {
  var f = useRef(null),
    g = useRef(null),
    n = useRef(null),
    o = function (a: any) {
      c('ifRequired')(
        'setTimeoutCometInternals',
        function (b) {
          f.current = b.setTimeoutAtPriority_DO_NOT_USE(
            c('JSScheduler').priorities.unstable_UserBlocking,
            a,
            m,
          )
        },
        function () {
          f.current = c('setTimeout')(a, m)
        },
      )
    },
    p = useCallback(
      function (e, f, g) {
        if (
          a === 'tooltip' ||
          ((a === 'button' || a === 'button_aggressive') && b != null)
        ) {
          e = function () {
            a === 'tooltip'
              ? (l(d), l(b), c('Bootloader').forceFlush())
              : (a === 'button' || a === 'button_aggressive') &&
                (l(b), c('Bootloader').forceFlush()),
              f && f()
          }
          o(e)
        }
        if (a === 'button_aggressive') {
          e = function () {
            l(d), g && g()
          }
          n.current != null && (n.current(), (n.current = null))
          n.current = c('CometMouseActivity').addOnMouseStopCallbackOnce(e)
        }
      },
      [d, b, a],
    ),
    q = useCallback(
      function () {
        c('clearTimeout')(f.current),
          (f.current = null),
          e && e(),
          g.current != null && g.current(),
          n.current != null && n.current()
      },
      [e],
    ),
    r = useCallback(
      function (b) {
        if (!k(b)) return
        ;(a === 'button' || a === 'button_aggressive') &&
          (l(d), c('Bootloader').forceFlush())
      },
      [d, a],
    ),
    s = useCallback(
      function (a) {
        c('JSScheduler').scheduleSpeculativeCallback(function () {
          a === !0 && (l(d), l(b), c('Bootloader').forceFlush())
        })
      },
      [d, b],
    )
  useEffect(function () {
    return function () {
      g.current != null && g.current(),
        n.current != null && n.current(),
        c('clearTimeout')(f.current)
    }
  }, [])
  return [p, q, r, s]
}
