/* eslint-disable camelcase */

import { CometSwitch } from '@metamon/switch'
import { TetraButton } from '@metamon/button'
import { CometIcon, fbicon } from '@metamon/image'
import React, { createElement } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

export function getEndAddOn(addOn: any, disabled: boolean, level: any) {
  switch (addOn.type) {
    case 'checkbox':
      return checkboxComp(addOn, disabled)
    case 'radio':
      return radioComp(addOn, disabled)
    case 'disclosure':
      return disclosureComp(addOn, disabled, level)
    case 'expander':
      return expanderComp(addOn, disabled, level)
    case 'icon':
      return iconComp(addOn, disabled)
    case 'primary-button':
      return buttonComp(addOn, disabled)
    case 'secondary-button':
      return buttonComp(addOn, disabled)
    case 'switch':
      return switchComp(addOn, disabled)
    case 'more':
      return moreOrCloseComp(addOn, disabled)
    case 'close':
      return moreOrCloseComp(addOn, disabled)
    case 'body':
      return addOn.addOn
  }
}

const isRTL = false

const checkboxComp = function (props: any, disabled: boolean) {
  const { on, onPress, testOnly_pressed, ...rest } = props

  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      'aria-checked': onPress ? on : undefined,
      color: disabled ? 'disabled' : on ? 'highlight' : 'secondary',
      disabled,
      hideHoverOverlay: true,
      icon: on
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '0 -84px',
              sz: 'auto',
            },
            20,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-63px -126px',
              sz: 'auto',
            },
            20,
          ),
      onPress,
      role: onPress ? 'checkbox' : undefined,
      testOnly_pressed,
    }),
  )
}

const radioComp = function (props: any, disabled: any) {
  const { on, onPress, testOnly_pressed, ...rest } = props

  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      'aria-checked': onPress ? on : undefined,
      color: disabled ? 'disabled' : on ? 'highlight' : 'secondary',
      disabled,
      hideHoverOverlay: true,
      icon: on
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-168px -84px',
              sz: 'auto',
            },
            20,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '0 -105px',
              sz: 'auto',
            },
            20,
          ),
      onPress,
      role: onPress ? 'radio' : undefined,
      testOnly_pressed,
    }),
  )
}

const disclosureComp = function (props: any, disabled: any, iconNumber: any) {
  const { text, type, ...rest } = props

  let icon: any

  iconNumber === 3
    ? (icon = isRTL
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 24,
              h: 24,
              p: '-108px -26px',
              sz: 'auto',
            },
            24,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 24,
              h: 24,
              p: '-158px -26px',
              sz: 'auto',
            },
            24,
          ))
    : (icon = isRTL
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-84px -84px',
              sz: 'auto',
            },
            20,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-126px -84px',
              sz: 'auto',
            },
            20,
          ))

  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      color: disabled ? 'disabled' : 'secondary',
      disabled,
      icon,
    }),
  )
}

const expanderComp = function (props: any, disabled: any, e: any) {
  const { children, onPress, open, type, ...rest } = props

  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      color: disabled ? 'disabled' : 'secondary',
      disabled,
      icon: open
        ? fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-147px -84px',
              sz: 'auto',
            },
            20,
          )
        : fbicon(
            {
              sprited: 2,
              spi: '/assets/fb/j9U5vwcadSu.png',
              _spi: '/assets/fb/j9U5vwcadSu.png',
              w: 20,
              h: 20,
              p: '-42px -84px',
              sz: 'auto',
            },
            20,
          ),
      onPress,
    }),
  )
}

const iconComp = function (props: any, disabled: any) {
  const {
    color,
    icon,
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    testOnly_pressed,
    type,
    ...rest
  } = props

  const _color = color ?? 'primary'
  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      color: disabled ? 'disabled' : _color,
      disabled,
      hideHoverOverlay: true,
      icon,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      testOnly_pressed,
    }),
  )
}

const buttonComp = function (props: any, disabled: any) {
  const { labelIsHidden = false, type, ...rest } = props

  const _type = type === 'primary-button' ? 'primary' : 'secondary'

  return createElement(
    TetraButton,
    labelIsHidden
      ? Object.assign(
          {
            disabled,
            labelIsHidden: true,
            type: _type,
          },
          rest,
        )
      : Object.assign(
          {
            disabled,
            type: _type,
          },
          rest,
        ),
  )
}

const switchComp = function (props: any, disabled: any) {
  const { onChange, size, type, value, ...rest } = props

  return jsx(
    CometSwitch,
    Object.assign(
      {
        disabled,
        onClick: onChange ?? function () {},
        size,
        tabIndex: -1,
        value,
      },
      rest,
      {
        children: rest.disabled
          ? `h._('__JHASH__AVRl6ij3kje__JHASH__')`
          : `h._('__JHASH__AOlGHVa_PET__JHASH__')`,
      },
    ),
  )
}

const moreOrCloseComp = function (a: any, disabled: any) {
  const { onPress, type, ...rest } = a

  return jsx(
    CometIcon,
    Object.assign({}, rest, {
      color: disabled ? 'disabled' : 'secondary',
      disabled,
      icon:
        type === 'more'
          ? fbicon(
              {
                sprited: 2,
                spi: '/assets/fb/j9U5vwcadSu.png',
                _spi: '/assets/fb/j9U5vwcadSu.png',
                w: 24,
                h: 24,
                p: '-25px -59px',
                sz: 'auto',
              },
              24,
            )
          : fbicon(
              {
                sprited: 2,
                spi: '/assets/fb/j9U5vwcadSu.png',
                _spi: '/assets/fb/j9U5vwcadSu.png',
                w: 16,
                h: 16,
                p: '-34px -147px',
                sz: 'auto',
              },
              16,
            ),
      onPress,
    }),
  )
}

/*

__d(
  'getListCellAddOn.react',
  [
    'fbt',
    'ix',
    'CometIcon.react',
    'CometSwitch.react',
    'Locale',
    'TetraButton.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict'
    var j = d('react'),
      isRTL = d('Locale').isRTL(),
      l = function (a, b) {
        var e = a.on,
          f = a.onPress,
          g = a.testOnly_pressed
        a.type
        var h = babelHelpers.objectWithoutPropertiesLoose(a, [
          'on',
          'onPress',
          'testOnly_pressed',
          'type',
        ])
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, h, {
            'aria-checked': f != null ? e : void 0,
            color: b ? 'disabled' : e ? 'highlight' : 'secondary',
            disabled: b,
            hideHoverOverlay: !0,
            icon: a.on
              ? d('fbicon')._(i('484757'), 20)
              : d('fbicon')._(i('659288'), 20),
            onPress: f,
            role: f != null ? 'checkbox' : void 0,
            testOnly_pressed: g,
          }),
        )
      },
      m = function (a, b) {
        var e = a.on,
          f = a.onPress,
          g = a.testOnly_pressed
        a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'on',
          'onPress',
          'testOnly_pressed',
          'type',
        ])
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, a, {
            'aria-checked': f != null ? e : void 0,
            color: b ? 'disabled' : e ? 'highlight' : 'secondary',
            disabled: b,
            hideHoverOverlay: !0,
            icon: e
              ? d('fbicon')._(i('621399'), 20)
              : d('fbicon')._(i('545517'), 20),
            onPress: f,
            role: f != null ? 'radio' : void 0,
            testOnly_pressed: g,
          }),
        )
      },
      n = function (a, b, e) {
        a.text
        a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['text', 'type'])
        e === 3
          ? (e = isRTL
              ? d('fbicon')._(i('492521'), 24)
              : d('fbicon')._(i('492575'), 24))
          : (e = isRTL
              ? d('fbicon')._(i('492518'), 20)
              : d('fbicon')._(i('492572'), 20))
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, a, {
            color: b ? 'disabled' : 'secondary',
            disabled: b,
            icon: e,
          }),
        )
      },
      o = function (a, b, e) {
        a.children
        e = a.onPress
        var f = a.open
        a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'onPress',
          'open',
          'type',
        ])
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, a, {
            color: b ? 'disabled' : 'secondary',
            disabled: b,
            icon: f
              ? d('fbicon')._(i('505565'), 20)
              : d('fbicon')._(i('492454'), 20),
            onPress: e,
          }),
        )
      },
      p = function (a, b) {
        var d = a.color,
          e = a.icon,
          f = a.onHoverIn,
          g = a.onHoverOut,
          h = a.onPress,
          i = a.onPressIn,
          k = a.testOnly_pressed
        a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'color',
          'icon',
          'onHoverIn',
          'onHoverOut',
          'onPress',
          'onPressIn',
          'testOnly_pressed',
          'type',
        ])
        d = (d = d) != null ? d : 'primary'
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, a, {
            color: b ? 'disabled' : d,
            disabled: b,
            hideHoverOverlay: !0,
            icon: e,
            onHoverIn: f,
            onHoverOut: g,
            onPress: h,
            onPressIn: i,
            testOnly_pressed: k,
          }),
        )
      },
      q = function (a, b) {
        var d = a.labelIsHidden
        d = d === void 0 ? !1 : d
        var e = a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'labelIsHidden',
          'type',
        ])
        e = e === 'primary-button' ? 'primary' : 'secondary'
        return j.createElement(
          c('TetraButton.react'),
          d
            ? babelHelpers['extends'](
                {
                  disabled: b,
                  labelIsHidden: !0,
                  type: e,
                },
                a,
              )
            : babelHelpers['extends'](
                {
                  disabled: b,
                  type: e,
                },
                a,
              ),
        )
      },
      r = function (a, b) {
        var d = a.onChange,
          e = a.size
        a.type
        var f = a.value
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'onChange',
          'size',
          'type',
          'value',
        ])
        return j.jsx(
          c('CometSwitch.react'),
          babelHelpers['extends'](
            {
              disabled: b,
              onClick: d != null ? d : function () {},
              size: e,
              tabIndex: -1,
              value: f,
            },
            a,
            {
              children:
                a.disabled === !0
                  ? h._('__JHASH__AVRl6ij3kje__JHASH__')
                  : h._('__JHASH__AOlGHVa_PET__JHASH__'),
            },
          ),
        )
      },
      s = function (a, b) {
        var e = a.onPress,
          f = a.type
        a = babelHelpers.objectWithoutPropertiesLoose(a, ['onPress', 'type'])
        return j.jsx(
          c('CometIcon.react'),
          babelHelpers['extends']({}, a, {
            color: b ? 'disabled' : 'secondary',
            disabled: b,
            icon:
              f === 'more'
                ? d('fbicon')._(i('484391'), 24)
                : d('fbicon')._(i('478237'), 16),
            onPress: e,
          }),
        )
      }
    a = function (a, b, c) {
      switch (a.type) {
        case 'checkbox':
          return l(a, b)
        case 'radio':
          return m(a, b)
        case 'disclosure':
          return n(a, b, c)
        case 'expander':
          return o(a, b, c)
        case 'icon':
          return p(a, b)
        case 'primary-button':
          return q(a, b)
        case 'secondary-button':
          return q(a, b)
        case 'switch':
          return r(a, b)
        case 'more':
          return s(a, b)
        case 'close':
          return s(a, b)
        case 'body':
          return a.addOn
      }
    }
    g.getEndAddOn = a
  },
  98,
)

*/
