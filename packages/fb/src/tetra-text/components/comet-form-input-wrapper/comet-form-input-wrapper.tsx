/* eslint-disable camelcase */

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { BaseFocusRing } from '@fb/focus/components/base-focus-ring'
import FocusWithinHandler from '@fb/focus/components/focus-within-handler'
import { useMergeRefs } from '@fb/hooks/use-merge-refs'
import isBlueprintStylesEnabled from '@fb/utils/is-blueprint-styles-enabled'
import { mergeClasses } from '@fluentui/react-components'

import CometFormInputWrapperHelperText from '../comet-form-input-wrapper-helper-text'
import { useBluePrintStyles, useCursorStyles, useStyles } from './styles'

type CometFormInputWrapperProps = {
  addOnBottom?: ReactNode
  addOnStart?: ReactNode
  alwaysShrinkLabel?: boolean
  containerRef?: any
  'aria-activedescendant': any
  'aria-expanded': any
  'aria-haspopup': any
  'aria-controls': any
  ariaLabel: any
  auxContent: any
  children?: any
  comboboxKeyDown: any
  cursor: 'pointer' | 'text'
  disabled?: boolean
  helperText: any
  helperTextIsHidden: boolean
  hideLabel?: boolean
  label: any
  labelLocation_INTERNAL?: string
  labelRef?: any
  onFocusChange?: any
  onPress?: any
  role?: any
  shrinkLabelOnFocus?: boolean
  suppressFocusRing: boolean
  validationState: any
  value: any
  withHeaderMask?: boolean
}

function q(value: any) {
  if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object') {
    if (value) {
      for (var b in value) {
        return false
      }
    }
    return true
  } else {
    return value == null || value === ''
  }
}

export default function CometFormInputWrapper({
  addOnBottom,
  addOnStart,
  alwaysShrinkLabel = false,
  'aria-activedescendant': ariaActivedescendant,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-haspopup': ariaHaspopup,
  ariaLabel,
  auxContent,
  children,
  comboboxKeyDown,
  containerRef,
  cursor,
  disabled = false,
  helperText,
  helperTextIsHidden = false,
  hideLabel = false,
  label,
  labelLocation_INTERNAL = 'inside',
  labelRef,
  onFocusChange,
  onPress,
  role,
  shrinkLabelOnFocus = true,
  suppressFocusRing,
  validationState,
  value,
  withHeaderMask = false,
}: CometFormInputWrapperProps) {
  const id = useId()
  const id2 = useId()

  const classes = useStyles()
  const cursorClasses = useCursorStyles()
  const blueprintClasses = useBluePrintStyles()

  const [isShake, setShake] = useState(false)
  const [_hovered, setHovered] = useState(false)

  const filled = !q(value)

  const labelLocation_INTERNALOutside = labelLocation_INTERNAL === 'outside'

  const W = (bool: any) => {
    return labelLocation_INTERNALOutside
      ? jsx('label', {
          className: classes.labelInternal,
          suppressHydrationWarning: true,
          children: label,
        })
      : jsx('span', {
          className: mergeClasses(
            classes.label,
            classes.labelInside,
            validationState === 'ERROR' && classes.labelError,
            validationState == null && bool && classes.labelHighlighted,
            (filled || alwaysShrinkLabel || (bool && shrinkLabelOnFocus)) &&
              classes.labelShrunk,
            disabled && classes.labelDisabled,
          ),
          ref: labelRef,
          children: label,
        })
  }

  const onMouseEnterCb = useCallback(() => {
    _hovered || setHovered(true)
  }, [_hovered])

  const onMouseLeaveCb = useCallback(() => {
    _hovered && setHovered(false)
  }, [_hovered])

  const rootRef = useRef<any>(null)
  const wrapperRef = useRef<any>(null)

  const _ref = useMergeRefs(rootRef, containerRef)

  const [ba, ca] = useState(false)

  useEffect(() => {
    if (!comboboxKeyDown) {
      return
    }
    var a = wrapperRef && wrapperRef.current
    if (a) {
      a.addEventListener('keydown', comboboxKeyDown)
      return () => {
        a.removeEventListener('keydown', comboboxKeyDown)
      }
    }
  }, [comboboxKeyDown])

  return jsxs('div', {
    className: classes.dummy,
    ref: wrapperRef,
    children: [
      labelLocation_INTERNALOutside && W(false),
      jsx(FocusWithinHandler, {
        onFocusChange,
        children: (_focused: any) => {
          return jsx(BaseFocusRing, {
            suppressFocusRing: !ba || suppressFocusRing,
            children: (focusRingClassname: any) => {
              return jsxs('label', {
                'aria-activedescendant': ariaActivedescendant,
                'aria-controls': ariaControls,
                'aria-expanded': ariaExpanded,
                'aria-haspopup': ariaHaspopup,
                'aria-label': ariaLabel ? ariaLabel : label,
                className: mergeClasses(
                  classes.root,
                  isBlueprintStylesEnabled() && blueprintClasses.root,
                  cursorClasses[cursor],
                  _hovered && classes.hovered,
                  _focused && BaseFocusRing.focusRingXStyle,
                  validationState === 'WARN' && classes.warn,
                  validationState === 'WARN' && _hovered && classes.warnHovered,
                  validationState === 'WARN' && _focused && classes.warnFocused,
                  //
                  validationState === 'ERROR' && classes.error,
                  validationState === 'ERROR' &&
                    _hovered &&
                    classes.errorHovered,
                  validationState === 'ERROR' &&
                    _focused &&
                    classes.errorFocused,
                  //
                  disabled && classes.disabled,
                  isShake && classes.shake,
                  focusRingClassname,
                ),
                htmlFor: id,
                onAnimationEnd: () => {
                  setShake(false)
                },
                onClick: (event: any) => {
                  disabled ? setShake(true) : onPress && onPress(event)
                },
                onMouseEnter: onMouseEnterCb,
                onMouseLeave: onMouseLeaveCb,
                ref: _ref,
                role: onPress ? (role ? role : 'button') : void 0,
                suppressHydrationWarning: true,
                tabIndex: onPress ? 0 : void 0,
                children: [
                  jsxs('div', {
                    className: classes.dummy2,
                    children: [
                      addOnStart,
                      jsxs('div', {
                        className: classes.dummy3,
                        children: [
                          withHeaderMask &&
                            !disabled &&
                            (filled || _focused) &&
                            jsx('span', {
                              className: mergeClasses(
                                classes.headerMask,
                                validationState === 'WARN' &&
                                  _hovered &&
                                  classes.warnHovered,
                                validationState === 'ERROR' &&
                                  _hovered &&
                                  classes.errorHovered,
                              ),
                            }),
                          !hideLabel &&
                            !labelLocation_INTERNALOutside &&
                            W(_focused),
                          jsx(FocusWithinHandler, {
                            onFocusChange: ca,
                            children: children({
                              filled: filled,
                              focused: _focused,
                              helperTextID:
                                helperText && validationState ? id2 : void 0,
                              id: id,
                              rootRef: rootRef,
                            }),
                          }),
                        ],
                      }),
                      (auxContent || validationState) &&
                        jsxs('div', {
                          className: classes.dummy4,
                          children: [
                            validationState &&
                              jsx('div', {
                                className: mergeClasses(
                                  classes.validationIcon,
                                  hideLabel && classes.validationIconHideLabel,
                                ),
                                // children: c(
                                //   'CometFormInputValidationStateIcon',
                                // )[M],
                              }),
                            auxContent,
                          ],
                        }),
                    ],
                  }),
                  addOnBottom,
                ],
              })
            },
          })
        },
      }),
      helperText !== undefined &&
        (helperTextIsHidden
          ? jsx('div', {
              className: classes.helperTextIsHidden,
              id: id2,
              children: helperText,
            })
          : jsx('div', {
              className: classes.dummy5,
              id: id2,
              children: jsx(CometFormInputWrapperHelperText, {
                validationState,
                value: helperText,
              }),
            })),
    ],
  })
}

/*

__d(
  'CometFormInputWrapper.react',
  [
    'BaseFocusRing.react',
    'CometFormInputValidationStateIcon',
    'CometFormInputWrapperHelperText.react',
    'FocusWithinHandler.react',
    'isBlueprintStylesEnabled',
    'react',
    'stylex',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var useCallback = b.useCallback,
      useEffect = b.useEffect,
      useId = b.useId,
      useRef = b.useRef,
      useState = b.useState,
      n = {
        container: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          width: 'xh8yej3',
          $$css: !0,
        },
        disabled: {
          backgroundColor: 'x1npjb2n',
          borderTopColor: 'x1epquy7',
          borderEndColor: 'xsnmfus',
          borderBottomColor: 'x1562eck',
          borderStartColor: 'xcymrrh',
          boxShadow: 'x1gnnqk1',
          cursor: 'x1h6gzvc',
          ':active_backgroundColor': 'x1cn5h38',
          $$css: !0,
        },
        error: {
          borderTopColor: 'xmrkho8',
          borderEndColor: 'xa6p843',
          borderBottomColor: 'xfz9iyh',
          borderStartColor: 'xy4nld6',
          ':active_backgroundColor': 'x1kxczlb',
          $$css: !0,
        },
        errorFocused: {
          boxShadow: 'xrq537t',
          $$css: !0,
        },
        errorHovered: {
          backgroundColor: 'xpc7vr0',
          $$css: !0,
        },
        headerMask: {
          backgroundColor: 'xjhjgkd',
          end: 'x92rtbv',
          height: 'xlup9mm',
          position: 'x10l6tqk',
          start: 'x16q8cke',
          top: 'xfr5jun',
          $$css: !0,
        },
        helperText: {
          marginTop: 'x1xmf6yo',
          $$css: !0,
        },
        hiddenHelperText: {
          clip: 'xzpqnlu',
          clipPath: 'x1hyvwdk',
          height: 'xjm9jq1',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x10l6tqk',
          width: 'x1i1rx1s',
          $$css: !0,
        },
        hovered: {
          borderTopColor: 'x4dwnd4',
          borderEndColor: 'xp58pn9',
          borderBottomColor: 'x1hsu73c',
          borderStartColor: 'xvnt4d0',
          $$css: !0,
        },
        input: {
          backgroundColor: 'xjbqb8w',
          flexGrow: 'x1iyjqo2',
          maxWidth: 'x193iq5w',
          minWidth: 'xeuugli',
          position: 'x1n2onr6',
          $$css: !0,
        },
        inputRow: {
          display: 'x78zum5',
          width: 'xh8yej3',
          $$css: !0,
        },
        label: {
          fontSize: 'x1jchvi3',
          fontWeight: 'x1fcty0u',
          lineHeight: 'x132q4wb',
          maxWidth: 'x193iq5w',
          transformOrigin: 'x1al4vs7',
          $$css: !0,
        },
        labelDisabled: {
          color: 'x1dntmbh',
          $$css: !0,
        },
        labelError: {
          color: 'x1a1m0xk',
          $$css: !0,
        },
        labelHighlighted: {
          color: 'xlsksjw',
          $$css: !0,
        },
        labelInside: {
          color: 'xi81zsa',
          cursor: 'xmper1u',
          display: 'x1lliihq',
          end: 'x1923su1',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x16q8cke',
          textOverflow: 'xlyipyv',
          top: 'xoyzfg9',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x11xpdln',
          transitionTimingFunction: 'x1qfuztq',
          whiteSpace: 'xuxw1ft',
          $$css: !0,
        },
        labelOutside: {
          color: 'xgqhv05',
          marginBottom: 'x1e56ztr',
          position: 'x1n2onr6',
          $$css: !0,
        },
        labelShrunk: {
          end: 'x19c1rep',
          transform: 'x1cab348',
          $$css: !0,
        },
        root: {
          backgroundColor: 'xjhjgkd',
          borderTopColor: 'x1epquy7',
          borderEndColor: 'xsnmfus',
          borderBottomColor: 'x1562eck',
          borderStartColor: 'xcymrrh',
          borderTopStartRadius: 'x1268tai',
          borderTopEndRadius: 'x1mxuytg',
          borderBottomEndRadius: 'x14hpm34',
          borderBottomStartRadius: 'xqvykr2',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'xq2ru2l',
          borderEndWidth: 'x17qb25w',
          borderBottomWidth: 'xjmv2fv',
          borderStartWidth: 'x1b4qsv2',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          ':active_backgroundColor': 'x1egnk41',
          $$css: !0,
        },
        secondary: {
          display: 'x78zum5',
          $$css: !0,
        },
        shake: {
          animationDuration: 'x1f7sx64',
          animationFillMode: 'x1u6ievf',
          animationName: 'xcqsoj',
          animationTimingFunction: 'x1ojsi0c',
          $$css: !0,
        },
        validationIcon: {
          paddingEnd: 'x1pi30zi',
          paddingTop: 'x109j2v6',
          $$css: !0,
        },
        validationIconHideLabel: {
          paddingTop: 'xz9dl7a',
          $$css: !0,
        },
        warn: {
          borderTopColor: 'x1xqsql5',
          borderEndColor: 'x1sn40xs',
          borderBottomColor: 'x1gkuw16',
          borderStartColor: 'xg1yei2',
          ':active_backgroundColor': 'xhexg4x',
          $$css: !0,
        },
        warnFocused: {
          boxShadow: 'x1hliol7',
          $$css: !0,
        },
        warnHovered: {
          backgroundColor: 'x12tslg2',
          $$css: !0,
        },
      },
      o = {
        pointer: {
          cursor: 'x1ypdohk',
          $$css: !0,
        },
        text: {
          cursor: 'x1ed109x',
          $$css: !0,
        },
      },
      p = {
        root: {
          borderTopStartRadius: 'xyi19xy',
          borderTopEndRadius: 'x1ccrb07',
          borderBottomEndRadius: 'xtf3nb5',
          borderBottomStartRadius: 'x1pc53ja',
          $$css: !0,
        },
      }
    function q(a) {
      if (Array.isArray(a)) return a.length === 0
      else if (typeof a === 'object') {
        if (a) for (var b in a) return !1
        return !0
      } else return a == null || a === ''
    }
    function a(a) {
      var addOnBottom = a.addOnBottom,
        addOnStart = a.addOnStart,
        containerRef = a.alwaysShrinkLabel,
        alwaysShrinkLabel = containerRef === void 0 ? !1 : containerRef,
        ariaActivedescendant = a['aria-activedescendant'],
        ariaControls = a['aria-controls'],
        ariaExpanded = a['aria-expanded'],
        ariaHaspopup = a['aria-haspopup'],
        ariaLabel = a.ariaLabel,
        auxContent = a.auxContent,
        children = a.children,
        comboboxKeyDown = a.comboboxKeyDown
      containerRef = a.containerRef
      var cursor = a.cursor,
        helperTextIsHidden = a.disabled,
        A = helperTextIsHidden === void 0 ? !1 : helperTextIsHidden,
        helperText = a.helperText
      helperTextIsHidden = a.helperTextIsHidden
      helperTextIsHidden =
        helperTextIsHidden === void 0 ? !1 : helperTextIsHidden
      var C = a.hideLabel,
        D = C === void 0 ? !1 : C,
        E = a.label
      C = a.labelLocation_INTERNAL
      C = C === void 0 ? 'inside' : C
      var F = a.labelRef,
        G = a.onFocusChange,
        H = a.onPress,
        I = a.role,
        J = a.shrinkLabelOnFocus,
        K = J === void 0 ? !0 : J,
        L = a.suppressFocusRing,
        M = a.validationState
      J = a.value
      a = a.withHeaderMask
      var N = a === void 0 ? !1 : a,
        O = useId(),
        P = useId()
      a = useState(!1)
      var Q = a[0],
        R = a[1]
      a = useState(!1)
      var S = a[0],
        T = a[1],
        U = !q(J),
        V = C === 'outside',
        W = function (a) {
          return V
            ? h.jsx('label', {
                className:
                  'x1jchvi3 x1fcty0u x132q4wb x193iq5w x1al4vs7 xgqhv05 x1e56ztr x1n2onr6',
                suppressHydrationWarning: !0,
                children: E,
              })
            : h.jsx('span', {
                className: c('stylex')(
                  n.label,
                  n.labelInside,
                  M === 'ERROR' && n.labelError,
                  M == null && a && n.labelHighlighted,
                  (U || alwaysShrinkLabel || (a && K)) && n.labelShrunk,
                  A && n.labelDisabled,
                ),
                ref: F,
                children: E,
              })
        },
        X = useCallback(
          function () {
            S || T(!0)
          },
          [S],
        ),
        Y = useCallback(
          function () {
            S && T(!1)
          },
          [S],
        ),
        Z = useRef(null),
        $ = useRef(null),
        aa = c('useMergeRefs')(Z, containerRef)
      a = useState(!1)
      var ba = a[0],
        ca = a[1]
      useEffect(
        function () {
          if (comboboxKeyDown == null) return
          var a = $ && $.current
          if (a != null) {
            a.addEventListener('keydown', comboboxKeyDown)
            return function () {
              a.removeEventListener('keydown', comboboxKeyDown)
            }
          }
        },
        [comboboxKeyDown],
      )
      return h.jsxs('div', {
        className: 'x78zum5 xdt5ytf xh8yej3',
        ref: $,
        children: [
          V && W(!1),
          h.jsx(c('FocusWithinHandler.react'), {
            onFocusChange: G,
            children: function (a) {
              return h.jsx(c('BaseFocusRing.react'), {
                suppressFocusRing: !ba || L,
                children: function (e) {
                  var f
                  return h.jsxs('label', {
                    'aria-activedescendant': ariaActivedescendant,
                    'aria-controls': ariaControls,
                    'aria-expanded': ariaExpanded,
                    'aria-haspopup': ariaHaspopup,
                    'aria-label': (f = ariaLabel) != null ? f : E,
                    className: c('stylex')(
                      n.root,
                      c('isBlueprintStylesEnabled')() && p.root,
                      o[cursor],
                      S && n.hovered,
                      a && c('BaseFocusRing.react').focusRingXStyle,
                      M === 'WARN' && [
                        n.warn,
                        S && n.warnHovered,
                        a && n.warnFocused,
                      ],
                      M === 'ERROR' && [
                        n.error,
                        S && n.errorHovered,
                        a && n.errorFocused,
                      ],
                      A && n.disabled,
                      Q && n.shake,
                      e,
                    ),
                    htmlFor: O,
                    onAnimationEnd: function () {
                      R(!1)
                    },
                    onClick: function (a) {
                      A ? R(!0) : H && H(a)
                    },
                    onMouseEnter: X,
                    onMouseLeave: Y,
                    ref: aa,
                    role: H != null ? (I != null ? I : 'button') : void 0,
                    suppressHydrationWarning: !0,
                    tabIndex: H != null ? 0 : void 0,
                    children: [
                      h.jsxs('div', {
                        className: 'x78zum5 xh8yej3',
                        children: [
                          addOnStart,
                          h.jsxs('div', {
                            className:
                              'xjbqb8w x1iyjqo2 x193iq5w xeuugli x1n2onr6',
                            children: [
                              N &&
                                !A &&
                                (U || a) &&
                                h.jsx('span', {
                                  className: c('stylex')(
                                    n.headerMask,
                                    M === 'WARN' && S && n.warnHovered,
                                    M === 'ERROR' && S && n.errorHovered,
                                  ),
                                }),
                              !D && !V && W(a),
                              h.jsx(c('FocusWithinHandler.react'), {
                                onFocusChange: ca,
                                children: children({
                                  filled: U,
                                  focused: a,
                                  helperTextID:
                                    helperText != null && M != null
                                      ? P
                                      : void 0,
                                  id: O,
                                  rootRef: Z,
                                }),
                              }),
                            ],
                          }),
                          (auxContent || M) &&
                            h.jsxs('div', {
                              className: 'x78zum5',
                              children: [
                                M != null &&
                                  h.jsx('div', {
                                    className: c('stylex')(
                                      n.validationIcon,
                                      D && n.validationIconHideLabel,
                                    ),
                                    children: c(
                                      'CometFormInputValidationStateIcon',
                                    )[M],
                                  }),
                                auxContent,
                              ],
                            }),
                        ],
                      }),
                      addOnBottom,
                    ],
                  })
                },
              })
            },
          }),
          helperText != null &&
            (helperTextIsHidden
              ? h.jsx('div', {
                  className:
                    'xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s',
                  id: P,
                  children: helperText,
                })
              : h.jsx('div', {
                  className: 'x1xmf6yo',
                  id: P,
                  children: h.jsx(c('CometFormInputWrapperHelperText.react'), {
                    validationState: M,
                    value: helperText,
                  }),
                })),
        ],
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)

*/
