import { useCallback, useState } from 'react'

export function useCometPrerendererImpl(
  a: any,
  b: any,
  d: any,
  e: any,
  f: any,
) {
  var [j, k] = useState(!1)

  const [l, m] = useState(!1)

  const [n, o, p, q] = useCometPreloader(a, d, e, f)

  d = useCallback(
    (b: any) => {
      var c = function () {
          a === 'tooltip' && k(!0)
        },
        d = function () {
          a === 'button_aggressive' && k(!0)
        }
      n(b, c, d)
    },
    [n, a],
  )
  e = useCallback(() => {
    o(), k(!1)
  }, [o])
  f = useCallback(
    (b: any) => {
      p(b), (a === 'button' || a === 'button_aggressive') && k(!0)
    },
    [p, a],
  )
  const g = useCallback(
    (a: any) => {
      q(a), m(a)
    },
    [q],
  )
  if (a == null)
    return [
      {
        isVisible: b,
        shouldPrerender: !1,
      },
      c('emptyFunction'),
      c('emptyFunction'),
      c('emptyFunction'),
      c('emptyFunction'),
    ]
  b = {
    isVisible: b,
    shouldPrerender: j || l,
  }
  return [b, d, e, f, g]
}
