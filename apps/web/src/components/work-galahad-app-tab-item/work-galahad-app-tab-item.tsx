'use client'

import { usePathname } from 'next/navigation'
import React, { forwardRef, useMemo } from 'react'
import { Icon, IconWith } from 'ui'

import { WorkGalahadUIAppsListItem } from '../work-galahad-ui-apps-list-item'
import { WorkGalahadUIAppNavButton } from '../work-galahad-ui-app-nav-button'

type Props = {
  title: string
  id: string
  href: string
  icon: string
  isFirst: boolean
  onHoverIn?: (...param: any) => any
  onHoverOut?: (...param: any) => any
  onPressIn?: (...param: any) => any
  onPress?: (...param: any) => any
  badgeRenderer?: any
}

const m = new Set(['knowledge', 'home'])

const WorkGalahadAppTabItem = forwardRef<HTMLDivElement, Props>(
  ({ href, icon, id, title, isFirst, ...rest }, ref) => {
    const pathName = usePathname()

    const selected = pathName.startsWith(href)

    const I = m.has(id)
    const preventLocalNavigation = I ? !1 : !selected

    const Icon = useMemo(
      () => (
        <WorkGalahadUIAppTabSelectorIcon iconName={icon} selected={selected} />
      ),
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

export default WorkGalahadAppTabItem

// tekax29574@ipnuc.com

// WorkGalahadAppTabItem.react WorkGalahadUIAppTabSelectorIcon.react

type WorkGalahadUIAppTabSelectorIconProps = {
  selected: boolean
  iconName: string
}

const WorkGalahadUIAppTabSelectorIcon = ({
  iconName,
  selected,
}: WorkGalahadUIAppTabSelectorIconProps) => {
  // return (
  //   <IconWith
  //     color={
  //       selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
  //     }
  //     fill={
  //       selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
  //     }
  //     name={iconName}
  //     width={32}
  //     height={32}
  //   />
  // )
  return (
    <Icon
      color={
        selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
      }
      fill={
        selected ? 'var(--primary-button-background)' : 'var(--secondary-icon)'
      }
      name={(iconName + `${selected ? '-fill' : '-outline'}`) as any}
      width={32}
      height={32}
    />
  )
}
