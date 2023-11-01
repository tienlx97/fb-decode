import React, { forwardRef, useContext, useMemo } from 'react'

import { makeStyles, mergeClasses } from '@griffel/react'
import { isBrowser } from '@negiganaito/utils/user-agent'
import BaseView from './base-view'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { CometColumnContext } from '../context/comet-column-context'

type CometColumnProps = {
  align?: any
  children?: any
  expanding?: boolean
  hasDividers?: boolean
  paddingHorizontal?: any
  paddingTop?: 0 | 4 | 8 | 12 | 16 | 20
  paddingVertical?: 4 | 8 | 12 | 16 | 20
  spacing?: any
  verticalAlign?: 'bottom' | 'center' | 'space-between' | 'top'
  className?: any
}

export const CometColumn = forwardRef<any, CometColumnProps>(
  (
    {
      align = undefined,
      children,
      expanding = false,
      hasDividers = false,
      paddingHorizontal = undefined,
      paddingTop,
      paddingVertical = 0,
      spacing = 0,
      verticalAlign = 'top',
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()
    const verticalAlignClasses = useVerticalAlignStyles()
    const paddingVerticalClasses = usePaddingVertical()
    const paddingTopStyles = usePaddingTopStyles()

    const previousCometColumnContext = useContext(CometColumnContext)
    const cometColumnValue = useMemo(() => {
      return {
        align,
        hasDividers,
        paddingHorizontal,
        spacing,
      }
    }, [align, hasDividers, paddingHorizontal, spacing])

    const CometColumnItemChildren = jsx(
      BaseView,
      Object.assign({}, rest, {
        ref,
        className: mergeClasses(
          classes.root,
          expanding === !0 && classes.expanding,
          expanding === !0 && isIE11OrAbove && classes.expandingIE11,
          // @ts-ignore
          paddingVerticalClasses[paddingVertical],
          paddingTop != null && paddingTopStyles[paddingTop],
          className,
        ),
        children: jsx(BaseView, {
          className: mergeClasses(
            classes.inner,
            verticalAlign !== 'top' && verticalAlignClasses[verticalAlign],
          ),
          children: jsx(CometColumnContext.Provider, {
            value: cometColumnValue,
            children,
          }),
        }),
      }),
    )

    if (previousCometColumnContext != null) {
      return jsx('CometColumnItem', {
        expanding: expanding ?? undefined,
        children: CometColumnItemChildren,
      })
    }
    return CometColumnItemChildren
  },
)

const useStyles = makeStyles({
  expanding: {
    flexBasis: '100%',
    flexGrow: '1',
    flexShrink: '1',
    minHeight: '0',
  },
  expandingIE11: {
    flexBasis: 'auto',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: 0,
  },
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    maxWidth: '100%',
  },
})

const usePaddingTopStyles = makeStyles({
  0: {
    paddingTop: '0',
  },
  4: {
    paddingTop: '4px',
  },
  8: {
    paddingTop: '8px',
  },
  12: {
    paddingTop: '12px',
  },
  16: {
    paddingTop: '16px',
  },
  20: {
    paddingTop: '20px',
  },
})

const usePaddingVertical = makeStyles({
  4: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  8: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  12: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  16: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  20: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
})

const useVerticalAlignStyles = makeStyles({
  bottom: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
})

const isIE11OrAbove = isBrowser('IE >= 11')
