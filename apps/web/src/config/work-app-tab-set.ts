import {
  WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  WorkGalahadAppTabNotificationsBadgeRenderer,
} from '@/features/navigation-app'

type WorkAppTabSet = {
  id: string
  title: string
  href: string
  tabIconName: string
  badgeRenderer?: any
}

export const WORK_APP_TAB_SET: WorkAppTabSet[] = [
  {
    id: 'home',
    title: 'Trang chủ',
    href: '/home',
    tabIconName: 'home',
    badgeRenderer: WorkGalahadAppTabKeyUpdatesBadgeRenderer,
  },
  {
    id: 'notifications',
    title: 'Thông báo',
    href: '/notifications',
    tabIconName: 'notification',
    badgeRenderer: WorkGalahadAppTabNotificationsBadgeRenderer,
  },
  {
    id: 'knowledge_library',
    title: 'Thư viện kiến thức',
    href: '/knowledge',
    tabIconName: 'document',
  },
]
