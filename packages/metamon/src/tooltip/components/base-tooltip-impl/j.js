// __d(
//   'BaseTooltipImpl.react',
//   [
//     'BaseContextualLayer.react',
//     'CometHeroInteractionContextPassthrough.react',
//     'CometPlaceholder.react',
//     'react',
//     'stylex',
//     'useCometDisplayTimingTrackerForInteraction',
//     'useFadeEffect',
//     'useTooltipDelayedContent',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var i = b.useLayoutEffect,
//       j = b.useRef,
//       k = {
//         container: {
//           backgroundColor: 'xj5tmjb',
//           borderTopStartRadius: 'x1r9drvm',
//           borderTopEndRadius: 'x16aqbuh',
//           borderBottomEndRadius: 'x9rzwcf',
//           borderBottomStartRadius: 'xjkqk3g',
//           boxShadow: 'xms15q0',
//           display: 'x1lliihq',
//           marginBottom: 'xjpr12u',
//           marginTop: 'xr9ek0c',
//           maxWidth: 'x86nfjv',
//           opacity: 'xg01cxk',
//           paddingStart: 'x1ye3gou',
//           paddingEnd: 'xn6708d',
//           paddingTop: 'xz9dl7a',
//           paddingBottom: 'xsag5q8',
//           position: 'x1n2onr6',
//           transitionDuration: 'x1ebt8du',
//           transitionProperty: 'x19991ni',
//           transitionTimingFunction: 'x1dhq9h',
//           $$css: !0,
//         },
//         containerVisible: {
//           opacity: 'x1hc1fzr',
//           transitionDuration: 'xhb22t3',
//           transitionTimingFunction: 'xls3em1',
//           $$css: !0,
//         },
//         contextualLayer: {
//           pointerEvents: 'x47corl',
//           $$css: !0,
//         },
//         loadingState: {
//           display: 'x78zum5',
//           justifyContent: 'xl56j7k',
//           $$css: !0,
//         },
//       }
//     function l(a) {
//       var b = a.contextualLayerRef
//       i(
//         function () {
//           var a = b.current
//           a &&
//             a.reposition({
//               autoflip: !0,
//             })
//         },
//         [b],
//       )
//       return null
//     }
//     function a(a) {
//       var b = a.contentKey,
//         d = a.delayContentMs
//       d = d === void 0 ? 0 : d
//       a.headline
//       var e = a.id,
//         f = a.isVisible,
//         g = a.loadingState,
//         i = a.tooltip
//       a.tooltipTheme
//       var m = a.xstyle
//       a = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'contentKey',
//         'delayContentMs',
//         'headline',
//         'id',
//         'isVisible',
//         'loadingState',
//         'tooltip',
//         'tooltipTheme',
//         'xstyle',
//       ])
//       var n = j(null),
//         o = c('useFadeEffect')(f),
//         p = o[0],
//         q = o[1]
//       o = o[2]
//       var r = c('useCometDisplayTimingTrackerForInteraction')('ToolTip')
//       d = c('useTooltipDelayedContent')({
//         delayContentMs: d,
//         isVisible: f,
//       })
//       f = d.isPending
//       return i == null || !p
//         ? null
//         : h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
//             clear: !0,
//             children: h.jsx(
//               c('BaseContextualLayer.react'),
//               babelHelpers['extends'](
//                 {
//                   align: 'middle',
//                 },
//                 a,
//                 {
//                   imperativeRef: n,
//                   ref: r,
//                   xstyle: k.contextualLayer,
//                   children: h.jsx('span', {
//                     className: c('stylex')(
//                       k.container,
//                       m,
//                       q && k.containerVisible,
//                     ),
//                     'data-testid': void 0,
//                     id: e,
//                     ref: o,
//                     role: 'tooltip',
//                     children: f
//                       ? h.jsx('div', {
//                           className: 'x78zum5 xl56j7k',
//                           children: g,
//                         })
//                       : h.jsxs(
//                           c('CometPlaceholder.react'),
//                           {
//                             fallback: g,
//                             children: [
//                               h.jsx(l, {
//                                 contextualLayerRef: n,
//                               }),
//                               i,
//                             ],
//                           },
//                           b,
//                         ),
//                   }),
//                 },
//               ),
//             ),
//           })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     g['default'] = a
//   },
//   98,
// )
