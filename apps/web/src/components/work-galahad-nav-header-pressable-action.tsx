import React, { useContext } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { ChannelGeminiNavListContext } from '@/context/channel-gemini-nav-list-context'
import { makeStyles, mergeClasses } from '@griffel/react'
import {
  CometPressable,
  CometTooltip,
  TetraText,
} from '@negiganaito/react-components'

const useStyles = makeStyles({
  action: {
    textAlign: 'right',
  },
  actionTransition: {
    opacity: '0',
    transitionProperty: 'opacity',
    transitionDuration: 'var(--fds-fast)',
    transitionTimingFunction: 'var(--fds-soft)',
    ':focus': {
      opacity: 1,
    },
    ':hover': {
      opacity: 1,
    },
  },
  actionTransitionVisible: {
    opacity: 1,
  },
})

type WorkGalahadNavHeaderPressableActionProps = {
  disabled?: boolean
  href?: string
  onClick?: any
  showOnHover?: any
  linkRef?: any
  tooltip?: any
  title?: any
  testid?: string
}

export function WorkGalahadNavHeaderPressableAction({
  disabled,
  href,
  onClick,
  showOnHover,
  linkRef,
  tooltip,
  title,
  testid,
  ...rest
}: WorkGalahadNavHeaderPressableActionProps) {
  const classes = useStyles()

  const { focused, hovered } = useContext(ChannelGeminiNavListContext)

  const linkProps = href
    ? {
        url: href.toString(),
      }
    : undefined

  let child = jsx(
    CometPressable,
    Object.assign({}, rest, {
      disabled,
      display: 'block',
      linkProps: linkProps,
      onPress: onClick,
      overlayDisabled: true,
      ref: linkRef,
      testid: undefined,
      className: mergeClasses(
        classes.action,
        showOnHover && classes.actionTransition,
        (focused || hovered) && classes.actionTransitionVisible,
      ),
      children: jsx(TetraText, {
        color: disabled === !0 ? 'tertiary' : 'highlight',
        type: 'bodyLink4',
        children: title,
      }),
    }),
  )

  tooltip &&
    (child = jsx(CometTooltip, {
      position: 'above',
      tooltip,
      children: child,
    }))

  return child
}
