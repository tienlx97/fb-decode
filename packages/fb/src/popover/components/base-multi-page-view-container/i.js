// __d(
//   'BaseMultiPageViewContainer.react',
//   [
//     'BaseMultiPageViewContext',
//     'FocusInertRegion.react',
//     'FocusRegion.react',
//     'HiddenSubtreeContextProvider.react',
//     'Locale',
//     'emptyFunction',
//     'focusScopeQueries',
//     'getPrefersReducedMotion',
//     'gkx',
//     'mergeRefs',
//     'react',
//     'stylex',
//     'testID',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var i = b.useCallback,
//       j = b.useEffect,
//       k = b.useImperativeHandle,
//       l = b.useMemo,
//       m = b.useRef,
//       n = {
//         page: {
//           borderTopStartRadius: 'x1o1ewxj',
//           borderTopEndRadius: 'x3x9cwd',
//           borderBottomEndRadius: 'x1e5q0jg',
//           borderBottomStartRadius: 'x13rtm0m',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexGrow: 'x1iyjqo2',
//           transformOrigin: 'x1al4vs7',
//           $$css: !0,
//         },
//         pageInactive: {
//           display: 'x1s85apg',
//           left: 'xu96u03',
//           pointerEvents: 'x47corl',
//           position: 'x10l6tqk',
//           top: 'x13vifvy',
//           zIndex: 'x1vjfegm',
//           $$css: !0,
//         },
//         root: {
//           alignItems: 'x1qjc9v5',
//           clipPath: 'x3vj7og',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           position: 'x1n2onr6',
//           transformOrigin: 'x1al4vs7',
//           $$css: !0,
//         },
//       },
//       o = d('Locale').isRTL(),
//       p = 300,
//       q = c('getPrefersReducedMotion')() || !c('gkx')('1485')
//     function r(a) {
//       return Math.cos((a + 1) * Math.PI) / 2 + 0.5
//     }
//     function a(a, b) {
//       var e = a.children,
//         f = a.disableAutoFocus,
//         g = f === void 0 ? !1 : f
//       f = a.disableAutoRestoreFocus
//       var s = f === void 0 ? !1 : f
//       f = a.disableFocusContainment
//       var t = f === void 0 ? !1 : f
//       f = a.disableInitialAutoFocus
//       f = f === void 0 ? !1 : f
//       var u = a.fallback,
//         v = a.imperativeRef,
//         w = a.onPageChange,
//         x = w === void 0 ? c('emptyFunction') : w,
//         y = a.onAddPage,
//         z = a.onPopPage,
//         A = a.onClearRemovedPages,
//         B = a.pageXStyle,
//         C = a.pageHistory,
//         D = a.placeholderComponent
//       w = a.xstyle
//       var E = m(null),
//         F = m(null),
//         G = m(null),
//         H = m(!1),
//         I = f && !H.current,
//         J = i(function () {
//           var a = E.current,
//             b = F.current
//           b != null
//             ? (G.current = b.getBoundingClientRect())
//             : a != null && (G.current = a.getBoundingClientRect())
//         }, []),
//         K = i(
//           function (a, b, c) {
//             J(), (H.current = !0), y(a, b, c)
//           },
//           [y, J],
//         ),
//         L = i(
//           function (a) {
//             J(), z(a)
//           },
//           [z, J],
//         ),
//         M = i(
//           function (a, b) {
//             return K('end', a, b)
//           },
//           [K],
//         ),
//         N = l(
//           function () {
//             for (var a = C.length - 1; a >= 0; a--) {
//               var b = C[a]
//               if (b.type !== 'pushed_page' || !b.removed) return a
//             }
//             return 0
//           },
//           [C],
//         ),
//         O = m(N)
//       j(
//         function () {
//           N !== O.current && x && x(N), (O.current = N)
//         },
//         [x, N],
//       )
//       var P = i(
//         function (a) {
//           var b = F.current,
//             c = E.current
//           if (a != null) {
//             var d = C[N]
//             d = d.type === 'pushed_page' ? d.direction : 'end'
//             O.current > N && (d = d === 'start' ? 'end' : 'start')
//             var e = G.current,
//               f = a.getBoundingClientRect()
//             if (!q && b != null && b !== a && e != null && c != null) {
//               d = (d === 'start' ? -1 : 1) * (o ? -1 : 1)
//               b.style.cssText = ''
//               a.style.cssText = ''
//               b.style.setProperty('display', 'flex')
//               b.style.setProperty('width', e.width + 'px')
//               b.style.setProperty('height', e.height + 'px')
//               a.style.removeProperty('display')
//               a.style.removeProperty('width')
//               a.style.removeProperty('height')
//               var g = Math.round(60 * (p / 1e3)),
//                 h = [],
//                 i = [],
//                 j = []
//               for (var k = 0; k <= g; k++) {
//                 var l = k / g,
//                   m = r(l),
//                   n = e.width / f.width,
//                   s = e.height / f.height
//                 n = n + (1 - n) * m
//                 s = s + (1 - s) * m
//                 var t = e.left - f.left,
//                   u = e.top - f.top
//                 t = t * (1 - m)
//                 var v = u * (1 - m),
//                   w = Math.min(e.width, f.width),
//                   x = w * -d * m
//                 w = w * d * (1 - m)
//                 m = u - v
//                 u = -v
//                 h.push({
//                   easing: 'step-end',
//                   offset: l,
//                   transform:
//                     'translateX(' +
//                     t +
//                     'px) translateY(' +
//                     v +
//                     'px) scaleX(' +
//                     n +
//                     ') scaleY(' +
//                     s +
//                     ')',
//                 })
//                 i.push({
//                   easing: 'step-end',
//                   offset: l,
//                   transform:
//                     'scaleX(' +
//                     1 / n +
//                     ') scaleY(' +
//                     1 / s +
//                     ') translateX(' +
//                     x +
//                     'px) translateY(' +
//                     m +
//                     'px)',
//                 })
//                 j.push({
//                   easing: 'step-end',
//                   offset: l,
//                   transform:
//                     'scaleX(' +
//                     1 / n +
//                     ') scaleY(' +
//                     1 / s +
//                     ') translateX(' +
//                     w +
//                     'px) translateY(' +
//                     u +
//                     'px)',
//                 })
//               }
//               a.animate(j, p)
//               c.animate(h, p)
//               b.animate(i, p)
//               a.animate(
//                 [
//                   {
//                     opacity: 0,
//                   },
//                   {
//                     opacity: 1,
//                   },
//                 ],
//                 p,
//               )
//               b.animate(
//                 [
//                   {
//                     opacity: 1,
//                   },
//                   {
//                     opacity: 0,
//                   },
//                 ],
//                 p,
//               ).onfinish = function () {
//                 ;(b.style.cssText = ''), A && A()
//               }
//             }
//             F.current = a
//           }
//         },
//         [N, A, C],
//       )
//       k(
//         v,
//         function () {
//           return {
//             addPage: K,
//             popPage: L,
//           }
//         },
//         [L, K],
//       )
//       var Q = l(
//         function () {
//           return {
//             fallback: u,
//             placeholderComponent: D,
//             popPage: L,
//             pushPage: M,
//           }
//         },
//         [u, D, L, M],
//       )
//       a = l(
//         function () {
//           return c('mergeRefs')(E, b)
//         },
//         [b],
//       )
//       return h.jsx(
//         'div',
//         babelHelpers['extends'](
//           {
//             className: c('stylex')(n.root, w),
//             ref: a,
//           },
//           c('testID')('BaseMultiStepContainer'),
//           {
//             children: C.map(function (a, b) {
//               return h.jsx(
//                 'div',
//                 babelHelpers['extends'](
//                   {
//                     'aria-hidden': b !== N,
//                     className: c('stylex')(
//                       n.page,
//                       b !== N && n.pageInactive,
//                       B,
//                     ),
//                     ref: b === N ? P : null,
//                   },
//                   c('testID')(
//                     b === 0 ? 'base-multistep-container-first-step' : null,
//                   ),
//                   {
//                     children: h.jsx(d('FocusRegion.react').FocusRegion, {
//                       autoFocusQuery:
//                         !g && !I && b === N
//                           ? d('focusScopeQueries').headerOrTabbableScopeQuery
//                           : null,
//                       autoRestoreFocus: !s,
//                       containFocusQuery: t
//                         ? null
//                         : d('focusScopeQueries').tabbableScopeQuery,
//                       recoverFocusQuery:
//                         d('focusScopeQueries').headerOrTabbableScopeQuery,
//                       children: h.jsx(c('FocusInertRegion.react'), {
//                         disabled: b === N,
//                         children: h.jsx(
//                           c('HiddenSubtreeContextProvider.react'),
//                           {
//                             isHidden: b !== N,
//                             children: h.jsx(
//                               c('BaseMultiPageViewContext').Provider,
//                               {
//                                 value: Q,
//                                 children:
//                                   a.type === 'initial_page'
//                                     ? typeof e === 'function'
//                                       ? e(M)
//                                       : e
//                                     : a.type === 'pushed_page'
//                                     ? h.createElement(a.component, {
//                                         onReturn: L,
//                                       })
//                                     : null,
//                               },
//                             ),
//                           },
//                         ),
//                       }),
//                     }),
//                   },
//                 ),
//                 a.key,
//               )
//             }),
//           },
//         ),
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = h.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )
