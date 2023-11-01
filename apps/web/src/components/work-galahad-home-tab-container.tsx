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
import { usePipedriveRoute } from '@/context/pipedrive-route-context'

export function WorkGalahadHomeTabContainer() {
  const { subMenu, view } = usePipedriveRoute()

  return jsxs(ChannelGeminiUIChannelRoot, {
    // primaryAction: jsx('div', {
    //   className: 'x1i64zmx xamitd3',
    //   children: jsx('HomeGeminiHeaderCreatePostButton', {
    //     showCreateGroupButton: true,
    //   }),
    // }),
    title: 'Home', // <fbt desc="WorkGalahadHomeTabContainer">Home</fbt>,
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
            default_bookmark_count: subMenu?.default_bookmark_count,
            // title: subMenu?.title,
            bookmarks: subMenu?.children,
            key: subMenu?.key,
            selectedKey: view,
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
