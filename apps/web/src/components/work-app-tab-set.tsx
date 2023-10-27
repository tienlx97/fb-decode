import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '@/features/navigation-app'
import fbt from 'fbt'
import { WorkGalahadHomeTabContainer } from './work-galahad-home-tab-container'
import { ReactNode } from 'react'

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
      title: <fbt desc="work app tab set home title">Home</fbt>,
      //  fbt('Home', 'work app tab set home title')
      href: '/home',
      tabIconName: 'HOME',
      badgeRenderer: WorkGalahadAppTabKeyUpdatesBadgeRenderer,
      channelEntryPoint: WorkGalahadHomeTabContainer,
    },
    {
      id: 'notifications',
      title: (
        <fbt desc="work app tab set notifications title">Notifications</fbt>
      ),
      href: '/notifications',
      tabIconName: 'NOTIFICATIONS',
      badgeRenderer: WorkGalahadAppTabNotificationsBadgeRenderer,
      channelEntryPoint: WorkGalahadHomeTabContainer,
    },
    {
      id: 'knowledge',
      title: (
        <fbt desc="work app tab set knowledge_library title">
          Knowledge Library
        </fbt>
      ),
      href: '/knowledge',
      tabIconName: 'KNOWLEDGE_LIBRARY',
      channelEntryPoint: WorkGalahadHomeTabContainer,
    },
  ] as unknown as WorkAppTabSetProps[]
}
