import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { makeStyles } from '@griffel/react'

type WorkGalahadUIAppsListsProps = {
  children?: any
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexGrow: 1,
  },
})

export function WorkGalahadUIAppsLists({
  children,
}: WorkGalahadUIAppsListsProps) {
  const classes = useStyles()

  return jsx(
    'div',
    Object.assign(
      {
        role: 'grid',
        'aria-label': `h._('Workplace apps')`,
        className: classes.root, // 'x78zum5 xdt5ytf x5yr21d x1iyjqo2',
      },
      // c('testID')('galahad-nav-column'),
      {
        children,
      },
    ),
  )
}
