/* eslint-disable camelcase */
import { useFocusWithin } from '@fb/hooks/react-focus-event'
import React, {
  useInsertionEffect,
  useMemo,
  useRef,
  useState,
  // @ts-ignore
  unstable_Scope,
  ReactNode,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type FocusWithinHandlerNonStrictModeReactProps = {
  children?:
    | ReactNode
    | ((
        isFocus: boolean | undefined,
        isFocusVisible: boolean | undefined,
      ) => any)
  onFocusChange?: (...props: any) => any
  onFocusVisibleChange?: (...props: any) => any
  onFocusWithin?: (...props: any) => any
  onBlurWithin?: (...props: any) => any
  testOnly?: any
}

export type FocusWithinHandlerChildren = {}

export default function FocusWithinHandlerNonStrictMode_DEPRECATED({
  onBlurWithin,
  onFocusChange,
  onFocusVisibleChange,
  onFocusWithin,
  children,
  testOnly,
}: FocusWithinHandlerNonStrictModeReactProps) {
  const ref = useRef(null)

  // let temp
  // const [isFocus, setFocus] = useState(
  //   (temp = testOnly && testOnly.focus) != null ? temp : false,
  // )
  // const [isFocusVisible, setFocusVisible] = useState(
  //   (temp = testOnly && testOnly.focusVisible) != null ? temp : false,
  // )

  let temp

  const [isFocus, setFocus] = useState(
    (temp = testOnly && testOnly.focus ? temp : false),
  )

  const [isFocusVisible, setFocusVisible] = useState(
    (temp = testOnly && testOnly.focusVisible ? temp : false),
  )

  const focusWithinStrictModeRef = useFocusWithin(
    ref,
    useMemo(() => {
      return {
        onFocusWithin: e => {
          if (onFocusWithin && !isFocus) {
            onFocusWithin(e)
          }
          // onFocusWithin && !isFocus && onFocusWithin(e)
        },
        onBlurWithin: e => {
          if (onBlurWithin && isFocus) {
            onBlurWithin(e)
          }
          // onBlurWithin && isFocus && onBlurWithin(e)
        },
        onFocusWithinChange: onFocusChange
          ? e => {
              setFocus(e)
              onFocusChange(e)
            }
          : setFocus,
        onFocusWithinVisibleChange: onFocusVisibleChange
          ? e => {
              setFocusVisible(e)
              onFocusVisibleChange(e)
            }
          : setFocusVisible,
      }
    }, [
      isFocus,
      onBlurWithin,
      onFocusChange,
      onFocusVisibleChange,
      onFocusWithin,
    ]),
  )

  return jsx(unstable_Scope, {
    ref: focusWithinStrictModeRef,
    children:
      typeof children === 'function'
        ? children(isFocus, isFocusVisible)
        : children,
  })
}

/*


__d("FocusWithinHandlerNonStrictMode_DEPRECATED.react", ["ReactFocusEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useMemo
      , j = b.useRef
      , k = b.useState
      , l = h.unstable_Scope;
    function a(a) {
        var b, c = a.children, e = a.onFocusChange, f = a.onFocusVisibleChange, g = a.onFocusWithin, m = a.onBlurWithin;
        a = a.testOnly;
        var n = j(null);
        b = k((b = a && a.focus) != null ? b : !1);
        var o = b[0]
          , p = b[1];
        a = k((b = a && a.focusVisible) != null ? b : !1);
        b = a[0];
        var q = a[1];
        a = d("ReactFocusEvent.react").useFocusWithin(n, i(function() {
            return {
                onFocusWithin: function(a) {
                    g && !o && g(a)
                },
                onBlurWithin: function(a) {
                    m && o && m(a)
                },
                onFocusWithinChange: e ? function(a) {
                    p(a),
                    e(a)
                }
                : p,
                onFocusWithinVisibleChange: f ? function(a) {
                    q(a),
                    f(a)
                }
                : q
            }
        }, [o, m, e, f, g]));
        return h.jsx(l, {
            ref: a,
            children: typeof c === "function" ? c(o, b) : c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);

*/
