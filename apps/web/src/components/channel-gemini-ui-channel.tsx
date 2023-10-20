import { GeminiNavAndChannelContext } from '@/context/gemini-nav-and-channel-context'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { BaseViewportMarginsContext } from '@negiganaito/context'
import React, { useContext } from 'react'

type ChannelGeminiUIChannelProps = {
  bottom?: any
  children?: any
  hideBottom?: boolean
  hideTop?: boolean
  testid?: string
  listDataFT?: any
  top?: any
}

const useStyles = makeStyles({
  main: {
    alignItems: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin(0),
    minHeight: 0,
    minWidth: 0,
    ...shorthands.padding(0),
    position: 'relative',
    zIndex: 'unset',
    height: '100%',
    backgroundColor: 'var(--wig-nav-background)',
    backgroundImage: 'var(--wig-nav-channel-gradient)',
  },
  mainHovering: {
    backgroundColor: 'var(--wig-nav-background)',
    backgroundImage:
      'linear-gradient(90deg,rgba(255,255,255,0),var(--surface-background))',
  },
  innerShadow: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    ...shorthands.borderRight('1px', 'solid', 'var(--divider)'),
    width: '1px',
    zIndex: 1,
  },
  list: {
    alignItems: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'space-between',
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    minHeight: '0',
    minWidth: '0',
    position: 'relative',
    zIndex: 'unset',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  topSpace: {
    paddingTop: '16px',
  },

  dummy1: {
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  dummy2: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    ...shorthands.borderRight('1px', 'solid', 'var(--divider)'),
    width: '1px',
    zIndex: 1,
  },
})

export const ChannelGeminiUIChannel = ({
  bottom,
  children,
  hideBottom = false,
  hideTop = false,
  testid = 'galahad-channel',
  listDataFT,
  top,
}: ChannelGeminiUIChannelProps) => {
  const classes = useStyles()

  const { isAutoHideEnabled, isChannelVisible } =
    GeminiNavAndChannelContext.useNavUIState()

  //  var o = d("WorkGalahadTopbar").useTopbarHeight()
  const topBarHeight = 0
  const { top: viewPortTop } = useContext(BaseViewportMarginsContext)

  const isChannelVisibleAndAutoHideEnabled =
    isChannelVisible && isAutoHideEnabled

  return (
    <div
      className={mergeClasses(
        classes.main,
        isChannelVisibleAndAutoHideEnabled && classes.mainHovering,
      )}
      data-testid={void 0}
      style={{
        height: 'calc(100vh - ' + (viewPortTop + topBarHeight) + 'px)',
      }}
    >
      {hideTop && top}
      <div
        className={mergeClasses(classes.list, hideTop && classes.topSpace)}
        data-ft={testid}
      >
        {children}
      </div>
      {!hideBottom && <div className={classes.dummy1}>{bottom}</div>}
      {!isChannelVisible && <div className={classes.dummy2} />}
    </div>
  )
}
