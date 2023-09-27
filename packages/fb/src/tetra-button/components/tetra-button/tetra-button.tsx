/* eslint-disable camelcase */
import React, { ReactNode, forwardRef, useRef } from 'react'

import { mergeClasses } from '@fluentui/react-components'
import CometGHLRenderingContext from '@fb/context/comet-ghl-rendering-context'
import BaseStyledButton from '../base-styled-button/base-styled-button'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { TetraText } from '@fb/tetra-text'
import isBlueprintStylesEnabled from '@fb/utils/is-blueprint-styles-enabled'
import { mergeRefs } from '@fb/hooks/use-merge-refs'
import { useBlueprintStyles, useStyles } from './styles'
import CometIcon from '@fb/components/comet-icon'

type TetraButtonProps = {
  addOnPrimary?: any
  addOnSecondary?: any
  disabled?: boolean
  icon?: any
  id?: string
  label?: string
  labelIsHidden?: boolean
  linkProps?: any
  onFocusIn?: (props: any) => any
  onFocusOut?: (props: any) => any
  onHoverIn?: (props: any) => any
  onHoverOut?: (props: any) => any
  onPress?: (props: any) => any
  onPressIn?: (props: any) => any
  onPressOut?: (props: any) => any
  padding?: 'wide' | 'normal'
  reduceEmphasis?: boolean
  size?: 'medium' | 'large'
  suppressHydrationWarning?: boolean
  testid?: string
  testOnly_pressed?: boolean
  type?:
    | 'primary'
    | 'overlay'
    | 'secondary'
    | 'fdsOverride_black'
    | 'fdsOverride_negative'
    | 'fdsOverride_positive'
    | 'fdsOverride_collaborativePostCTA'
    | 'dark-overlay'
}

function q(colorType: string, classes: Record<string, string>) {
  const stylex3 = {
    ':deemphasized': {
      iconColor: 'highlight',
      overlayPressedStyle: classes.secondaryDeemphasizedOverlayPressed,
      textColor: 'highlight',
    },
    ':disabled': {
      iconColor: 'disabled',
      textColor: 'disabled',
    },
    iconColor: 'primary',
    overlayPressedStyle: classes.secondaryOverlayPressed,
    textColor: 'secondary',
  }

  const stylex4 = {
    ':deemphasized': {
      iconColor: 'white',
      overlayPressedStyle: classes.overlayDeemphasizedOverlayPressed,
      textColor: 'white',
    },
    ':disabled': {
      iconColor: 'disabled',
      textColor: 'disabled',
    },
    iconColor: 'primary',
    overlayPressedStyle: classes.overlayOverlayPressed,
    textColor: 'primary',
  }

  const stylex5 = {
    ':deemphasized': {
      iconColor: 'white',
      overlayPressedStyle: classes.overlayDeemphasizedOverlayPressed,
      textColor: 'white',
    },
    ':disabled': {
      iconColor: 'disabled',
      textColor: 'disabled',
    },
    iconColor: 'white',
    overlayPressedStyle: classes.darkOverlayPressed,
    textColor: 'white',
  }

  const stylex2 = {
    ':deemphasized': {
      iconColor: 'highlight',
      overlayPressedStyle: classes.primaryDeemphasizedOverlayPressed,
      textColor: 'highlight',
    },
    ':disabled': {
      iconColor: 'disabled',
      textColor: 'disabled',
    },
    iconColor: 'white',
    overlayPressedStyle: classes.primaryOverlayPressed,
    textColor: 'white',
  }

  switch (colorType) {
    case 'fdsOverride_collaborativePostCTA':
    case 'secondary':
      return stylex3
    case 'overlay':
      return stylex4
    case 'dark-overlay':
      return stylex5
    case 'primary':
    default:
      return stylex2
  }
}

function getColor(
  colorType: string,
  options: {
    disabled: boolean
    reduceEmphasis: boolean
  },
  classes: Record<string, string>,
) {
  const { disabled, reduceEmphasis } = options

  const val = q(colorType, classes)
  return (
    (disabled ? val[':disabled'] : null) ||
    (reduceEmphasis ? val[':deemphasized'] : null) ||
    val
  )
}

const TetraButton = forwardRef<HTMLElement, TetraButtonProps>(
  (
    {
      addOnPrimary,
      addOnSecondary,
      disabled = false,
      icon,
      id,
      label,
      labelIsHidden = false,
      linkProps,
      onFocusIn,
      onFocusOut,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      onPressOut,
      padding = 'normal',
      reduceEmphasis = false,
      size = 'medium',
      suppressHydrationWarning = false,
      testid,
      testOnly_pressed,
      type = 'primary',
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()
    const sizeClasses = useBlueprintStyles()

    const H = getColor(
      type,
      {
        disabled,
        reduceEmphasis,
      },
      classes,
    )

    const { iconColor, overlayPressedStyle, textColor } = H as any

    const internalRef = useRef<any>(null)

    // const _label = rest['ariaLabel'] ? rest['ariaLabel'] : label
    // const _ariabLabel =
    //   useContext(CometGHLRenderingContext) && linkProps ? undefined : _label

    const tetraButtonChildren = jsx(
      BaseStyledButton,
      Object.assign({}, rest, {
        addOnEnd: addOnSecondary,
        addOnStart: addOnPrimary,
        // 'aria-label': _ariabLabel,
        content: labelIsHidden
          ? null
          : jsx(TetraText, {
              color: textColor,
              numberOfLines: 1,
              type: size === 'large' ? 'button1' : 'button2',
              children: label,
            }),
        contentXstyle: mergeClasses(
          type === 'overlay' && disabled && classes.contentDisabled,
          // type === 'overlay' && L,
          size === 'medium'
            ? isBlueprintStylesEnabled()
              ? sizeClasses.sizeMedium
              : classes.sizeMedium
            : undefined,
          size === 'large'
            ? isBlueprintStylesEnabled()
              ? sizeClasses.sizeLarge
              : classes.sizeLarge
            : undefined,
          // @ts-ignore
          icon && labelIsHidden && classes.paddingIconOnly,
        ),
        disabled,
        icon:
          icon &&
          jsx(CometIcon, {
            color: iconColor,
            size: 16,
            icon,
            // className: classes.displayBlock,
          }), // color: iconColor, size: 16, icon
        id,
        linkProps,
        onFocusIn,
        onFocusOut,
        onHoverIn,
        onHoverOut,
        onPress,
        onPressIn,
        onPressOut,
        overlayPressedStyle,
        padding,
        ref: mergeRefs(internalRef, ref),
        suppressHydrationWarning,
        testOnly_pressed,
        className: mergeClasses(
          type === 'primary' && classes.primary,
          type === 'primary' && reduceEmphasis && classes.primaryDeemphasized,
          type === 'secondary' && classes.secondary,
          type === 'secondary' &&
            reduceEmphasis &&
            classes.secondaryDeemphasized,
          type === 'fdsOverride_black' && classes.fdsOverrideBlack,
          type === 'fdsOverride_negative' && classes.fdsOverrideNegative,
          type === 'fdsOverride_positive' && classes.fdsOverridePositive,
          type === 'fdsOverride_collaborativePostCTA' &&
            classes.fdsOverrideCollaborativePostCTA,
          type === 'overlay' && classes.overlay,
          type === 'overlay' && reduceEmphasis && classes.overlayDeemphasized,
          disabled && classes.disabled,
          type === 'overlay' && disabled && classes.overlayDisabled,
          type === 'dark-overlay' && classes.darkOverlay,
        ),
      }),
    )

    // return type === 'overlay'
    //   ? jsx(M, {
    //       children: d,
    //     })
    //   : d

    return tetraButtonChildren
  },
)

export default TetraButton

// const stylex2 = {
//   ':deemphasized': {
//     iconColor: 'highlight',
//     overlayPressedStyle: stylex1.primaryDeemphasizedOverlayPressed,
//     textColor: 'highlight',
//   },
//   ':disabled': {
//     iconColor: 'disabled',
//     textColor: 'disabled',
//   },
//   iconColor: 'white',
//   overlayPressedStyle: stylex1.primaryOverlayPressed,
//   textColor: 'white',
// }
// const stylex3 = {
//   ':deemphasized': {
//     iconColor: 'highlight',
//     overlayPressedStyle: stylex1.secondaryDeemphasizedOverlayPressed,
//     textColor: 'highlight',
//   },
//   ':disabled': {
//     iconColor: 'disabled',
//     textColor: 'disabled',
//   },
//   iconColor: 'primary',
//   overlayPressedStyle: stylex1.secondaryOverlayPressed,
//   textColor: 'secondary',
// }
// const stylex4 = {
//   ':deemphasized': {
//     iconColor: 'white',
//     overlayPressedStyle: stylex1.overlayDeemphasizedOverlayPressed,
//     textColor: 'white',
//   },
//   ':disabled': {
//     iconColor: 'disabled',
//     textColor: 'disabled',
//   },
//   iconColor: 'primary',
//   overlayPressedStyle: stylex1.overlayOverlayPressed,
//   textColor: 'primary',
// }
// const stylex5 = {
//   ':deemphasized': {
//     iconColor: 'white',
//     overlayPressedStyle: stylex1.overlayDeemphasizedOverlayPressed,
//     textColor: 'white',
//   },
//   ':disabled': {
//     iconColor: 'disabled',
//     textColor: 'disabled',
//   },
//   iconColor: 'white',
//   overlayPressedStyle: stylex1.darkOverlayPressed,
//   textColor: 'white',
// }

// __d(
//   'TetraButton.react',
//   [
//     'BaseStyledButton.react',
//     'CometGHLRenderingContext',
//     'CometIcon.react',
//     'CometTooltip.react',
//     'TetraText.react',
//     'isBlueprintStylesEnabled',
//     'mergeRefs',
//     'react',
//     'useCometTheme',
//   ],
//   function (a, react, c, d, e, f, g) {
//     'use strict'
//     var reactJSX = d('react')
//     react = d('react')
//     var useContext = react.useContext,
//       useRef = react.useRef,
//       stylex1 = {
//         contentDisabled: {
//           opacity: 'xuzhngd',
//           $$css: !0,
//         },
//         darkOverlay: {
//           backgroundColor: 'x18l40ae',
//           color: 'x14ctfv',
//           $$css: !0,
//         },
//         darkOverlayPressed: {
//           backgroundColor: 'x1lxk4cn',
//           $$css: !0,
//         },
//         disabled: {
//           backgroundColor: 'xwcfey6',
//           $$css: !0,
//         },
//         fdsOverrideBlack: {
//           backgroundColor: 'xal61yo',
//           $$css: !0,
//         },
//         fdsOverrideCollaborativePostCTA: {
//           backgroundColor: 'x14hiurz',
//           mixBlendMode: 'x1nor908',
//           $$css: !0,
//         },
//         fdsOverrideNegative: {
//           backgroundColor: 'x1ciooss',
//           $$css: !0,
//         },
//         fdsOverridePositive: {
//           backgroundColor: 'xv9rvxn',
//           $$css: !0,
//         },
//         overlay: {
//           backgroundColor: 'x14hiurz',
//           $$css: !0,
//         },
//         overlayDeemphasized: {
//           backgroundColor: 'x1f2gare',
//           $$css: !0,
//         },
//         overlayDeemphasizedOverlayPressed: {
//           backgroundColor: 'x1f2gare',
//           $$css: !0,
//         },
//         overlayDisabled: {
//           backgroundColor: 'x1ahlmzr',
//           $$css: !0,
//         },
//         overlayOverlayPressed: {
//           backgroundColor: 'xiwuv7k',
//           $$css: !0,
//         },
//         paddingIconOnly: {
//           paddingEnd: 'x1pi30zi',
//           paddingStart: 'x1swvt13',
//           $$css: !0,
//         },
//         primary: {
//           backgroundColor: 'xtvsq51',
//           $$css: !0,
//         },
//         primaryDeemphasized: {
//           backgroundColor: 'x1hr4nm9',
//           $$css: !0,
//         },
//         primaryDeemphasizedOverlayPressed: {
//           backgroundColor: 'x18z898i',
//           $$css: !0,
//         },
//         primaryOverlayPressed: {
//           backgroundColor: 'x1iutvsz',
//           $$css: !0,
//         },
//         secondary: {
//           backgroundColor: 'x1qhmfi1',
//           $$css: !0,
//         },
//         secondaryDeemphasized: {
//           backgroundColor: 'xjbqb8w',
//           $$css: !0,
//         },
//         secondaryDeemphasizedOverlayPressed: {
//           backgroundColor: 'x18z898i',
//           $$css: !0,
//         },
//         secondaryOverlayPressed: {
//           backgroundColor: 'x1iutvsz',
//           $$css: !0,
//         },
//         sizeLarge: {
//           height: 'x1fq8qgq',
//           $$css: !0,
//         },
//         sizeMedium: {
//           height: 'x1r1pt67',
//           $$css: !0,
//         },
//       },
//       stylex = {
//         sizeLarge: {
//           borderTopStartRadius: 'x4dbc',
//           borderTopEndRadius: 'x1y9341w',
//           borderBottomEndRadius: 'x197fjye',
//           borderBottomStartRadius: 'xjufhxy',
//           height: 'x1whk3tm',
//           $$css: !0,
//         },
//         sizeMedium: {
//           borderTopStartRadius: 'xeqyu0i',
//           borderTopEndRadius: 'x1grejt4',
//           borderBottomEndRadius: 'x1xrrxpe',
//           borderBottomStartRadius: 'x17se2pc',
//           height: 'xfumdyt',
//           $$css: !0,
//         },
//       },
//       stylex2 = {
//         ':deemphasized': {
//           iconColor: 'highlight',
//           overlayPressedStyle: stylex1.primaryDeemphasizedOverlayPressed,
//           textColor: 'highlight',
//         },
//         ':disabled': {
//           iconColor: 'disabled',
//           textColor: 'disabled',
//         },
//         iconColor: 'white',
//         overlayPressedStyle: stylex1.primaryOverlayPressed,
//         textColor: 'white',
//       },
//       stylex3 = {
//         ':deemphasized': {
//           iconColor: 'highlight',
//           overlayPressedStyle: stylex1.secondaryDeemphasizedOverlayPressed,
//           textColor: 'highlight',
//         },
//         ':disabled': {
//           iconColor: 'disabled',
//           textColor: 'disabled',
//         },
//         iconColor: 'primary',
//         overlayPressedStyle: stylex1.secondaryOverlayPressed,
//         textColor: 'secondary',
//       },
//       stylex4 = {
//         ':deemphasized': {
//           iconColor: 'white',
//           overlayPressedStyle: stylex1.overlayDeemphasizedOverlayPressed,
//           textColor: 'white',
//         },
//         ':disabled': {
//           iconColor: 'disabled',
//           textColor: 'disabled',
//         },
//         iconColor: 'primary',
//         overlayPressedStyle: stylex1.overlayOverlayPressed,
//         textColor: 'primary',
//       },
//       stylex5 = {
//         ':deemphasized': {
//           iconColor: 'white',
//           overlayPressedStyle: stylex1.overlayDeemphasizedOverlayPressed,
//           textColor: 'white',
//         },
//         ':disabled': {
//           iconColor: 'disabled',
//           textColor: 'disabled',
//         },
//         iconColor: 'white',
//         overlayPressedStyle: stylex1.darkOverlayPressed,
//         textColor: 'white',
//       }
//     function q(a) {
//       switch (a) {
//         case 'fdsOverride_collaborativePostCTA':
//         case 'secondary':
//           return stylex3
//         case 'overlay':
//           return stylex4
//         case 'dark-overlay':
//           return stylex5
//         case 'primary':
//         default:
//           return stylex2
//       }
//     }
//     function r(a, b) {
//       var c = b.disabled
//       b = b.reduceEmphasis
//       a = q(a)
//       return (c ? a[':disabled'] : null) || (b ? a[':deemphasized'] : null) || a
//     }
//     function a(a, b) {
//       var d,
//         addOnPrimary = a.addOnPrimary,
//         addOnSecondary = a.addOnSecondary,
//         disabled = a.disabled
//       disabled = disabled === void 0 ? !1 : disabled
//       var m = a.icon,
//         n = a.id,
//         o = a.label,
//         p = a.labelIsHidden
//       p = p === void 0 ? !1 : p
//       var q = a.linkProps,
//         s = a.onFocusIn,
//         t = a.onFocusOut,
//         u = a.onHoverIn,
//         v = a.onHoverOut,
//         w = a.onPress,
//         x = a.onPressIn,
//         y = a.onPressOut,
//         z = a.padding
//       z = z === void 0 ? 'normal' : z
//       var A = a.reduceEmphasis
//       A = A === void 0 ? !1 : A
//       var B = a.size
//       B = B === void 0 ? 'medium' : B
//       var C = a.suppressHydrationWarning
//       C = C === void 0 ? !1 : C
//       var D = a.testid
//       D = a.testOnly_pressed
//       D = D === void 0 ? !1 : D
//       var E = a.tooltip,
//         F = a.tooltipPosition
//       F = F === void 0 ? 'above' : F
//       var G = a.type
//       G = G === void 0 ? 'primary' : G
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'addOnPrimary',
//         'addOnSecondary',
//         'disabled',
//         'icon',
//         'id',
//         'label',
//         'labelIsHidden',
//         'linkProps',
//         'onFocusIn',
//         'onFocusOut',
//         'onHoverIn',
//         'onHoverOut',
//         'onPress',
//         'onPressIn',
//         'onPressOut',
//         'padding',
//         'reduceEmphasis',
//         'size',
//         'suppressHydrationWarning',
//         'testid',
//         'testOnly_pressed',
//         'tooltip',
//         'tooltipPosition',
//         'type',
//       ])
//       var H = r(G, {
//           disabled: disabled,
//           reduceEmphasis: A,
//         }),
//         I = H.iconColor,
//         J = H.overlayPressedStyle
//       H = H.textColor
//       var K = useRef(null),
//         L = c('useCometTheme')('light'),
//         M = L[0]
//       L = L[1]
//       var N = useContext(c('CometGHLRenderingContext'))
//       N = q != null && N
//       d = (d = a['aria-label']) != null ? d : o
//       N = N ? void 0 : d
//       d = reactJSX.jsx(
//         c('BaseStyledButton.react'),
//         babelHelpers['extends']({}, a, {
//           addOnEnd: addOnSecondary,
//           addOnStart: addOnPrimary,
//           'aria-label': N,
//           content: p
//             ? null
//             : reactJSX.jsx(c('TetraText.react'), {
//                 color: H,
//                 numberOfLines: 1,
//                 type: B === 'large' ? 'button1' : 'button2',
//                 children: o,
//               }),
//           contentXstyle: [
//             G === 'overlay' && disabled && stylex1.contentDisabled,
//             G === 'overlay' && L,
//             B === 'medium' &&
//               (c('isBlueprintStylesEnabled')()
//                 ? stylex.sizeMedium
//                 : stylex1.sizeMedium),
//             B === 'large' &&
//               (c('isBlueprintStylesEnabled')()
//                 ? stylex.sizeLarge
//                 : stylex1.sizeLarge),
//             m != null && p && stylex1.paddingIconOnly,
//           ],
//           disabled: disabled,
//           icon:
//             m &&
//             reactJSX.jsx(c('CometIcon.react'), {
//               color: I,
//               icon: m,
//               size: 16,
//             }),
//           id: n,
//           linkProps: q,
//           onFocusIn: s,
//           onFocusOut: t,
//           onHoverIn: u,
//           onHoverOut: v,
//           onPress: w,
//           onPressIn: x,
//           onPressOut: y,
//           overlayPressedStyle: J,
//           padding: z,
//           ref: c('mergeRefs')(K, b),
//           suppressHydrationWarning: C,
//           testOnly_pressed: D,
//           testid: void 0,
//           xstyle: [
//             G === 'primary' && stylex1.primary,
//             G === 'primary' && A && stylex1.primaryDeemphasized,
//             G === 'secondary' && stylex1.secondary,
//             G === 'secondary' && A && stylex1.secondaryDeemphasized,
//             G === 'fdsOverride_black' && stylex1.fdsOverrideBlack,
//             G === 'fdsOverride_negative' && stylex1.fdsOverrideNegative,
//             G === 'fdsOverride_positive' && stylex1.fdsOverridePositive,
//             G === 'fdsOverride_collaborativePostCTA' &&
//               stylex1.fdsOverrideCollaborativePostCTA,
//             G === 'overlay' && stylex1.overlay,
//             G === 'overlay' && A && stylex1.overlayDeemphasized,
//             disabled && stylex1.disabled,
//             G === 'overlay' && disabled && stylex1.overlayDisabled,
//             G === 'dark-overlay' && stylex1.darkOverlay,
//           ],
//         }),
//       )
//       a =
//         G === 'overlay'
//           ? reactJSX.jsx(M, {
//               children: d,
//             })
//           : d
//       return E != null
//         ? reactJSX.jsx(c('CometTooltip.react'), {
//             position: F,
//             tooltip: E,
//             children: a,
//           })
//         : a
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = reactJSX.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )
