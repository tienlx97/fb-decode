import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  useContext,
  useMemo,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import CometContainerPressableContext from '@fb/context/comet-container-pressable-context'
import { mergeClasses } from '@griffel/react'

import { useStyles } from './styles'

type BaseInputProps = {
  onValueChange?: (value: string, event: React.ChangeEvent<HTMLElement>) => void
  testid?: string
  type?: HTMLInputTypeAttribute | 'switch'
} & React.JSX.IntrinsicElements['textarea'] &
  React.JSX.IntrinsicElements['input']

const BaseInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  BaseInputProps
>(
  (
    {
      onChange,
      onClick,
      onValueChange = undefined,
      type = 'text',
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const memoType = useMemo(() => {
      switch (type) {
        case 'switch':
          return 'checkbox'
        default:
          return type
      }
    }, [type])

    const isCheckboxOrRadio = memoType === 'checkbox' || memoType === 'radio'
    const isTextarea = memoType === 'textarea'
    const cometContainerPressableContextValue = useContext(
      CometContainerPressableContext,
    )

    const commonProps = Object.assign(
      {
        dir: 'ltr',
      },
      { ...rest },
      {
        className: mergeClasses(
          classes.root,
          className,
          cometContainerPressableContextValue && classes.zIndex,
        ),
        onChange: (event: any) => {
          isCheckboxOrRadio ||
            (onValueChange && onValueChange(event.target.value, event)),
            onChange && onChange(event)
        },
        onClick: (event: any) => {
          isCheckboxOrRadio &&
            onValueChange &&
            onValueChange(event.target.checked, event),
            onClick && onClick(event)
        },
      },
    )

    return isTextarea
      ? jsx(
          'textarea',
          Object.assign(
            {
              suppressHydrationWarning: true,
            },
            commonProps,
            { ref },
          ),
        )
      : jsx(
          'input',
          Object.assign(
            {
              suppressHydrationWarning: true,
            },
            commonProps,
            { ref, type: memoType },
          ),
        )
  },
)

export default BaseInput

// __d(
//   'BaseInput.react',
//   ['CometContainerPressableContext', 'Locale', 'react', 'stylex', 'testID'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var useContext = b.useContext,
//       useMemo = b.useMemo,
//       k = {
//         root: {
//           WebkitTapHighlightColor: 'x1i10hfl',
//           boxSizing: 'x9f619',
//           touchAction: 'xggy1nq',
//           ':disabled_cursor': 'x1s07b3s',
//           $$css: !0,
//         },
//         zIndex: {
//           zIndex: 'x1vjfegm',
//           $$css: !0,
//         },
//       },
//       l = d('Locale').isRTL()
//     function a(a, b) {
//       var onChange = a.onChange,
//         onClick = a.onClick,
//         onValueChange = a.onValueChange,
//         testid = a.testid,
//         xstyle = a.type,
//         type = xstyle === void 0 ? 'text' : xstyle
//       xstyle = a.xstyle
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'onChange',
//         'onClick',
//         'onValueChange',
//         'testid',
//         'type',
//         'xstyle',
//       ])
//       var o = useMemo(
//           function () {
//             switch (type) {
//               case 'switch':
//                 return 'checkbox'
//               default:
//                 return type
//             }
//           },
//           [type],
//         ),
//         p = o === 'checkbox' || o === 'radio',
//         q = o === 'textarea',
//         r = useContext(c('CometContainerPressableContext')) != null
//       a = babelHelpers['extends'](
//         {
//           dir: l ? 'rtl' : 'ltr',
//         },
//         a,
//         c('testID')(testid),
//         {
//           className: c('stylex')(k.root, xstyle, r && k.zIndex),
//           onChange: function (a) {
//             p || (onValueChange && onValueChange(a.target.value, a)),
//               onChange && onChange(a)
//           },
//           onClick: function (a) {
//             p && onValueChange && onValueChange(a.target.checked, a),
//               onClick && onClick(a)
//           },
//         },
//       )
//       return q
//         ? h.jsx(
//             'textarea',
//             babelHelpers['extends'](
//               {
//                 suppressHydrationWarning: !0,
//               },
//               a,
//               {
//                 ref: b,
//               },
//             ),
//           )
//         : h.jsx(
//             'input',
//             babelHelpers['extends'](
//               {
//                 suppressHydrationWarning: !0,
//               },
//               a,
//               {
//                 ref: b,
//                 type: o,
//               },
//             ),
//           )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = h.memo(h.forwardRef(a))
//     g['default'] = e
//   },
//   98,
// )
