import React from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { WorkGalahadUIAppsListItem } from '@/features/navigation-app/components/work-galahad-ui-apps-list-item'

import { makeStyles } from '@griffel/react'
import { ChannelGeminiToggle } from './channel-gemini-toggle'

const useStyles = makeStyles({
  dummy1: {
    flexGrow: 1,
  },
})

export function WorkNavigationCenteredChannelToggle() {
  const classes = useStyles()

  return jsxs(React.Fragment, {
    children: [
      jsx('div', {
        className: classes.dummy1, //'x1iyjqo2',
      }),
      jsx(
        WorkGalahadUIAppsListItem,
        {
          withTopSpacing: !1,
          children: jsx(ChannelGeminiToggle, {}),
        },
        'channel-collapse-lock',
      ),
      jsx('div', {
        className: classes.dummy1,
      }),
    ],
  })
}
