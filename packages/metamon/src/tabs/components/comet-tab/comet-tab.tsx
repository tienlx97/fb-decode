/* eslint-disable camelcase */
import { mergeClasses } from '@griffel/react'
import { CometNonBreakingSpace } from '@negiganaito/common'
import { CometFocusGroupContext } from '@negiganaito/context'
import {
  useIntersectionObserver,
  useMergeRefs,
  useUnsafeRef_DEPRECATED,
} from '@negiganaito/hooks'
import { CometIcon } from '@negiganaito/image'
import { CometPressable } from '@negiganaito/pressable'
import { CometTextWithIcon, TetraText } from '@negiganaito/text'
import React, { forwardRef, useCallback, useContext, useState } from 'react'
import { flushSync } from 'react-dom'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { useStyles } from './styles'

type CometTabProps = {
  badge?: any
  badgeCap?: any
  containerRef?: any
  highlightColor?: string
  icon?: any
  iconColor?: string
  iconLocation?: string
  iconSize?: number
  label?: string
  labelIsHidden?: boolean
  onHidden?: any
  pressableXStyle?: any
  preventDisableWhenHidden?: boolean
  reduceEmphasis?: boolean
  selected?: boolean
  tabRef?: any
  underlineColor?: string
  className?: string
  //
  'aria-haspopup'?: string
  onPress?: any
  overlayOffset?: any
  overlayRadius?: any
  role?: string
  testid?: string
  linkProps?: any
}

const _2333 = true // c('gkx')('2333')

const CometTab = forwardRef<any, CometTabProps>(
  (
    {
      badge,
      badgeCap,
      containerRef,
      highlightColor,
      icon,
      iconColor = 'secondary',
      iconLocation = 'right',
      iconSize = 16,
      label,
      labelIsHidden = false,
      onHidden,
      pressableXStyle,
      preventDisableWhenHidden = false,
      reduceEmphasis = false,
      selected = false,
      tabRef,
      underlineColor,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const [E, F] = useState(preventDisableWhenHidden ? !1 : !_2333)

    const G = useUnsafeRef_DEPRECATED(onHidden)

    G.current = onHidden

    const { FocusItem } = useContext(CometFocusGroupContext)

    const targetObserver = useCallback(
      function ({ intersectionRatio }: any) {
        const b = intersectionRatio < 0.5
        ;(!_2333 || b !== E) &&
          flushSync(function () {
            F(b), G.current && G.current(b)
          })
      },
      [E, G],
    )

    const intersectionObserverRef = useIntersectionObserver(targetObserver, {
      root: containerRef
        ? function () {
            return containerRef.current
          }
        : null,
      threshold: 0.5,
    })

    let f =
      !labelIsHidden && badge != null
        ? typeof badge === 'number'
          ? jsxs(React.Fragment, {
              children: [
                label,
                jsx(CometNonBreakingSpace, {
                  size: 0.75,
                }),
                jsx(TetraText, {
                  color: selected ? 'highlight' : 'secondary',
                  type: 'body4',
                  children:
                    badgeCap != null && badge > badgeCap
                      ? badgeCap + '+'
                      : badge,
                }),
              ],
            })
          : jsx(CometTextWithIcon, {
              iconAfter: badge,
              spacing: 0.75,
              children: label,
            })
        : labelIsHidden
        ? null
        : label

    selected &&
      highlightColor != null &&
      (f = jsx('span', {
        style: {
          color: highlightColor,
        },
        children: f,
      }))

    reduceEmphasis
      ? (f = jsx(TetraText, {
          color: selected ? 'highlight' : 'secondary',
          type: 'body3',
          children: f,
        }))
      : (f = jsx(TetraText, {
          color: selected ? 'highlight' : 'secondary',
          type: 'bodyLink3',
          children: f,
        }))

    const e =
      icon != null && iconLocation === 'left'
        ? jsx('div', {
            className: mergeClasses(
              classes.icon,
              !labelIsHidden &&
                (iconSize === 16 ? classes.iconStart : classes.iconStart8),
            ),
            children: jsx(CometIcon, {
              color: selected ? 'highlight' : iconColor,
              icon: icon,
              size: iconSize,
            }),
          })
        : null

    const j =
      icon != null && iconLocation === 'right'
        ? jsx('div', {
            className: mergeClasses(
              classes.icon,
              (e != null || !labelIsHidden) &&
                (iconSize === 16 ? classes.iconEnd : classes.iconEnd8),
            ),
            children: jsx(CometIcon, {
              color: selected ? 'highlight' : iconColor,
              icon: icon,
              size: iconSize,
            }),
          })
        : null

    const mergeRef = useMergeRefs(
      preventDisableWhenHidden ? void 0 : intersectionObserverRef,
      ref,
      tabRef,
    )

    const r = jsxs('div', {
      className: mergeClasses(classes.tab, className),
      ref: mergeRef,
      children: [
        e,
        f,
        j,
        jsx('div', {
          className: mergeClasses(selected && classes.selected),
          style: {
            backgroundColor: selected ? underlineColor : void 0,
          },
        }),
      ],
    })

    if (rest.onPress != null || rest.linkProps != null) {
      const pressable = jsx(
        CometPressable,
        Object.assign({}, rest, {
          'aria-hidden': E,
          'aria-selected': selected,
          disabled: E,
          display: 'inline',
          focusable: !E,
          label: labelIsHidden ? label : void 0,
          overlayDisabled: selected,
          ref: mergeRef,
          role: 'tab',
          className: mergeClasses(classes.pressable, pressableXStyle),
          children: r,
        }),
      )
      return FocusItem && !E
        ? jsx(FocusItem, {
            children: pressable,
          })
        : pressable
    }

    return r
  },
)

export default CometTab
