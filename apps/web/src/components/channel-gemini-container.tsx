import { BaseHeadingContextWrapper } from '@negiganaito/text'
import React from 'react'
import { ChannelGemini } from './channel-gemini/channel-gemini'

const j = false // c("gkx")("7823");

export default function ChannelGeminiContainer(a: any) {
  return (
    <BaseHeadingContextWrapper>
      <ChannelGemini />
    </BaseHeadingContextWrapper>
  )
}
