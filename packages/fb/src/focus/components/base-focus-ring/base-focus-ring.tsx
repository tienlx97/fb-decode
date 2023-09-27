import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import FocusWithinHandler from '../focus-within-handler'
import { useStyles } from './styles'

type BaseFosusRingProps = {
  children?: any
  focusRingPosition?: 'default' | 'inset'
  mode?: any
  suppressFocusRing?: boolean
  testOnly?: any
}

const k = true // gkx.k('1721477') || gkx.k('1459')

export default function BaseFocusRing({
  focusRingPosition = 'default',
  children,
  mode = 'focus-visible',
  suppressFocusRing = false,
  testOnly,
}: BaseFosusRingProps) {
  const classes = useStyles()

  return jsx(FocusWithinHandler, {
    testOnly,
    children: (a: any, c: any) => {
      let d = false
      suppressFocusRing ||
        (a && c ? (d = true) : a && mode === 'focus' && (d = true))

      return children(
        focusRingPosition
          ? k
            ? classes[focusRingPosition]
            : 'focused'
          : classes.unfocused,
      )
    },
  })
}

BaseFocusRing.focusRingXStyle = k ? 'newFocused' : 'focused'
BaseFocusRing.focusRingInsetXStyle = k ? 'newFocusedInset' : 'focused'
BaseFocusRing.linkFocusRingXStyle = k ? 'newFocusedLink' : 'focused'

// __d(
//   'BaseFocusRing.react',
//   ['FocusWithinHandler.react', 'gkx', 'react'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react'),
//       i = {
//         focused: {
//           outline: 'x1i4iak8',
//           '@media (-webkit-min-device-pixel-ratio: 0)_outline': 'x1n22pj5',
//           $$css: !0,
//         },
//         newFocused: {
//           boxShadow: 'x90kdol',
//           outline: 'x1a2a7pz',
//           '@media (forced-colors: active)_outline': 'xzpvr9o',
//           $$css: !0,
//         },
//         newFocusedInset: {
//           boxShadow: 'xsgs0p0',
//           outline: 'x1a2a7pz',
//           $$css: !0,
//         },
//         newFocusedLink: {
//           outline: 'x11312b7',
//           $$css: !0,
//         },
//         unfocused: {
//           outline: 'x1a2a7pz',
//           $$css: !0,
//         },
//       },
//       j = {
//         default: i.newFocused,
//         inset: i.newFocusedInset,
//       },
//       k = c('gkx')('1721477') || c('gkx')('1459')
//     function a(a) {
//       var b = a.children,
//         d = a.focusRingPosition
//       d = d === void 0 ? 'default' : d
//       var e = a.mode,
//         f = e === void 0 ? 'focus-visible' : e
//       e = a.suppressFocusRing
//       var g = e === void 0 ? !1 : e
//       e = a.testOnly
//       var l = k ? j[d] : i.focused
//       return h.jsx(c('FocusWithinHandler.react'), {
//         testOnly: e,
//         children: function (a, c) {
//           var d = !1
//           g || (a && c ? (d = !0) : a && f === 'focus' && (d = !0))
//           return b(d ? l : i.unfocused)
//         },
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     a.focusRingXStyle = k ? i.newFocused : i.focused
//     a.focusRingInsetXStyle = k ? i.newFocusedInset : i.focused
//     a.linkFocusRingXStyle = k ? i.newFocusedLink : i.focused
//     g['default'] = a
//   },
//   98,
// )
