import React from 'react'

//@ts-ignore
import { jsx } from 'react/jsx-runtime'
import CometEntityHeaderTabs from './comet-entity-header-tabs'

type CometEntityHeaderTabBarProps = {
  maxTabs: number
  tabs: any[]
  menuSize?: number
  tabsRouteTarget?: any
}

export default function CometEntityHeaderTabBar({
  maxTabs,
  tabs,
  menuSize,
  tabsRouteTarget = 'self',
}: CometEntityHeaderTabBarProps) {
  const activeTabIndex = tabs.findIndex(tab => tab.isActive())

  const normalizeTabs = tabs.map(({ isActive, linkProps, ...rest }, key) => {
    return linkProps
      ? Object.assign({}, rest, {
          linkProps: Object.assign({}, linkProps, {
            routeTarget: tabsRouteTarget,
          }),
          selected: key === activeTabIndex,
        })
      : Object.assign({}, rest, {
          selected: key === activeTabIndex,
        })
  })

  return jsx(CometEntityHeaderTabs, {
    maxTabs,
    menuSize,
    tabs: normalizeTabs,
  })
}
