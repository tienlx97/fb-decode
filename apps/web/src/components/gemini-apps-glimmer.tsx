import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { CometGlimmer } from '@negiganaito/react-components'
import { makeStyles } from '@griffel/react'

const useStyles = makeStyles({
  root: {
    width: 'xh8yej3',
  },
  iconRow: {
    height: 'xng8ra',
    marginBottom: 'x12nagc',
    width: 'xh8yej3',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
  },
  icon: {
    borderTopStartRadius: 'x107yiy2',
    borderTopEndRadius: 'xv8uw2v',
    borderBottomEndRadius: 'x1tfwpuw',
    borderBottomStartRadius: 'x2g32xy',
    width: 'x100vrsf',
    height: 'x1vqgdyp',
  },
})

export function GeminiAppsGlimmer() {
  const classes = useStyles()

  return jsxs('div', {
    className: 'xh8yej3',
    children: [
      jsx('div', {
        className: 'xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k',
        children: jsx(CometGlimmer, {
          index: 0,
          className: classes.icon,
        }),
      }),
      jsx('div', {
        className: 'xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k',
        children: jsx(CometGlimmer, {
          index: 1,
          className: classes.icon,
        }),
      }),
      jsx('div', {
        className: 'xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k',
        children: jsx(CometGlimmer, {
          index: 2,
          className: classes.icon,
        }),
      }),
    ],
  })
}
