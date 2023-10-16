/* eslint-disable camelcase */
import { ActiveFocusRegionUtilsContext } from '@metamon/context'
import { useUnsafeRef_DEPRECATED } from '@metamon/hooks'
import { useCallback, useRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { FocusRegion } from './focus-region'

type FocusAppWrapperProps = {
  children?: any
}

export function FocusAppWrapper({ children }: FocusAppWrapperProps) {
  const b = useRef<any>(null)
  const getActiveFocusRegion = useCallback(
    function () {
      return b.current
    },
    [b],
  )
  const setActiveFocusRegion = useCallback(
    function (a: any) {
      b.current = a
    },
    [b],
  )
  const activeFocusRegionUtilsValue = useUnsafeRef_DEPRECATED({
    getActiveFocusRegion: getActiveFocusRegion,
    setActiveFocusRegion: setActiveFocusRegion,
  })
  return jsx(ActiveFocusRegionUtilsContext.Provider, {
    // @ts-ignore
    value: activeFocusRegionUtilsValue.current,
    children: jsx(FocusRegion, {
      children,
    }),
  })
}
