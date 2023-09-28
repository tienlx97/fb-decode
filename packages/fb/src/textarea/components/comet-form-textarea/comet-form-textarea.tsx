// __d(
//   'CometFormTextArea.react',
//   [
//     'BaseTextArea.react',
//     'CometFormInputWrapper.react',
//     'gkx',
//     'react',
//     'useBaseInputValidators',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = {
//       disabled: {
//         color: 'x1dntmbh',
//         cursor: 'x1h6gzvc',
//         $$css: !0,
//       },
//       hideLabel: {
//         marginTop: 'x1anpbxc',
//         $$css: !0,
//       },
//       textArea: {
//         backgroundColor: 'xjbqb8w',
//         borderTop: 'x76ihet',
//         borderEnd: 'xwmqs3e',
//         borderBottom: 'x112ta8',
//         borderStart: 'xxxdfa6',
//         boxSizing: 'x9f619',
//         color: 'xzsf02u',
//         display: 'x78zum5',
//         fontSize: 'x1jchvi3',
//         fontWeight: 'x1fcty0u',
//         lineHeight: 'x132q4wb',
//         marginBottom: 'xyorhqc',
//         marginTop: 'xaqh0s9',
//         outline: 'x1a2a7pz',
//         overflowX: 'x6ikm8r',
//         overflowY: 'x10wlt62',
//         paddingEnd: 'x1pi30zi',
//         paddingStart: 'x1swvt13',
//         resize: 'xtt52l0',
//         width: 'xh8yej3',
//         $$css: !0,
//       },
//     }
//     e = {
//       textArea: {
//         backgroundColor: 'xjbqb8w',
//         borderTopWidth: null,
//         borderEndWidth: null,
//         borderBottomWidth: null,
//         borderStartWidth: null,
//         borderTopStyle: 'x1ejq31n',
//         borderEndStyle: 'xd10rxx',
//         borderBottomStyle: 'x1sy0etr',
//         borderStartStyle: 'x17r0tee',
//         borderTopColor: null,
//         borderEndColor: null,
//         borderBottomColor: null,
//         borderStartColor: null,
//         boxSizing: 'x9f619',
//         color: 'xzsf02u',
//         display: 'x78zum5',
//         fontSize: 'x1jchvi3',
//         fontWeight: 'x1fcty0u',
//         lineHeight: 'x132q4wb',
//         marginBottom: 'xyorhqc',
//         marginTop: 'xaqh0s9',
//         outline: 'x1a2a7pz',
//         overflowX: 'x6ikm8r',
//         overflowY: 'x10wlt62',
//         paddingEnd: 'x1pi30zi',
//         paddingStart: 'x1swvt13',
//         resize: 'xtt52l0',
//         width: 'xh8yej3',
//         $$css: !0,
//       },
//     }
//     var i = c('gkx')('4855') ? babelHelpers['extends']({}, b, e) : b
//     function a(a, b) {
//       var d = a.addOnBottom,
//         e = a.autoComplete,
//         f = a.auxContent,
//         g = a.describedBy,
//         j = a.disabled,
//         k = j === void 0 ? !1 : j
//       j = a.helperText
//       var l = a.hideLabel,
//         m = l === void 0 ? !1 : l
//       l = a.label
//       var n = a.maxLength,
//         o = a.maxRows,
//         p = a.minRows,
//         q = a.onBlur,
//         r = a.onFocus,
//         s = a.onValueChange,
//         t = a.placeholder,
//         u = a.suppressFocusRing,
//         v = a.testid
//       v = a.validationState
//       var w = a.validator,
//         x = a.value
//       w = c('useBaseInputValidators')({
//         validator: w,
//         value: (a = x) != null ? a : '',
//       })
//       a = w.topResultReason
//       w = w.topResultType
//       var y = w !== 'CORRECT' ? w : v
//       return h.jsx(c('CometFormInputWrapper.react'), {
//         addOnBottom: d,
//         auxContent: f,
//         cursor: 'text',
//         disabled: k,
//         helperText: a != null ? a : j,
//         hideLabel: m,
//         label: l,
//         suppressFocusRing: u,
//         validationState: y,
//         value: x,
//         children: function (a) {
//           var d = a.focused,
//             f = a.helperTextID
//           a = a.id
//           return h.jsx(c('BaseTextArea.react'), {
//             'aria-describedby': g == null ? f : f == null ? g : f + ' ' + g,
//             'aria-invalid': y === 'ERROR',
//             autoComplete: e,
//             disabled: k,
//             id: a,
//             maxLength: n,
//             maxRows: o,
//             minRows: p,
//             onBlur: q,
//             onFocus: r,
//             onValueChange: s,
//             placeholder: d ? t : null,
//             ref: b,
//             suppressFocusRing: !0,
//             testid: void 0,
//             value: x,
//             xstyle: [i.textArea, k && i.disabled, m && i.hideLabel],
//           })
//         },
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     d = h.forwardRef(a)
//     g['default'] = d
//   },
//   98,
// )

// import React, { forwardRef } from 'react'

// type CometFormTextAreaProps = {
//   addOnBottom?: any
//   autoComplete: boolean
//   auxContent?: any
//   describedBy: any
//   disabled?: boolean
//   helperText: any
//   hideLabel?: boolean
//   label: string
//   maxLength?: number
//   maxRows?: number
//   minRows?: number
// } & React.JSX.IntrinsicElements['textarea']

// const CometFormTextArea = forwardRef<
//   HTMLTextAreaElement,
//   CometFormTextAreaProps
// >(
//   (
//     {
//       addOnBottom,
//       autoComplete,
//       auxContent,
//       describedBy,
//       disabled = false,
//       hideLabel = false,
//       maxLength,
//       maxRows,
//       minRows,
//       onBlur,
//     },
//     ref,
//   ) => {},
// )

// export default CometFormTextArea
