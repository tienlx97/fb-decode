'use client'

import { usePathname } from 'next/navigation'
import React, { forwardRef, useContext, useMemo } from 'react'

import { WorkGalahadUIAppsListItem } from '../work-galahad-ui-apps-list-item'
import { WorkGalahadUIAppNavButton } from '../work-galahad-ui-app-nav-button'
import { WorkGalahadUIAppTabSelectorIcon } from '../work-galahad-ui-app-tab-selector-Icon'
import {
  WorkGalahadNavStore,
  useWorkGalahadNavStore,
} from '@/context/work-galahad-nav-store'

type Props = {
  title: any
  id: string
  href: string
  icon: string
  isFirst: boolean
  badgeCount: number
  onHoverIn?: (...param: any) => any
  onHoverOut?: (...param: any) => any
  onPressIn?: (...param: any) => any
  onPress?: (...param: any) => any
  badgeRenderer?: any
}

const m = new Set(['knowledge', 'home'])

const WorkGalahadAppTabItem = forwardRef<HTMLDivElement, Props>(
  ({ href, icon, id, title, isFirst, ...rest }, ref) => {
    const { state } = useWorkGalahadNavStore()

    const B = WorkGalahadNavStore.getSelectedAppTabID(state) === id

    // const A = p(title, rest.badgeCount)

    const pathName = usePathname()

    const selected = pathName.startsWith(href)

    const I = m.has(id)
    const preventLocalNavigation = I ? !1 : !selected

    const Icon = useMemo(
      () => <WorkGalahadUIAppTabSelectorIcon icon={icon} selected={selected} />,
      [selected, icon],
    )

    return (
      <WorkGalahadUIAppsListItem ref={ref} withTopSpacing={!isFirst}>
        <WorkGalahadUIAppNavButton
          href={href}
          elementId={id}
          label={title}
          selected={selected}
          preventLocalNavigation={preventLocalNavigation}
          addOn={Icon}
          {...rest}
        />
      </WorkGalahadUIAppsListItem>
    )
  },
)

// function p(title: string, badgeCount: number) {
//   return badgeCount > 0
//     ? h._(
//         {
//           '*': '{title}, {number} new items',
//           _1: '{title}, 1 new item',
//         },
//         [h._plural(badgeCount, 'number'), h._param('title', title)],
//       )
//     : title
// }

export default WorkGalahadAppTabItem

// tekax29574@ipnuc.com

// WorkGalahadAppTabItem.react WorkGalahadUIAppTabSelectorIcon.react

// type WorkGalahadUIAppTabSelectorIconProps = {
//   selected: boolean
//   iconName: string
// }

// const WorkGalahadUIAppTabSelectorIcon = ({
//   iconName,
//   selected,
// }: WorkGalahadUIAppTabSelectorIconProps) => {
//   // return (
//   //   <IconWith
//   //     color={
//   //       selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
//   //     }
//   //     fill={
//   //       selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
//   //     }
//   //     name={iconName}
//   //     width={32}
//   //     height={32}
//   //   />
//   // )
//   return (
//     <Icon
//       color={
//         selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
//       }
//       fill={
//         selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
//       }
//       name={(iconName + `${selected ? '-fill' : '-outline'}`) as any}
//       width={32}
//       height={32}
//     />
//   )
// }
