import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import {
  ChannelGeminiNavFocusableGroup,
  WorkGalahadNavFocusableScopeQuery,
} from './channel-gemini-nav-focusable-group'
import { WorkGalahadUIAppsLists } from './work-galahad-ui-apps-lists'

type WorkNavigationListProps = {
  children?: any
}

export function WorkNavigationList({ children }: WorkNavigationListProps) {
  return jsx(ChannelGeminiNavFocusableGroup, {
    allowModifiers: true,
    orientation: 'vertical',
    tabScopeQuery: WorkGalahadNavFocusableScopeQuery,
    wrap: true,
    children: jsx(WorkGalahadUIAppsLists, {
      children,
    }),
  })
}
