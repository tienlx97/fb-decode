'use client'

import React, { memo } from 'react'

import { WorkGalahadVariantState } from '@/context/work-galahad-variant-state'
import { FocusAppWrapper } from '@negiganaito/focus'

type GeminiAppTopLevelProviderProps = {
  children?: any
}

// TODO
const _GeminiAppTopLevelProvider = ({
  children,
}: GeminiAppTopLevelProviderProps) => {
  return (
    <WorkGalahadVariantState.Provider>
      <FocusAppWrapper>{children}</FocusAppWrapper>
    </WorkGalahadVariantState.Provider>
  )
}

const Provider = memo(_GeminiAppTopLevelProvider)

export const GeminiAppTopLevel = {
  Provider,
}
