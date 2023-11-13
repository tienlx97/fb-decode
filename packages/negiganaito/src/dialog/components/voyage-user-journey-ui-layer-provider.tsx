'use client'

import React, { useLayoutEffect, useMemo, useRef } from 'react'
import {
  VoyageUILayerContext,
  useVoyageUILayerContext,
} from '../context/voyage-user-journey-ui-layer-context'

type VoyageUserJourneyUILayerProviderProps = {
  children?: any
  metadata?: any
  name?: string
}

export function VoyageUserJourneyUILayerProvider({
  children,
  metadata,
  name,
}: VoyageUserJourneyUILayerProviderProps) {
  const metadataRef = useRef(metadata)
  const nameRef = useRef(name)

  useLayoutEffect(() => {
    metadataRef.current = metadata
    nameRef.current = name
  }, [metadata, name])

  const voyageUILayerContextValue = useVoyageUILayerContext()

  const voyageUILayerValue = useMemo(() => {
    return {
      get: () => {
        // @ts-ignore
        return [].concat(voyageUILayerContextValue.get(), [
          // @ts-ignore
          {
            name: nameRef.current,
            metadata: metadataRef.current,
          },
        ])
      },
    }
  }, [voyageUILayerContextValue])

  return (
    <VoyageUILayerContext.Provider value={voyageUILayerValue}>
      {children}
    </VoyageUILayerContext.Provider>
  )
}

/*
__d("ChannelGeminiBookmark.react", ["ChannelGeminiItemIcon.react", "WorkGalahadEntityKey", "WorkGalahadUIChannelItem.react", "WorkNavigationLogger", "cr:1829651", "react"], (function(a, b, c, d, e, f, g) {

*/
