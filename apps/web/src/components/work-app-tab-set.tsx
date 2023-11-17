import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '@/features/navigation-app'
import { WorkGalahadHomeTabContainer } from './work-galahad-home-tab-container'

import { ReactNode } from 'react'
import { WorkKnowledgesStackedChannel } from './work-knowledges-stacked-channel'

type WorkAppTabSetProps = {
  id: string
  title: string
  href: string
  tabIconName: string
  badgeRenderer?: any
  channelEntryPoint: ReactNode
}

export const WorkAppTabSet = (): WorkAppTabSetProps[] => {
  return [
    {
      id: 'home',
      // @ts-ignore
      title: 'Home', // <fbt desc="work app tab set home title">Home</fbt>,
      //  fbt('Home', 'work app tab set home title')
      href: '/home',
      tabIconName: 'HOME',
      badgeRenderer: WorkGalahadAppTabKeyUpdatesBadgeRenderer,
      channelEntryPoint: WorkGalahadHomeTabContainer,
    },
    {
      id: 'notifications',
      // title:  (
      //   <fbt desc="work app tab set notifications title">Notifications</fbt>
      // ),
      title: 'Notifications',
      href: '/notifications',
      tabIconName: 'NOTIFICATIONS',
      badgeRenderer: WorkGalahadAppTabNotificationsBadgeRenderer,
      channelEntryPoint: '',
    },
    {
      id: 'knowledge',
      // title: (
      //   <fbt desc="work app tab set knowledge_library title">
      //     Knowledge Library
      //   </fbt>
      // ),
      title: 'Knowledge Library',
      href: '/knowledge',
      tabIconName: 'KNOWLEDGE_LIBRARY',
      channelEntryPoint: WorkKnowledgesStackedChannel,
    },
  ] as unknown as WorkAppTabSetProps[]
}
