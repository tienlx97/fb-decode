import React from 'react'

import { WorkGalahadAppTabItem } from '@/features/navigation-app/components/work-galahad-app-tab-item/index'
import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '../work-galahad-app-tab-key-updates-badge-renderer'

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

export default function WorkGalahadAppTabTopApps() {
  return WORK_APP_TAB_SET.map((tab, index) => (
    <WorkGalahadAppTabItem
      badgeRenderer={tab.badgeRenderer}
      key={tab.id}
      href={tab.href}
      icon={tab.tabIconName}
      id={tab.id}
      isFirst={index === 0}
      title={tab.title}
    />
  ))
}
