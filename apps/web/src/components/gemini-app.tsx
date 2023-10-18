'use client'

import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

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
    <CometAppShell toaster={jsx(CometToasterRoot, {})}>
      <GeminiAppTopLevel.Provider>
        <GeminiNavAndChannelContext.Provider>
          {children}
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
