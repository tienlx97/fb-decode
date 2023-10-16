import { WorkGalahadVariantState } from '@/context'
import { FocusAppWrapper } from '@metamon/focus'
import React, { memo } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type GeminiAppTopLevelProviderProps = {
  children?: any
}

// TODO
const _GeminiAppTopLevelProvider = ({
  children,
}: GeminiAppTopLevelProviderProps) => {
  return jsx(WorkGalahadVariantState.Provider, {
    children: jsx(React.Fragment, {
      children: jsx(FocusAppWrapper, {
        children,
      }),
    }),
  })
}

const Provider = memo(_GeminiAppTopLevelProvider)

export const GeminiAppTopLevel = {
  Provider,
}
