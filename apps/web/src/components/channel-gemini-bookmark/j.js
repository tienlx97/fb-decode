// __d(
//   'ChannelGeminiBookmark.react',
//   [
//     'ChannelGeminiItemIcon.react',
//     'WorkGalahadEntityKey',
//     'WorkGalahadUIChannelItem.react',
//     'WorkNavigationLogger',
//     'cr:1829651',
//     'react',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h,
//       i = h || d('react')
//     function a(a) {
//       var e = a.addOnSecondary,
//         f = a.entityKey,
//         g = a.href,
//         h = a.icon,
//         j = a.meta,
//         k = a.onPress,
//         l = a.selected,
//         m = a.subtitle,
//         n = a.testid
//       n = a.title
//       var o = d('WorkNavigationLogger').useEntityTransitionEventLogger(
//         'bookmark_click',
//       )
//       return i.jsx(b('cr:1829651'), {
//         name:
//           'bookmark' + (f ? '.' + d('WorkGalahadEntityKey').serialize(f) : ''),
//         children: i.jsx(c('WorkGalahadUIChannelItem.react'), {
//           addOnPrimary:
//             h == null
//               ? void 0
//               : i.jsx(d('ChannelGeminiItemIcon.react').BookmarkIcon, {
//                   image: h,
//                 }),
//           linkProps:
//             g != null
//               ? {
//                   url: g,
//                 }
//               : void 0,
//           onPress: function (a) {
//             o(f), k && k(a)
//           },
//           selected: l,
//           headline: n,
//           meta: m,
//           addOnSecondary: e,
//           addOnTertiary: j,
//           testid: void 0,
//         }),
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     g['default'] = a
//   },
//   98,
// )
