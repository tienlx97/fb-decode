import React from 'react'
import { BaseDocumentScrollView } from '@negiganaito/dialog/components/base-document-scroll-view'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type GeminiLayoutTopLevelProviderProps = {
  children?: any
}

export function GeminiLayoutTopLevelProvider({
  children,
}: GeminiLayoutTopLevelProviderProps) {
  return jsx(BaseDocumentScrollView, {
    // todo: use dynamic scroll key
    contextKey: 'alem',
    maintainScrollForContext: true,
    resetScrollOnMount: false,
    children,
  })
}
