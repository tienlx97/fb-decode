/*
__d("BaseDocumentScrollView.react", 
  ["BaseView.react", 
  "HiddenSubtreeContext", 
  "HiddenSubtreeContextProvider.react", 
  "react", "usePrevious", "useStable"], (function(a, b, c, d, e, f, g) {

*/

import { makeStyles } from '@griffel/react'
import { BaseView } from '@negiganaito/common'
import { HiddenSubtreeContext } from '@negiganaito/context'
import { usePrevious, useStable } from '@negiganaito/hooks'
import { HiddenSubtreeContextProvider } from '@negiganaito/popover'
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

const useStyles = makeStyles({
  detached: {
    MsOverflowStyle: 'none',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    position: 'fixed',
    scrollbarWidth: 'none',
    left: 0,
    top: 0,
    width: '100%',
    '::-webkit-scrollbar': {
      display: 'none',
      height: 0,
      width: 0,
    },
  },
})

const p = new Map(),
  q = new Set()
let r: any = null

function s(a: any, b: any) {
  return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
}

function t() {
  let a: any = null
  p.forEach(function (b, c) {
    a == null
      ? (a = c)
      : a != null && c != null && s(a, c) && !q.has(c) && (a = c)
  })
  return a
}

function u(a: any) {
  return r == null || s(r, a)
}

type BaseDocumentScrollViewProps = {
  contextKey?: any
  detached?: boolean
  detachedDefaultValue?: boolean
  detachedPageOffsets?: any
  disableNavigationScrollReset?: boolean
  hiddenWhenDetached?: boolean
  maintainScrollForContext?: boolean
  onInitialScroll?: any
  resetScrollOnMount?: boolean
  children?: any
}

export function BaseDocumentScrollView({
  contextKey = undefined,
  detached = false,
  detachedDefaultValue = false,
  detachedPageOffsets,
  disableNavigationScrollReset = false,
  hiddenWhenDetached = false,
  maintainScrollForContext = false,
  onInitialScroll,
  resetScrollOnMount = true,
  ...rest
}: BaseDocumentScrollViewProps) {
  const classes = useStyles()

  // var d = b.contextKey,
  //   e = d === void 0 ? null : d
  // d = b.detached
  // d = d === void 0 ? !1 : d
  // var f = b.detachedDefaultValue
  // f = f === void 0 ? !1 : f
  // b.detachedPageOffsets
  // var g = b.disableNavigationScrollReset,
  //   h = g === void 0 ? !1 : g
  // g = b.hiddenWhenDetached
  // g = g === void 0 ? !1 : g
  // var s = b.maintainScrollForContext,
  //   v = s === void 0 ? !1 : s,
  //   w = b.onInitialScroll
  // s = b.resetScrollOnMount
  // var x = s === void 0 ? !0 : s
  // s = babelHelpers.objectWithoutPropertiesLoose(b, [
  //   'contextKey',
  //   'detached',
  //   'detachedDefaultValue',
  //   'detachedPageOffsets',
  //   'disableNavigationScrollReset',
  //   'hiddenWhenDetached',
  //   'maintainScrollForContext',
  //   'onInitialScroll',
  //   'resetScrollOnMount',
  // ])
  var y = useRef<any>(),
    z = useRef({
      x: 0,
      y: 0,
    }),
    A = useStable(function () {
      return {}
    }),
    B = usePrevious(contextKey)
  const [C, D] = useState(detachedDefaultValue)
  const [E, F] = useState({
    x: 0,
    y: 0,
  })
  var G = usePrevious(C)
  const { hidden: H } = useContext(HiddenSubtreeContext)

  useLayoutEffect(function () {
    var a = y.current
    if (a != null) {
      if (u(a)) {
        if (r != null) {
          var b = p.get(r)
          b && b(!1)
        }
        r = a
      } else D(!0)
      p.set(a, function (a: any) {
        a || F(Object.assign({}, z.current)), D(!a)
      })
      return function () {
        p['delete'](a)
        if (r === a) {
          r = t()
          if (r != null) {
            var b = p.get(r)
            b && b(!0)
          }
        }
      }
    }
  }, [])
  var I = useCallback(
    function (b: any, c: any) {
      window.scrollTo && window.scrollTo(b, c),
        typeof onInitialScroll === 'function' && onInitialScroll(b, c)
    },
    [onInitialScroll],
  )
  useLayoutEffect(
    function () {
      ;(resetScrollOnMount || G != null) && !C && C !== G && I(E.x, E.y)
    },
    [C, E, G, I, resetScrollOnMount],
  )
  useLayoutEffect(
    function () {
      if ((resetScrollOnMount || B != null) && contextKey !== B) {
        var a =
          maintainScrollForContext && contextKey != null && contextKey in A
            ? // @ts-ignore
              A[contextKey]
            : {
                x: 0,
                y: 0,
              }
        C ? F(a) : disableNavigationScrollReset !== !0 && I(a.x, a.y)
      }
    },
    [
      contextKey,
      A,
      C,
      maintainScrollForContext,
      B,
      I,
      resetScrollOnMount,
      disableNavigationScrollReset,
    ],
  )
  useLayoutEffect(
    function () {
      if (!C) {
        var b = function () {
          var b = window.pageXOffset,
            c = window.pageYOffset
          z.current = {
            x: b,
            y: c,
          }
          contextKey != null &&
            // @ts-ignore
            (A[contextKey] = {
              x: b,
              y: c,
            })
        }
        window.addEventListener('scroll', b, {
          passive: !0,
        })
        return function () {
          return window.removeEventListener('scroll', b, {
            // @ts-ignore
            passive: !0,
          })
        }
      }
    },
    [C, contextKey, A],
  )
  useLayoutEffect(
    function () {
      var a = y.current
      if (a != null)
        if (H) {
          q.add(a)
          if (!C) {
            D(!0)
            r = t()
            if (r != null) {
              var b = p.get(r)
              b && b(!0)
            }
          }
          return function () {
            q['delete'](a)
          }
        } else if (C && a !== r && a === t()) {
          if (r != null) {
            b = p.get(r)
            b && b(!1)
          }
          r = a
          b = p.get(r)
          b && b(!0)
        }
    },
    [C, H],
  )
  const isBackgrounded = detached || C
  const b: any = hiddenWhenDetached
  var J = C && !hiddenWhenDetached
  useLayoutEffect(
    function () {
      var a = y.current
      J && a != null && (a.scrollTop = E.y)
    },
    [E.y, J],
  )
  return jsx(HiddenSubtreeContextProvider, {
    ignoreParent: !0,
    isBackgrounded,
    isHidden: b,
    children: jsx(
      BaseView,
      Object.assign(
        {},
        rest,
        {
          hidden: b,
        },
        J && {
          'aria-hidden': !0,
          id: 'scrollview',
          style: {
            left: -E.x,
          },
          className: classes.detached,
        },
        {
          ref: y,
        },
      ),
    ),
  })
}
