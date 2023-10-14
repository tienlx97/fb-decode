// __d(
//   'WorkGalahadUIChannelItem.react',
//   [
//     'BaseFocusRing.react',
//     'ChannelGeminiFocusableTable.react',
//     'CometPressable.react',
//     'CometPressableOverlay.react',
//     'Locale',
//     'TetraTextPairing.react',
//     'URI',
//     'WorkCometInteractiveElementContext.react',
//     'cr:130',
//     'emptyFunction',
//     'gkx',
//     'react',
//     'stylex',
//     'useCometPreloader',
//     'useHoverAndFocusState',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h,
//       i,
//       j,
//       k = j || (j = d('react'))
//     e = j
//     var useCallback = e.useCallback,
//       useMemo = e.useMemo,
//       useState = e.useState,
//       o =
//         (e =
//           b('cr:130') == null
//             ? void 0
//             : b('cr:130').useGalileoNavDrawerContext) != null
//           ? e
//           : c('emptyFunction'),
//       p = c('gkx')('875'),
//       q = {
//         root: {
//           boxSizing: 'x9f619',
//           position: 'x1n2onr6',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           display: 'x78zum5',
//           justifyContent: 'x1nhvcw1',
//           alignItems: 'x6s0dn4',
//           flexDirection: 'x1q0g3np',
//           borderTop: 'x76ihet',
//           borderEnd: 'xwmqs3e',
//           borderBottom: 'x112ta8',
//           borderStart: 'xxxdfa6',
//           paddingEnd: 'x1pi30zi',
//           $$css: !0,
//         },
//         selected: {
//           backgroundColor: 'x1qq8qej',
//           $$css: !0,
//         },
//         contentContainer: {
//           borderTopStyle: 'x13fuv20',
//           borderStartStyle: 'x26u7qi',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderTopWidth: 'x972fbf',
//           borderStartWidth: 'xm0m39n',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1mh8g0r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           justifyContent: 'x1nhvcw1',
//           alignItems: 'x6s0dn4',
//           flexDirection: 'x1q0g3np',
//           $$css: !0,
//         },
//         content: {
//           borderTopStyle: 'x13fuv20',
//           borderStartStyle: 'x26u7qi',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderTopWidth: 'x972fbf',
//           borderStartWidth: 'xm0m39n',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1mh8g0r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           justifyContent: 'x1nhvcw1',
//           alignItems: 'x6s0dn4',
//           flexDirection: 'x1q0g3np',
//           outline: 'x1a2a7pz',
//           ':hover_textDecoration': 'x1lku1pv',
//           $$css: !0,
//         },
//         textPairing: {
//           flexGrow: 'x1iyjqo2',
//           flexBasis: 'x1r8uery',
//           minWidth: 'xeuugli',
//           paddingTop: 'x1y1aw1k',
//           paddingBottom: 'xwib8y2',
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           textOverflow: 'xlyipyv',
//           $$css: !0,
//         },
//         addOnPrimary: {
//           borderTopStyle: 'x13fuv20',
//           borderStartStyle: 'x26u7qi',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderTopWidth: 'x972fbf',
//           borderStartWidth: 'xm0m39n',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexShrink: 'xs83m0k',
//           justifyContent: 'x1qughib',
//           marginStart: 'x1mh8g0r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           zIndex: 'x1ja2u2z',
//           alignItems: 'x6s0dn4',
//           flexGrow: 'x1c4vz4f',
//           marginBottom: 'x12nagc',
//           marginEnd: 'xq8finb',
//           marginTop: 'x1gslohp',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         addOnPrimaryDrawer: {
//           marginBottom: 'x1e56ztr',
//           marginTop: 'x1xmf6yo',
//           $$css: !0,
//         },
//         addOnSecondary: {
//           borderTopStyle: 'x13fuv20',
//           borderStartStyle: 'x26u7qi',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderTopWidth: 'x972fbf',
//           borderStartWidth: 'xm0m39n',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexShrink: 'xs83m0k',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1mh8g0r',
//           minHeight: 'x2lwn1j',
//           minWidth: 'xeuugli',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           zIndex: 'x1ja2u2z',
//           position: 'x10l6tqk',
//           start: 'xyzs4uy',
//           top: 'x13vifvy',
//           bottom: 'x1ey2m1c',
//           alignItems: 'x6s0dn4',
//           justifyContent: 'xl56j7k',
//           flexGrow: 'x1c4vz4f',
//           $$css: !0,
//         },
//         addOnSecondaryOffset: {
//           transform: 'xuuh30',
//           $$css: !0,
//         },
//         addOnSecondaryOffsetRTL: {
//           transform: 'xitnhlw',
//           $$css: !0,
//         },
//         indentationLevel1: {
//           paddingStart: 'x1swvt13',
//           $$css: !0,
//         },
//         indentationLevel2: {
//           paddingStart: 'x14gfdix',
//           $$css: !0,
//         },
//         indentationLevel3: {
//           paddingStart: 'xyxze6z',
//           $$css: !0,
//         },
//         addOnTertiary: {
//           borderTopStyle: 'x13fuv20',
//           borderStartStyle: 'x26u7qi',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderTopWidth: 'x972fbf',
//           borderStartWidth: 'xm0m39n',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           minHeight: 'x2lwn1j',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           flexGrow: 'x1c4vz4f',
//           flexShrink: 'x2lah0s',
//           minWidth: 'x15x72sd',
//           alignItems: 'x6s0dn4',
//           justifyContent: 'x13a6bvl',
//           flexDirection: 'x1q0g3np',
//           marginStart: 'x1i64zmx',
//           $$css: !0,
//         },
//       }
//     function r(a) {
//       a = a.indentationLevel
//       if (a === 1) return q.indentationLevel1
//       else if (a === 2) return q.indentationLevel2
//       else if (a === 3) return q.indentationLevel3
//     }
//     function a(a, b) {
//       var e = a.addOnPrimary,
//         f = a.addOnSecondary,
//         g = a.addOnTertiary,
//         j = a.disabled,
//         s = j === void 0 ? !1 : j
//       j = a.emphasized
//       j = j === void 0 ? !1 : j
//       var t = a.selected,
//         u = t === void 0 ? !1 : t
//       t = a.indentationLevel
//       var v = t === void 0 ? 2 : t
//       t = a.linkProps
//       t = t === void 0 ? {} : t
//       var w = t.url,
//         x = babelHelpers.objectWithoutPropertiesLoose(t, ['url'])
//       t = a.body
//       var y = a.bodyColor,
//         z = a.bodyLineLimit
//       z = z === void 0 ? 1 : z
//       var A = a.headline,
//         B = a.headlineAddOn,
//         C = a.headlineColor,
//         D = a.headlineLineLimit
//       D = D === void 0 ? 1 : D
//       var E = a.meta,
//         F = a.metaColor,
//         G = a.metaLineLimit,
//         aa = a.metaLocation,
//         H = a.onPress,
//         I = a.onPressIn,
//         J = a.onHoverIn,
//         K = a.onHoverOut,
//         L = a.onFocusIn,
//         M = a.onFocusOut,
//         N = a.isSemanticListItem,
//         O = N === void 0 ? !0 : N
//       N = a.testid
//       var ba = a.wrapperRef,
//         P = a.onPreload,
//         ca = a.focusableRole,
//         da = a.role,
//         ea = babelHelpers.objectWithoutPropertiesLoose(a, [
//           'addOnPrimary',
//           'addOnSecondary',
//           'addOnTertiary',
//           'disabled',
//           'emphasized',
//           'selected',
//           'indentationLevel',
//           'linkProps',
//           'body',
//           'bodyColor',
//           'bodyLineLimit',
//           'headline',
//           'headlineAddOn',
//           'headlineColor',
//           'headlineLineLimit',
//           'meta',
//           'metaColor',
//           'metaLineLimit',
//           'metaLocation',
//           'onPress',
//           'onPressIn',
//           'onHoverIn',
//           'onHoverOut',
//           'onFocusIn',
//           'onFocusOut',
//           'isSemanticListItem',
//           'testid',
//           'wrapperRef',
//           'onPreload',
//           'focusableRole',
//           'role',
//         ])
//       N = useState(!1)
//       var Q = N[0],
//         R = N[1]
//       a = c('useHoverAndFocusState')()
//       var S = a.focused,
//         T = a.hovered,
//         U = a.onFocusIn,
//         V = a.onFocusOut,
//         fa = a.onHoverIn,
//         ga = a.onHoverOut
//       N = o()
//       a = useMemo(
//         function () {
//           return {
//             hovered: T,
//             focused: S,
//             pressed: Q,
//           }
//         },
//         [T, S, Q],
//       )
//       var W = useCallback(
//         function () {
//           P && p && P()
//         },
//         [P],
//       )
//       W = c('useCometPreloader')('button_aggressive', void 0, W)
//       var X = W[0],
//         Y = W[1],
//         ha = useCallback(
//           function (a) {
//             X(a), J && J(a)
//           },
//           [J, X],
//         ),
//         ia = useCallback(
//           function (a) {
//             Y(), K && K(a)
//           },
//           [K, Y],
//         ),
//         ja = useCallback(
//           function (a) {
//             U(a), L && L(a)
//           },
//           [L, U],
//         ),
//         ka = useCallback(
//           function (a) {
//             V(a), M && M(a)
//           },
//           [M, V],
//         ),
//         la = useCallback(
//           function (a) {
//             R(!0), I && I(a)
//           },
//           [I],
//         ),
//         ma = useCallback(function () {
//           return R(!1)
//         }, []),
//         Z = k.jsxs(k.Fragment, {
//           children: [
//             e != null &&
//               k.jsx('div', {
//                 className: (h || (h = c('stylex')))(
//                   q.addOnPrimary,
//                   (N == null ? void 0 : N.isWithinDrawer) &&
//                     q.addOnPrimaryDrawer,
//                 ),
//                 children: e,
//               }),
//             k.jsx('div', {
//               'data-testid': void 0,
//               className:
//                 'x1iyjqo2 x1r8uery xeuugli x1y1aw1k xwib8y2 x6ikm8r x10wlt62 xlyipyv',
//               children: k.jsx(c('TetraTextPairing.react'), {
//                 body: t,
//                 bodyColor: y,
//                 bodyLineLimit: z,
//                 headline: A,
//                 headlineAddOn: B,
//                 headlineColor: C,
//                 headlineLineLimit: D,
//                 level: 4,
//                 meta: E,
//                 metaColor: F,
//                 metaLineLimit: G,
//                 metaLocation: aa,
//                 reduceEmphasis: j === !1,
//               }),
//             }),
//           ],
//         }),
//         na = O ? 'li' : 'div',
//         $ = H || w != null
//       return k.jsx(
//         d('ChannelGeminiFocusableTable.react')
//           .WorkGalahadChannelFocusableTableRow,
//         {
//           children: k.jsx(
//             c('WorkCometInteractiveElementContext.react').Provider,
//             {
//               value: a,
//               children: k.jsx(c('BaseFocusRing.react'), {
//                 children: function (a) {
//                   var e
//                   return k.jsxs(na, {
//                     ref: ba,
//                     role: (e = da) != null ? e : $ && O ? 'row' : void 0,
//                     onMouseEnter: fa,
//                     onMouseLeave: ga,
//                     className: (h || (h = c('stylex')))(
//                       q.root,
//                       r({
//                         indentationLevel: v,
//                       }),
//                       S && a,
//                       u && q.selected,
//                     ),
//                     children: [
//                       $ &&
//                         k.jsx(c('CometPressableOverlay.react'), {
//                           focusVisible: S,
//                           hovered: T,
//                           pressed: Q,
//                         }),
//                       $
//                         ? k.jsx(
//                             d('ChannelGeminiFocusableTable.react')
//                               .WorkGalahadChannelFocusableTableCell,
//                             {
//                               children: k.jsx('div', {
//                                 className:
//                                   'x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1nhvcw1 x6s0dn4 x1q0g3np',
//                                 role:
//                                   (e = ca) != null
//                                     ? e
//                                     : O
//                                     ? 'gridcell'
//                                     : void 0,
//                                 children: k.jsx(
//                                   c('CometPressable.react'),
//                                   babelHelpers['extends'](
//                                     {
//                                       testid: void 0,
//                                     },
//                                     ea,
//                                     {
//                                       display: 'block',
//                                       disabled: s,
//                                       linkProps: w
//                                         ? babelHelpers['extends']({}, x, {
//                                             url: (
//                                               i || (i = c('URI'))
//                                             ).normalize(w),
//                                             prefetchQueries: p,
//                                           })
//                                         : void 0,
//                                       onHoverIn: ha,
//                                       onHoverOut: ia,
//                                       onFocusIn: ja,
//                                       onFocusOut: ka,
//                                       onPress: H,
//                                       onPressIn: la,
//                                       onPressOut: ma,
//                                       overlayDisabled: !0,
//                                       ref: b,
//                                       suppressFocusRing: !0,
//                                       xstyle: q.content,
//                                       children: Z,
//                                     },
//                                   ),
//                                 ),
//                               }),
//                             },
//                           )
//                         : k.jsx('div', {
//                             className:
//                               'x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1nhvcw1 x6s0dn4 x1q0g3np x1a2a7pz x1lku1pv',
//                             children: Z,
//                           }),
//                       f != null &&
//                         k.jsx('div', {
//                           className: (h || (h = c('stylex')))(
//                             q.addOnSecondary,
//                             d('Locale').isRTL()
//                               ? q.addOnSecondaryOffsetRTL
//                               : q.addOnSecondaryOffset,
//                           ),
//                           children: f,
//                         }),
//                       g != null &&
//                         k.jsx('div', {
//                           className:
//                             'x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdj266r x11i5rnm xat24cr x2lwn1j xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1c4vz4f x2lah0s x15x72sd x6s0dn4 x13a6bvl x1q0g3np x1i64zmx',
//                           children: g,
//                         }),
//                     ],
//                   })
//                 },
//               }),
//             },
//           ),
//         },
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     b = k.forwardRef(a)
//     g['default'] = b
//   },
//   98,
// )
