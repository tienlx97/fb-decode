// __d(
//   'CometListCellStrict.react',
//   [
//     'CometCompositeStructureContext',
//     'CometDensityAwarenessContext',
//     'CometDensityModeContext',
//     'CometFocusGroupContext',
//     'CometFocusTableContext',
//     'CometIcon.react',
//     'CometImageFromIXValueRelayWrapper.react',
//     'CometPressable.react',
//     'CometProfilePhoto.react',
//     'CometProfilePhotoForActor.react',
//     'CometProgressSkittleIndeterminate.react',
//     'CometSkittleEmoji.react',
//     'CometSkittleIcon.react',
//     'CometVisualCompletionAttributes',
//     'MWJewelThreadFacepile.react',
//     'TetraText.react',
//     'TetraTextPairing.react',
//     'getItemRoleFromCompositeRole',
//     'getListCellAddOn.react',
//     'react',
//     'stylex',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react'),
//       i = d('react').useContext,
//       j = {
//         addOn: {
//           alignItems: 'x6s0dn4',
//           display: 'x78zum5',
//           flexDirection: 'x1q0g3np',
//           $$css: !0,
//         },
//         addOnWithExpander: {
//           marginEnd: 'x1emribx',
//           $$css: !0,
//         },
//         addOnWithIcon: {
//           display: 'x78zum5',
//           $$css: !0,
//         },
//         addOnWithText: {
//           marginStart: 'xsgj6o6',
//           $$css: !0,
//         },
//         bottomAddOn: {
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           marginEnd: 'x12rz0ws',
//           marginStart: 'x16hk5td',
//           $$css: !0,
//         },
//         bottomAddOnInner: {
//           maxWidth: 'x193iq5w',
//           $$css: !0,
//         },
//         bottomAddOnOverrideRow: {
//           flexDirection: 'x1q0g3np',
//           marginEnd: 'x11i5rnm',
//           marginStart: 'x1mh8g0r',
//           paddingTop: 'x1yrsyyn',
//           $$css: !0,
//         },
//         bottomAddOnWithFacepile: {
//           marginStart: 'x169t7cy',
//           $$css: !0,
//         },
//         bottomDivider: {
//           backgroundColor: 'x14nfmen',
//           bottom: 'x1ey2m1c',
//           end: 'xds687c',
//           height: 'xjm9jq1',
//           position: 'x10l6tqk',
//           start: 'x17qophe',
//           $$css: !0,
//         },
//         content: {
//           alignItems: 'x1qjc9v5',
//           borderBottomStyle: 'x1q0q8m5',
//           borderBottomWidth: 'x1qhh985',
//           borderEndStyle: 'xu3j5b3',
//           borderEndWidth: 'xcfux6l',
//           borderStartStyle: 'x26u7qi',
//           borderStartWidth: 'xm0m39n',
//           borderTopStyle: 'x13fuv20',
//           borderTopWidth: 'x972fbf',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexBasis: 'x1r8uery',
//           flexDirection: 'xdt5ytf',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           justifyContent: 'x1qughib',
//           marginBottom: 'xat24cr',
//           marginEnd: 'x11i5rnm',
//           marginStart: 'x1mh8g0r',
//           marginTop: 'xdj266r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingEnd: 'x4uap5',
//           paddingStart: 'xkhd6sd',
//           paddingTop: 'xz9dl7a',
//           paddingBottom: 'xsag5q8',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         contentContainer: {
//           alignItems: 'x6s0dn4',
//           alignSelf: 'xkh2ocl',
//           borderBottomStyle: 'x1q0q8m5',
//           borderBottomWidth: 'x1qhh985',
//           borderEndStyle: 'xu3j5b3',
//           borderEndWidth: 'xcfux6l',
//           borderStartStyle: 'x26u7qi',
//           borderStartWidth: 'xm0m39n',
//           borderTopStyle: 'x13fuv20',
//           borderTopWidth: 'x972fbf',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexDirection: 'x1q0g3np',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           justifyContent: 'x1qughib',
//           marginBottom: 'xat24cr',
//           marginEnd: 'x11i5rnm',
//           marginStart: 'x1mh8g0r',
//           marginTop: 'xdj266r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingBottom: 'x18d9i69',
//           paddingEnd: 'x4uap5',
//           paddingStart: 'xkhd6sd',
//           paddingTop: 'xexx8yu',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         contentDense: {
//           paddingTop: 'x1y1aw1k',
//           paddingBottom: 'xwib8y2',
//           $$css: !0,
//         },
//         contentWithMoreSpacing: {
//           paddingTop: 'xyamay9',
//           paddingBottom: 'x1l90r2v',
//           $$css: !0,
//         },
//         contentWithMoreSpacingDense: {
//           paddingTop: 'xz9dl7a',
//           paddingBottom: 'xsag5q8',
//           $$css: !0,
//         },
//         disabled: {
//           cursor: 'x1h6gzvc',
//           pointerEvents: 'x47corl',
//           $$css: !0,
//         },
//         endAddOn: {
//           marginBottom: 'xod5an3',
//           marginStart: 'x16n37ib',
//           marginTop: 'x14vqqas',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         endAddOnCenter: {
//           marginBottom: 'x1e56ztr',
//           marginTop: 'x1xmf6yo',
//           $$css: !0,
//         },
//         endAddOnSmall: {
//           marginBottom: 'x1e56ztr',
//           marginStart: 'x16n37ib',
//           marginTop: 'x1xmf6yo',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         listCellMinHeight: {
//           minHeight: 'x1gg8mnh',
//           $$css: !0,
//         },
//         pressable: {
//           borderTopStartRadius: 'x1lq5wgf',
//           borderTopEndRadius: 'xgqcy7u',
//           borderBottomEndRadius: 'x30kzoy',
//           borderBottomStartRadius: 'x9jhf4c',
//           display: 'x1lliihq',
//           $$css: !0,
//         },
//         responsiveButtons: {
//           flexGrow: 'x1iyjqo2',
//           paddingBottom: 'x10b6aqq',
//           paddingTop: 'x1yrsyyn',
//           $$css: !0,
//         },
//         responsiveContent: {
//           alignItems: 'x6s0dn4',
//           flexDirection: 'x1q0g3np',
//           flexWrap: 'x1a02dak',
//           marginBottom: 'x4cne27',
//           marginTop: 'xifccgj',
//           $$css: !0,
//         },
//         responsiveText: {
//           boxSizing: 'x9f619',
//           flexBasis: 'x4pfjvb',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           maxWidth: 'x193iq5w',
//           minWidth: 'x1mkiy5m',
//           paddingBottom: 'x10b6aqq',
//           paddingEnd: 'x1pi30zi',
//           paddingTop: 'x1yrsyyn',
//           $$css: !0,
//         },
//         root: {
//           alignItems: 'x6s0dn4',
//           borderBottomStyle: 'x1q0q8m5',
//           borderBottomWidth: 'x1qhh985',
//           borderEndStyle: 'xu3j5b3',
//           borderEndWidth: 'xcfux6l',
//           borderStartStyle: 'x26u7qi',
//           borderStartWidth: 'xm0m39n',
//           borderTopStyle: 'x13fuv20',
//           borderTopWidth: 'x972fbf',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexDirection: 'x1q0g3np',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           justifyContent: 'x1qughib',
//           marginBottom: 'xat24cr',
//           marginEnd: 'x11i5rnm',
//           marginStart: 'x1mh8g0r',
//           marginTop: 'xdj266r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingBottom: 'x18d9i69',
//           paddingEnd: 'x1sxyh0',
//           paddingStart: 'xurb0ha',
//           paddingTop: 'xexx8yu',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         rootWithIncreasedHeight: {
//           minHeight: 'x1wiwyrm',
//           $$css: !0,
//         },
//         selected: {
//           backgroundColor: 'x1av1boa',
//           $$css: !0,
//         },
//         selectedWashBackground: {
//           backgroundColor: 'xljulmy',
//           $$css: !0,
//         },
//         startAddOn: {
//           alignSelf: 'xqcrz7y',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           marginEnd: 'xq8finb',
//           marginTop: 'x1xmf6yo',
//           marginBottom: 'x1e56ztr',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         startAddOnDense: {
//           marginTop: 'x1k70j0n',
//           marginBottom: 'xzueoph',
//           $$css: !0,
//         },
//         startAddOnDensityAware: {
//           '@media (max-height: 700px)_marginEnd': 'x1ywmky0',
//           '@media (max-height: 700px)_marginStart': 'xnd27nj',
//           '@media (max-height: 700px)_marginTop': 'xv2ei83',
//           '@media (max-height: 700px)_marginBottom': 'x1og3r51',
//           '@media (max-height: 700px)_transform': 'xv3fwf9',
//           $$css: !0,
//         },
//         textRight: {
//           flexShrink: 'x2lah0s',
//           $$css: !0,
//         },
//         visualSwitch: {
//           pointerEvents: 'x47corl',
//           $$css: !0,
//         },
//       },
//       k = {
//         center: {
//           alignSelf: 'xamitd3',
//           $$css: !0,
//         },
//         top: {
//           alignSelf: 'xqcrz7y',
//           $$css: !0,
//         },
//       },
//       l = {
//         center: {
//           alignSelf: 'xamitd3',
//           $$css: !0,
//         },
//         top: {
//           alignSelf: 'xqcrz7y',
//           $$css: !0,
//         },
//       }
//     function a(a, b) {
//       var d = a.addOnBottom,
//         e = a.addOnEnd,
//         f = a.addOnEndDisabled,
//         g = a.addOnEndRef,
//         p = a.addOnEndTestId
//       p = a.addOnEndVerticalAlign
//       p = p === void 0 ? 'top' : p
//       var q = a.addOnStart,
//         r = a.addOnStartCssSelectionId,
//         s = a.addOnStartDisabled,
//         t = a.addOnStartOverrideVerticalStyle,
//         u = a.addOnStartTestId
//       u = a.addOnStartVerticalAlign
//       u = u === void 0 ? 'top' : u
//       var v = a['aria-label'],
//         w = a['aria-pressed'],
//         x = a.body,
//         y = a.bodyColor
//       y = y === void 0 ? 'secondary' : y
//       var z = a.bodyLineLimit,
//         A = a.contentHorizontalPadding,
//         B = a.dataAttributes,
//         C = a.describedby,
//         D = a.disabled
//       D = D === void 0 ? !1 : D
//       var E = a.emphasized
//       E = E === void 0 ? !1 : E
//       var aa = a.focusable,
//         ba = a.hasBottomDivider,
//         F = a.headline,
//         G = a.headlineAddOn,
//         H = a.headlineColor
//       H = H === void 0 ? 'primary' : H
//       var I = a.headlineLineLimit,
//         J = a.level
//       J = J === void 0 ? 3 : J
//       var K = a.linkProps,
//         L = a.meta,
//         M = a.metaColor
//       M = M === void 0 ? 'tertiary' : M
//       var N = a.metaLineLimit,
//         O = a.metaLocation,
//         ca = a.onFocusChange,
//         da = a.onHoverIn,
//         ea = a.onHoverOut,
//         onlyHeadline = a.onPress,
//         fa = a.onPressIn,
//         ga = a.onPressOut,
//         Q = a.paddingHorizontal,
//         ha = a.role,
//         R = a.selected
//       R = R === void 0 ? !1 : R
//       var S = a.selectedBackground,
//         T = a.size
//       T = T === void 0 ? 'default' : T
//       var U = a.testid
//       U = a.testOnly_pressed
//       a = D
//       var V = onlyHeadline
//       if (onlyHeadline == null && (e == null ? void 0 : e.type) === 'switch') {
//         var W
//         V = (W = e == null ? void 0 : e.onChange) != null ? W : onlyHeadline
//         a = (W = e == null ? void 0 : e.disabled) != null ? W : D
//       }
//       onlyHeadline = i(c('CometDensityModeContext'))
//       W = onlyHeadline[0]
//       D = i(c('CometDensityAwarenessContext'))
//       onlyHeadline = F != null && x == null && L == null
//       var onlyBody = F == null && x != null && L == null,
//         onlyMeta = F == null && x == null && L != null,
//         Z =
//           (onlyHeadline && I != null && I === 1) ||
//           (onlyBody && z != null && z === 1) ||
//           (onlyMeta && N != null && N === 1)
//       onlyHeadline =
//         (onlyHeadline && I != null && I > 1) ||
//         (onlyBody && z != null && z > 1) ||
//         (onlyMeta && N != null && N > 1)
//       onlyBody =
//         e != null &&
//         (e.type === 'primary-button' ||
//           e.type === 'secondary-button' ||
//           e.type === 'body')
//       onlyMeta = e != null && e.type === 'expander'
//       p = onlyBody || onlyMeta ? 'center' : p
//       u = Z ? 'center' : u
//       var $ = d != null && d.type === 'buttons'
//       onlyHeadline =
//         q == null && (onlyHeadline || (Z && (onlyBody || onlyMeta)))
//       Z =
//         B != null
//           ? Object.keys(B).reduce(function (a, b) {
//               a != null && b != null && (a['data-' + b] = B[b])
//               return a
//             }, {})
//           : null
//       D = h.jsxs('div', {
//         className: c('stylex')(
//           j.root,
//           onlyMeta && T !== 'small' && j.rootWithIncreasedHeight,
//           T !== 'small' && j.listCellMinHeight,
//         ),
//         style:
//           A == null
//             ? void 0
//             : {
//                 paddingLeft: A,
//                 paddingRight: A,
//               },
//         children: [
//           q != null
//             ? h.jsx('div', {
//                 className: c('stylex')(
//                   j.startAddOn,
//                   t,
//                   k[u],
//                   W && j.startAddOnDense,
//                   D === !0 && j.startAddOnDensityAware,
//                 ),
//                 'data-testid': void 0,
//                 id: r,
//                 children: h.jsx(m, {
//                   addOnStart: q,
//                   disabled: (A = s) != null ? A : a,
//                 }),
//               })
//             : null,
//           h.jsxs('div', {
//             className:
//               'x6s0dn4 xkh2ocl x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z',
//             children: [
//               h.jsxs('div', {
//                 className: c('stylex')(
//                   j.content,
//                   W && j.contentDense,
//                   onlyHeadline && j.contentWithMoreSpacing,
//                   onlyHeadline && W && j.contentWithMoreSpacingDense,
//                   $ && j.responsiveContent,
//                 ),
//                 children: [
//                   h.jsx('div', {
//                     className: c('stylex')($ && j.responsiveText),
//                     children: h.jsx(c('TetraTextPairing.react'), {
//                       body: x,
//                       bodyColor: a ? 'disabled' : y,
//                       bodyLineLimit: z,
//                       headline: F,
//                       headlineAddOn: G,
//                       headlineColor: a ? 'disabled' : H,
//                       headlineLineLimit: I,
//                       level: J,
//                       meta: L,
//                       metaColor: a ? 'disabled' : M,
//                       metaLineLimit: N,
//                       metaLocation: O,
//                       reduceEmphasis: E === !1,
//                     }),
//                   }),
//                   d != null &&
//                     h.jsx('div', {
//                       className: c('stylex')(
//                         j.bottomAddOn,
//                         d.type === 'facepile' && j.bottomAddOnWithFacepile,
//                         d.type === 'override-row' && j.bottomAddOnOverrideRow,
//                         $ && j.responsiveButtons,
//                       ),
//                       children: h.jsx('div', {
//                         className: 'x193iq5w',
//                         children: h.jsx(n, {
//                           addOnBottom: d,
//                         }),
//                       }),
//                     }),
//                 ],
//               }),
//               e != null
//                 ? h.jsx('div', {
//                     className: c('stylex')(
//                       T !== 'small' && j.endAddOn,
//                       T === 'small' && j.endAddOnSmall,
//                       (onlyBody || onlyMeta) && j.endAddOnCenter,
//                       l[p],
//                     ),
//                     'data-testid': void 0,
//                     ref: g,
//                     children: h.jsx(o, {
//                       addOn: e,
//                       disabled: (t = f) != null ? t : a,
//                       level: J,
//                     }),
//                   })
//                 : null,
//               ((u = ba) != null ? u : !1)
//                 ? h.jsx('div', {
//                     className:
//                       'x14nfmen x1ey2m1c xds687c xjm9jq1 x10l6tqk x17qophe',
//                   })
//                 : null,
//             ],
//           }),
//         ],
//       })
//       r =
//         e != null &&
//         e.type === 'expander' &&
//         e.open === !0 &&
//         e.children != null
//           ? e.children
//           : null
//       q = void 0
//       s = void 0
//       if (e != null)
//         switch (e.type) {
//           case 'checkbox':
//             s = e.on
//             q = 'checkbox'
//             break
//           case 'radio':
//             s = e.on
//             q = 'radio'
//             break
//           case 'switch':
//             s = e.value
//             q = 'switch'
//             break
//         }
//       A =
//         e != null &&
//         e.type === 'expander' &&
//         e.open === !0 &&
//         e.children != null
//       onlyHeadline = i(c('CometFocusGroupContext'))
//       W = onlyHeadline.FocusItem
//       x = i(c('CometFocusTableContext'))
//       y = x.FocusCell
//       z = x.FocusRow
//       F = i(c('CometCompositeStructureContext'))
//       G = F.role
//       I = (H = ha) != null ? H : c('getItemRoleFromCompositeRole')(G)
//       M = I === 'row' && z ? z : (L = W) != null ? L : h.Fragment
//       O = (N = y) != null ? N : h.Fragment
//       return h.jsxs(M, {
//         children: [
//           h.jsx(
//             'div',
//             babelHelpers['extends'](
//               {},
//               c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
//               {
//                 'aria-selected': I === 'option' ? R : void 0,
//                 role: (E = I) != null ? E : void 0,
//                 style: {
//                   paddingLeft: ($ = Q) != null ? $ : 8,
//                   paddingRight: (d = Q) != null ? d : 8,
//                 },
//               },
//               Z,
//               {
//                 children: h.jsx(O, {
//                   children:
//                     V != null || K != null
//                       ? h.jsx(c('CometPressable.react'), {
//                           'aria-checked': s,
//                           'aria-current': R ? 'page' : void 0,
//                           'aria-describedby': C != null ? C : void 0,
//                           'aria-expanded':
//                             e != null && e.type === 'expander' ? A : void 0,
//                           'aria-label': v,
//                           'aria-pressed': w,
//                           disabled: a,
//                           display: 'block',
//                           focusable: aa,
//                           linkProps: K,
//                           onFocusChange: ca,
//                           onHoverIn: da,
//                           onHoverOut: ea,
//                           onPress: V,
//                           onPressIn: fa,
//                           onPressOut: ga,
//                           overlayDisabled: R,
//                           overlayFocusRingPosition: 'inset',
//                           ref: b,
//                           role: q,
//                           testOnly_pressed: U,
//                           testid: void 0,
//                           xstyle: [
//                             j.pressable,
//                             R && S !== 'none' && j.selected,
//                             R && S === 'wash' && j.selectedWashBackground,
//                             a && j.disabled,
//                           ],
//                           children: D,
//                         })
//                       : h.jsx('div', {
//                           className: c('stylex')(
//                             j.pressable,
//                             R && j.selected,
//                             R && S === 'wash' && j.selectedWashBackground,
//                             a && j.disabled,
//                           ),
//                           'data-testid': void 0,
//                           ref: b,
//                           children: D,
//                         }),
//                 }),
//               },
//             ),
//           ),
//           r,
//         ],
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     function m(a) {
//       var b = a.addOnStart
//       a = a.disabled
//       switch (b.type) {
//         case 'icon':
//           b.type
//           var d = babelHelpers.objectWithoutPropertiesLoose(b, ['type'])
//           return h.jsx(
//             c('CometIcon.react'),
//             babelHelpers['extends']({}, d, {
//               disabled: a,
//             }),
//           )
//         case 'profile-photo':
//           b.type
//           d = babelHelpers.objectWithoutPropertiesLoose(b, ['type'])
//           return h.jsx(
//             c('CometProfilePhoto.react'),
//             babelHelpers['extends']({}, d),
//           )
//         case 'profile-photo-for-actor':
//           b.type
//           d = babelHelpers.objectWithoutPropertiesLoose(b, ['type'])
//           return h.jsx(
//             c('CometProfilePhotoForActor.react'),
//             babelHelpers['extends']({}, d),
//           )
//         case 'contained-icon':
//           d = b.color
//           d = d === void 0 ? 'gray' : d
//           b.type
//           var e = babelHelpers.objectWithoutPropertiesLoose(b, [
//             'color',
//             'type',
//           ])
//           return h.jsx(
//             c('CometSkittleIcon.react'),
//             babelHelpers['extends'](
//               {
//                 color: d,
//               },
//               e,
//               {
//                 disabled: a,
//               },
//             ),
//           )
//         case 'contained-progress-ring-indeterminate':
//           return h.jsx(c('CometProgressSkittleIndeterminate.react'), {})
//         case 'messenger-facepile':
//           b.type
//           d = babelHelpers.objectWithoutPropertiesLoose(b, ['type'])
//           return h.jsx(
//             c('MWJewelThreadFacepile.react'),
//             babelHelpers['extends']({}, d),
//           )
//         case 'override':
//           return b.component
//         case 'emoji':
//           e = b.color
//           a = e === void 0 ? 'gray' : e
//           d = b.emoji
//           e = b.emojiSize
//           e = e === void 0 ? 20 : e
//           var f = b.size
//           f = f === void 0 ? 40 : f
//           return h.jsx(c('CometSkittleEmoji.react'), {
//             color: a,
//             emoji: d,
//             emojiSize: e,
//             size: f,
//           })
//         case 'sprite':
//           a = b.sprite
//           return h.jsx(c('CometImageFromIXValueRelayWrapper.react'), {
//             sprite: a,
//           })
//         default:
//           b.type
//           return null
//       }
//     }
//     m.displayName = m.name + ' [from ' + f.id + ']'
//     var n = function (a) {
//         a = a.addOnBottom
//         switch (a.type) {
//           case 'facepile':
//             return a.facepile
//           default:
//             return a.component
//         }
//       },
//       o = function (a) {
//         var b = a.addOn,
//           e = a.disabled
//         a = a.level
//         var f = d('getListCellAddOn.react').getEndAddOn(b, e, a),
//           g = b.type === 'disclosure' && b.text != null ? b.text : null
//         return h.jsxs('div', {
//           className: c('stylex')(
//             j.addOn,
//             b.type === 'switch' && j.visualSwitch,
//           ),
//           children: [
//             g != null &&
//               h.jsx('div', {
//                 className: 'x2lah0s',
//                 children: h.jsx(c('TetraText.react'), {
//                   color: e ? 'disabled' : 'secondary',
//                   numberOfLines: 1,
//                   type: a === 3 ? 'body2' : 'body3',
//                   children: g,
//                 }),
//               }),
//             h.jsx('div', {
//               className: c('stylex')(
//                 b.type === 'expander' && j.addOnWithExpander,
//                 g != null && j.addOnWithText,
//                 b.type === 'icon' && j.addOnWithIcon,
//               ),
//               children: f,
//             }),
//           ],
//         })
//       }
//     b = h.forwardRef(a)
//     g['default'] = b
//   },
//   98,
// )
