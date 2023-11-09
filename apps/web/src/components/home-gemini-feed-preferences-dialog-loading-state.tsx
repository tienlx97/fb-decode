import { HomeGeminiFeedPreferencesConstants } from '@/config/home-gemini-feed-preferences-constants'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import {
  CometCardedDialogLegacy,
  CometCardedDialogLegacyProps,
  CometGlimmer,
} from '@negiganaito/react-components'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

const useStyles = makeStyles({
  anchor: {
    minHeight: '425px',
  },
  animate: {
    animationDuration: 'var(--fds-fast)',
    animationName: {
      '0%': {
        transform: 'scale(.98)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    animationTimingFunction: 'var(--fds-soft)',
  },
  bodyGlimmer: {
    ...shorthands.borderRadius('7px'),
    height: '14px',
    marginBottom: '14px',
  },
  bodyGlimmerContainer: {
    ...shorthands.padding('20px', '20px', '150px', '20px'),
  },
  bodyGlimmerFirst: {
    width: '80%',
  },
  bodyGlimmerSecond: {
    width: '40%',
  },
  root: {
    height: '365px',
  },
  d1: {
    animationDuration: 'var(--fds-fast)',
    animationName: {
      '0%': {
        transform: 'scale(.98)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    animationTimingFunction: 'var(--fds-soft)',
  },

  d2: {
    height: '365px',
  },

  d3: {
    paddingTop: '20px',
    paddingRight: '20px',
    paddingBottom: '150px',
    paddingLeft: '20px',
  },
})

type HomeGeminiFeedPreferencesDialogLoadingStateProps =
  CometCardedDialogLegacyProps

export function HomeGeminiFeedPreferencesDialogLoadingState(
  props: HomeGeminiFeedPreferencesDialogLoadingStateProps,
) {
  const classes = useStyles()

  return jsx('div', {
    className: classes.d1,
    children: jsx(
      CometCardedDialogLegacy,
      Object.assign(
        {
          anchorXStyle: classes.anchor,
          title: HomeGeminiFeedPreferencesConstants.CONTROL_PANEL_DIALOG_TITLE,
          withCloseButton: !0,
        },
        props,
        {
          children: jsx('div', {
            className: classes.d2,
            children: jsxs('div', {
              className: classes.d3,
              children: [
                jsx(CometGlimmer, {
                  index: 1,
                  className: mergeClasses(
                    classes.bodyGlimmer,
                    classes.bodyGlimmerFirst,
                  ),
                }),
                jsx(CometGlimmer, {
                  index: 2,
                  className: mergeClasses(
                    classes.bodyGlimmer,
                    classes.bodyGlimmerSecond,
                  ),
                }),
              ],
            }),
          }),
        },
      ),
    ),
  })
}
