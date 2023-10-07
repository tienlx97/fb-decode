// __d(
//   'BaseContextualLayer.react',
//   [
//     'BaseContextualLayerAnchorRoot.react',
//     'BaseContextualLayerAnchorRootContext',
//     'BaseContextualLayerAvailableHeightContext',
//     'BaseContextualLayerContextSizeContext',
//     'BaseContextualLayerDefaultContainer.react',
//     'BaseContextualLayerLayerAdjustmentContext',
//     'BaseContextualLayerOrientationContext',
//     'BaseLinkNestedPressableContext',
//     'BasePortal.react',
//     'BaseScrollableAreaContext',
//     'BaseViewportMarginsContext',
//     'CometTextContext',
//     'FocusRegion.react',
//     'HiddenSubtreeContext',
//     'LayoutAnimationBoundaryContext',
//     'LayoutAnimationEvents',
//     'Locale',
//     'calculateBaseContextualLayerPosition',
//     'focusScopeQueries',
//     'getComputedStyle',
//     'isElementFixedOrSticky',
//     'mergeRefs',
//     'react',
//     'useLayoutAnimationEvents',
//     'useResizeObserver',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var i = b.useCallback,
//       j = b.useContext,
//       k = b.useEffect,
//       l = b.useImperativeHandle,
//       m = b.useLayoutEffect,
//       n = b.useMemo,
//       o = b.useReducer,
//       p = b.useRef,
//       q = b.useState
//     function r(a) {
//       a = a.getBoundingClientRect()
//       return {
//         bottom: a.bottom,
//         left: a.left,
//         right: a.right,
//         top: a.top,
//       }
//     }
//     function s(a) {
//       return (a =
//         (a = a[a.length - 1]) == null
//           ? void 0
//           : (a = a.getDOMNode()) == null
//           ? void 0
//           : a.scrollTop) != null
//         ? a
//         : window.pageYOffset
//     }
//     function t(a) {
//       var b = c('getComputedStyle')(a)
//       return b != null && b.getPropertyValue('position') !== 'static'
//         ? a
//         : (a instanceof HTMLElement && a.offsetParent) ||
//             a.ownerDocument.documentElement
//     }
//     var u = 8
//     function v(a, b) {
//       return a.bottom < b.top ||
//         b.bottom < a.top ||
//         a.right < b.left ||
//         b.right < b.left
//         ? null
//         : {
//             bottom: Math.min(a.bottom, b.bottom),
//             left: Math.max(a.left, b.left),
//             right: Math.min(a.right, b.right),
//             top: Math.max(a.top, b.top),
//           }
//     }
//     var w = d('Locale').isRTL(),
//       aa = {
//         root: {
//           left: 'xu96u03',
//           marginRight: 'xm80bdy',
//           position: 'x10l6tqk',
//           top: 'x13vifvy',
//           $$css: !0,
//         },
//       }
//     function ba(a) {
//       return {
//         adjustment: null,
//         availableHeight: null,
//         contextSize: null,
//         isPositionIndeterminate: !1,
//         position: a,
//       }
//     }
//     function ca(a, b) {
//       var c
//       switch (b.type) {
//         case 'determine_direction':
//           if (
//             a.position !== b.position ||
//             a.availableHeight !== b.availableHeight
//           )
//             return babelHelpers['extends']({}, a, {
//               availableHeight: b.availableHeight,
//               position: b.position,
//             })
//           break
//         case 'reposition':
//           if (
//             a.adjustment !== b.adjustment ||
//             ((c = a.contextSize) == null ? void 0 : c.height) !==
//               ((c = b.contextSize) == null ? void 0 : c.height) ||
//             ((c = a.contextSize) == null ? void 0 : c.width) !==
//               ((c = b.contextSize) == null ? void 0 : c.width)
//           )
//             return babelHelpers['extends']({}, a, {
//               adjustment: b.adjustment,
//               contextSize: b.contextSize,
//               isPositionIndeterminate: !1,
//             })
//           break
//         case 'position_indeterminate':
//           return babelHelpers['extends']({}, a, {
//             isPositionIndeterminate: !0,
//           })
//         case 'position_changed':
//           if (a.position !== b.position)
//             return babelHelpers['extends']({}, a, {
//               position: b.position,
//             })
//           break
//       }
//       return a
//     }
//     function a(a, b) {
//       var e = a.align,
//         f = e === void 0 ? 'start' : e
//       e = a.disableAutoAlign
//       var g = e === void 0 ? !1 : e
//       e = a.children
//       var x = a.containFocus
//       x = x === void 0 ? !1 : x
//       var y = a.customContainer
//       y = y === void 0 ? c('BaseContextualLayerDefaultContainer.react') : y
//       var z = a.disableAutoFlip,
//         A = z === void 0 ? !1 : z
//       z = a.hidden
//       z = z === void 0 ? !1 : z
//       var B = a.imperativeRef,
//         da = a.onEscapeFocusRegion,
//         C = a.onIndeterminatePosition,
//         ea = a.presencePayload,
//         D = a.position,
//         E = D === void 0 ? 'below' : D
//       D = a.stopClickPropagation
//       D = D === void 0 ? !1 : D
//       var fa = a.xstyle,
//         F = babelHelpers.objectWithoutPropertiesLoose(a, [
//           'align',
//           'disableAutoAlign',
//           'children',
//           'containFocus',
//           'customContainer',
//           'disableAutoFlip',
//           'hidden',
//           'imperativeRef',
//           'onEscapeFocusRegion',
//           'onIndeterminatePosition',
//           'presencePayload',
//           'position',
//           'stopClickPropagation',
//           'xstyle',
//         ])
//       a = o(ca, E, ba)
//       var G = a[0],
//         ga = G.adjustment,
//         ha = G.availableHeight,
//         ia = G.contextSize,
//         H = G.isPositionIndeterminate,
//         I = G.position,
//         J = a[1],
//         K = j(c('BaseContextualLayerAnchorRootContext')),
//         L = j(c('BaseScrollableAreaContext')),
//         M = j(c('BaseViewportMarginsContext')),
//         N = j(c('LayoutAnimationBoundaryContext'))
//       G = q(!1)
//       a = G[0]
//       var O = G[1]
//       G = j(c('HiddenSubtreeContext'))
//       G = G.hidden
//       var P = G || z,
//         Q = p(null),
//         R = p(null),
//         S = i(
//           function () {
//             return F.context_DEPRECATED == null && F.contextRef != null
//               ? F.contextRef.current
//               : F.context_DEPRECATED
//           },
//           [F.contextRef, F.context_DEPRECATED],
//         ),
//         T = i(
//           function () {
//             var a = document.documentElement
//             if (a == null) return
//             return {
//               bottom: a.clientHeight - M.bottom - u,
//               left: M.left + u,
//               right: a.clientWidth - M.right - u,
//               top: M.top + u,
//             }
//           },
//           [M.bottom, M.left, M.right, M.top],
//         ),
//         U = i(
//           function () {
//             var a = Q.current,
//               b = S(),
//               c = T()
//             if (a == null || b == null || c == null) return
//             b = r(b)
//             a = r(a)
//             var d = a.bottom - a.top
//             a = a.right - a.left
//             var e = w ? 'start' : 'end',
//               f = w ? 'end' : 'start',
//               g = I,
//               h = null
//             A ||
//               (I === 'above' || I === 'below'
//                 ? I === 'above' && b.top - d < c.top && b.bottom + d < c.bottom
//                   ? (g = 'below')
//                   : I === 'above' && s(L) + b.top < d
//                   ? (g = 'below')
//                   : I === 'below' &&
//                     b.bottom + d > c.bottom &&
//                     b.top - d > c.top &&
//                     (g = 'above')
//                 : (I === 'start' || I === 'end') &&
//                   (I === f && b.left - a < c.left && b.right + a < c.right
//                     ? (g = e)
//                     : I === e &&
//                       b.right + a > c.right &&
//                       b.left - a > c.left &&
//                       (g = f)))
//             g === 'above' || g === 'below'
//               ? (h = g === 'above' ? b.top - c.top : c.bottom - b.bottom)
//               : (g === 'start' || g === 'end') &&
//                 (h = Math.max(c.bottom, b.bottom) - Math.min(b.top, c.top))
//             R.current = {
//               height: d,
//               width: a,
//             }
//             J({
//               availableHeight: h,
//               position: g,
//               type: 'determine_direction',
//             })
//           },
//           [S, T, A, I],
//         ),
//         V = i(
//           function () {
//             var a = document.documentElement,
//               b = K.current,
//               d = T(),
//               e = S()
//             if (a == null || b == null || d == null || e == null) return
//             var h = t(b)
//             if (h == null) return
//             b = c('isElementFixedOrSticky')(b)
//             b = !b && e.nodeType === 1 && c('isElementFixedOrSticky')(e)
//             e = L.map(function (a) {
//               return a.getDOMNode()
//             })
//               .filter(Boolean)
//               .filter(function (a) {
//                 return h.contains(a)
//               })
//               .reduce(function (a, b) {
//                 return a != null ? v(a, r(b)) : null
//               }, r(e))
//             if (e == null || (e.left === 0 && e.right === 0)) {
//               J({
//                 type: 'position_indeterminate',
//               })
//               C && C()
//               return
//             }
//             a = b
//               ? {
//                   bottom: a.clientHeight,
//                   left: 0,
//                   right: a.clientWidth,
//                   top: 0,
//                 }
//               : r(h)
//             b = c('calculateBaseContextualLayerPosition')({
//               align: f,
//               contextRect: e,
//               contextualLayerSize: g ? null : R.current,
//               fixed: b,
//               offsetRect: a,
//               position: I,
//               screenRect: d,
//             })
//             a = b.adjustment
//             d = b.style
//             b = Q.current
//             if (b != null) {
//               var i = Object.keys(d)
//               for (var j = 0; j < i.length; j++) {
//                 var k = i[j],
//                   l = d[k]
//                 l != null
//                   ? b.style.setProperty(k, l)
//                   : b.style.removeProperty(k)
//               }
//             }
//             J({
//               adjustment: a,
//               contextSize: {
//                 height: e.bottom - e.top,
//                 width: e.right - e.left,
//               },
//               type: 'reposition',
//             })
//           },
//           [K, T, S, L, g, f, I, C],
//         ),
//         W = i(
//           function (a) {
//             a === d('LayoutAnimationEvents').LayoutAnimationEventType.Start &&
//               O(!0),
//               a === d('LayoutAnimationEvents').LayoutAnimationEventType.Stop &&
//                 (O(!1), V())
//           },
//           [V, O],
//         )
//       m(
//         function () {
//           N != null &&
//             N.getIsAnimating() &&
//             W(d('LayoutAnimationEvents').LayoutAnimationEventType.Start)
//         },
//         [N, W],
//       )
//       c('useLayoutAnimationEvents')(W)
//       l(
//         B,
//         function () {
//           return {
//             reposition: function (a) {
//               if (!P) {
//                 a = a || {}
//                 a = a.autoflip
//                 a = a === void 0 ? !1 : a
//                 a && U()
//                 V()
//               }
//             },
//           }
//         },
//         [P, V, U],
//       )
//       var X = c('useResizeObserver')(function (a) {
//           var b = a.height
//           a = a.width
//           R.current = {
//             height: b,
//             width: a,
//           }
//           V()
//         }),
//         Y = p(E)
//       m(function () {
//         E !== Y.current &&
//           (J({
//             position: E,
//             type: 'position_changed',
//           }),
//           P || (U(), V()),
//           (Y.current = E))
//       })
//       var Z = i(
//         function (a) {
//           ;(Q.current = a), a != null && !P && (U(), V())
//         },
//         [P, V, U],
//       )
//       k(
//         function () {
//           if (P) return
//           var a = function () {
//             U(), V()
//           }
//           window.addEventListener('resize', a)
//           return function () {
//             window.removeEventListener('resize', a)
//           }
//         },
//         [P, V, U],
//       )
//       k(
//         function () {
//           if (P) return
//           var a = L.map(function (a) {
//             return a.getDOMNode()
//           }).filter(Boolean)
//           if (a.length > 0) {
//             a.forEach(function (a) {
//               return a.addEventListener('scroll', V, {
//                 passive: !0,
//               })
//             })
//             return function () {
//               a.forEach(function (a) {
//                 return a.removeEventListener('scroll', V, {
//                   passive: !0,
//                 })
//               })
//             }
//           }
//         },
//         [P, V, L],
//       )
//       k(
//         function () {
//           if (window.addEventListener == null || P) return
//           window.addEventListener('scroll', V, {
//             passive: !0,
//           })
//           return function () {
//             window.removeEventListener('scroll', V, {
//               passive: !0,
//             })
//           }
//         },
//         [P, V],
//       )
//       G = n(
//         function () {
//           return c('mergeRefs')(Z, X, b)
//         },
//         [Z, X, b],
//       )
//       B = n(
//         function () {
//           return {
//             align: f,
//             position: I,
//           }
//         },
//         [f, I],
//       )
//       var $ = z || H
//       return h.jsx(c('BasePortal.react'), {
//         target: K.current,
//         children: h.jsx(y, {
//           hidden: z || H || a,
//           presencePayload: ea,
//           ref: G,
//           stopClickPropagation: D,
//           testid: void 0,
//           xstyle: [aa.root, fa],
//           children: h.jsx(d('FocusRegion.react').FocusRegion, {
//             autoFocusQuery:
//               !$ && x
//                 ? d('focusScopeQueries').headerFirstTabbableSecondScopeQuery
//                 : null,
//             autoRestoreFocus: !$,
//             containFocusQuery:
//               !$ && x ? d('focusScopeQueries').tabbableScopeQuery : null,
//             onEscapeFocusRegion: da,
//             recoverFocusQuery: $
//               ? null
//               : d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
//             children: h.jsx(c('BaseContextualLayerAnchorRoot.react'), {
//               children: h.jsx(
//                 c('BaseContextualLayerContextSizeContext').Provider,
//                 {
//                   value: ia,
//                   children: h.jsx(
//                     c('BaseContextualLayerLayerAdjustmentContext').Provider,
//                     {
//                       value: ga,
//                       children: h.jsx(
//                         c('BaseContextualLayerAvailableHeightContext').Provider,
//                         {
//                           value: ha,
//                           children: h.jsx(
//                             c('BaseContextualLayerOrientationContext').Provider,
//                             {
//                               value: B,
//                               children: h.jsx(
//                                 c('BaseLinkNestedPressableContext').Provider,
//                                 {
//                                   value: !1,
//                                   children: h.jsx(
//                                     c('CometTextContext').Provider,
//                                     {
//                                       value: null,
//                                       children: e,
//                                     },
//                                   ),
//                                 },
//                               ),
//                             },
//                           ),
//                         },
//                       ),
//                     },
//                   ),
//                 },
//               ),
//             }),
//           }),
//         }),
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = h.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )
