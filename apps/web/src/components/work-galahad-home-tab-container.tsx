/* eslint-disable camelcase */
import React from 'react'

import { CometPlaceholder, nullthrows } from '@negiganaito/react-components'

import { fbt } from 'fbt'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import ChannelGeminiHomeTabContent from './channel-gemini-home-tab-content'
import { ChannelGeminiSectionWithBookmarks } from './channel-gemini-section-with-bookmarks'
import { ChannelGeminiUIChannelRoot } from './channel-gemini-ui-channel-root'
import { ChannelGeminiItemChromeList } from './channel-gemini-item-chrome-list'
import { useWorkGalahadNavStore } from '@/context/work-galahad-nav-store'

export function WorkGalahadHomeTabContainer() {
  const { state } = useWorkGalahadNavStore()

  return jsxs(ChannelGeminiUIChannelRoot, {
    // primaryAction: jsx('div', {
    //   className: 'x1i64zmx xamitd3',
    //   children: jsx('HomeGeminiHeaderCreatePostButton', {
    //     showCreateGroupButton: true,
    //   }),
    // }),
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
          jsx(ChannelGeminiSectionWithBookmarks, {
            // eslint-disable-next-line camelcase
            default_bookmark_count: state.specificMenu?.default_bookmark_count,
            title: state.specificMenu?.title,
            bookmarks: state.specificMenu?.children,
            key: state.specificMenu?.key,
          }),
          undefined,
        ],
      }),
      jsx(CometPlaceholder, {
        fallback: jsxs(React.Fragment, {
          children: [
            jsx(ChannelGeminiItemChromeList, {
              amount: 6,
              type: 'groups',
              withHeader: !0,
            }),
            jsx(ChannelGeminiItemChromeList, {
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
