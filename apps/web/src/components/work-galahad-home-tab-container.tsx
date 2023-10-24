import React from 'react'

import { fbt } from 'fbt'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

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
          jsx('ChannelGeminiSectionsList.react', {
            tab: c('nullthrows')(
              (e = WorkCometOnVisible.viewer) == null ? void 0 : e.work_app_tab,
            ),
          }),
          f,
        ],
      }),
    ],
  })
}
