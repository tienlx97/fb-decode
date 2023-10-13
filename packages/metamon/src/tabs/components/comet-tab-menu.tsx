/* eslint-disable camelcase */
import React from 'react'
import { CometMenu, CometMenuItemSelectable_DEPRECATED } from '@metamon/popover'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometTabMenuProps = {
  menuItems: any[]
  menuSize?: number
  truncate: boolean
}

export function CometTabMenu({
  truncate,
  menuItems,
  menuSize,
}: CometTabMenuProps) {
  return jsx(CometMenu, {
    size: menuSize,
    truncate,
    children: menuItems.map((a, key) => {
      const {
        'aria-label': al,
        badge,
        disabled,
        icon,
        label,
        linkProps,
        onHoverIn,
        onHoverOut,
        onPress,
        onPressIn,
        selected,
        tabRef,
      } = a

      return jsx(
        CometMenuItemSelectable_DEPRECATED,
        {
          'aria-label': al,
          badge,
          disabled,
          href: linkProps?.url ?? undefined, // (!linkProps ? undefined : linkProps.url) ? linkProps.url: undefined,
          icon,
          isSelected: selected ?? false,
          onClick: onPress,
          onHoverIn,
          onHoverOut,
          onPressIn,
          primaryText: label,
          ref: tabRef,
          role: 'menuitemradio',
          routeTarget: !linkProps ? undefined : linkProps.routeTarget,
          target: !linkProps ? undefined : linkProps.target,
          testid: undefined,
        },
        key,
      )
    }),
  })
}
