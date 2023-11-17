/* eslint-disable camelcase */
import { ActiveFocusRegionUtilsContext } from '@negiganaito/context'
import { useUnsafeRef_DEPRECATED } from '@negiganaito/hooks'
import React, { useCallback, useRef } from 'react'

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
  return (
    <ActiveFocusRegionUtilsContext.Provider
      value={activeFocusRegionUtilsValue.current}
    >
      {/*@ts-ignore */}
      <FocusRegion>{children}</FocusRegion>
    </ActiveFocusRegionUtilsContext.Provider>
  )
}
