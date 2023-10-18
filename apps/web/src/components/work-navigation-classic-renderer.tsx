import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { WorkGalahadAppTabTopApps } from '@/features/navigation-app/components/work-galahad-app-tab-top-apps'

import { WorkNavigationList } from './work-navigation-list'
import { WorkNavigationCollapseButtonAndNubs } from './work-navigation-collapse-button-and-nubs'

export function WorkNavigationClassicRenderer() {
  return jsxs(WorkNavigationList, {
    children: [
      jsx(WorkGalahadAppTabTopApps, {}),
      jsx(WorkNavigationCollapseButtonAndNubs, {}),
      // jsx('WorkNavigationCollapseButtonAndNubs', {}),
    ],
  })
}
