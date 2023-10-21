import React from 'react'

import { WorkGalahadAppTabItem } from '@/features/navigation-app/components/work-galahad-app-tab-item/index'
import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '../work-galahad-app-tab-key-updates-badge-renderer'
import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

import fbt from 'fbt'

type WorkAppTabSet = {
  id: string
  title: string
  href: string
  tabIconName: string
  badgeRenderer?: any
}

// function k() {
//   return c('WorkAppTabSet').map(function (a, b) {
//     return i.jsx(
//       c('WorkGalahadAppTabItem.react'),
//       {
//         badgeCount: 0,
//         isFirst: b === 0,
//         onHoverIn: c('emptyFunction'),
//         onPress: c('emptyFunction'),
//         tab: a,
//       },
//       a.id,
//     )
//   })
// }

function WorkGalahadAppTabTopAppsCore() {
  const a = 0 //`c('useGeminiChatUnreadCount')()`,
  const b = 0 // `d('WorkGalahadNotificationsBadge.react').useCount()`

  const navigation = [
    { name: fbt('Home', 'work app tab set home title'), href: '/' },
  ]

  console.log({ navigation })

  return [
    {
      id: 'home',
      // @ts-ignore
      title: <fbt desc="work app tab set home title">Home</fbt>,
      //  fbt('Home', 'work app tab set home title')
      href: '/home',
      tabIconName: 'HOME',
      badgeRenderer: WorkGalahadAppTabKeyUpdatesBadgeRenderer,
    },
    {
      id: 'notifications',
      title: (
        <fbt desc="work app tab set notifications title">Notifications</fbt>
      ),
      href: '/notifications',
      tabIconName: 'NOTIFICATIONS',
      badgeRenderer: WorkGalahadAppTabNotificationsBadgeRenderer,
    },
    {
      id: 'knowledge_library',
      title: (
        <fbt desc="work app tab set knowledge_library title">
          Knowledge Library
        </fbt>
      ),
      href: '/knowledge',
      tabIconName: 'KNOWLEDGE_LIBRARY',
    },
  ].map((tab, index) => (
    <WorkGalahadAppTabItem
      badgeCount={tab.id === 'chats' ? a : tab.id === 'notifications' ? b : 0}
      isFirst={index === 0}
      onHoverIn={emptyFunction}
      onPress={emptyFunction}
      badgeRenderer={tab.badgeRenderer}
      key={tab.id}
      href={tab.href}
      icon={tab.tabIconName}
      id={tab.id}
      title={tab.title}
    />
  ))
}

export default function WorkGalahadAppTabTopApps() {
  return (
    <ErrorBoundaryReact>
      <WorkGalahadAppTabTopAppsCore />
    </ErrorBoundaryReact>
  )
}
