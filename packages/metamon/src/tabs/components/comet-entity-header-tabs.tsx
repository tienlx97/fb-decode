import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { makeStyles } from '@fluentui/react-components'

import { CometTabs } from './comet-tabs'

type CometEntityHeaderTabsProps = {
  maxTabs: number
  menuSize?: number
  tabs: any[]
  onMoreTabPress?: any
}

const useStyles = makeStyles({
  entityHeaderTab: {
    height: '60px',
    paddingRight: '16px',
    paddingLeft: '16px',
  },
})

export default function CometEntityHeaderTabs({
  maxTabs,
  tabs,
  menuSize,
  onMoreTabPress,
}: CometEntityHeaderTabsProps) {
  const classes = useStyles()

  return jsx(CometTabs, {
    maxTabs,
    menuSize,
    moreTabStyles: {
      overlayOffset: {
        bottom: -4,
        left: 0,
        right: 0,
        top: -4,
      },
      overlayRadius: 6,
      underlineColor: 'var(--accent)',
    },
    moreTabXStyle: classes.entityHeaderTab,
    onMoreTabPress: onMoreTabPress,
    tabs: tabs.map((tab: any) => {
      return Object.assign({}, tab, {
        overlayOffset: {
          bottom: -4,
          left: 0,
          right: 0,
          top: -4,
        },
        overlayRadius: 6,
        underlineColor: 'var(--accent)',
        className: classes.entityHeaderTab,
      })
    }),
    truncateMenu: true,
  })
}
