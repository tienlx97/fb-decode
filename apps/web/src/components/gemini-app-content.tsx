'use client'

import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import GeminiAppViewStack from './gemini-app-view-stack'
import { CometNetworkStatusToast } from '@negiganaito/toaster'
import { applyWithGuard } from '@negiganaito/error'

type GeminiAppContentProps = {
  children?: any
}

export function GeminiAppContent({ children }: GeminiAppContentProps) {
  applyWithGuard(() => CometNetworkStatusToast.subscribe(), null, [])

  return jsx(GeminiAppViewStack, { children })
}
