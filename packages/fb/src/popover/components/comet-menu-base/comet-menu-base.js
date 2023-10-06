// __d(
//   'CometMenuBase.react',
//   [
//     'fbt',
//     'ix',
//     'BaseScrollableArea.react',
//     'CometErrorBoundary.react',
//     'CometFocusGroupFirstLetterNavigation',
//     'CometListCellStrict.react',
//     'CometMenuFocusGroup',
//     'CometMenuItemBaseRoleContext',
//     'CometSeparatorMenuItem.react',
//     'FocusRegion.react',
//     'TetraTextPairing.react',
//     'fbicon',
//     'focusScopeQueries',
//     'react',
//     'stylex',
//   ],
//   function (a, b, c, d, e, f, g, h, i) {
//     'use strict'
//     var j = d('react'),
//       k = 145,
//       l = {
//         listItem: {
//           borderTopStartRadius: 'x1lcm9me',
//           borderTopEndRadius: 'x1yr5g0i',
//           borderBottomEndRadius: 'xrt01vj',
//           borderBottomStartRadius: 'x10y3i5r',
//           display: 'x78zum5',
//           flexDirection: 'x1q0g3np',
//           marginTop: 'xdj266r',
//           marginEnd: 'x1emribx',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1i64zmx',
//           paddingTop: 'xz9dl7a',
//           paddingEnd: 'x1sxyh0',
//           paddingBottom: 'xsag5q8',
//           paddingStart: 'xurb0ha',
//           $$css: !0,
//         },
//         root: {
//           alignItems: 'x1qjc9v5',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           paddingStart: 'xkhd6sd',
//           paddingEnd: 'x4uap5',
//           paddingTop: 'x1ten1a2',
//           paddingBottom: 'xz7cn9q',
//           $$css: !0,
//         },
//         sizeFull: {
//           marginEnd: 'xzy4u6w',
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         sizeNormal: {
//           width: 'x168biu4',
//           $$css: !0,
//         },
//         sizeSmall: {
//           width: 'xi55695',
//           $$css: !0,
//         },
//       },
//       m = 'menu',
//       n = {
//         listbox: 'option',
//         menu: 'menuitem',
//       }
//     function a(a) {
//       var b = a.children,
//         e = a.footer,
//         f = a.header,
//         g = a.maxHeight,
//         o = a.role
//       o = o === void 0 ? m : o
//       a = a.size
//       a = a === void 0 ? 'normal' : a
//       var p = 0,
//         q = j.Children.toArray(b).map(function (a) {
//           if (a == null) return null
//           var b = p++
//           return a.type === c('CometSeparatorMenuItem.react')
//             ? a
//             : j.jsx(
//                 c('CometErrorBoundary.react'),
//                 {
//                   children: a,
//                 },
//                 b,
//               )
//         })
//       o = n[o]
//       return j.Children.count(b) > 0
//         ? j.jsx(c('BaseScrollableArea.react'), {
//             horizontal: !1,
//             style:
//               g != null
//                 ? {
//                     maxHeight: Math.max(g, k),
//                   }
//                 : void 0,
//             vertical: !0,
//             xstyle: [
//               l.root,
//               a === 'full' && l.sizeFull,
//               a === 'normal' && l.sizeNormal,
//               a === 'small' && l.sizeSmall,
//             ],
//             children: j.jsxs(c('CometMenuItemBaseRoleContext').Provider, {
//               value: o,
//               children: [
//                 f != null
//                   ? j.jsxs(j.Fragment, {
//                       children: [
//                         f.onPressBack != null
//                           ? j.jsx(c('CometListCellStrict.react'), {
//                               addOnStart: {
//                                 'aria-label': h._(
//                                   '__JHASH__v6nfNn2Wv-y__JHASH__',
//                                 ),
//                                 icon: d('fbicon')._(i('512665'), 24),
//                                 onPress: f.onPressBack,
//                                 type: 'icon',
//                               },
//                               addOnStartVerticalAlign: 'center',
//                               emphasized: !1,
//                               headline: f.title,
//                               level: 3,
//                               meta: f.meta,
//                               paddingHorizontal: 8,
//                             })
//                           : j.jsx('div', {
//                               className: c('stylex')([l.listItem]),
//                               children: j.jsx(c('TetraTextPairing.react'), {
//                                 body: f.body,
//                                 headline: f.title,
//                                 level: 3,
//                                 meta: f.meta,
//                                 reduceEmphasis: !0,
//                               }),
//                             }),
//                         j.jsx(c('CometSeparatorMenuItem.react'), {}),
//                       ],
//                     })
//                   : null,
//                 j.jsx(d('FocusRegion.react').FocusRegion, {
//                   autoFocusQuery: (f == null ? void 0 : f.onPressBack)
//                     ? d('focusScopeQueries').tabbableScopeQuery
//                     : null,
//                   children: j.jsx(c('CometMenuFocusGroup').FocusGroup, {
//                     onNavigate: d('CometFocusGroupFirstLetterNavigation')
//                       .handleFirstLetterNavigation,
//                     orientation: 'vertical',
//                     preventScrollOnFocus: !1,
//                     tabScopeQuery: d('focusScopeQueries').tabbableScopeQuery,
//                     wrap: !0,
//                     children: q,
//                   }),
//                 }),
//                 e != null
//                   ? j.jsxs(j.Fragment, {
//                       children: [
//                         j.jsx(c('CometSeparatorMenuItem.react'), {}),
//                         j.jsx('div', {
//                           className:
//                             'x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha',
//                           children: j.jsx(c('TetraTextPairing.react'), {
//                             level: 3,
//                             meta: e.text,
//                           }),
//                         }),
//                       ],
//                     })
//                   : null,
//               ],
//             }),
//           })
//         : null
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     g['default'] = a
//   },
//   98,
// )
