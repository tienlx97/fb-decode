import React from 'react'

import { fbt } from 'fbt'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadUIChannelItem } from './work-galahad-ui-channel-item'
import { ChannelGeminiUIChevronToggle } from '@negiganaito/icons'
import { BookmarkIcon } from '@/icons/channel-gemini-item-icon'

type ChannelGeminiBookmarksToggleItemProps = {
  expanded: boolean
  toggle?: any
}

export function ChannelGeminiBookmarksToggleItem({
  expanded,
  toggle,
}: ChannelGeminiBookmarksToggleItemProps) {
  // const label = expanded ? (
  //   <fbt desc="ChannelGeminiBookmarksToggleItem/See Less">See Less</fbt>
  // ) : (
  //   <fbt desc="ChannelGeminiBookmarksToggleItem/See more">See more</fbt>
  // )

  const label = expanded ? 'See Less' : 'See more'

  return jsx(WorkGalahadUIChannelItem, {
    'aria-expanded': expanded,
    'aria-label': label,
    onPress: toggle,
    addOnSecondary: jsx(ChannelGeminiUIChevronToggle, {
      label: label,
      onPress: toggle,
      expanded: expanded,
    }),
    selected: !1,
    headline: label,
    addOnPrimary: jsx(BookmarkIcon, {
      image: {
        sprited: 2,
        spi: '/assets/workplace/mBwnikJo9mL.png',
        _spi: '/assets/workplace/mBwnikJo9mL.png',
        w: 36,
        h: 36,
        p: '-51px -129px',
        sz: 'auto',
        loggingID: '1069334',
      },
    }),
    testid: void 0,
  })
}
