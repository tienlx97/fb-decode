// __d(
//   'CometFormSelectOnlyCombobox.react',
//   [
//     'ix',
//     'BaseContextualLayer.react',
//     'CometComponentWithKeyCommands.react',
//     'CometFormComboboxMenuItem.react',
//     'CometFormInputWrapper.react',
//     'CometIcon.react',
//     'CometMenu.react',
//     'CometProfilePhoto.react',
//     'FocusInertRegion.react',
//     'FocusWithinHandler.react',
//     'emptyFunction',
//     'fbicon',
//     'focusScopeQueries',
//     'react',
//     'stylex',
//     'useCometFormSelectMenuTriggerKeyDownHandler',
//     'useCometFormSelectOnlyComboboxKeyConfigs',
//   ],
//   function (a, b, c, d, e, f, g, h) {
//     'use strict'
//     var i = d('react')
//     b = d('react')
//     var j = b.useCallback,
//       k = b.useId,
//       l = b.useRef,
//       m = b.useState,
//       n = {
//         button: {
//           appearance: 'xjyslct',
//           backgroundColor: 'xjbqb8w',
//           borderTopStyle: 'x13fuv20',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderStartStyle: 'x26u7qi',
//           borderTopWidth: 'x972fbf',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           borderStartWidth: 'xm0m39n',
//           boxSizing: 'x9f619',
//           color: 'xzsf02u',
//           display: 'x78zum5',
//           fontSize: 'x1jchvi3',
//           fontWeight: 'x1fcty0u',
//           lineHeight: 'x132q4wb',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1mh8g0r',
//           outline: 'x1a2a7pz',
//           paddingTop: 'x9desvi',
//           paddingEnd: 'x1pi30zi',
//           paddingBottom: 'x1a8lsjc',
//           paddingStart: 'x1swvt13',
//           position: 'x1n2onr6',
//           textAlign: 'x16tdsg8',
//           width: 'xh8yej3',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         buttonWithIcon: {
//           paddingStart: 'xr9oo41',
//           $$css: !0,
//         },
//         disabled: {
//           color: 'x1dntmbh',
//           cursor: 'x1h6gzvc',
//           pointerEvents: 'x47corl',
//           $$css: !0,
//         },
//         icon: {
//           alignSelf: 'xamitd3',
//           paddingEnd: 'x1pi30zi',
//           $$css: !0,
//         },
//         labelOutsideButton: {
//           paddingTop: 'xz9dl7a',
//           paddingBottom: 'xsag5q8',
//           $$css: !0,
//         },
//         selectedIcon: {
//           paddingStart: 'x1swvt13',
//           paddingTop: 'x109j2v6',
//           $$css: !0,
//         },
//         selectedProfilePicture: {
//           paddingStart: 'x1swvt13',
//           paddingTop: 'xz9dl7a',
//           $$css: !0,
//         },
//         truncated: {
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           textOverflow: 'xlyipyv',
//           whiteSpace: 'xuxw1ft',
//           $$css: !0,
//         },
//         wrapper: {
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         wrapperWithIcon: {
//           marginStart: 'x4mskuk',
//           $$css: !0,
//         },
//       }
//     function a(a) {
//       var b = a.align,
//         e = a.ariaLabel,
//         f = a.auxItemType,
//         g = a.defaultIcon,
//         o = a.disabled,
//         p = o === void 0 ? !1 : o
//       o = a.footer_deprecated
//       var q = a.header,
//         r = a.helperText,
//         s = a.helperTextIsHidden
//       s = s === void 0 ? !1 : s
//       var t = a.iconType,
//         u = t === void 0 ? 'icon' : t
//       t = a.label
//       var v = a.labelLocation_INTERNAL,
//         w = a.labelRef,
//         x = a.onNullValue,
//         y = a.onValueChange,
//         z = a.onVisibilityChange,
//         A = z === void 0 ? c('emptyFunction') : z,
//         B = a.options
//       a.position
//       z = a.size
//       var C = a.testid
//       C = a.truncate
//       var D = C === void 0 ? !0 : C
//       C = a.validationState
//       var E = a.value
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'align',
//         'ariaLabel',
//         'auxItemType',
//         'defaultIcon',
//         'disabled',
//         'footer_deprecated',
//         'header',
//         'helperText',
//         'helperTextIsHidden',
//         'iconType',
//         'label',
//         'labelLocation_INTERNAL',
//         'labelRef',
//         'onNullValue',
//         'onValueChange',
//         'onVisibilityChange',
//         'options',
//         'position',
//         'size',
//         'testid',
//         'truncate',
//         'validationState',
//         'value',
//       ])
//       var F = k(),
//         G = k(),
//         H = m(!1),
//         I = H[0],
//         J = H[1]
//       H = m(null)
//       var K = H[0],
//         L = H[1],
//         M = I && B.length > 0,
//         N = l(null)
//       H = B.filter(function (a) {
//         return !a.disabled
//       })
//       I = B.findIndex(function (a) {
//         return a.value === K
//       })
//       g =
//         g == null
//           ? void 0
//           : {
//               iconProps: g,
//               type: u,
//             }
//       var O = null,
//         P = null,
//         Q = B.find(function (a) {
//           return a.value === E
//         })
//       if (E != null && Q != null) {
//         O = Q.icon
//         P = Q.label
//         if (u === 'profile-picture' && O != null) {
//           O.shape = (Q = O.shape) != null ? Q : O.style
//           O.source =
//             (Q = O.source) != null
//               ? Q
//               : {
//                   uri: O.src,
//                 }
//         }
//       }
//       Q =
//         O == null
//           ? void 0
//           : {
//               iconProps: O,
//               type: u,
//             }
//       var R = (O = Q) != null ? O : g,
//         S = j(
//           function () {
//             J(!0), A(!0)
//           },
//           [A],
//         ),
//         T = j(
//           function () {
//             L(null), J(!1), A(!1)
//           },
//           [A],
//         )
//       Q = j(
//         function (a) {
//           a || T()
//         },
//         [T],
//       )
//       function U(a, b) {
//         return a + '__' + (b != null ? b : '0')
//       }
//       O = j(
//         function () {
//           if (M) K != null ? y(K) : K == null && x && x(null), T()
//           else {
//             var a
//             L((a = E) != null ? a : null)
//             S()
//           }
//         },
//         [K, M, y, T, S, E],
//       )
//       g = c('useCometFormSelectOnlyComboboxKeyConfigs')({
//         activeValue: K,
//         filteredOptions: H,
//         isMenuVisible: M,
//         onHide: T,
//         onPress: O,
//         onShow: S,
//         setActiveValue: L,
//         value: E,
//       })
//       O = c('useCometFormSelectMenuTriggerKeyDownHandler')(L, K, H, M, S)
//       return i.jsx(c('FocusWithinHandler.react'), {
//         onFocusChange: Q,
//         children: i.jsxs(c('CometComponentWithKeyCommands.react'), {
//           commandConfigs: p ? [] : g,
//           children: [
//             i.jsx(c('CometFormInputWrapper.react'), {
//               addOnStart:
//                 R != null &&
//                 (R.type === 'icon'
//                   ? i.jsx('div', {
//                       className: 'x1swvt13 x109j2v6',
//                       children: i.jsx(c('CometIcon.react'), {
//                         color: 'secondary',
//                         icon: R.iconProps,
//                       }),
//                     })
//                   : R.type === 'profile-picture'
//                   ? i.jsx('div', {
//                       className: 'x1swvt13 xz9dl7a',
//                       children: i.jsx(
//                         c('CometProfilePhoto.react'),
//                         babelHelpers['extends']({}, R.iconProps, {
//                           size: 32,
//                         }),
//                       ),
//                     })
//                   : null),
//               'aria-activedescendant':
//                 M && K != null && I !== -1 ? U(F, I) : void 0,
//               'aria-controls': M ? G : void 0,
//               'aria-expanded': M,
//               'aria-haspopup': 'listbox',
//               ariaLabel: e,
//               auxContent: i.jsx('div', {
//                 className: 'xamitd3 x1pi30zi',
//                 children: i.jsx(c('CometIcon.react'), {
//                   color: 'primary',
//                   icon: d('fbicon')._(h('481882'), 16),
//                 }),
//               }),
//               comboboxKeyDown: O,
//               cursor: 'pointer',
//               disabled: p,
//               helperText: r,
//               helperTextIsHidden: s,
//               label: t,
//               labelLocation_INTERNAL: v,
//               labelRef: w,
//               onPress: function (a) {
//                 if (a.target === N.current) return
//                 S()
//               },
//               role: 'combobox',
//               shrinkLabelOnFocus: !1,
//               validationState: C,
//               value: E,
//               children: function (a) {
//                 a = a.id
//                 return i.jsx('div', {
//                   className: c('stylex')(
//                     R != null ? n.wrapperWithIcon : n.wrapper,
//                   ),
//                   id: a,
//                   ref: function (a) {
//                     N.current = a
//                   },
//                   suppressHydrationWarning: !0,
//                   children: i.jsx('div', {
//                     className: c('stylex')(
//                       n.button,
//                       v === 'outside' && n.labelOutsideButton,
//                       p && n.disabled,
//                       R != null && n.buttonWithIcon,
//                     ),
//                     'data-testid': void 0,
//                     children: i.jsx('span', {
//                       className: c('stylex')(D && n.truncated),
//                       children: (a = P) != null ? a : '\xa0',
//                     }),
//                   }),
//                 })
//               },
//             }),
//             M &&
//               i.jsx(
//                 c('BaseContextualLayer.react'),
//                 babelHelpers['extends'](
//                   {
//                     align: z === 'full' ? 'stretch' : b,
//                   },
//                   a,
//                   {
//                     contextRef: N,
//                     children: i.jsx(c('FocusInertRegion.react'), {
//                       focusQuery: d('focusScopeQueries').tabbableScopeQuery,
//                       children: i.jsx(c('CometMenu.react'), {
//                         footer:
//                           o != null
//                             ? {
//                                 text: o,
//                               }
//                             : void 0,
//                         header: q,
//                         id: G,
//                         role: 'listbox',
//                         size: z,
//                         truncate: D,
//                         children: B.map(function (a, b) {
//                           var d = a.value === E
//                           return i.jsx(
//                             c('CometFormComboboxMenuItem.react'),
//                             {
//                               'aria-disabled': a.disabled,
//                               'aria-setsize': B.length,
//                               auxItemType: f,
//                               bodyColor: a.bodyColor,
//                               bodyText: a.bodyText,
//                               disabled: a.disabled,
//                               icon: a.icon,
//                               iconType: u,
//                               id: U(F, b),
//                               isSelected: d,
//                               onClick: function () {
//                                 y(a.value), T()
//                               },
//                               primaryText: a.label,
//                               secondaryColor: a.secondaryColor,
//                               secondaryText: a.secondaryText,
//                               testid: void 0,
//                               visuallyFocused: a.value === K,
//                             },
//                             a.value,
//                           )
//                         }),
//                       }),
//                     }),
//                   },
//                 ),
//               ),
//           ],
//         }),
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     g['default'] = a
//   },
//   98,
// )
