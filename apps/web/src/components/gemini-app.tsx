'use client'

import React from 'react'

import { GeminiAppTopLevel } from './gemini-app-top-level-provider'
import { GeminiNavAndChannelContext } from '@/context/gemini-nav-and-channel-context'
import { GeminiAppContent } from './gemini-app-content'
import { CometAppShell } from './comet-app-shell'
import { CometToasterRoot } from '@negiganaito/toaster'

type GeminiAppProps = {
  children?: any
}

export default function GeminiApp({ children }: GeminiAppProps) {
  return (
    <CometAppShell toaster={<CometToasterRoot />}>
      <GeminiAppTopLevel.Provider>
        <GeminiNavAndChannelContext.Provider>
          <GeminiAppContent>{children}</GeminiAppContent>
        </GeminiNavAndChannelContext.Provider>
      </GeminiAppTopLevel.Provider>
    </CometAppShell>
  )

  // return jsx(GeminiAppTopLevel.Provider, {
  // children: jsx(GeminiNavAndChannelContext.Provider, {
  //   children: jsx(GeminiAppContent, {}),
  // }),
  // })
}
