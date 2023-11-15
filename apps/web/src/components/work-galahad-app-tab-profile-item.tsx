import { WorkGalahadUIAppNavButton } from '@/features/navigation-app/components/work-galahad-ui-app-nav-button'
import { WorkGalahadUIAppsListItem } from '@/features/navigation-app/components/work-galahad-ui-apps-list-item'
import { CometEntryPointPopoverTrigger_Legacy } from '@negiganaito/index'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadProfileIcon } from './work-galahad-profile-icon'

type WorkGalahadAppTabProfileItemProps = {
  isDisabled?: boolean
}

export function WorkGalahadAppTabProfileItem({
  isDisabled = false,
}: WorkGalahadAppTabProfileItemProps) {
  const d = 'Le Xuan Tien'

  return jsx(CometEntryPointPopoverTrigger_Legacy, {
    align: 'middle',
    entryPointParams: {},
    popoverEntryPoint: `c('GeminiUserSettingsMenu.entrypoint')`,
    otherProps: {},
    popoverType: 'menu',
    position: 'end',
    children: (a: any, onPress: any) => {
      return jsx(WorkGalahadUIAppsListItem, {
        ref: a,
        withTopSpacing: !1,
        children: jsx(WorkGalahadUIAppNavButton, {
          label: d,
          ariaLabel: d,
          elementId: 'profile',
          selected: !1,
          // linkDataFT: c('TrackingNodes').getTrackingInfo(404),
          'data-testid': void 0,
          onPress: isDisabled ? emptyFunction : onPress,
          largeAddOn: !0,
          addOn: jsx(WorkGalahadProfileIcon, {
            size: 40,
          }),
        }),
      })
    },
  })
}
