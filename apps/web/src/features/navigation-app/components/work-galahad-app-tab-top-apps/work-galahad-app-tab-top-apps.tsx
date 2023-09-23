import React from 'react'

import { WorkGalahadAppTabItem } from '@/features/navigation-app/components/work-galahad-app-tab-item/index'
import { WORK_APP_TAB_SET } from '@/config/work-app-tab-set'

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
