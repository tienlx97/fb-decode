// __d(
//   'BaseScrollableArea.react',
//   [
//     'BaseScrollableAreaContext',
//     'CometDebounce',
//     'CometVisualCompletionAttributes',
//     'Locale',
//     'UserAgent',
//     'gkx',
//     'react',
//     'resize-observer-polyfill',
//     'stylex',
//     'useUnsafeRef_DEPRECATED',
//     'useVisibilityObserver',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var i = b.useContext,
//       j = b.useEffect,
//       k = b.useImperativeHandle,
//       l = b.useMemo,
//       m = b.useRef,
//       n = b.useState,
//       o = {
//         baseScroller: {
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexGrow: 'x1iyjqo2',
//           position: 'x1n2onr6',
//           $$css: !0,
//         },
//         baseScrollerHorizontal: {
//           flexDirection: 'x1q0g3np',
//           $$css: !0,
//         },
//         baseScrollerWithBottomShadow: {
//           marginBottom: 'x129vozr',
//           $$css: !0,
//         },
//         baseScrollerWithTopShadow: {
//           marginTop: 'xaci4zi',
//           $$css: !0,
//         },
//         default: {
//           MsOverflowStyle: 'x2atdfe',
//           MsScrollChaining: 'xb57i2i',
//           MsScrollRails: 'x1q594ok',
//           WebkitOverflowScrolling: 'x5lxg6s',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           overflowX: 'x6ikm8r',
//           overflowY: 'x10wlt62',
//           position: 'x1n2onr6',
//           zIndex: 'x1ja2u2z',
//           $$css: !0,
//         },
//         expanding: {
//           flexBasis: 'x1l7klhg',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           minHeight: 'x2lwn1j',
//           $$css: !0,
//         },
//         expandingIE11: {
//           flexBasis: 'xdl72j9',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//           minHeight: 'x2lwn1j',
//           $$css: !0,
//         },
//         hideScrollbar: {
//           MsOverflowStyle: 'x1pq812k',
//           scrollbarWidth: 'x1rohswg',
//           '::-webkit-scrollbar_display': 'xfk6m8',
//           '::-webkit-scrollbar_height': 'x1yqm8si',
//           '::-webkit-scrollbar_width': 'xjx87ck',
//           $$css: !0,
//         },
//         horizontalAuto: {
//           overflowX: 'xw2csxc',
//           overscrollBehaviorX: 'x7p5m3t',
//           $$css: !0,
//         },
//         perspective: {
//           perspective: 'xx8ngbg',
//           perspectiveOrigin: 'xwo3gff',
//           position: 'x1n2onr6',
//           transformStyle: 'x1oyok0e',
//           $$css: !0,
//         },
//         perspectiveRTL: {
//           perspectiveOrigin: 'x1glq8lk',
//           $$css: !0,
//         },
//         verticalAuto: {
//           overflowY: 'x1odjw0f',
//           overscrollBehaviorY: 'x1e4zzel',
//           $$css: !0,
//         },
//       },
//       p = {
//         base: {
//           boxSizing: 'x9f619',
//           display: 'x1s85apg',
//           end: 'xds687c',
//           opacity: 'xg01cxk',
//           paddingTop: 'xexx8yu',
//           paddingEnd: 'x150jy0e',
//           paddingBottom: 'x18d9i69',
//           paddingStart: 'x1e558r4',
//           pointerEvents: 'x47corl',
//           position: 'x10l6tqk',
//           top: 'x13vifvy',
//           transformOrigin: 'x1n4smgl',
//           transitionDuration: 'x1d8287x',
//           transitionProperty: 'x19991ni',
//           transitionTimingFunction: 'xwji4o3',
//           width: 'x1kky2od',
//           $$css: !0,
//         },
//         hovered: {
//           opacity: 'x1hc1fzr',
//           transitionDuration: 'x1p6kkr5',
//           $$css: !0,
//         },
//         inner: {
//           backgroundColor: 'x1hwfnsy',
//           borderTopStartRadius: 'x1lcm9me',
//           borderTopEndRadius: 'x1yr5g0i',
//           borderBottomEndRadius: 'xrt01vj',
//           borderBottomStartRadius: 'x10y3i5r',
//           height: 'x5yr21d',
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         rtl: {
//           transformOrigin: 'xyyilfv',
//           $$css: !0,
//         },
//       },
//       q = d('Locale').isRTL(),
//       r = c('gkx')('1299319')
//     function a(a, b) {
//       var d = a.children,
//         e = a.contentRef,
//         f = a.expanding
//       f = f === void 0 ? !1 : f
//       var g = a.forceBrowserDefault,
//         t = g === void 0 ? !1 : g
//       g = a.hideScrollbar
//       var u = g === void 0 ? !1 : g,
//         y = a.horizontal
//       g = a.id
//       var z = a.onScroll,
//         A = a.onScrollBottom,
//         B = a.onScrollTop,
//         C = a.scrollTracePolicy,
//         D = a.style,
//         E = a.tabIndex,
//         F = a.testid,
//         G = a.vertical
//       F = a.withBottomShadow
//       F = F === void 0 ? !1 : F
//       var H = a.withTopShadow
//       H = H === void 0 ? !1 : H
//       var I = a.xstyle
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'children',
//         'contentRef',
//         'expanding',
//         'forceBrowserDefault',
//         'hideScrollbar',
//         'horizontal',
//         'id',
//         'onScroll',
//         'onScrollBottom',
//         'onScrollTop',
//         'scrollTracePolicy',
//         'style',
//         'tabIndex',
//         'testid',
//         'vertical',
//         'withBottomShadow',
//         'withTopShadow',
//         'xstyle',
//       ])
//       var J = l(
//           function () {
//             return t || !G || u || y || x()
//           },
//           [G, u, y, t],
//         ),
//         K = n(!1),
//         L = K[0],
//         M = K[1]
//       K = n(!1)
//       var N = K[0],
//         O = K[1]
//       K = n(!1)
//       var aa = K[0],
//         P = K[1],
//         Q = i(c('BaseScrollableAreaContext')),
//         R = m(null),
//         S = c('useUnsafeRef_DEPRECATED')(null),
//         T = m(null),
//         U = m(null),
//         V = m(null),
//         W = m(0)
//       j(
//         function () {
//           var a
//           if (J) return
//           var b = S.current,
//             d = R.current,
//             f = (a = e == null ? void 0 : e.current) != null ? a : d,
//             g = U.current,
//             h = T.current
//           if (d == null || f == null || b == null || h == null || g == null)
//             return
//           var i = 0,
//             j = 0
//           a = function () {
//             g.style.display = 'none'
//             h.style.display = 'none'
//             var a = b.getBoundingClientRect(),
//               c = f.getBoundingClientRect(),
//               e = b.scrollHeight,
//               k = d.scrollHeight,
//               l = f.scrollHeight
//             k = k - l
//             var m = k !== 0
//             k = Math.ceil(a.height - k)
//             j = a.top
//             W.current = m ? l : e
//             l = W.current
//             i = Math.pow(k, 2) / l
//             h.style.height = l <= k ? '0px' : i + 'px'
//             g.style.height = l + 'px'
//             q
//               ? ((h.style.left = '0px'), (g.style.left = '0px'))
//               : ((h.style.right = '0px'), (g.style.right = '0px'))
//             e = b.scrollTop
//             c = c.top - a.top + e
//             a = 0
//             m &&
//               ((a = c * -1), (g.style.top = c + 'px'), (h.style.top = c + 'px'))
//             e = (k - i) / (l - k)
//             h.style.transform = [
//               'matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,' +
//                 a +
//                 ',1,0,\n          0,0,0,-1)',
//               'scale(' + 1 / e + ')',
//               'translateZ(' + (1 - 1 / e) + 'px)',
//               'translateZ(-2px)',
//             ].join(' ')
//             h.style.display = 'block'
//             g.style.display = l <= k ? 'none' : 'block'
//           }
//           var k = function (a) {
//               s(a)
//               var c = a.clientY
//               a = b.clientHeight
//               var d = b.scrollTop
//               P(!0)
//               var e = W.current / a
//               a = d / e
//               if (c < j + a || c > j + a + i) {
//                 var f = c < j + a ? -20 : 20,
//                   h = !0,
//                   k = window.setInterval(function () {
//                     h &&
//                       b.scrollTo({
//                         top: b.scrollTop + f,
//                       })
//                   }, 16)
//                 a = function a(b) {
//                   s(b),
//                     k && window.clearInterval(k),
//                     window.removeEventListener('mouseup', a, !0),
//                     g.removeEventListener('mouseenter', l),
//                     g.removeEventListener('mouseleave', m)
//                 }
//                 var l = function (a) {
//                     s(a), (h = !0)
//                   },
//                   m = function (a) {
//                     s(a), (h = !1)
//                   }
//                 window.addEventListener('mouseup', a, !0)
//                 g.addEventListener('mouseenter', l)
//                 g.addEventListener('mouseleave', m)
//                 return
//               }
//               var n = function (a) {
//                 s(a)
//                 a = a.clientY - c
//                 b.scrollTo({
//                   top: d + a * e,
//                 })
//               }
//               a = function a(b) {
//                 s(b),
//                   P(!1),
//                   window.removeEventListener('mousemove', n, !0),
//                   window.removeEventListener('mouseup', a, !0)
//               }
//               window.addEventListener('mousemove', n, !0)
//               window.addEventListener('mouseup', a, !0)
//             },
//             l = c('CometDebounce')(a, {
//               wait: 100,
//             })
//           window.addEventListener('resize', l)
//           g.addEventListener('mousedown', k)
//           var m = new (c('resize-observer-polyfill'))(l)
//           m.observe(d)
//           m.observe(b)
//           return function () {
//             window.removeEventListener('resize', l),
//               g.removeEventListener('mousedown', k),
//               m.disconnect(),
//               l.reset()
//           }
//         },
//         [e, S, J],
//       )
//       K = function () {
//         M(!0)
//       }
//       var ba = function () {
//           return M(!1)
//         },
//         X = function (a) {
//           z && z(a),
//             O(!0),
//             V.current && window.clearTimeout(V.current),
//             (V.current = window.setTimeout(function () {
//               O(!1)
//             }, 1e3))
//         }
//       j(function () {
//         return function () {
//           window.clearTimeout(V.current)
//         }
//       }, [])
//       var Y = l(function () {
//         return {
//           getDOMNode: function () {
//             return S.current
//           },
//         }
//       }, [])
//       k(
//         b,
//         function () {
//           return Y
//         },
//         [Y],
//       )
//       b = l(
//         function () {
//           return [].concat(Q, [Y])
//         },
//         [Y, Q],
//       )
//       var Z = h.jsx('div', {
//           className:
//             'x78zum5 xdt5ytf x2lah0s x10wjd1d xds687c x17qophe x47corl x7wzq59 x1vjfegm x19bjbvb x1nhvcw1 xepu288',
//           children: h.jsx('div', {
//             className:
//               'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy',
//           }),
//         }),
//         $ = h.jsx('div', {
//           className:
//             'x78zum5 xdt5ytf x2lah0s x10wjd1d xds687c x17qophe x47corl x7wzq59 x1vjfegm x1l3hj4d x1vjtdzu x13a6bvl x1yztbdb',
//           children: h.jsx('div', {
//             className:
//               'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij',
//           }),
//         })
//       return J
//         ? h.jsx(c('BaseScrollableAreaContext').Provider, {
//             value: b,
//             children: h.jsxs(
//               'div',
//               babelHelpers['extends']({}, a, {
//                 className: c('stylex')(
//                   o['default'],
//                   f && (r ? o.expandingIE11 : o.expanding),
//                   u && o.hideScrollbar,
//                   y && o.horizontalAuto,
//                   G && o.verticalAuto,
//                   I,
//                 ),
//                 'data-testid': void 0,
//                 id: g,
//                 onScroll: X,
//                 ref: S,
//                 style: D,
//                 tabIndex: E,
//                 children: [
//                   H && Z,
//                   h.jsxs('div', {
//                     className: c('stylex')(
//                       o.baseScroller,
//                       y && !G && o.baseScrollerHorizontal,
//                       H && o.baseScrollerWithTopShadow,
//                       F && o.baseScrollerWithBottomShadow,
//                     ),
//                     children: [
//                       B
//                         ? h.jsx(w, {
//                             onVisible: B,
//                             scrollerRef: S,
//                           })
//                         : null,
//                       d,
//                       A
//                         ? h.jsx(v, {
//                             onVisible: A,
//                             scrollerRef: S,
//                           })
//                         : null,
//                     ],
//                   }),
//                   F && $,
//                 ],
//               }),
//             ),
//           })
//         : h.jsx(c('BaseScrollableAreaContext').Provider, {
//             value: b,
//             children: h.jsxs(
//               'div',
//               babelHelpers['extends']({}, a, {
//                 className: c('stylex')(
//                   o['default'],
//                   o.hideScrollbar,
//                   f && (r ? o.expandingIE11 : o.expanding),
//                   o.perspective,
//                   q && o.perspectiveRTL,
//                   y && o.horizontalAuto,
//                   G && o.verticalAuto,
//                   I,
//                 ),
//                 'data-scrolltracepolicy': C,
//                 'data-testid': void 0,
//                 id: g,
//                 onMouseEnter: K,
//                 onMouseLeave: ba,
//                 onScroll: X,
//                 ref: S,
//                 style: D,
//                 tabIndex: E,
//                 children: [
//                   H && Z,
//                   h.jsxs('div', {
//                     className: c('stylex')(
//                       o.baseScroller,
//                       y && !G && o.baseScrollerHorizontal,
//                       H && o.baseScrollerWithTopShadow,
//                       F && o.baseScrollerWithBottomShadow,
//                     ),
//                     ref: R,
//                     children: [
//                       B
//                         ? h.jsx(w, {
//                             onVisible: B,
//                             scrollerRef: S,
//                           })
//                         : null,
//                       d,
//                       A
//                         ? h.jsx(v, {
//                             onVisible: A,
//                             scrollerRef: S,
//                           })
//                         : null,
//                     ],
//                   }),
//                   F && $,
//                   h.jsx(
//                     'div',
//                     babelHelpers['extends'](
//                       {
//                         className:
//                           'x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq',
//                       },
//                       c('CometVisualCompletionAttributes').IGNORE,
//                       {
//                         'data-thumb': 1,
//                         ref: U,
//                       },
//                     ),
//                   ),
//                   h.jsx(
//                     'div',
//                     babelHelpers['extends'](
//                       {
//                         className: c('stylex')(
//                           p.base,
//                           q && p.rtl,
//                           (L || N || aa) && p.hovered,
//                         ),
//                       },
//                       c('CometVisualCompletionAttributes').IGNORE,
//                       {
//                         'data-thumb': 1,
//                         ref: T,
//                         children: h.jsx('div', {
//                           className:
//                             'x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3',
//                         }),
//                       },
//                     ),
//                   ),
//                 ],
//               }),
//             ),
//           })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     var s = function (a) {
//         a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation()
//       },
//       t = {
//         bottom: {
//           bottom: 'x1ey2m1c',
//           $$css: !0,
//         },
//         main: {
//           height: 'xjm9jq1',
//           opacity: 'xg01cxk',
//           pointerEvents: 'x47corl',
//           position: 'x10l6tqk',
//           width: 'x1i1rx1s',
//           $$css: !0,
//         },
//         top: {
//           top: 'x13vifvy',
//           $$css: !0,
//         },
//       }
//     function u(a) {
//       var b = a.onVisible,
//         d = a.scrollerRef
//       a = a.xstyle
//       var e = l(
//         function () {
//           return function () {
//             return d.current
//           }
//         },
//         [d],
//       )
//       b = c('useVisibilityObserver')({
//         onVisible: b,
//         options: {
//           root: e,
//           rootMargin: 0,
//         },
//       })
//       return h.jsx('div', {
//         className: c('stylex')(t.main, a),
//         ref: b,
//       })
//     }
//     u.displayName = u.name + ' [from ' + f.id + ']'
//     function v(a) {
//       var b = a.onVisible
//       a = a.scrollerRef
//       return h.jsx(u, {
//         onVisible: b,
//         scrollerRef: a,
//         xstyle: t.bottom,
//       })
//     }
//     v.displayName = v.name + ' [from ' + f.id + ']'
//     function w(a) {
//       var b = a.onVisible
//       a = a.scrollerRef
//       return h.jsx(u, {
//         onVisible: b,
//         scrollerRef: a,
//         xstyle: t.top,
//       })
//     }
//     w.displayName = w.name + ' [from ' + f.id + ']'
//     function x() {
//       return (
//         c('UserAgent').isPlatform('iOS') ||
//         c('UserAgent').isPlatform('Android') ||
//         c('UserAgent').isBrowser('Edge') ||
//         c('UserAgent').isBrowser('IE') ||
//         c('UserAgent').isBrowser('Firefox < 64')
//       )
//     }
//     e = h.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )
