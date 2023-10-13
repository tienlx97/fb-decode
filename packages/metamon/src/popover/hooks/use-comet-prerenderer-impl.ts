import { useCallback, useState } from 'react'
import { useCometPreloaderImpl } from './use-comet-preloader-impl'
import { emptyFunction } from '@metamon/utils/common/empty-function'

export function useCometPrerendererImpl(
  popoverRenderer: any,
  isVisible: any,
  popoverPreloadResource: any,
  e: any,
  f?: any,
) {
  var [j, k] = useState(!1)

  const [l, m] = useState(!1)

  const [n, o, p, q] = useCometPreloaderImpl(
    popoverRenderer,
    popoverPreloadResource,
    e,
    f,
  )

  popoverPreloadResource = useCallback(
    (b: any) => {
      const c = () => {
        if (popoverRenderer === 'tooltip') {
          k(!0)
        }
      }
      const d = () => {
        if (popoverRenderer === 'button_aggressive') {
          k(!0)
        }
      }
      n(b, c, d)
    },
    [n, popoverRenderer],
  )
  e = useCallback(() => {
    o()
    k(!1)
  }, [o])

  f = useCallback(
    (b: any) => {
      p(b)
      if (
        popoverRenderer === 'button' ||
        popoverRenderer === 'button_aggressive'
      ) {
        k(!0)
      }
    },
    [p, popoverRenderer],
  )

  const g = useCallback(
    (a: any) => {
      q(a)
      m(a)
    },
    [q],
  )

  if (!popoverRenderer) {
    return [
      {
        isVisible: isVisible,
        shouldPrerender: !1,
      },
      emptyFunction,
      emptyFunction,
      emptyFunction,
      emptyFunction,
    ]
  }
  const option = {
    isVisible: isVisible,
    shouldPrerender: j || l,
  }

  return [option, popoverPreloadResource, e, f, g]
}
