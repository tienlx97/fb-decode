import React from 'react'

import { CometPlaceholder, nullthrows } from '@negiganaito/react-components'

import { fbt } from 'fbt'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import ChannelGeminiHomeTabContent from './channel-gemini-home-tab-content'
import { ChannelGeminiSectionWithBookmarks } from './channel-gemini-section-with-bookmarks'

export function WorkGalahadHomeTabContainer() {
  return jsxs('ChannelGeminiUIChannelRoot.react', {
    primaryAction: jsx('div', {
      className: 'x1i64zmx xamitd3',
      children: jsx('HomeGeminiHeaderCreatePostButton', {
        showCreateGroupButton: true,
      }),
    }),
    title: <fbt desc="WorkGalahadHomeTabContainer">Home</fbt>,
    testid: void 0,
    children: [
      jsxs('div', {
        children: [
          // jsx('ChannelGeminiSectionsList.react', {
          //   tab: nullthrows(
          //     (e = WorkCometOnVisible.viewer) == null ? void 0 : e.work_app_tab,
          //   ),
          // }),
          jsx(ChannelGeminiSectionWithBookmarks, {}),
          undefined,
        ],
      }),
      jsx(CometPlaceholder, {
        fallback: jsxs(React.Fragment, {
          children: [
            jsx('ChannelGeminiItemChromeList', {
              amount: 6,
              type: 'groups',
              withHeader: !0,
            }),
            jsx('ChannelGeminiItemChromeList.react', {
              amount: 6,
              type: 'people',
              withHeader: !0,
            }),
          ],
        }),
        //
        children: jsx(ChannelGeminiHomeTabContent, {}),
      }),
    ],
  })
}
