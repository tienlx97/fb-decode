/* eslint-disable camelcase */
import {
  useFocusWithin,
  useFocusWithinStrictMode,
} from '@fb/hooks/react-focus-event'
import React, {
  useInsertionEffect,
  useMemo,
  useRef,
  useState,
  // @ts-ignore
  unstable_Scope,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type FocusWithinHandlerNonStrictModeReactProps = {
  children?: any
  onFocusChange?: (...props: any) => any
  onFocusVisibleChange?: (...props: any) => any
  onFocusWithin?: (...props: any) => any
  onBlurWithin?: (...props: any) => any
  testOnly?: any
}

export default function FocusWithinHandlerNonStrictMode_DEPRECATEDReact({
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

  const [isFocus, setFocus] = useState(testOnly?.focus ?? false)
  const [isFocusVisible, setFocusVisible] = useState(
    testOnly?.focusVisible ?? false,
  )

  const focusWithinStrictModeRef = useFocusWithin(
    ref,
    useMemo(() => {
      return {
        onFocusWithin: e => {
          onFocusWithin && !isFocus && onFocusWithin(e)
        },
        onBlurWithin: e => {
          onBlurWithin && isFocus && onBlurWithin(e)
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
