import React from 'react'
import { ChannelGeminiBookmark } from './channel-gemini-bookmark'

type ChannelGeminiNavFeedBookmarkForCriticalCommsAlphaProps = {
  bookmark?: any
  entityKey?: string
  href?: string
  icon?: any
  onPress?: any
  selected: boolean
  subtitle?: any
  testid?: string
  title?: string
}

export default function ChannelGeminiNavFeedBookmarkForCriticalCommsAlpha({
  bookmark,
  ...rest
}: ChannelGeminiNavFeedBookmarkForCriticalCommsAlphaProps) {
  return <ChannelGeminiBookmark {...rest} />
}
