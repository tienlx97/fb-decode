import React, { forwardRef } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { BaseSwitch } from '../base-switch'
import { mergeClasses } from '@griffel/react'
import { useStyles } from './styles'
import { BaseRow, BaseRowItem, BaseView } from '@negiganaito/common'

// @ts-ignore
interface BaseStyledSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any
  onValueChange?: (value: string, event?: React.ChangeEvent<HTMLElement>) => any
  size?: 'small' | 'medium' | undefined
  suppressFocusRing?: boolean
  testid?: string
  value: boolean | undefined
}

const isRTL = false

const BaseStyledSwitch = forwardRef<HTMLElement, BaseStyledSwitchProps>(
  (
    {
      disabled = false,
      icon,
      onClick,
      onValueChange,
      size = 'medium',
      tabIndex,
      testid,
      value,
      suppressFocusRing,
      className,
      ...rest
    },
    ref,
  ) => {
    const isSizeSmall = size === 'small'

    const classes = useStyles()

    return jsx(
      BaseSwitch,
      Object.assign({}, rest, {
        checked: value,
        disabled,
        onClick,
        onValueChange,
        ref,
        suppressFocusRing,
        tabIndex,
        testid: undefined,
        className: mergeClasses(
          classes.switch,
          isSizeSmall && classes.switchSmall,
          disabled && classes.disabled,
          className,
        ),
        children: jsxs(BaseView, {
          className: mergeClasses(
            classes.innerShadow,
            isSizeSmall && classes.switchSmall,
            className,
          ),
          children: [
            jsx(BaseView, {
              className: mergeClasses(
                classes.background,
                value && classes.backgroundActive,
              ),
            }),
            jsx(BaseView, {
              className: mergeClasses(
                classes.slider,
                isSizeSmall && classes.sliderSmall,
                value && classes.sliderActive,
                //
                value && classes.sliderActiveRight,
                value && isSizeSmall && classes.sliderActiveRightSmall,
                // value && isRTL && classes.sliderActiveLeft,
                // value && isRTL && isSizeSmall && classes.sliderActiveLeftSmall,
                //
                // value && !isRTL && classes.sliderActiveRight,
                // // @ts-ignore
                // value && !isRTL && isSizeSmall & classes.sliderActiveRightSmall,
              ),
              children:
                icon &&
                jsx(BaseRow, {
                  align: 'center',
                  expanding: true,
                  verticalAlign: 'center',
                  className: classes.sliderIconContainer,
                  children: jsx(BaseRowItem, {
                    expading: true,
                    verticalAlign: 'center',
                    className: classes.alignIcon,
                    children: icon,
                  }),
                }),
            }),
          ],
        }),
      }),
    )
  },
)

export default BaseStyledSwitch

/*

__d(
  'BaseStyledSwitch.react',
  [
    'BaseRow.react',
    'BaseRowItem.react',
    'BaseSwitch.react',
    'BaseView.react',
    'Locale',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react'),
      i = d('Locale').isRTL(),
      j = {
        alignIcon: {
          alignItems: 'x6s0dn4',
          $$css: !0,
        },
        background: {
          backgroundColor: 'xvs79uf',
          bottom: 'x1ey2m1c',
          boxSizing: 'x9f619',
          end: 'xds687c',
          opacity: 'xg01cxk',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          transitionDuration: 'x1eub6wo',
          transitionProperty: 'x19991ni',
          transitionTimingFunction: 'x1d72o',
          $$css: !0,
        },
        backgroundActive: {
          opacity: 'x1hc1fzr',
          transitionDuration: 'xii2z7h',
          transitionTimingFunction: 'x1r7x56h',
          $$css: !0,
        },
        disabled: {
          opacity: 'xti2d7y',
          transitionDuration: 'xii2z7h',
          transitionTimingFunction: 'x1r7x56h',
          $$css: !0,
        },
        innerShadow: {
          borderTopStartRadius: 'xhw592a',
          borderTopEndRadius: 'xwihvcr',
          borderBottomEndRadius: 'x7wuybg',
          borderBottomStartRadius: 'xb9tvrk',
          boxShadow: 'xzdp66v',
          height: 'x1fgtraw',
          width: 'xvni27',
          $$css: !0,
        },
        slider: {
          backgroundColor: 'x14hiurz',
          borderTopStartRadius: 'xyi19xy',
          borderTopEndRadius: 'x1ccrb07',
          borderBottomEndRadius: 'xtf3nb5',
          borderBottomStartRadius: 'x1pc53ja',
          boxShadow: 'x3bazc0',
          height: 'xxk0z11',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'xb1c2wi',
          top: 'xs7f9wi',
          transitionDuration: 'x1eub6wo',
          transitionProperty: 'x11xpdln',
          transitionTimingFunction: 'x1d72o',
          width: 'xvy4d1p',
          $$css: !0,
        },
        sliderActive: {
          transitionDuration: 'xii2z7h',
          transitionTimingFunction: 'x1r7x56h',
          $$css: !0,
        },
        sliderActiveLeft: {
          transform: 'x92xnlw',
          $$css: !0,
        },
        sliderActiveLeftSmall: {
          transform: 'x13gy369',
          $$css: !0,
        },
        sliderActiveRight: {
          transform: 'x13t98kf',
          $$css: !0,
        },
        sliderActiveRightSmall: {
          transform: 'x13n5tbt',
          $$css: !0,
        },
        sliderIconContainer: {
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
        sliderSmall: {
          height: 'x1qx5ct2',
          width: 'xw4jnvo',
          $$css: !0,
        },
        switch: {
          backgroundColor: 'x14nfmen',
          borderTopStartRadius: 'xhw592a',
          borderTopEndRadius: 'xwihvcr',
          borderBottomEndRadius: 'x7wuybg',
          borderBottomStartRadius: 'xb9tvrk',
          boxSizing: 'x9f619',
          display: 'x1rg5ohu',
          height: 'x1fgtraw',
          opacity: 'x1hc1fzr',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          transitionDuration: 'x1eub6wo',
          transitionProperty: 'x19991ni',
          transitionTimingFunction: 'x1d72o',
          width: 'xvni27',
          $$css: !0,
        },
        switchSmall: {
          borderTopStartRadius: 'xyi19xy',
          borderTopEndRadius: 'x1ccrb07',
          borderBottomEndRadius: 'xtf3nb5',
          borderBottomStartRadius: 'x1pc53ja',
          height: 'xxk0z11',
          width: 'x187nhsf',
          $$css: !0,
        },
      }
    function a(a, b) {
      var d,
        e = a.disabled
      e = e === void 0 ? !1 : e
      var f = a.icon,
        g = a.onClick,
        k = a.onValueChange,
        l = a.size
      l = l === void 0 ? 'medium' : l
      var m = a.suppressFocusRing,
        n = a.tabIndex,
        o = a.testid
      o = a.value
      var p = a.xstyle
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'disabled',
        'icon',
        'onClick',
        'onValueChange',
        'size',
        'suppressFocusRing',
        'tabIndex',
        'testid',
        'value',
        'xstyle',
      ])
      l = l === 'small'
      return h.jsx(
        c('BaseSwitch.react'),
        babelHelpers['extends']({}, a, {
          checked: o,
          disabled: e,
          onClick: g,
          onValueChange: k,
          ref: b,
          suppressFocusRing: m,
          tabIndex: n,
          testid: void 0,
          xstyle: [j['switch'], l && j.switchSmall, e && j.disabled, p],
          children: h.jsxs(c('BaseView.react'), {
            xstyle: [j.innerShadow, l && j.switchSmall, p],
            children: [
              h.jsx(c('BaseView.react'), {
                xstyle: [j.background, o && j.backgroundActive],
              }),
              h.jsx(c('BaseView.react'), {
                xstyle: [
                  j.slider,
                  l && j.sliderSmall,
                  o && j.sliderActive,
                  o &&
                    (i
                      ? [j.sliderActiveLeft, l && j.sliderActiveLeftSmall]
                      : [j.sliderActiveRight, l && j.sliderActiveRightSmall]),
                ],
                children:
                  f == null
                    ? null
                    : h.jsx(c('BaseRow.react'), {
                        align: 'center',
                        expanding: !0,
                        verticalAlign: 'center',
                        xstyle: j.sliderIconContainer,
                        children: h.jsx(c('BaseRowItem.react'), {
                          expanding: !0,
                          verticalAlign: 'center',
                          xstyle: j.alignIcon,
                          children: f,
                        }),
                      }),
              }),
            ],
          }),
        }),
      )
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    b = h.forwardRef(a)
    g['default'] = b
  },
  98,
)


*/
