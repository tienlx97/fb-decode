/* eslint-disable camelcase */
import { useFocusWithinStrictMode } from '../hooks/react-focus-event'
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

type FocusWithinHandlerStrictModeProps = {
  children?: any
  onFocusChange?: (...props: any) => any
  onFocusVisibleChange?: (...props: any) => any
  onFocusWithin?: (...props: any) => any
  onBlurWithin?: (...props: any) => any
  testOnly?: any
}

export default function FocusWithinHandlerStrictMode({
  onBlurWithin,
  onFocusChange,
  onFocusVisibleChange,
  onFocusWithin,
  children,
  testOnly,
}: FocusWithinHandlerStrictModeProps) {
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

  const focusWithinStrictMode = useFocusWithinStrictMode(
    useMemo(() => {
      return {
        onFocusWithin: (e: any) => {
          onFocusWithin && !isFocus && onFocusWithin(e)
        },
        onBlurWithin: (e: any) => {
          onBlurWithin && isFocus && onBlurWithin(e)
        },
        onFocusWithinChange: onFocusChange
          ? (e: any) => {
              setFocus(e)
              onFocusChange(e)
            }
          : setFocus,
        onFocusWithinVisibleChange: onFocusVisibleChange
          ? (e: any) => {
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

  useInsertionEffect(() => {
    focusWithinStrictMode(ref.current)
    return () => {
      focusWithinStrictMode(null)
    }
  }, [ref, focusWithinStrictMode])

  return jsx(unstable_Scope, {
    ref,
    children:
      typeof children === 'function'
        ? children(isFocus, isFocusVisible)
        : children,
  })
}
