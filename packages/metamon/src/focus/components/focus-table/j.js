// __d(
//   'FocusTable.react',
//   [
//     'FocusManager',
//     'FocusTableUtils',
//     'Locale',
//     'ReactFocusEvent.react',
//     'ReactKeyboardEvent.react',
//     'focusKeyboardEventPropagation',
//     'react',
//     'setElementCanTab',
//   ],
//   function (a, b, c, d, e, f, g) {
//     var h,
//       i = h || (h = d('react'))
//     b = h
//     var useContext = b.useContext,
//       useMemo = b.useMemo,
//       useRef = b.useRef,
//       m = 5
//     function a(a) {
//       var unstable_Scope = i.unstable_Scope,
//         c = i.createContext(null),
//         e = i.createContext(null),
//         g = i.createContext(null)
//       function h(e) {
//         var f = e.children,
//           g = e.wrapX,
//           h = e.wrapY,
//           j = e.wrapXToNextLine,
//           n = e.tabScopeQuery,
//           o = e.allowModifiers,
//           q = e.pageJumpSize,
//           r = q === void 0 ? m : q,
//           s = e.onNavigate,
//           t = e.disabled,
//           u = e.withinCellTabScopeQuery
//         q = e.focusStaticCells
//         var v = q === void 0 ? !1 : q,
//           w = useRef(null)
//         e = useMemo(
//           function () {
//             return {
//               scopeRef: w,
//               wrapXToNextLine: j,
//               wrapX: g,
//               wrapY: h,
//               tabScopeQuery: n,
//               allowModifiers: o,
//               pageJumpSize: r,
//               onNavigate: s,
//               disabled: t,
//               withinCellTabScopeQuery: u,
//               focusStaticCells: v,
//             }
//           },
//           [j, g, h, n, o, r, s, t, u, v],
//         )
//         var x = useRef(!1)
//         q = d('ReactFocusEvent.react').useFocusWithin(
//           w,
//           useMemo(
//             function () {
//               return {
//                 onFocusWithin: function (b) {
//                   x.current ||
//                     ((x.current = !0),
//                     w.current &&
//                       a &&
//                       (p(w.current, a, !1),
//                       d('setElementCanTab').setElementCanTab(b.target, !0, v)))
//                 },
//               }
//             },
//             [x, v],
//           ),
//         )
//         return i.jsx(c.Provider, {
//           value: e,
//           children: i.jsx(unstable_Scope, {
//             ref: q,
//             children: f,
//           }),
//         })
//       }
//       h.displayName = h.name + ' [from ' + f.id + ']'
//       function o(a) {
//         a = a.children
//         var c = useRef(null),
//           d = useMemo(function () {
//             return {
//               scopeRef: c,
//             }
//           }, [])
//         return i.jsx(e.Provider, {
//           value: d,
//           children: i.jsx(unstable_Scope, {
//             ref: c,
//             children: a,
//           }),
//         })
//       }
//       o.displayName = o.name + ' [from ' + f.id + ']'
//       function p(a, b, c) {
//         a = a.DO_NOT_USE_queryAllNodes(b)
//         if (a != null)
//           for (b = 0; b < a.length; b++) {
//             var e = a[b]
//             d('setElementCanTab').setElementCanTab(e, c)
//           }
//       }
//       function q(f) {
//         var h = f.children,
//           m = f.colSpan,
//           o = f.tag,
//           q = useContext(c),
//           r = (f = useContext(e)) == null ? void 0 : f.scopeRef,
//           s = useRef(null),
//           t = useRef(!1),
//           u = (q == null ? void 0 : q.withinCellTabScopeQuery) != null,
//           v = q == null ? void 0 : q.focusStaticCells
//         d('ReactKeyboardEvent.react').useKeyboard(
//           s,
//           useMemo(
//             function () {
//               return {
//                 onKeyDown: function (b) {
//                   if (q && q.disabled === !0) return
//                   if (
//                     d(
//                       'focusKeyboardEventPropagation',
//                     ).hasFocusKeyboardEventPropagationStopped(b)
//                   )
//                     return
//                   var c = s.current
//                   if (c === null || q === null) return
//                   if (r == null) return
//                   var f = r.current
//                   if (f === null) return
//                   var h = b.key,
//                     i =
//                       u &&
//                       d('FocusTableUtils').getCellSingleInteractiveContentNode(
//                         c,
//                         u,
//                       ) == null,
//                     j = t.current
//                   if (h === 'Tab' && q) {
//                     var k = q.tabScopeQuery,
//                       l = q.scopeRef.current
//                     if (k && l) {
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'TAB',
//                           q,
//                           b,
//                           f,
//                           c,
//                           k,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       var m = q.withinCellTabScopeQuery
//                       j && m != null
//                         ? b.shiftKey
//                           ? d('FocusManager').focusPreviousContained(
//                               m,
//                               c,
//                               b,
//                               !0,
//                             )
//                           : d('FocusManager').focusNextContained(m, c, b, !0)
//                         : (p(l, k, !1),
//                           document.activeElement != null &&
//                             d('setElementCanTab').setElementCanTab(
//                               document.activeElement,
//                               !0,
//                               v,
//                             ))
//                     }
//                     return
//                   }
//                   m = b.ctrlKey || b.metaKey
//                   l = h
//                   d('Locale').isRTL() &&
//                     (h === 'ArrowRight'
//                       ? (l = 'ArrowLeft')
//                       : h === 'ArrowLeft' && (l = 'ArrowRight'))
//                   switch (l) {
//                     case 'Home':
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'HOME',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       k = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       l = k[0]
//                       k = k[1]
//                       var o = d('FocusTableUtils').getRowsWithIndex(q, f, e),
//                         w = o[0]
//                       o = o[1]
//                       if (l !== null && w !== null)
//                         if (m) {
//                           if (o !== 0 || k !== 0) {
//                             l = w[0]
//                             d('FocusTableUtils').focusCellByColumnIndex(
//                               a,
//                               l,
//                               0,
//                               g,
//                               b,
//                             )
//                           }
//                         } else if (k !== 0) {
//                           l = w[o]
//                           d('FocusTableUtils').focusCellByColumnIndex(
//                             a,
//                             l,
//                             0,
//                             g,
//                             b,
//                           )
//                         }
//                       return
//                     case 'End':
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'END',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       k = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       w = k[0]
//                       o = k[1]
//                       l = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       k = l[0]
//                       l = l[1]
//                       if (w !== null && k !== null)
//                         if (m) {
//                           if (l !== k.length - 1 || o !== w.length - 1) {
//                             l = k[k.length - 1]
//                             k = l.getChildContextValues(g).filter(Boolean)
//                             k.length > 0 &&
//                               d('FocusTableUtils').focusCell(
//                                 a,
//                                 k[k.length - 1],
//                                 b,
//                               )
//                           }
//                         } else
//                           o !== w[w.length - 1] &&
//                             d('FocusTableUtils').focusCell(
//                               a,
//                               w[w.length - 1],
//                               b,
//                             )
//                       return
//                     case 'ArrowUp':
//                       if (n(b, q)) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'PREV_ROW',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       l = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       k = l[0]
//                       o = l[2]
//                       if (k !== null && q) {
//                         w = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                         l = w[0]
//                         k = w[1]
//                         if (l !== null)
//                           if (k === 0) {
//                             w = q.wrapY
//                             if (w === !0 && !m) {
//                               w = l[l.length - 1]
//                               d('FocusTableUtils').focusCellByColumnIndex(
//                                 a,
//                                 w,
//                                 o,
//                                 g,
//                                 b,
//                               )
//                             }
//                           } else if (m) {
//                             w = l[0]
//                             d('FocusTableUtils').focusCellByColumnIndex(
//                               a,
//                               w,
//                               o,
//                               g,
//                               b,
//                             )
//                           } else {
//                             w = l[k - 1]
//                             d('FocusTableUtils').focusCellByColumnIndex(
//                               a,
//                               w,
//                               o,
//                               g,
//                               b,
//                             )
//                           }
//                       }
//                       return
//                     case 'PageUp':
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'PAGE_UP',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       l = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       k = l[0]
//                       w = l[2]
//                       o = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       l = o[0]
//                       o = o[1]
//                       if (k !== null && l !== null && q && o !== 0) {
//                         k = q.pageJumpSize
//                         l = l[Math.max(0, o - k)]
//                         d('FocusTableUtils').focusCellByColumnIndex(
//                           a,
//                           l,
//                           w,
//                           g,
//                           b,
//                         )
//                       }
//                       return
//                     case 'ArrowDown':
//                       if (n(b, q)) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'NEXT_ROW',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       o = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       k = o[0]
//                       l = o[2]
//                       w = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       o = w[0]
//                       w = w[1]
//                       if (k !== null && o !== null && q && w !== -1)
//                         if (w === o.length - 1) {
//                           k = q.wrapY
//                           if (k === !0 && !m) {
//                             k = o[0]
//                             d('FocusTableUtils').focusCellByColumnIndex(
//                               a,
//                               k,
//                               l,
//                               g,
//                               b,
//                             )
//                           }
//                         } else if (m) {
//                           k = o[o.length - 1]
//                           d('FocusTableUtils').focusCellByColumnIndex(
//                             a,
//                             k,
//                             l,
//                             g,
//                             b,
//                           )
//                         } else {
//                           m = o[w + 1]
//                           d('FocusTableUtils').focusCellByColumnIndex(
//                             a,
//                             m,
//                             l,
//                             g,
//                             b,
//                           )
//                         }
//                       return
//                     case 'PageDown':
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'PAGE_DOWN',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       k = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       o = k[0]
//                       w = k[2]
//                       m = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       l = m[0]
//                       k = m[1]
//                       if (o !== null && l !== null && q && k !== l.length - 1) {
//                         m = q.pageJumpSize
//                         o = l[Math.min(l.length - 1, k + m)]
//                         d('FocusTableUtils').focusCellByColumnIndex(
//                           a,
//                           o,
//                           w,
//                           g,
//                           b,
//                         )
//                       }
//                       return
//                     case 'ArrowLeft':
//                       if (n(b, q)) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'PREV_CELL',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       l = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       k = l[0]
//                       m = l[1]
//                       o = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       w = o[0]
//                       l = o[1]
//                       if (k !== null && w !== null && q)
//                         if (m > 0)
//                           d('FocusTableUtils').focusCell(a, k[m - 1], b)
//                         else if (m === 0) {
//                           o = q.wrapX
//                           m = q.wrapXToNextLine
//                           o === !0
//                             ? d('FocusTableUtils').focusCell(
//                                 a,
//                                 k[k.length - 1],
//                                 b,
//                               )
//                             : m === !0 &&
//                               w[l - 1] &&
//                               d('FocusTableUtils').focusCellByColumnIndex(
//                                 a,
//                                 w[l - 1],
//                                 d('FocusTableUtils').getLength(w[l - 1], g),
//                                 g,
//                                 b,
//                               )
//                         }
//                       return
//                     case 'ArrowRight':
//                       if (n(b, q)) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'NEXT_CELL',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       if (j) return
//                       o = d('FocusTableUtils').getRowCellsWithIndexes(c, f, g)
//                       k = o[0]
//                       m = o[1]
//                       w = d('FocusTableUtils').getRowsWithIndex(q, f, e)
//                       l = w[0]
//                       o = w[1]
//                       if (k !== null && l !== null && q && m !== -1)
//                         if (m === k.length - 1) {
//                           w = q.wrapX
//                           var x = q.wrapXToNextLine
//                           w === !0
//                             ? d('FocusTableUtils').focusCell(a, k[0], b)
//                             : x === !0 &&
//                               l[o + 1] &&
//                               d('FocusTableUtils').focusCellByColumnIndex(
//                                 a,
//                                 l[o + 1],
//                                 0,
//                                 g,
//                                 b,
//                               )
//                         } else d('FocusTableUtils').focusCell(a, k[m + 1], b)
//                       return
//                     case 'Enter':
//                       if (!i || j) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'ENTER',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       w = q == null ? void 0 : q.withinCellTabScopeQuery
//                       if (w) {
//                         x = c.DO_NOT_USE_queryFirstNode(w)
//                         x != null &&
//                           ((t.current = !0),
//                           p(c, w, !0),
//                           d('FocusManager').focusElement(x))
//                       }
//                       return
//                     case 'Escape':
//                       if (!i || !j) return
//                       if (
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'ESC',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                       )
//                         return
//                       l = q == null ? void 0 : q.tabScopeQuery
//                       if (l) {
//                         t.current = !1
//                         o = c.DO_NOT_USE_queryAllNodes(l)
//                         if (o !== null)
//                           for (k = 0; k < o.length; k++) {
//                             m = o[k]
//                             d('setElementCanTab').setElementCanTab(m, !1, v)
//                           }
//                         d('FocusTableUtils').focusCell(
//                           l,
//                           {
//                             scopeRef: s,
//                           },
//                           b,
//                         )
//                       }
//                       return
//                     default:
//                       d('FocusTableUtils').isPrintableCharacter(h) &&
//                         d('FocusTableUtils').handleOnNavigateBehavior(
//                           'PRINT_CHAR',
//                           q,
//                           b,
//                           f,
//                           c,
//                           a,
//                           e,
//                           g,
//                         )
//                   }
//                 },
//               }
//             },
//             [r, q, u],
//           ),
//         )
//         var w = useMemo(
//             function () {
//               return {
//                 scopeRef: s,
//                 colSpan: m,
//                 tag: o,
//                 allowWithinCellNavigation: u,
//                 focusStaticCells: v,
//               }
//             },
//             [m, u, o, v],
//           ),
//           x = q == null ? void 0 : q.tabScopeQuery
//         f = d('ReactFocusEvent.react').useFocusWithin(
//           s,
//           useMemo(
//             function () {
//               return {
//                 onFocusWithin: function (b) {
//                   if (a != null) {
//                     var c
//                     c =
//                       (c = s.current) == null
//                         ? void 0
//                         : c.DO_NOT_USE_queryFirstNode(a)
//                     var e = b.target === c
//                     if (e && c && !d('setElementCanTab').canElementTab(c)) {
//                       e = q == null ? void 0 : q.scopeRef.current
//                       e && p(e, a, !1)
//                       d('setElementCanTab').setElementCanTab(c, !0, v)
//                     }
//                   }
//                   if (x != null) {
//                     c =
//                       (e = s.current) == null
//                         ? void 0
//                         : e.DO_NOT_USE_queryFirstNode(x)
//                     e = b.target === c
//                     var f = w.allowWithinCellNavigation === !0
//                     e && f && d('FocusTableUtils').focusCell(x, w)
//                     c != null &&
//                       !e &&
//                       f &&
//                       b.target instanceof HTMLElement &&
//                       !d('FocusTableUtils').isArrowKeyLessOperationElement(
//                         b.target,
//                       ) &&
//                       (t.current = !0)
//                   }
//                 },
//                 onBlurWithin: function () {
//                   t.current = !1
//                 },
//               }
//             },
//             [x, w, q == null ? void 0 : q.scopeRef],
//           ),
//         )
//         return i.jsx(g.Provider, {
//           value: w,
//           children: i.jsx(unstable_Scope, {
//             ref: f,
//             children: h,
//           }),
//         })
//       }
//       q.displayName = q.name + ' [from ' + f.id + ']'
//       return [h, o, q]
//     }
//     function n(a, b) {
//       if (d('FocusTableUtils').hasModifierKey(a) && b) {
//         a = b.allowModifiers
//         if (a !== !0) return !0
//       }
//     }
//     g.createFocusTable = a
//   },
//   98,
// )
