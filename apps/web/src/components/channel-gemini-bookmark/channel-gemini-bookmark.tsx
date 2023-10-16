import React from 'react'
import { VoyageUserJourneyUILayerProvider } from '../voyage-user-journey-ui-layer-provider'
import { serialize } from '@/utils/work-galahad-entity-key'
import { WorkGalahadUIChannelItem } from '../work-galahad-ui-channel-item'
import { BookmarkIcon } from '@/icons/channel-gemini-item-icon'

type ChannelGeminiBookmarkProps = {
  addOnSecondary?: any
  entityKey?: string
  href?: string
  icon?: any
  meta?: any
  onPress?: any
  selected: boolean
  subtitle?: any
  testid?: string
  title?: string
}

export function ChannelGeminiBookmark({
  addOnSecondary,
  entityKey,
  href,
  icon,
  meta,
  onPress,
  selected,
  subtitle,
  testid,
  title,
}: ChannelGeminiBookmarkProps) {
  return (
    <VoyageUserJourneyUILayerProvider
      name={'bookmark' + (entityKey ? '.' + serialize(entityKey) : '')}
    >
      <WorkGalahadUIChannelItem
        addOnPrimary={!icon ? undefined : <BookmarkIcon image={icon} />}
        linkProps={
          href
            ? {
                url: href,
              }
            : undefined
        }
        onPress={(event: any) => {
          onPress && onPress(event)
        }}
        selected={selected}
        headline={title}
        meta={subtitle}
        addOnSecondary={addOnSecondary}
        addOnTertiary={meta}
        testid={undefined}
      />
    </VoyageUserJourneyUILayerProvider>
  )
}
