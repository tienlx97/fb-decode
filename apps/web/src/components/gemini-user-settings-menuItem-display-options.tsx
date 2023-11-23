import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadDisplayMenu } from './work-galahad-display-menu'

type GeminiUserSettingsMenuItemDisplayOptionsProps = {
  item?: any
}

export function GeminiUserSettingsMenuItemDisplayOptions({
  item,
}: GeminiUserSettingsMenuItemDisplayOptionsProps) {
  // a = a.item
  // d('RelayHooks').useFragment(
  //   h !== void 0
  //     ? h
  //     : (h = b('GeminiUserSettingsMenuItemDisplayOptions_item.graphql')),
  //   a,
  // )
  return jsx(
    WorkGalahadDisplayMenu,
    {
      source: 'PROFILE_MENU_DISPLAY_OPTIONS',
    },
    'appearance-menu',
  )
}
