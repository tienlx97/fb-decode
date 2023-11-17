'use client'

import {
  BaseThemeConfigContext,
  BaseThemeDisplayModeContext,
} from '@negiganaito/context'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const defaultBaseThemeConfig = {
  darkClassName: '__fb-dark-mode',
  darkVariables: {},
  lightClassName: '__fb-light-mode',
  lightVariables: {},
}

const defaultTheme = 'light' // e ? "dark" : "light";

export function WorkGalahadDarkModeStateProvider({
  children,
}: {
  children?: any
}) {
  return jsx(BaseThemeConfigContext.Provider, {
    value: defaultBaseThemeConfig,
    children: jsx(BaseThemeDisplayModeContext.Provider, {
      value: defaultTheme,
      children,
    }),
  })
}
