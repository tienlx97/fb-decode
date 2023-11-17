import { SubMenu } from '@/config/ui-configuration'
import { usePipedriveRoute } from '@/context/pipedrive-route-context'
import { CometPlaceholder } from '@negiganaito/placeholder'
import React from 'react'
import { ChannelGeminiBookmark } from './channel-gemini-bookmark/channel-gemini-bookmark'

type ChannelGeminiBookmarkContainerProps = {
  bookmark: SubMenu
  onPress: any
}

export default function ChannelGeminiBookmarkContainer({
  bookmark,
  onPress,
}: ChannelGeminiBookmarkContainerProps) {
  const { key, title, subtitle, icon, path } = bookmark

  const { view } = usePipedriveRoute()

  const isSelected = key === view

  const props = {
    entityKey: key,
    icon: (!icon ? undefined : icon.uri) != null ? icon!.uri : undefined,
    href: path,
    title: title ?? '',
    subtitle: subtitle ?? undefined,
    selected: isSelected,
    testid: key ?? undefined,
    onPress,
  }

  return (
    <CometPlaceholder fallback={null}>
      <ChannelGeminiBookmark {...props} />
    </CometPlaceholder>
  )
}
