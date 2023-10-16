import { makeStyles } from '@fluentui/react-components'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type WorkGalahadUIAppsRootProps = {
  children?: any
  onMouseEnter?: any
}

const useStyles = makeStyles({
  root: {
    //               ',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    alignItems: 'stretch',
    backgroundColor: 'var(--wig-nav-background)',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingBottom: '16px',
    paddingTop: '16px',
    width: '96px',
    zIndex: 1,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'var(--divider)',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'var(--divider)',
    height: '100%',
  },

  dummy1: {
    borderRightStyle: 'none',
    display: 'flex',
    width: '100%',
    paddingRight: '4px',
    paddingLeft: '4px',
  },
})

export function WorkGalahadUIAppsRoot({
  children,
  onMouseEnter,
}: WorkGalahadUIAppsRootProps) {
  const classes = useStyles()

  return jsx('div', {
    role: 'navigation',
    'aria-label': `h._('Workplace')`,
    className: classes.root,
    onMouseEnter,
    children: jsx('div', {
      className: classes.dummy1,
      children,
    }),
  })
}
