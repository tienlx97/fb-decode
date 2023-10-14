// __d(
//   'CometTab.react',
//   [
//     'CometFocusGroupContext',
//     'CometIcon.react',
//     'CometNonBreakingSpace.react',
//     'CometPressable.react',
//     'CometTextWithIcon.react',
//     'ReactDOMComet',
//     'TetraText.react',
//     'gkx',
//     'react',
//     'stylex',
//     'useIntersectionObserver',
//     'useMergeRefs',
//     'useUnsafeRef_DEPRECATED',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h,
//       i,
//       j,
//       k = j || (j = d('react'))
//     b = j
//     var useCallback = b.useCallback,
//       useContext = b.useContext,
//       useState = b.useState,
//       o = {
//         icon: {
//           lineHeight: 'x14ju556',
//           $$css: !0,
//         },
//         iconEnd: {
//           marginStart: 'xsgj6o6',
//           $$css: !0,
//         },
//         iconEnd8: {
//           marginStart: 'x1i64zmx',
//           $$css: !0,
//         },
//         iconStart: {
//           marginEnd: 'xw3qccf',
//           $$css: !0,
//         },
//         iconStart8: {
//           marginEnd: 'x1emribx',
//           $$css: !0,
//         },
//         pressable: {
//           appearance: 'xjyslct',
//           backgroundColor: 'xjbqb8w',
//           backgroundImage: 'x18o3ruo',
//           borderTopStyle: 'x13fuv20',
//           borderEndStyle: 'xu3j5b3',
//           borderBottomStyle: 'x1q0q8m5',
//           borderStartStyle: 'x26u7qi',
//           borderTopWidth: 'x972fbf',
//           borderEndWidth: 'xcfux6l',
//           borderBottomWidth: 'x1qhh985',
//           borderStartWidth: 'xm0m39n',
//           boxSizing: 'x9f619',
//           color: 'x1heor9g',
//           cursor: 'x1ypdohk',
//           display: 'x78zum5',
//           marginTop: 'xdj266r',
//           marginEnd: 'x11i5rnm',
//           marginBottom: 'xat24cr',
//           marginStart: 'x1mh8g0r',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x4uap5',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'xkhd6sd',
//           position: 'x1n2onr6',
//           textAlign: 'x16tdsg8',
//           textDecoration: 'x1hl2dhg',
//           zIndex: 'x1vjfegm',
//           $$css: !0,
//         },
//         selected: {
//           borderTopEndRadius: 'x11t77rh',
//           borderTopStartRadius: 'x146dn1l',
//           bottom: 'x1ey2m1c',
//           end: 'xds687c',
//           height: 'xuoj239',
//           position: 'x10l6tqk',
//           start: 'x17qophe',
//           $$css: !0,
//         },
//         tab: {
//           alignItems: 'x6s0dn4',
//           boxSizing: 'x9f619',
//           display: 'x78zum5',
//           flexShrink: 'x2lah0s',
//           minHeight: 'x1hshjfz',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//       }
//     function a(a, b) {
//       var e = a.badge,
//         f = a.badgeCap,
//         g = a.containerRef,
//         j = a.highlightColor,
//         p = a.icon,
//         q = a.iconColor
//       q = q === void 0 ? 'secondary' : q
//       var r = a.iconLocation
//       r = r === void 0 ? 'right' : r
//       var s = a.iconSize
//       s = s === void 0 ? 16 : s
//       var t = a.label,
//         u = a.labelIsHidden
//       u = u === void 0 ? !1 : u
//       var v = a.onHidden,
//         w = a.pressableXStyle,
//         x = a.preventDisableWhenHidden
//       x = x === void 0 ? !1 : x
//       var y = a.reduceEmphasis
//       y = y === void 0 ? !1 : y
//       var z = a.selected
//       z = z === void 0 ? !1 : z
//       var A = a.tabRef,
//         B = a.underlineColor,
//         C = a.xstyle
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'badge',
//         'badgeCap',
//         'containerRef',
//         'highlightColor',
//         'icon',
//         'iconColor',
//         'iconLocation',
//         'iconSize',
//         'label',
//         'labelIsHidden',
//         'onHidden',
//         'pressableXStyle',
//         'preventDisableWhenHidden',
//         'reduceEmphasis',
//         'selected',
//         'tabRef',
//         'underlineColor',
//         'xstyle',
//       ])
//       var D = useState(x ? !1 : !c('gkx')('2333')),
//         E = D[0],
//         F = D[1],
//         G = (h || (h = c('useUnsafeRef_DEPRECATED')))(v)
//       G.current = v
//       D = useContext(c('CometFocusGroupContext'))
//       v = D.FocusItem
//       D = useCallback(
//         function (a) {
//           a = a.intersectionRatio
//           var b = a < 0.5
//           ;(!c('gkx')('2333') || b !== E) &&
//             d('ReactDOMComet').flushSync(function () {
//               F(b), G.current && G.current(b)
//             })
//         },
//         [E, G],
//       )
//       D = c('useIntersectionObserver')(D, {
//         root: g
//           ? function () {
//               return g.current
//             }
//           : null,
//         threshold: 0.5,
//       })
//       f =
//         !u && e != null
//           ? typeof e === 'number'
//             ? k.jsxs(k.Fragment, {
//                 children: [
//                   t,
//                   k.jsx(c('CometNonBreakingSpace.react'), {
//                     size: 0.75,
//                   }),
//                   k.jsx(c('TetraText.react'), {
//                     color: z ? 'highlight' : 'secondary',
//                     type: 'body4',
//                     children: f != null && e > f ? f + '+' : e,
//                   }),
//                 ],
//               })
//             : k.jsx(c('CometTextWithIcon.react'), {
//                 iconAfter: e,
//                 spacing: 0.75,
//                 children: t,
//               })
//           : u
//           ? null
//           : t
//       z &&
//         j != null &&
//         (f = k.jsx('span', {
//           style: {
//             color: j,
//           },
//           children: f,
//         }))
//       y
//         ? (f = k.jsx(c('TetraText.react'), {
//             color: z ? 'highlight' : 'secondary',
//             type: 'body3',
//             children: f,
//           }))
//         : (f = k.jsx(c('TetraText.react'), {
//             color: z ? 'highlight' : 'secondary',
//             type: 'bodyLink3',
//             children: f,
//           }))
//       e =
//         p != null && r === 'left'
//           ? k.jsx('div', {
//               className: (i || (i = c('stylex')))(
//                 o.icon,
//                 !u && (s === 16 ? o.iconStart : o.iconStart8),
//               ),
//               children: k.jsx(c('CometIcon.react'), {
//                 color: z ? 'highlight' : q,
//                 icon: p,
//                 size: s,
//               }),
//             })
//           : null
//       j =
//         p != null && r === 'right'
//           ? k.jsx('div', {
//               className: (i || (i = c('stylex')))(
//                 o.icon,
//                 (e != null || !u) && (s === 16 ? o.iconEnd : o.iconEnd8),
//               ),
//               children: k.jsx(c('CometIcon.react'), {
//                 color: z ? 'highlight' : q,
//                 icon: p,
//                 size: s,
//               }),
//             })
//           : null
//       y = c('useMergeRefs')(x ? void 0 : D, b, A)
//       r = k.jsxs('div', {
//         className: (i || (i = c('stylex')))(o.tab, C),
//         ref: y,
//         children: [
//           e,
//           f,
//           j,
//           k.jsx('div', {
//             className: i(z && o.selected),
//             style: {
//               backgroundColor: z ? B : void 0,
//             },
//           }),
//         ],
//       })
//       if (a.onPress != null || a.linkProps != null) {
//         q = k.jsx(
//           c('CometPressable.react'),
//           babelHelpers['extends']({}, a, {
//             'aria-hidden': E,
//             'aria-selected': z,
//             disabled: E,
//             display: 'inline',
//             focusable: !E,
//             label: u ? t : void 0,
//             overlayDisabled: z,
//             ref: y,
//             role: 'tab',
//             xstyle: [o.pressable, w],
//             children: r,
//           }),
//         )
//         return v && !E
//           ? k.jsx(v, {
//               children: q,
//             })
//           : q
//       }
//       return r
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = k.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )
