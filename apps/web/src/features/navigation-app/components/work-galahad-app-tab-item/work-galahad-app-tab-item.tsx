/* eslint-disable no-undef */
'use client'
import React, { forwardRef, memo, useCallback, useMemo } from 'react'

// import { fbt, FbtParam, FbtPlural } from 'fbt'

import { WorkGalahadUIAppsListItem } from '../work-galahad-ui-apps-list-item'
import { WorkGalahadUIAppNavButton } from '../work-galahad-ui-app-nav-button'
import { WorkGalahadUIAppTabSelectorIcon } from '../work-galahad-ui-app-tab-selector-Icon'
import {
  WorkGalahadNavStore,
  allowChannelAutoFocus,
  dismissAllStackedChannels,
  useWorkGalahadNavStore,
} from '@/context/work-galahad-nav-store'
import { GeminiNavAndChannelContext } from '@/context/gemini-nav-and-channel-context'

type Props = {
  badgeCount: number
  isFirst: boolean
  onHoverIn?: (...param: any) => any
  onPress?: (...param: any) => any

  // ??
  onHoverOut?: (...param: any) => any
  onPressIn?: (...param: any) => any

  tab: {
    badgeRenderer?: any
    href: string
    id: string
    tabIconName: string
    title: any
  }
}

const m = new Set(['knowledge_library', 'home'])

function formatTitleWithBadgeCount(title: string, badgeCount: number) {
  return badgeCount > 0
    ? // <fbt desc="title, badgeCount text">
      //   <FbtParam name="title">{title}</FbtParam> ,
      //   <FbtPlural
      //     count={badgeCount}
      //     name="number"
      //     showCount="ifMany"
      //     many="new items"
      //   >
      //     1 new item
      //   </FbtPlural>
      // </fbt>
      'title, badgeCount text'
    : title
}

//   return badgeCount > 0
//     ? fbt(
//         {
//           '*': '{title}, {number} new items',
//           _1: '{title}, 1 new item',
//         },
//         // @ts-ignore
//         [fbt.plural(badgeCount, 'number'), fbt.param('title', title)],
//       )
//     : title
// }

const WorkGalahadAppTabItem = memo(
  forwardRef<HTMLDivElement, Props>(
    (
      {
        badgeCount,
        isFirst,
        onHoverIn,
        onPress,
        //
        tab,
      },
      ref,
    ) => {
      const { isAutoHideEnabled } = GeminiNavAndChannelContext.useNavUIState()

      const ariaLabel = formatTitleWithBadgeCount(tab.title, badgeCount)

      const { state, dispatch } = useWorkGalahadNavStore()
      const selected = WorkGalahadNavStore.getSelectedAppTabID(state) === tab.id

      const I = m.has(tab.id)

      const onHoverInCb = useCallback(() => {
        onHoverIn && onHoverIn()
      }, [onHoverIn])

      const onPressCb = useCallback(() => {
        dispatch(allowChannelAutoFocus())
        const f = I || selected

        // if (tag.href && tag.href !== '#' && f) {
        //   q(tag.id)
        // }
        dispatch(dismissAllStackedChannels())
      }, [])

      const preventLocalNavigation = I ? false : !selected

      const Icon = useMemo(
        () => (
          <WorkGalahadUIAppTabSelectorIcon
            icon={tab.tabIconName}
            selected={selected}
          />
        ),
        [selected, tab.tabIconName],
      )

      const workGalahadUIAppNavButtonProps = {
        href: tab.href ?? undefined,
        elementId: tab.id,
        label: tab.title,
        ariaLabel,
        selected,
        useGreyBadging: isAutoHideEnabled, // || y === 'doNotDisturb',
        onPress: onPressCb,
        preventLocalNavigation,
        addOn: Icon,
        badgeRenderer: tab.badgeRenderer,
        onHoverIn: onHoverInCb,
        // onHoverOut,
        // onPressIn: F,
      }

      return (
        <WorkGalahadUIAppsListItem ref={ref} withTopSpacing={!isFirst}>
          <WorkGalahadUIAppNavButton {...workGalahadUIAppNavButtonProps} />
        </WorkGalahadUIAppsListItem>
      )
    },
  ),
)

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
