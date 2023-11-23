import { WorkGalahadUIAppNavButton } from '@/features/navigation-app/components/work-galahad-ui-app-nav-button'
import { WorkGalahadUIAppsListItem } from '@/features/navigation-app/components/work-galahad-ui-apps-list-item'
// eslint-disable-next-line camelcase
import { CometEntryPointPopoverTrigger_Legacy } from '@negiganaito/react-components'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadProfileIcon } from './work-galahad-profile-icon'
import { GeminiUserSettingsMenu } from './gemini-user-settings-menu'

type WorkGalahadAppTabProfileItemProps = {
  isDisabled?: boolean
}

export function WorkGalahadAppTabProfileItem({
  isDisabled = false,
}: WorkGalahadAppTabProfileItemProps) {
  const fullName = 'Le Xuan Tien'

  return jsx(CometEntryPointPopoverTrigger_Legacy, {
    align: 'middle',
    entryPointParams: {},
    popoverEntryPoint: {
      root: GeminiUserSettingsMenu,
    },
    otherProps: {},
    popoverType: 'menu',
    position: 'end',
    children: (ref: any, onPress: any) => {
      return jsx(WorkGalahadUIAppsListItem, {
        ref,
        withTopSpacing: false,
        children: jsx(WorkGalahadUIAppNavButton, {
          label: fullName,
          ariaLabel: fullName,
          elementId: 'profile',
          selected: false,
          // linkDataFT: c('TrackingNodes').getTrackingInfo(404),
          'data-testid': void 0,
          onPress: isDisabled ? emptyFunction : onPress,
          largeAddOn: true,
          addOn: jsx(WorkGalahadProfileIcon, {
            size: 40,
          }),
        }),
      })
    },
  })
}
