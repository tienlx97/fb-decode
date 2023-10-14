// __d(
//   'CometTabs.react',
//   [
//     'fbt',
//     'CometComponentWithKeyCommands.react',
//     'CometDeferredPopoverTrigger.react',
//     'CometFocusGroup.react',
//     'CometKeys',
//     'CometTab.react',
//     'CometVisualCompletionAttributes',
//     'CurrentLocale',
//     'SVGIcon',
//     'TriangleDownFilled20.svg.react',
//     'focusScopeQueries',
//     'gkx',
//     'mergeRefs',
//     'react',
//     'requireDeferred',
//     'stylex',
//   ],
//   function (a, b, c, d, e, f, g, h) {
//     'use strict'
//     var i,
//       j,
//       k = j || (j = d('react'))
//     b = j
//     var useCallback = b.useCallback,
//       useEffect = b.useEffect,
//       useMemo = b.useMemo,
//       useRef = b.useRef,
//       useState = b.useState,
//       q =
//         c('requireDeferred')('CometTabMenu.react').__setRef('CometTabs.react'),
//       r = {
//         heightGetter: {
//           lineHeight: 'x14ju556',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         heightSetter: {
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           visibility: 'xlshs6z',
//           $$css: !0,
//         },
//         moreTab: {
//           height: 'xng8ra',
//           position: 'x10l6tqk',
//           start: 'x17qophe',
//           top: 'x13vifvy',
//           $$css: !0,
//         },
//         moreWrapper: {
//           display: 'x1rg5ohu',
//           height: 'xng8ra',
//           position: 'x1n2onr6',
//           verticalAlign: 'x16dsc37',
//           $$css: !0,
//         },
//         moreWrapperAdaptive: {
//           height: 'x1x4j4od',
//           maxHeight: 'x1jquxbb',
//           minHeight: 'x2lwn1j',
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           $$css: !0,
//         },
//         root: {
//           height: 'xng8ra',
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           position: 'x1n2onr6',
//           width: 'xh8yej3',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         tab: {
//           display: 'x3nfvp2',
//           float: 'xrbpyxo',
//           height: 'xng8ra',
//           verticalAlign: 'x16dsc37',
//           $$css: !0,
//         },
//         tabsContainer: {
//           bottom: 'x1ey2m1c',
//           boxSizing: 'x9f619',
//           end: 'xds687c',
//           position: 'x10l6tqk',
//           start: 'x17qophe',
//           top: 'x13vifvy',
//           $$css: !0,
//         },
//       },
//       s = {
//         default: {
//           width: 'x1k51ox',
//           $$css: !0,
//         },
//         englishOrShorter: {
//           width: 'x192njpj',
//           $$css: !0,
//         },
//       },
//       locales = [
//         'en_US',
//         'en_GB',
//         'nl_NL',
//         'vi_VN',
//         'af_ZA',
//         'fy_NL',
//         'kk_KZ',
//         'cs_CZ',
//         'sw_KE',
//         'it_IT',
//         'pt_BR',
//         'pt_PT',
//         'bg_BG',
//         'hr_HR',
//         'nn_NO',
//         'es_ES',
//         'es_LA',
//         'fr_FR',
//         'ca_ES',
//         'fr_CA',
//         'si_LK',
//         'sr_RS',
//         'nb_NO',
//         'sv_SE',
//         'zh_HK',
//         'zh_TW',
//         'he_IL',
//         'ne_NP',
//         'eo_EO',
//       ]
//     function a(a) {
//       var b = a.heightXStyle,
//         e = a.maxHeightXStyle,
//         f = a.tabs,
//         g = a.maxTabs,
//         j = g === void 0 ? f.length : g,
//         x = a.menuSize,
//         y = a.moreTabRef,
//         z = a.moreTabStyles,
//         A = a.moreTabXStyle,
//         B = a.moreWrapperXStyle,
//         C = a.tabsContainerStyle
//       g = a.truncateMenu
//       var D = g === void 0 ? !1 : g,
//         E = a.onMoreTabPress,
//         F = useRef(null),
//         G = useRef([]),
//         H = useRef(null)
//       g = useState(generateNumbersInRange(f.length, j))
//       var I = g[0],
//         J = g[1]
//       useEffect(
//         function () {
//           J(generateNumbersInRange(f.length, j))
//         },
//         [f.length, j],
//       )
//       var K = j < f.length ? f.slice(0, j) : f,
//         L = j >= f.length,
//         M = useMemo(
//           function () {
//             return I.some(function (a) {
//               return (a = f[a]) == null ? void 0 : a.selected
//             })
//           },
//           [I, f],
//         ),
//         N = useCallback(
//           function (a, f) {
//             a = c('mergeRefs')(a, H, y)
//             var g = [
//               {
//                 command: {
//                   key: c('CometKeys').DOWN,
//                 },
//                 description: h._('__JHASH__XKKEZVjEqk8__JHASH__'),
//                 handler: f,
//               },
//             ]
//             return k.jsx(c('CometComponentWithKeyCommands.react'), {
//               commandConfigs: g,
//               xstyle: [
//                 r.moreWrapper,
//                 s['default'],
//                 locales.includes(c('CurrentLocale').get()) &&
//                   s.englishOrShorter,
//                 b,
//                 L && r.moreWrapperAdaptive,
//                 B,
//                 e,
//               ],
//               children: k.jsx(
//                 c('CometTab.react'),
//                 babelHelpers['extends']({}, z, {
//                   'aria-haspopup': 'menu',
//                   icon: d('SVGIcon').svgIcon(
//                     c('TriangleDownFilled20.svg.react'),
//                   ),
//                   iconSize: 16,
//                   label: h._('__JHASH__aIpSCYSYAKN__JHASH__'),
//                   onPress: function () {
//                     f(), E && E()
//                   },
//                   pressableXStyle: [r.moreTab, b],
//                   ref: a,
//                   role: 'tab',
//                   selected: M,
//                   testid: void 0,
//                   xstyle: A,
//                 }),
//               ),
//             })
//           },
//           [L, b, M, e, z, A, B, E],
//         )
//       return k.jsx(c('CometFocusGroup.react'), {
//         hideArrowSignifiers: !0,
//         orientation: 'horizontal',
//         preventScrollOnFocus: !0,
//         role: 'tablist',
//         tabScopeQuery: d('focusScopeQueries').tabbableScopeQuery,
//         wrap: !0,
//         children: function (a) {
//           return k.jsx(
//             'div',
//             babelHelpers['extends'](
//               {
//                 className: (i || (i = c('stylex')))(r.root, a, b),
//                 role: 'tablist',
//               },
//               c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
//               {
//                 children: k.jsxs('div', {
//                   className: 'x14ju556 x1n2onr6',
//                   children: [
//                     L &&
//                       k.jsx('div', {
//                         className: 'x6ikm8r x10wlt62 xlshs6z',
//                         children: K.map(function (a, b) {
//                           a.linkProps
//                           a.onPress
//                           a = babelHelpers.objectWithoutPropertiesLoose(a, [
//                             'linkProps',
//                             'onPress',
//                           ])
//                           return k.createElement(
//                             c('CometTab.react'),
//                             babelHelpers['extends']({}, a, {
//                               key: b + 'tab',
//                               ref: function (a) {
//                                 return (G.current[b] = a)
//                               },
//                               role: 'tab',
//                               selected: a.selected,
//                               xstyle: [r.tab, a.xstyle],
//                             }),
//                           )
//                         }),
//                       }),
//                     k.jsxs('div', {
//                       className: i(r.tabsContainer, C),
//                       'data-testid': void 0,
//                       children: [
//                         k.jsx(c('CometDeferredPopoverTrigger.react'), {
//                           popoverProps: {
//                             menuItems: I.map(function (a) {
//                               return f[a]
//                             }).filter(Boolean),
//                             menuSize: x,
//                             truncate: D,
//                           },
//                           popoverResource: q,
//                           children: N,
//                         }),
//                         K.map(function (a, b) {
//                           return k.createElement(
//                             c('CometTab.react'),
//                             babelHelpers['extends']({}, a, {
//                               containerRef: F,
//                               key: b + 'tab',
//                               onHidden: function (a) {
//                                 if (c('gkx')('3806')) {
//                                   var d = a ? u(I, b) : v(I, b)
//                                   d !== I && J(d)
//                                 } else
//                                   J(function (c) {
//                                     return a ? u(c, b) : v(c, b)
//                                   })
//                               },
//                               pressableXStyle: r.tab,
//                               ref: function (a) {
//                                 return (G.current[b] = a)
//                               },
//                               role: 'tab',
//                               selected: a.selected,
//                             }),
//                           )
//                         }),
//                       ],
//                     }),
//                   ],
//                 }),
//               },
//             ),
//           )
//         },
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     function u(a, b) {
//       return a.includes(b)
//         ? a
//         : [].concat(a, [b]).sort(function (a, b) {
//             return a - b
//           })
//     }
//     function v(a, b) {
//       return a.includes(b)
//         ? a.filter(function (a) {
//             return a !== b
//           })
//         : a
//     }
//     function generateNumbersInRange(a, b) {
//       return Array.from({
//         length: a,
//       })
//         .map(function (a, b) {
//           return b
//         })
//         .filter(function (a) {
//           return a >= b
//         })
//     }
//     g['default'] = a
//   },
//   98,
// )
