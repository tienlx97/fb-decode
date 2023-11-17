import React from 'react'

import { WorkGalahadAppTabItem } from '@/features/navigation-app/components/work-galahad-app-tab-item/index'
import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

import { WorkAppTabSet } from '@/components/work-app-tab-set'

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
  // This is for display ui unread message
  const chatUnreadCount = 0 //`c('useGeminiChatUnreadCount')()`,
  const notificationsBadgeCount = 0 // `d('WorkGalahadNotificationsBadge.react').useCount()`

  return WorkAppTabSet().map((tab, index) => (
    <WorkGalahadAppTabItem
      badgeCount={
        tab.id === 'chats'
          ? chatUnreadCount
          : tab.id === 'notifications'
          ? notificationsBadgeCount
          : 0
      }
      isFirst={index === 0}
      onHoverIn={emptyFunction}
      onPress={emptyFunction}
      key={tab.id}
      tab={tab}
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
