import { mergeClasses } from '@griffel/react'
import { WorkCometInteractiveElementContext } from '@negiganaito/context'
import {
  BaseFocusRing,
  WorkGalahadChannelFocusableTableCell,
  WorkGalahadChannelFocusableTableRow,
} from '@negiganaito/focus'
import { useHoverAndFocusState } from '@negiganaito/hooks'
import { useCometPreloaderImpl } from '@negiganaito/popover'
import { CometPressable, CometPressableOverlay } from '@negiganaito/pressable'
import { TetraTextPairing } from '@negiganaito/text'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { useDummyStyles, useStyles } from './styles'

export type WorkGalahadUIChannelItemProps = {
  addOnPrimary?: any
  addOnSecondary?: any
  addOnTertiary?: any
  disabled?: boolean
  emphasized?: boolean
  selected?: boolean
  indentationLevel?: number
  linkProps?: any
  body?: any
  bodyColor?: string
  bodyLineLimit?: number
  headline?: any
  headlineAddOn?: any
  headlineColor?: string
  headlineLineLimit?: number
  meta?: any
  metaColor?: string
  metaLineLimit?: number
  metaLocation?: any
  onPress?: any
  onPressIn?: any
  onHoverIn?: any
  onHoverOut?: any
  onFocusIn?: any
  onFocusOut?: any
  isSemanticListItem?: boolean
  testid?: string
  wrapperRef?: any
  onPreload?: any
  focusableRole?: any
  role?: string
}

const isRTL = false

const o = emptyFunction
const p = true // c('gkx')('875'),
const WorkGalahadUIChannelItem = forwardRef<any, WorkGalahadUIChannelItemProps>(
  (
    {
      addOnPrimary,
      addOnSecondary,
      addOnTertiary,
      disabled = false,
      emphasized = false,
      selected = false,
      indentationLevel = 2,
      linkProps = {},
      body,
      bodyColor,
      bodyLineLimit = 1,
      headline,
      headlineAddOn,
      headlineColor,
      headlineLineLimit = 1,
      meta,
      metaColor,
      metaLineLimit,
      metaLocation,
      onPress,
      onPressIn,
      onHoverIn,
      onHoverOut,
      onFocusIn,
      onFocusOut,
      isSemanticListItem = true,
      testid,
      wrapperRef,
      onPreload,
      focusableRole,
      role,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()
    const dummyClasses = useDummyStyles()

    const { url, ...restLinkProps } = linkProps

    const [pressed, R] = useState(!1)

    const {
      focused: focusVisible,
      hovered: hovered,
      onFocusIn: U,
      onFocusOut: V,
      onHoverIn: onMouseEnter,
      onHoverOut: onMouseLeave,
    } = useHoverAndFocusState()
    // var S = hoverAndFocusState.focused,
    //   T = hoverAndFocusState.hovered,
    //   U = hoverAndFocusState.onFocusIn,
    //   V = hoverAndFocusState.onFocusOut,
    //   fa = hoverAndFocusState.onHoverIn,
    //   ga = hoverAndFocusState.onHoverOut

    const N: any = o()

    const workCometInteractiveElementValue = useMemo(() => {
      return {
        hovered: hovered,
        focused: focusVisible,
        pressed: pressed,
      }
    }, [hovered, focusVisible, pressed])

    var W = useCallback(() => {
      onPreload && p && onPreload()
    }, [onPreload])

    const [X, Y, _] = useCometPreloaderImpl('button_aggressive', void 0, W)

    const ha = useCallback(
      function (a: any) {
        X(a)
        onHoverIn && onHoverIn(a)
      },
      [onHoverIn, X],
    )

    const ia = useCallback(
      function (a: any) {
        Y()
        onHoverOut && onHoverOut(a)
      },
      [onHoverOut, Y],
    )

    const ja = useCallback(
      function (a: any) {
        U(a)
        onFocusIn && onFocusIn(a)
      },
      [onFocusIn, U],
    )

    const ka = useCallback(
      function (a: any) {
        V(a)
        onFocusOut && onFocusOut(a)
      },
      [onFocusOut, V],
    )

    const la = useCallback(
      function (a: any) {
        R(!0)
        onPressIn && onPressIn(a)
      },
      [onPressIn],
    )

    const ma = useCallback(() => {
      return R(!1)
    }, [])

    const Z = jsxs(React.Fragment, {
      children: [
        addOnPrimary &&
          jsx('div', {
            className: mergeClasses(
              classes.addOnPrimary,
              (N == null ? void 0 : N.isWithinDrawer) &&
                classes.addOnPrimaryDrawer,
            ),
            children: addOnPrimary,
          }),
        jsx('div', {
          'data-testid': void 0,
          className: dummyClasses.dummy1,
          children: jsx(TetraTextPairing, {
            body,
            bodyColor,
            bodyLineLimit,
            headline,
            headlineAddOn,
            headlineColor,
            headlineLineLimit,
            level: 4,
            meta,
            metaColor,
            metaLineLimit,
            metaLocation,
            reduceEmphasis: emphasized === !1,
          }),
        }),
      ],
    })

    const ListItemComp = isSemanticListItem ? 'li' : 'div'
    const $ = onPress || url != null

    return jsx(WorkGalahadChannelFocusableTableRow, {
      children: jsx(WorkCometInteractiveElementContext.Provider, {
        value: workCometInteractiveElementValue,
        children: jsx(BaseFocusRing, {
          children: (clazz: any) => {
            let e

            return jsxs(ListItemComp, {
              ref: wrapperRef,
              role: role ?? ($ && isSemanticListItem ? 'row' : void 0),
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              className: mergeClasses(
                classes.root,
                r(
                  {
                    indentationLevel: indentationLevel,
                  },
                  classes,
                ),
                focusVisible && clazz,
                selected && classes.selected,
              ),
              children: [
                $ &&
                  jsx(CometPressableOverlay, {
                    focusVisible: focusVisible,
                    hovered: hovered,
                    pressed: pressed,
                  }),

                $
                  ? jsx(WorkGalahadChannelFocusableTableCell, {
                      children: jsx('div', {
                        className: dummyClasses.dummy2,
                        role:
                          focusableRole ??
                          (isSemanticListItem ? 'gridcell' : void 0),
                        children: jsx(
                          CometPressable,
                          Object.assign(
                            {
                              testid: void 0,
                            },
                            rest,
                            {
                              display: 'block',
                              disabled: disabled,
                              linkProps: url
                                ? Object.assign({}, restLinkProps, {
                                    // url: (i || (i = c('URI'))).normalize(w),
                                    prefetchQueries: p,
                                    url,
                                  })
                                : void 0,
                              onHoverIn: ha,
                              onHoverOut: ia,
                              onFocusIn: ja,
                              onFocusOut: ka,
                              onPress: onPress,
                              onPressIn: la,
                              onPressOut: ma,
                              overlayDisabled: !0,
                              ref,
                              suppressFocusRing: !0,
                              className: classes.content,
                              children: Z,
                            },
                          ),
                        ),
                      }),
                    })
                  : jsx('div', {
                      className: dummyClasses.dummy3,
                      children: Z,
                    }),

                addOnSecondary &&
                  jsx('div', {
                    className: mergeClasses(
                      classes.addOnSecondary,
                      isRTL
                        ? classes.addOnSecondaryOffsetRTL
                        : classes.addOnSecondaryOffset,
                    ),
                    children: addOnSecondary,
                  }),

                addOnTertiary &&
                  jsx('div', {
                    className: dummyClasses.dummy4,
                    children: addOnTertiary,
                  }),
              ],
            })
          },
        }),
      }),
    })
  },
)

function r({ indentationLevel }: any, classes: any) {
  if (indentationLevel === 1) {
    return classes.indentationLevel1
  } else if (indentationLevel === 2) {
    return classes.indentationLevel2
  } else if (indentationLevel === 3) {
    return classes.indentationLevel3
  }
}

export default WorkGalahadUIChannelItem
