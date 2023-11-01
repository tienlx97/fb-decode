import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { ChannelGeminiUIChannelRoot } from './channel-gemini-ui-channel-root'
import { ChannelGeminiNavList } from './channel-gemini-nav-list'

export function WorkKnowledgesStackedChannel() {
  return jsxs(ChannelGeminiUIChannelRoot, {
    'data-testid': void 0,
    title: 'Knowledge Library',
    children: [
      jsxs(ChannelGeminiNavList, {
        isFocusTable: false,
        children: [
          jsx(o, {}),
          jsx(p, {}),
          // can manage knowledge
        ],
      }),
      jsxs(CometColumn, {}),
    ],
  })
}
