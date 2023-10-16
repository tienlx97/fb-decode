'use client'

import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import GeminiAppViewStack from './gemini-app-view-stack'

type GeminiAppContentProps = {
  children?: any
}

export function GeminiAppContent({ children }: GeminiAppContentProps) {
  return jsx(GeminiAppViewStack, { children })
}
