import { makeStyles, mergeClasses } from '@griffel/react'
import { FocusInertRegion, tabbableScopeQuery } from '@negiganaito/focus'
import { BaseScrollableArea } from '@negiganaito/popover'
import { BaseHeadingContextWrapper } from '@negiganaito/text'
import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '50px',
  },
  inert: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxHeight: 'calc(100vh - (2 * var(--dialog-anchor-vertical-padding)))',
    position: 'relative',
    '@media (max-width: 679px)': {
      maxHeight: 'none',
    },
  },
  rootFullHeight: {
    minHeight: 'calc(100vh - (2 * var(--dialog-anchor-vertical-padding)))',
  },
  rootMinHeight: {
    '@media (max-width: 679px)': {
      minHeight: '100vh',
    },
  },
  scrollableArea: {
    flexGrow: 1,
    overscrollBehaviorY: 'auto',
  },

  d0: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '50px',
  },
})

export type CometDialogPageProps = {
  children?: any
  footer?: any
  header?: any
  isContentInert?: boolean
  isFullHeightByDefault?: boolean
  mobileFullHeight?: boolean
  pageXStyle?: any
  scrollAreaRef?: any
}

export const CometDialogPage = ({
  children,
  footer,
  header,
  isContentInert = false,
  isFullHeightByDefault = false,
  mobileFullHeight = true,
  pageXStyle,
  scrollAreaRef,
}: CometDialogPageProps) => {
  const classes = useStyles()

  return jsxs('div', {
    className: mergeClasses(
      classes.root,
      isFullHeightByDefault && classes.rootFullHeight,
      mobileFullHeight && children != null && classes.rootMinHeight,
      pageXStyle,
    ),
    children: [
      header,
      children &&
        jsx(BaseHeadingContextWrapper, {
          children: jsx(BaseScrollableArea, {
            horizontal: !1,
            ref: scrollAreaRef,
            vertical: !0,
            withBottomShadow: !0,
            withTopShadow: !0,
            className: mergeClasses(
              classes.scrollableArea,
              isContentInert && classes.inert,
            ),
            children: jsx(FocusInertRegion, {
              disabled: !isContentInert,
              focusQuery: tabbableScopeQuery,
              children: jsx('div', {
                className: classes.d0,
                children,
              }),
            }),
          }),
        }),
      footer,
    ],
  })
}
