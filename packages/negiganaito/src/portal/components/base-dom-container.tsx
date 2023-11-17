import { useMergeRefs } from '@negiganaito/hooks'
import React, { forwardRef, memo, useLayoutEffect, useRef } from 'react'

type BaseDOMContainerProps = {
  node?: HTMLDivElement
}

const BaseDOMContainer = forwardRef<any, BaseDOMContainerProps>(
  ({ node }, ref) => {
    const storeRef = useRef<any | undefined>(undefined)
    useLayoutEffect(() => {
      if (node && storeRef.current) {
        storeRef.current.appendChild(node)

        return () => {
          storeRef.current?.removeChild(node)
        }
      }
    }, [node])

    const mergeRef = useMergeRefs(ref, storeRef)

    return <div ref={mergeRef} />
  },
)

export default memo(BaseDOMContainer)

/*

__d(
  'BaseDOMContainer.react',
  ['react', 'useMergeRefs'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var i = b.useLayoutEffect,
      j = b.useRef
    function a(a, b) {
      var d = a.node,
        e = j(null)
      i(
        function () {
          var a = e.current
          if (d != null && a != null) {
            a.appendChild(d)
            return function () {
              a.removeChild(d)
            }
          }
        },
        [d],
      )
      a = c('useMergeRefs')(b, e)
      return h.jsx('div', {
        ref: a,
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.memo(h.forwardRef(a))
    g['default'] = e
  },
  98,
)


*/
