/* eslint-disable camelcase */

import { CometPressable } from '@fb/components'
import useBaseInputValidators from '@fb/hooks/use-base-input-validators'
import { CometIcon } from '@fb/tetra-icon'
import { CometFormInputWrapper } from '@fb/tetra-text'
import { mergeClasses } from '@griffel/react'
import React, { forwardRef, useState } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseTextInput } from '../base-text-input'
import { useStyles } from './styles'
import { ImageIconSource } from '@fb/tetra-icon'
import CometFormInputPasswordStateIcon from '@fb/tetra-icon/components/comet-form-input-password-state-icon'

type CometFormTextInputProps = {
  autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD?: boolean
  auxContent?: any
  emojiSkittle?: any
  helperText?: any
  helperTextIsHidden?: boolean
  icon?: any
  label?: string
  labelRef?: any
  onValueChange?: (value: string, event: React.ChangeEvent<HTMLElement>) => void
  suppressFocusRing?: boolean
  testid?: string
  validationState?: any
  validator?: any
}

const CometFormTextInput = forwardRef<
  HTMLInputElement,
  CometFormTextInputProps & React.JSX.IntrinsicElements['input']
>(
  (
    {
      autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
      auxContent,
      disabled = false,
      emojiSkittle,
      helperText,
      helperTextIsHidden = false,
      icon,
      inputMode,
      label,
      labelRef,
      maxLength,
      onBlur,
      onClick,
      onFocus,
      onValueChange,
      placeholder,
      readOnly,
      suppressFocusRing,
      type = 'text',
      validationState,
      validator,
      value,
      className,
      autoComplete,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const { topResultReason, topResultType } = useBaseInputValidators({
      validator,
      value: value ?? '',
    })

    const isPassword = type === 'password'

    const [isPress, setPress] = useState(false)

    const isPasswordIcon = isPassword && Boolean(value)

    const PasswordIcon = isPasswordIcon ? (
      <div className={classes.dummy1}>
        <div className={classes.dummy2}>
          <CometPressable onPress={() => setPress(!isPress)} overlayDisabled>
            <CometFormInputPasswordStateIcon isVisible={isPress} />
          </CometPressable>
        </div>
      </div>
    ) : null

    const typeAfterChange = isPassword ? (isPress ? 'text' : 'password') : type
    const normalTopResultType =
      topResultType !== 'CORRECT' ? topResultType : validationState

    return jsx(CometFormInputWrapper, {
      addOnStart:
        (icon &&
          icon instanceof ImageIconSource &&
          icon.height === 40 &&
          jsx('div', {
            className: mergeClasses(classes.icon, classes.largeImageIcon),
            children: jsx('CometImage', {
              height: parseInt(icon.height.toString(), 10),
              src: icon.src,
              width: parseInt(icon.width.toString(), 10),
              className: classes.imageIcon,
            }),
          })) ||
        (icon &&
          jsx('div', {
            className: classes.icon,
            children: jsx(CometIcon, {
              color: 'secondary',
              icon,
            }),
          })) ||
        (emojiSkittle &&
          jsx('div', {
            className: classes.emoji,
            children: emojiSkittle,
          })),
      auxContent: PasswordIcon ?? auxContent,
      cursor: 'text',
      disabled,
      helperText: topResultReason ?? helperText,
      helperTextIsHidden,
      label,
      labelRef,
      suppressFocusRing,
      validationState: normalTopResultType,
      value,
      children: ({ focused, helperTextID, id }: any) => {
        return jsx(
          BaseTextInput,
          Object.assign(
            {},
            {
              'aria-describedby': helperTextID,
              'aria-invalid': normalTopResultType === 'ERROR',
              autoComplete,
              autoFocus: autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
              disabled,
              id,
              inputMode,
              maxLength,
              onBlur,
              onClick,
              onFocus,
              onValueChange,
              placeholder: focused ? placeholder : null,
              readOnly,
              ref,
              suppressFocusRing: true,
              testid: undefined,
              type: typeAfterChange,
              value,
              className: mergeClasses(
                classes.input,
                disabled && classes.disabled,
                readOnly && readOnly === true && classes.readOnly,
                className,
              ),
            },
            rest,
          ),
        )
      },
    })
  },
)

export default CometFormTextInput

/*

__d(
  'CometFormTextInput.react',
  [
    'BaseTextInput.react',
    'CometFormInputPasswordStateIcon.react',
    'CometFormInputWrapper.react',
    'CometIcon.react',
    'CometImage.react',
    'CometPressable.react',
    'ImageIconSource',
    'gkx',
    'react',
    'stylex',
    'useBaseInputValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react'),
      i = d('react').useState
    b = {
      disabled: {
        backgroundColor: 'x1npjb2n',
        color: 'x1dntmbh',
        cursor: 'x1h6gzvc',
        $$css: !0,
      },
      emoji: {
        alignItems: 'x6s0dn4',
        display: 'x78zum5',
        justifyContent: 'xl56j7k',
        paddingStart: 'x1ye3gou',
        pointerEvents: 'x47corl',
        $$css: !0,
      },
      icon: {
        paddingStart: 'x1swvt13',
        paddingTop: 'x109j2v6',
        pointerEvents: 'x47corl',
        $$css: !0,
      },
      imageIcon: {
        borderTopStartRadius: 'x1lq5wgf',
        borderTopEndRadius: 'xgqcy7u',
        borderBottomEndRadius: 'x30kzoy',
        borderBottomStartRadius: 'x9jhf4c',
        boxShadow: 'xlg9a9y',
        $$css: !0,
      },
      input: {
        backgroundColor: 'xjbqb8w',
        borderTop: 'x76ihet',
        borderEnd: 'xwmqs3e',
        borderBottom: 'x112ta8',
        borderStart: 'xxxdfa6',
        boxSizing: 'x9f619',
        color: 'xzsf02u',
        fontSize: 'x1uxerd5',
        fontWeight: 'x1fcty0u',
        lineHeight: 'x132q4wb',
        paddingBottom: 'x1a8lsjc',
        paddingEnd: 'x1pi30zi',
        paddingStart: 'x1swvt13',
        paddingTop: 'x9desvi',
        width: 'xh8yej3',
        '::-ms-clear_display': 'x15h3p50',
        '::-ms-reveal_display': 'x10emqs4',
        $$css: !0,
      },
      largeImageIcon: {
        alignItems: 'x6s0dn4',
        display: 'x78zum5',
        paddingTop: 'xexx8yu',
        $$css: !0,
      },
      readOnly: {
        backgroundColor: 'x1npjb2n',
        $$css: !0,
      },
    }
    e = {
      input: {
        backgroundColor: 'xjbqb8w',
        borderTopWidth: null,
        borderEndWidth: null,
        borderBottomWidth: null,
        borderStartWidth: null,
        borderTopStyle: 'x1ejq31n',
        borderEndStyle: 'xd10rxx',
        borderBottomStyle: 'x1sy0etr',
        borderStartStyle: 'x17r0tee',
        borderTopColor: null,
        borderEndColor: null,
        borderBottomColor: null,
        borderStartColor: null,
        boxSizing: 'x9f619',
        color: 'xzsf02u',
        fontSize: 'x1uxerd5',
        fontWeight: 'x1fcty0u',
        lineHeight: 'x132q4wb',
        paddingBottom: 'x1a8lsjc',
        paddingEnd: 'x1pi30zi',
        paddingStart: 'x1swvt13',
        paddingTop: 'x9desvi',
        width: 'xh8yej3',
        '::-ms-clear_display': 'x15h3p50',
        '::-ms-reveal_display': 'x10emqs4',
        $$css: !0,
      },
    }
    var j = c('gkx')('4855') ? babelHelpers['extends']({}, b, e) : b
    function a(a, b) {
      var autoComplete = a.autoComplete,
        autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD =
          a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
        auxContent = a.auxContent,
        g = a.disabled,
        k = g === void 0 ? !1 : g
      g = a.emojiSkittle
      var helperText = a.helperText,
        m = a.helperTextIsHidden
      m = m === void 0 ? !1 : m
      var n = a.icon,
        o = a.inputMode,
        p = a.label,
        q = a.labelRef,
        r = a.maxLength,
        s = a.onBlur,
        t = a.onClick,
        u = a.onFocus,
        v = a.onValueChange,
        w = a.placeholder,
        x = a.readOnly,
        y = a.suppressFocusRing,
        z = a.testid
      z = a.type
      z = z === void 0 ? 'text' : z
      var A = a.validationState,
        B = a.validator,
        C = a.value,
        D = a.xstyle,
        E = babelHelpers.objectWithoutPropertiesLoose(a, [
          'autoComplete',
          'autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD',
          'auxContent',
          'disabled',
          'emojiSkittle',
          'helperText',
          'helperTextIsHidden',
          'icon',
          'inputMode',
          'label',
          'labelRef',
          'maxLength',
          'onBlur',
          'onClick',
          'onFocus',
          'onValueChange',
          'placeholder',
          'readOnly',
          'suppressFocusRing',
          'testid',
          'type',
          'validationState',
          'validator',
          'value',
          'xstyle',
        ])
      B = c('useBaseInputValidators')({
        validator: B,
        value: (a = C) != null ? a : '',
      })
      a = B.topResultReason
      B = B.topResultType
      var F = z === 'password',
        G = i(!1),
        H = G[0],
        I = G[1]
      G = F && Boolean(C)
      G = G
        ? h.jsx('div', {
            className: 'x78zum5',
            children: h.jsx('div', {
              className: 'x1pi30zi x109j2v6',
              children: h.jsx(c('CometPressable.react'), {
                onPress: function () {
                  return I(!H)
                },
                overlayDisabled: !0,
                children: h.jsx(c('CometFormInputPasswordStateIcon.react'), {
                  isVisible: H,
                }),
              }),
            }),
          })
        : null
      var J = F ? (H ? 'text' : 'password') : z,
        K = B !== 'CORRECT' ? B : A
      return h.jsx(c('CometFormInputWrapper.react'), {
        addOnStart:
          (n != null &&
            n instanceof c('ImageIconSource') &&
            n.height === 40 &&
            h.jsx('div', {
              className: c('stylex')(j.icon, j.largeImageIcon),
              children: h.jsx(c('CometImage.react'), {
                height: parseInt(n.height, 10),
                src: n.src,
                width: parseInt(n.width, 10),
                xstyle: j.imageIcon,
              }),
            })) ||
          (n != null &&
            h.jsx('div', {
              className: c('stylex')(j.icon),
              children: h.jsx(c('CometIcon.react'), {
                color: 'secondary',
                icon: n,
              }),
            })) ||
          (g != null &&
            h.jsx('div', {
              className: c('stylex')(j.emoji),
              children: g,
            })),
        auxContent: (F = G) != null ? F : auxContent,
        cursor: 'text',
        disabled: k,
        helperText: a != null ? a : helperText,
        helperTextIsHidden: m,
        label: p,
        labelRef: q,
        suppressFocusRing: y,
        validationState: K,
        value: C,
        children: function (a) {
          var f = a.focused,
            g = a.helperTextID
          a = a.id
          return h.jsx(
            c('BaseTextInput.react'),
            babelHelpers['extends'](
              {
                'aria-describedby': g,
                'aria-invalid': K === 'ERROR',
                autoComplete: autoComplete,
                autoFocus: autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
                disabled: k,
                id: a,
                inputMode: o,
                maxLength: r,
                onBlur: s,
                onClick: t,
                onFocus: u,
                onValueChange: v,
                placeholder: f ? w : null,
                readOnly: x,
                ref: b,
                suppressFocusRing: !0,
                testid: void 0,
                type: J,
                value: C,
                xstyle: [
                  j.input,
                  k && j.disabled,
                  x != null && x === !0 && j.readOnly,
                  D,
                ],
              },
              E,
            ),
          )
        },
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    d = h.forwardRef(a)
    g['default'] = d
  },
  98,
)

*/
