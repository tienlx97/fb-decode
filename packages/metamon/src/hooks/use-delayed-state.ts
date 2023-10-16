import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function useDelayedState(initialValue: boolean) {
  const [state, setState] = useState(initialValue)
  const timeoutRef = useRef<any>(undefined)

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const setDelayedState = useCallback(
    (newValue: boolean, delay: number | undefined, callback?: any) => {
      if (delay === undefined) delay = 0
      if (callback === undefined) callback = emptyFunction

      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined

      if (delay === 0) {
        setState(newValue)
        callback(newValue)
      } else {
        timeoutRef.current = setTimeout(() => {
          setState(newValue)
          callback(newValue)
          timeoutRef.current = undefined
        }, delay)
      }
    },
    [],
  )

  return [state, setDelayedState] as const
}

/*


__d(
  'useDelayedState',
  ['clearTimeout', 'emptyFunction', 'react', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    b = d('react')
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState
    function a(a) {
      a = k(a)
      var b = a[0],
        d = a[1],
        e = j(null)
      i(function () {
        return function () {
          return c('clearTimeout')(e.current)
        }
      }, [])
      a = h(function (a, b, f) {
        b === void 0 && (b = 0),
          f === void 0 && (f = c('emptyFunction')),
          c('clearTimeout')(e.current),
          (e.current = null),
          b === 0
            ? (d(a), f(a))
            : (e.current = c('setTimeout')(function () {
                d(a), f(a), (e.current = null)
              }, b))
      }, [])
      return [b, a]
    }
    g['default'] = a
  },
  98,
)


*/
