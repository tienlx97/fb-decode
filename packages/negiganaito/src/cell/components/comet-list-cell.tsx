/*
__d("CometListCell.react", 
  ["BaseDivider.react", "BaseListCell.react", "CometListCellContext", "CometRowContext", "CometRowItem.react", "react"], (function(a, b, c, d, e, f, g) {

*/

import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometRowItem } from '@negiganaito/common'
import { CometRowContext } from '@negiganaito/common/context/comet-row-context'
import { CometListCellContext } from '@negiganaito/context'
import { BaseDivider } from '@negiganaito/dialog'
import { forwardRef, useMemo } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { BaseListCell } from './base-list-cell'

const useStyles = makeStyles({
  addOnStartMargin: {
    marginTop: '-4px',
  },
})

const useContentPaddingHorizontalStyles = makeStyles({
  4: {
    paddingLeft: '4px',
    paddingRight: '-4px',
  },
  8: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  12: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  16: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})

const usePaddingVerticalStyles = makeStyles({
  4: {
    paddingBottom: '4px',
    paddingTop: '4px',
  },
  8: {
    paddingBottom: '8px',
    paddingTop: '8px',
  },
  12: {
    paddingBottom: '12px',
    paddingTop: '12px',
  },
  16: {
    paddingBottom: '16px',
    paddingTop: '16px',
  },
})

const useSpacingHorizontalStyles = makeStyles({
  4: {
    marginLeft: '-2px',
    marginRight: '-2px',
  },
  8: {
    marginLeft: '-4px',
    marginRight: '-4px',
  },
  12: {
    marginLeft: '-6px',
    marginRight: '-6px',
  },
  16: {
    marginLeft: '-8px',
    marginRight: '-8px',
  },
  24: {
    marginLeft: '-12px',
    marginRight: '-12px',
  },
  32: {
    marginLeft: '-16px',
    marginRight: '-16px',
  },
})

const useSpacingVerticalStyles = makeStyles({
  4: {
    marginBottom: '-2px',
    marginTop: '-2px',
  },
  8: {
    marginBottom: '-4px',
    marginTop: '-4px',
  },
  12: {
    marginBottom: '-6px',
    marginTop: '-6px',
  },
  16: {
    marginBottom: '-8px',
    marginTop: '-8px',
  },
  24: {
    marginLeft: '-12px',
    marginRight: '-12px',
  },
  32: {
    marginLeft: '-16px',
    marginRight: '-16px',
  },
})

type CometListCellProps = {
  addOnBottom?: any
  addOnBottomResponsive?: boolean
  addOnEnd?: any
  addOnEndVerticalAlign?: any
  addOnStart?: any
  addOnStartMarginTop?: any
  addOnStartVerticalAlign?: any
  content?: any
  contentId?: any
  contentPaddingHorizontal?: any
  disabled?: any
  hasBottomDivider?: any
  level?: any
  nestedSpacing?: any
  paddingVertical?: any
  spacingHorizontal?: any
  spacingVertical?: any
  testid?: any
  verticalAlign?: any
}

export const CometListCell = forwardRef<any, CometListCellProps>(
  (
    {
      addOnBottom,
      addOnBottomResponsive = false,
      addOnEnd,
      addOnEndVerticalAlign,
      addOnStart,
      addOnStartMarginTop,
      addOnStartVerticalAlign,
      content,
      contentId,
      contentPaddingHorizontal = 0,
      disabled,
      hasBottomDivider = false,
      level = 3,
      nestedSpacing,
      paddingVertical = 12,
      spacingHorizontal = 12,
      spacingVertical = 12,
      testid,
      verticalAlign = 'center',
    },
    ref,
  ) => {
    const classes = useStyles()

    const l = useContentPaddingHorizontalStyles()
    const m = usePaddingVerticalStyles()
    const n = useSpacingHorizontalStyles()
    const o = useSpacingVerticalStyles()

    const z = useMemo(() => {
      return {
        disabled,
        level,
      }
    }, [disabled, level])

    const C = useMemo(() => {
      return {
        spacingHorizontal,
        spacingVertical,
      }
    }, [spacingHorizontal, spacingVertical])

    return jsx(CometListCellContext.Provider, {
      value: z,
      children: jsxs(CometRowContext.Provider, {
        value: C,
        children: [
          jsx(BaseListCell, {
            addOnBottom: addOnBottom
              ? jsx(CometRowItem, {
                  children: addOnBottom,
                })
              : void 0,
            addOnBottomResponsive: addOnBottomResponsive,
            addOnEnd: addOnEnd
              ? jsx(CometRowItem, {
                  verticalAlign: addOnEndVerticalAlign,
                  children: addOnEnd,
                })
              : void 0,
            addOnEndVerticalAlign: addOnEndVerticalAlign,
            addOnStart: addOnStart
              ? jsx(CometRowItem, {
                  verticalAlign: addOnStartVerticalAlign,
                  className:
                    addOnStartMarginTop !== 0 && classes.addOnStartMargin,
                  children: addOnStart,
                })
              : void 0,
            addOnStartVerticalAlign: addOnStartVerticalAlign,
            content: jsx(CometRowItem, {
              children: content,
            }),
            contentId: contentId,
            nestedSpacing: nestedSpacing,
            ref,
            testid: void 0,
            verticalAlign: verticalAlign,
            className: mergeClasses(
              // @ts-ignore
              l[contentPaddingHorizontal],
              // @ts-ignore
              m[paddingVertical],
              // @ts-ignore
              n[spacingHorizontal],
              // @ts-ignore
              o[spacingVertical],
            ),
          }),
          hasBottomDivider && jsx(BaseDivider, {}),
        ],
      }),
    })
  },
)
