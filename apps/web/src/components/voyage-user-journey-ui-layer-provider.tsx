'use-client'

import {
  VoyageUILayerContext,
  useVoyageUILayerContext,
} from '@/context/voyage-user-journey-ui-layer-context'
import React, { useLayoutEffect, useMemo, useRef } from 'react'

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
  const f = useRef(metadata)
  const g = useRef(name)
  useLayoutEffect(
    function () {
      f.current = metadata
      g.current = name
    },
    [metadata, name],
  )
  const voyageUILayerContextValue = useVoyageUILayerContext()

  const a = useMemo(
    function () {
      return {
        get: function () {
          // @ts-ignore
          return [].concat(voyageUILayerContextValue.get(), [
            // @ts-ignore
            {
              name: g.current,
              metadata: f.current,
            },
          ])
        },
      }
    },
    [voyageUILayerContextValue],
  )

  return (
    <VoyageUILayerContext.Provider value={a}>
      {children}
    </VoyageUILayerContext.Provider>
  )
}

/*
__d("ChannelGeminiBookmark.react", ["ChannelGeminiItemIcon.react", "WorkGalahadEntityKey", "WorkGalahadUIChannelItem.react", "WorkNavigationLogger", "cr:1829651", "react"], (function(a, b, c, d, e, f, g) {

*/
