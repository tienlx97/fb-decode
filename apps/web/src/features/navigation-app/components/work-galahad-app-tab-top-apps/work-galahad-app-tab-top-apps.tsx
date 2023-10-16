import React from 'react'

import { WorkGalahadAppTabItem } from '@/features/navigation-app/components/work-galahad-app-tab-item/index'
import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '../work-galahad-app-tab-key-updates-badge-renderer'
import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

type WorkAppTabSet = {
  id: string
  title: string
  href: string
  tabIconName: string
  badgeRenderer?: any
}

const WORK_APP_TAB_SET: WorkAppTabSet[] = [
  {
    id: 'home',
    title: 'Trang chủ',
    href: '/home',
    tabIconName: 'HOME',
    badgeRenderer: WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  },
  {
    id: 'notifications',
    title: 'Thông báo',
    href: '/notifications',
    tabIconName: 'NOTIFICATIONS',
    badgeRenderer: WorkGalahadAppTabNotificationsBadgeRenderer,
  },
  {
    id: 'knowledge_library',
    title: 'Thư viện kiến thức',
    href: '/knowledge',
    tabIconName: 'KNOWLEDGE_LIBRARY',
  },
]

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

  return WORK_APP_TAB_SET.map((tab, index) => (
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

  // return WORK_APP_TAB_SET.map((tab, index) => (
  //   <WorkGalahadAppTabItem
  //     badgeRenderer={tab.badgeRenderer}
  //     key={tab.id}
  //     href={tab.href}
  //     icon={tab.tabIconName}
  //     id={tab.id}
  //     isFirst={index === 0}
  //     title={tab.title}
  //   />
  // ))
}
