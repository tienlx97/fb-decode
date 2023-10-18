import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { GeminiNavAndChannelContext } from '@/context/gemini-nav-and-channel-context'
import { makeStyles } from '@griffel/react'

import { WorkGalahadColumnCollapseButton } from './work-galahad-column-collapse-button'

const useStyles = makeStyles({
  buttonBackground: {
    backgroundColor: 'var(--wig-page-background)',
  },
})

export function ChannelGeminiToggle() {
  const classes = useStyles()

  const {
    isAutoHideEnabled,
    isNavHovered,
    onMouseEnter,
    onMouseLeave,
    setIsAutoHideEnabled,
  } = GeminiNavAndChannelContext.useNavUIState()

  const label = isAutoHideEnabled ? 'Keep menu open' : 'Close the menu'

  return jsx(WorkGalahadColumnCollapseButton, {
    classname: classes.buttonBackground,
    columnPosition: 'left',
    mode: isAutoHideEnabled ? 'expand' : 'collapse',
    onClick: () => {
      isAutoHideEnabled ? onMouseEnter() : onMouseLeave()
      setIsAutoHideEnabled(!isAutoHideEnabled)
    },
    tooltipMessage: label,
    'aria-label': label,
    visible: isNavHovered || isAutoHideEnabled,
  })
}
