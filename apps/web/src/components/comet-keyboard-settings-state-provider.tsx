'use client'

import { BaseKeyCommandListener } from '@negiganaito/keyboards'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometKeyboardSettingsStateProviderProps = {
  children?: any
}

export function CometKeyboardSettingsStateProvider({
  children,
}: CometKeyboardSettingsStateProviderProps) {
  return jsx(BaseKeyCommandListener, { children })
}
