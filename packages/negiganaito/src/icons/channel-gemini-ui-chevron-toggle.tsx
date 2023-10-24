// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPressable } from '@negiganaito/pressable'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometIcon, fbicon } from '@negiganaito/image'

const useStyles = makeStyles({
  icon: {
    alignItems: 'stretch',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
    justifyContent: 'space-between',
    minHeight: '0',
    minWidth: '0',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    position: 'relative',
    zIndex: 0,
    flexGrow: '0',
    marginTop: '6px',
    marginRight: '6px',
    marginBottom: '6px',
    marginLeft: '6px',
    transitionProperty: 'transform',
    transitionDuration: 'var(--fds-fast)',
    transitionTimingFunction: 'var(--fds-soft)',
    outlineStyle: 'none',
  },
  expanded: {
    transform: 'rotateZ(90deg)',
  },
  expandedRtl: {
    transform: 'rotateZ(-90deg)',
  },
  collapsed: {
    transform: 'rotateZ(0deg)',
  },
})

type ChannelGeminiUIChevronToggleProps = {
  disabled?: boolean
  expanded?: boolean
  label?: any
  onPress?: any
  className?: string
}

const isRTL = false

export function ChannelGeminiUIChevronToggle({
  disabled,
  expanded,
  label,
  onPress,
  className,
}: ChannelGeminiUIChevronToggleProps) {
  const classes = useStyles()

  return jsx(CometPressable, {
    'aria-label': label,
    'aria-hidden': !0,
    display: 'inline',
    onPress: disabled === !0 ? void 0 : onPress,
    overlayDisabled: !0,
    disabled: disabled,
    className: mergeClasses(
      classes.icon,
      expanded && !isRTL && classes.expanded,
      expanded && isRTL && classes.expandedRtl,
      !expanded && classes.collapsed,
      className,
    ),
    children: jsx(CometIcon, {
      color: disabled === !0 ? 'disabled' : 'secondary',
      icon: isRTL
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/workplace/90xNA5Li0dR.png',
              _spi: '/assets/workplace/90xNA5Li0dR.png',
              w: 12,
              h: 12,
              p: '0 -1410px',
              sz: 'auto',
            },
            12,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/workplace/90xNA5Li0dR.png',
              _spi: '/assets/workplace/90xNA5Li0dR.png',
              w: 12,
              h: 12,
              p: '0 -1423px',
              sz: 'auto',
            },
            12,
          ),
    }),
  })
}
