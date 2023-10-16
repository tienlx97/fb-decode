// __d(
//   'GeminiLayoutPage.react',
//   [
//     'fbt',
//     'BaseHeadingContextWrapper.react',
//     'BaseViewportMarginsContext',
//     'CometBase.react',
//     'CometContentArea.react',
//     'CometErrorBoundary.react',
//     'CometPagelet.react',
//     'CometPlaceholder.react',
//     'CometSSRMultipassBoundary.react',
//     'CometScreenReaderHeading.react',
//     'CometVisualCompletionAttributes',
//     'ExecutionEnvironment',
//     'GalileoNavFeatureGating',
//     'GeminiLayoutFullWidthModeContext.react',
//     'GeminiLayoutHasFixedBannerContext.react',
//     'GeminiLayoutHeaderContext.react',
//     'GeminiLayoutHeaderGlimmer.react',
//     'GeminiLayoutHeaderHeightContext.react',
//     'GeminiLayoutQuickchatContext.react',
//     'GeminiLayoutTabTitleState.react',
//     'GeminiRouterFocusRegion.react',
//     'HiddenSubtreeContext',
//     'Locale',
//     'WorkGalahadEntitySidebarState',
//     'WorkGalahadNavUIState',
//     'cr:1829651',
//     'cr:2287',
//     'cr:6171',
//     'cr:6172',
//     'cr:8131',
//     'emptyFunction',
//     'gkx',
//     'react',
//     'stylex',
//     'supportsCSSSticky',
//     'useCometScrollAnchor',
//     'useGeminiLayoutChannelMeasureListenerForNonSticky',
//     'useGeminiLayoutHorizontalScrolling',
//     'useGeminiLayoutIntersectionObserverForSticky',
//     'useGeminiLayoutIsFullWidth',
//     'useWorkGalahadIsRHCCollapsed',
//   ],
//   function (a, b, c, d, e, f, g, h) {
//     'use strict'
//     var i,
//       j,
//       k,
//       l = k || (k = d('react')),
//       m = k,
//       n = m.useContext,
//       o = m.useLayoutEffect,
//       p = m.useMemo,
//       q = m.useRef,
//       r =
//         (m = b('cr:6172')) != null ? m : c('emptyFunction').thatReturnsArgument,
//       s = 96,
//       t = 56,
//       u = c('GalileoNavFeatureGating').isGalileoNavMode(
//         'employee_appbar_on_workplace',
//       ),
//       v = 300,
//       w = 870,
//       x = 300,
//       y = 85,
//       z = 35,
//       A = 16
//     870 - 32 * 2
//     var B = 22,
//       C = d('Locale').isRTL() ? 'left' : 'right',
//       D = d('Locale').isRTL() ? 'right' : 'left',
//       E = d('Locale').isRTL() ? 'marginRight' : 'marginLeft',
//       F = (i || (i = c('ExecutionEnvironment'))).canUseDOM
//         ? c('supportsCSSSticky')
//         : !0,
//       G = {
//         navigationSticky: {
//           width: 'xh8yej3',
//           position: 'x7wzq59',
//           top: 'x13vifvy',
//           $$css: !0,
//         },
//         navigationFixed: {
//           position: 'xixxii4',
//           minWidth: 'x17y4j5z',
//           top: 'x13vifvy',
//           '@media (min-width: 1921px)_marginStart': 'x1a5fibe',
//           $$css: !0,
//         },
//         navigationFixedWP4MAppBar: {
//           minWidth: 'x1jn76jz',
//           $$css: !0,
//         },
//         navigationInner: {
//           top: 'x13vifvy',
//           height: 'x1dr59a3',
//           width: 'xh8yej3',
//           maxWidth: 'x1lytzrv',
//           flexDirection: 'x1q0g3np',
//           display: 'x78zum5',
//           boxSizing: 'x9f619',
//           $$css: !0,
//         },
//         navigationInnerWithBannerNarrowBuffer: {
//           paddingTop: 'x1xy6bms',
//           $$css: !0,
//         },
//         navigationAppNavList: {
//           width: 'x13oubkp',
//           minWidth: 'x17y4j5z',
//           height: 'x5yr21d',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           justifyContent: 'xl56j7k',
//           alignContent: 'xc26acl',
//           $$css: !0,
//         },
//         navigationAppNavListWP4MAppBar: {
//           width: 'x15yg21f',
//           minWidth: 'x1jn76jz',
//           $$css: !0,
//         },
//         navigationBuffer: {
//           width: 'xh8yej3',
//           height: 'x5yr21d',
//           $$css: !0,
//         },
//         channelWrapper: {
//           width: 'xh8yej3',
//           minWidth: 'x18n5i07',
//           maxWidth: 'x1lr1uin',
//           $$css: !0,
//         },
//         channelWrapperHidden: {
//           display: 'x1s85apg',
//           $$css: !0,
//         },
//         channelWrapperAutoHideButVisible: {
//           position: 'x10l6tqk',
//           start: 'x5bj7zw',
//           width: 'x3p9ev8',
//           borderTopStartRadius: 'x168nmei',
//           borderTopEndRadius: 'x1ccrb07',
//           borderBottomEndRadius: 'xtf3nb5',
//           borderBottomStartRadius: 'xo71vjh',
//           boxShadow: 'xnvy93r',
//           $$css: !0,
//         },
//         channelWrapperAutoHideButVisibleWP4MAppBar: {
//           start: 'xdvsf5k',
//           $$css: !0,
//         },
//         content: {
//           display: 'x78zum5',
//           minWidth: 'xeuugli',
//           flexBasis: 'x1sfiqbd',
//           flexDirection: 'xdt5ytf',
//           flexGrow: 'xrnhffl',
//           flexShrink: 'xs83m0k',
//           borderEndWidth: 'xm81vs4',
//           borderEndStyle: 'xu3j5b3',
//           borderEndColor: 'x1ch86jh',
//           boxSizing: 'x9f619',
//           '@media print_borderEndStyle': 'xwuwxjd',
//           $$css: !0,
//         },
//         contentFullHeight: {
//           alignSelf: 'xkh2ocl',
//           height: 'xt7dq6l',
//           flexGrow: 'x1iyjqo2',
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           $$css: !0,
//         },
//         contentWithTopBannerNarrowBuffer: {
//           paddingTop: 'x1xy6bms',
//           $$css: !0,
//         },
//         header: {
//           zIndex: 'xhtitgo',
//           backgroundColor: 'x881uwn',
//           $$css: !0,
//         },
//         headerSticky: {
//           position: 'x7wzq59',
//           $$css: !0,
//         },
//         headerFixed: {
//           top: 'x13vifvy',
//           width: 'xh8yej3',
//           position: 'xixxii4',
//           zIndex: 'xhtitgo',
//           backgroundColor: 'x881uwn',
//           borderEndWidth: 'xm81vs4',
//           borderEndStyle: 'xu3j5b3',
//           borderEndColor: 'x1ch86jh',
//           maxWidth: 'xuyvd19',
//           minWidth: 'x1wtqkzj',
//           '@media (min-width: 1921px)_maxWidth': 'x1y5zt8k',
//           $$css: !0,
//         },
//         headerFixedWP4MAppBar: {
//           maxWidth: 'xdkb9vc',
//           minWidth: 'xcwrakp',
//           '@media (min-width: 1921px)_maxWidth': 'xja65qe',
//           $$css: !0,
//         },
//         headerFixedFluid: {
//           maxWidth: 'xuyvd19',
//           minWidth: 'xzxvhps',
//           '@media (min-width: 1921px)_maxWidth': 'xk01x47',
//           $$css: !0,
//         },
//         headerFixedFluidWP4MAppBar: {
//           maxWidth: 'xdkb9vc',
//           '@media (min-width: 1921px)_maxWidth': 'xymu542',
//           $$css: !0,
//         },
//         coverPhoto: {
//           height: 'x1vd4hg5',
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         headerContents: {
//           boxSizing: 'x9f619',
//           paddingTop: 'xyamay9',
//           paddingBottom: 'xwib8y2',
//           paddingStart: 'x1swvt13',
//           paddingEnd: 'x1pi30zi',
//           borderBottomWidth: 'xso031l',
//           borderBottomStyle: 'x1q0q8m5',
//           borderBottomColor: 'x80vd3b',
//           $$css: !0,
//         },
//         headerContentsConstrastBackground: {
//           backgroundColor: 'x2bj2ny',
//           $$css: !0,
//         },
//         headerInfo: {
//           $$css: !0,
//         },
//         headerInfoBuffer: {
//           height: 'xcbkimw',
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         headerNavigation: {
//           height: 'x1s1d1n7',
//           $$css: !0,
//         },
//         headerNavigationBuffer: {
//           height: 'x1s1d1n7',
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         entityWrapper: {
//           display: 'x78zum5',
//           flexDirection: 'x15zctf7',
//           flexGrow: 'x1iyjqo2',
//           $$css: !0,
//         },
//         entityContent: {
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           width: 'xnalus7',
//           minWidth: 'xeuugli',
//           flexGrow: 'x1iyjqo2',
//           $$css: !0,
//         },
//         entityContentColumnBase: {
//           marginTop: 'x1sy10c2',
//           $$css: !0,
//         },
//         entityContentColumnNarrow: {
//           width: 'xvue9z',
//           $$css: !0,
//         },
//         entityContentColumnFeedWider: {
//           width: 'x19sv2k2',
//           maxWidth: 'x7ep2pv',
//           $$css: !0,
//         },
//         entityContentColumnWide: {
//           width: 'x19sv2k2',
//           maxWidth: 'xm4tvsq',
//           $$css: !0,
//         },
//         entityContentColumnFullWithMargins: {
//           width: 'x19sv2k2',
//           $$css: !0,
//         },
//         entityContentColumnFull: {
//           width: 'xh8yej3',
//           $$css: !0,
//         },
//         entityContentStretchedCenterContent: {
//           display: 'x78zum5',
//           justifyContent: 'xl56j7k',
//           alignItems: 'x6s0dn4',
//           $$css: !0,
//         },
//         quickChatBuffer: {
//           height: 'xn3w4p2',
//           flexShrink: 'x2lah0s',
//           $$css: !0,
//         },
//         fixedBannerContainer: {
//           position: 'xixxii4',
//           width: 'xh8yej3',
//           zIndex: 'x1n327nk',
//           top: 'x13vifvy',
//           start: 'x17qophe',
//           display: 'x78zum5',
//           flexDirection: 'x1q0g3np',
//           justifyContent: 'xl56j7k',
//           alignItems: 'x6s0dn4',
//           borderBottomWidth: 'xso031l',
//           borderBottomStyle: 'x1q0q8m5',
//           borderBottomColor: 'x80vd3b',
//           backgroundColor: 'x881uwn',
//           $$css: !0,
//         },
//         fixedBannerContainerNarrow: {
//           height: 'x17rw0jw',
//           $$css: !0,
//         },
//         quickchatWrapper: {
//           bottom: 'x1ey2m1c',
//           height: 'xqtp20y',
//           position: 'xixxii4',
//           width: 'xnalus7',
//           zIndex: 'xzkaem6',
//           end: 'xds687c',
//           '@media print_display': 'xbjcvb9',
//           $$css: !0,
//         },
//         quickchatWrapperFixedWidth: {
//           '@media (min-width: 1921px)_end': 'xelyn3c',
//           $$css: !0,
//         },
//         quickchatInner: {
//           position: 'x10l6tqk',
//           height: 'xn3w4p2',
//           width: 'xqmnf81',
//           end: 'xds687c',
//           $$css: !0,
//         },
//       },
//       H = l.memo(
//         l.forwardRef(function (a, e) {
//           var f = a.channelContent,
//             g = a.hasFixedBanner,
//             h = a.isLayoutFullWidth,
//             i = a.navContent,
//             k = a.navContentAndChannelContainer
//           a = d('WorkGalahadNavUIState').useNavUIState()
//           var m = a.isAutoHideEnabled,
//             n = a.isChannelVisible,
//             o = d(
//               'useGeminiLayoutHorizontalScrolling',
//             ).useGeminiLayoutHorizontalScrolling(),
//             q = p(
//               function () {
//                 var a
//                 return F
//                   ? {}
//                   : ((a = {}),
//                     (a[E] = h ? -o : 'auto'),
//                     (a.width = 'inherit'),
//                     a)
//               },
//               [o, h],
//             ),
//             r = T(g, G.navigationInnerWithBannerNarrowBuffer)
//           a = p(
//             function () {
//               var a = k
//               return l.jsx(b('cr:8131').GeminiLayoutLeftHandColumnWrapper, {
//                 ref: e,
//                 children: function () {
//                   for (
//                     var e = arguments.length, g = new Array(e), h = 0;
//                     h < e;
//                     h++
//                   )
//                     g[h] = arguments[h]
//                   return l.jsxs(l.Fragment, {
//                     children: [
//                       !F &&
//                         l.jsx('div', {
//                           className: 'xh8yej3 x5yr21d',
//                         }),
//                       l.jsx(a, {
//                         children: l.jsx('div', {
//                           className: (j || (j = c('stylex')))(
//                             F ? G.navigationSticky : G.navigationFixed,
//                             u && G.navigationFixedWP4MAppBar,
//                           ),
//                           style: q,
//                           children: l.jsxs('div', {
//                             className: j(G.navigationInner, r),
//                             children: [
//                               l.jsx(c('CometErrorBoundary.react'), {
//                                 children: l.jsx(
//                                   d('CometPagelet.react').Placeholder,
//                                   {
//                                     className: j(
//                                       G.navigationAppNavList,
//                                       u && G.navigationAppNavListWP4MAppBar,
//                                     ),
//                                     fallback: null,
//                                     name: 'GeminiLayoutNavigationAppList',
//                                     children: i,
//                                   },
//                                 ),
//                               }),
//                               l.jsx('div', {
//                                 className: j.apply(
//                                   void 0,
//                                   g.concat([
//                                     G.channelWrapper,
//                                     m &&
//                                       (n
//                                         ? G.channelWrapperAutoHideButVisible
//                                         : G.channelWrapperHidden),
//                                     u &&
//                                       m &&
//                                       n &&
//                                       G.channelWrapperAutoHideButVisibleWP4MAppBar,
//                                   ]),
//                                 ),
//                                 children: l.jsx(c('CometErrorBoundary.react'), {
//                                   children: l.jsx(
//                                     d('CometPagelet.react').Placeholder,
//                                     {
//                                       fallback: null,
//                                       name: 'GeminiLayoutNavigationChannel',
//                                       children: l.jsx(b('cr:1829651'), {
//                                         name: 'channel',
//                                         children: f,
//                                       }),
//                                     },
//                                   ),
//                                 }),
//                               }),
//                             ],
//                           }),
//                         }),
//                       }),
//                     ],
//                   })
//                 },
//               })
//             },
//             [k, e, q, r, i, m, n, f],
//           )
//           return a
//         }),
//       )
//     function a(a) {
//       var b = a.children,
//         e = a.coverPhoto,
//         f = a.footer,
//         g = a.hasContrastBackgroundColor
//       g = g === void 0 ? !1 : g
//       var h = a.testid
//       h = a.topBanner
//       a = d('GeminiLayoutHeaderContext.react').useGeminiLayoutHeader()
//       var i = a.hasCoverPhoto,
//         k = a.hasHeaderTabs
//       a = a.intersectionObserverRef
//       var m = c('useGeminiLayoutIsFullWidth')(),
//         o = d(
//           'GeminiLayoutFullWidthModeContext.react',
//         ).useGeminiLayoutUserSettingsFullWidthMode(),
//         q = d(
//           'useGeminiLayoutHorizontalScrolling',
//         ).useGeminiLayoutHorizontalScrolling(),
//         r = d(
//           'useGeminiLayoutIntersectionObserverForSticky',
//         ).useGeminiLayoutIsSticky(),
//         s = n(P),
//         t = s.entity,
//         v = d(
//           'GeminiLayoutHasFixedBannerContext.react',
//         ).useGeminiLayoutHasFixedBanner()
//       s =
//         i && e != null
//           ? l.jsx('div', {
//               className: 'x1vd4hg5 xh8yej3',
//               children: e,
//             })
//           : null
//       i = p(
//         function () {
//           var a,
//             b = I({
//               hasHeaderTabs: k,
//             })
//           return F
//             ? {
//                 height: b,
//               }
//             : ((a = {}),
//               (a[E] = r !== !0 ? 'auto' : -q),
//               (a.maxWidth = r && !m ? 1600 : void 0),
//               (a.minWidth = r && !m ? 'auto' : '0'),
//               (a.width = t),
//               (a.height = b),
//               (a.top = v ? B : 0),
//               a)
//         },
//         [k, r, q, m, t, v],
//       )
//       e = r
//         ? l.jsxs(l.Fragment, {
//             children: [s, h],
//           })
//         : l.jsxs(l.Fragment, {
//             children: [h, s],
//           })
//       h = l.jsxs(l.Fragment, {
//         children: [
//           l.jsx(c('CometBase.react'), {
//             ref: a,
//           }),
//           e,
//           !F && r
//             ? l.jsx('div', {
//                 className: 'xcbkimw xh8yej3',
//               })
//             : null,
//           !F && r
//             ? l.jsx('div', {
//                 className: 'x1s1d1n7 xh8yej3',
//               })
//             : null,
//           l.jsxs('div', {
//             className: (j || (j = c('stylex')))(
//               G.headerContents,
//               g && G.headerContentsConstrastBackground,
//               !F && r && G.headerFixed,
//               u && !F && r && G.headerFixedWP4MAppBar,
//               !F && o && r && G.headerFixedFluid,
//               u && !F && o && r && G.headerFixedFluidWP4MAppBar,
//             ),
//             'data-testid': void 0,
//             style: i,
//             children: [
//               l.jsx('div', {
//                 className: '',
//                 children: b,
//               }),
//               f != null
//                 ? l.jsx('div', {
//                     className: 'x1s1d1n7',
//                     children: f,
//                   })
//                 : null,
//             ],
//           }),
//         ],
//       })
//       s = Q()
//       return c('gkx')('2401')
//         ? l.jsx('div', {
//             ref: s,
//             children: h,
//           })
//         : h
//     }
//     function I(a) {
//       a = a.hasHeaderTabs
//       return a ? y + z : y
//     }
//     function J(a) {
//       a = a.children
//       var e = d('GeminiLayoutHeaderContext.react').useGeminiLayoutHeader(),
//         f = e.hasCoverPhoto
//       e = e.hasHeaderTabs
//       var g = d(
//         'GeminiLayoutHasFixedBannerContext.react',
//       ).useGeminiLayoutHasFixedBanner()
//       return l.jsx(c('CometSSRMultipassBoundary.react'), {
//         id: 'header',
//         children: l.jsx(b('cr:1829651'), {
//           name: 'header',
//           children: l.jsx('header', {
//             'aria-label': h._('Content Header'),
//             className: (j || (j = c('stylex')))(G.header, F && G.headerSticky),
//             role: 'region',
//             style: {
//               top: K({
//                 hasCoverPhoto: f,
//                 hasFixedBanner: g,
//               }),
//             },
//             children: l.jsx(d('CometPagelet.react').Placeholder, {
//               fallback: l.jsx(c('GeminiLayoutHeaderGlimmer.react'), {
//                 hasCover: f,
//                 hasFooter: e,
//                 hasSubtitle: !0,
//               }),
//               name: 'GeminiLayoutHeader',
//               children: a,
//             }),
//           }),
//         }),
//       })
//     }
//     J.displayName = J.name + ' [from ' + f.id + ']'
//     function K(a) {
//       var b = a.hasCoverPhoto
//       a = a.hasFixedBanner
//       var c = 0
//       b && (c -= x)
//       a && (c += B)
//       return c
//     }
//     function L(a) {
//       a = a.children
//       var e = d(
//         'GeminiLayoutFullWidthModeContext.react',
//       ).useGeminiLayoutUserSettingsFullWidthMode()
//       return l.jsx('div', {
//         className: (j || (j = c('stylex')))(
//           G.quickchatWrapper,
//           !e && G.quickchatWrapperFixedWidth,
//         ),
//         children: l.jsx('div', {
//           className: 'x10l6tqk xn3w4p2 xqmnf81 xds687c',
//           style: ((e = {}), (e[C] = A), e),
//           children: l.jsx(
//             d('CometPagelet.react').Placeholder,
//             {
//               fallback: null,
//               name: 'WorkGalahadQuickChat',
//               children: l.jsx(b('cr:1829651'), {
//                 name: 'quickchat',
//                 children: l.jsx(c('CometErrorBoundary.react'), {
//                   children: l.jsx(c('BaseHeadingContextWrapper.react'), {
//                     children: a,
//                   }),
//                 }),
//               }),
//             },
//             'quickchat',
//           ),
//         }),
//       })
//     }
//     L.displayName = L.name + ' [from ' + f.id + ']'
//     function M() {
//       var a = d(
//         'GeminiLayoutTabTitleState.react',
//       ).useGeminiLayoutTabTitleState()
//       a = a.tabTitle
//       return a == null
//         ? null
//         : l.jsx(c('CometScreenReaderHeading.react'), {
//             children: a,
//           })
//     }
//     M.displayName = M.name + ' [from ' + f.id + ']'
//     function N(a) {
//       var b = a.children,
//         e = a.contentPlaceholder
//       a = a.hasHeaderTabs
//       return l.jsxs(c('GeminiRouterFocusRegion.react'), {
//         children: [
//           a &&
//             l.jsx(
//               'div',
//               babelHelpers['extends'](
//                 {},
//                 c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
//                 {
//                   children: l.jsx(M, {}),
//                 },
//               ),
//             ),
//           l.jsx(d('CometPagelet.react').Placeholder, {
//             className: 'x78zum5 xdt5ytf xnalus7 xeuugli x1iyjqo2',
//             fallback: e != null ? e : null,
//             name: 'GeminiLayoutEntity',
//             children: b,
//           }),
//         ],
//       })
//     }
//     N.displayName = N.name + ' [from ' + f.id + ']'
//     function O(a) {
//       a = a.children
//       var b = d(
//           'useGeminiLayoutHorizontalScrolling',
//         ).useGeminiLayoutHorizontalScrolling(),
//         e = n(P),
//         f = e.entity,
//         g = e.leftNav
//       e = d(
//         'GeminiLayoutHasFixedBannerContext.react',
//       ).useGeminiLayoutHasFixedBanner()
//       e = T(e, G.fixedBannerContainerNarrow)
//       var h = p(
//         function () {
//           var a
//           return F ? {} : ((a = {}), (a[D] = b * -1), (a.minWidth = g + f), a)
//         },
//         [b, g, f],
//       )
//       return l.jsx('div', {
//         className: (j || (j = c('stylex')))(G.fixedBannerContainer, e),
//         style: h,
//         children: a,
//       })
//     }
//     O.displayName = O.name + ' [from ' + f.id + ']'
//     var P = u
//       ? l.createContext({
//           entity: w,
//           leftNav: v + t,
//         })
//       : l.createContext({
//           entity: w,
//           leftNav: v + s,
//         })
//     function Q() {
//       var a = q(null),
//         b = d(
//           'GeminiLayoutHeaderHeightContext.react',
//         ).useGeminiLayoutHeaderHeight(),
//         c = b.setHeight
//       o(
//         function () {
//           var b
//           b = (b = a.current) == null ? void 0 : b.getBoundingClientRect()
//           c((b = b == null ? void 0 : b.height) != null ? b : 0)
//         },
//         [a, c],
//       )
//       return a
//     }
//     function e(a) {
//       var e = a.channelContent,
//         f = a.children,
//         g = a.fixedBannerContent,
//         h = a.mainNavContent,
//         i = a.navContentAndChannelContainer
//       a = d('WorkGalahadNavUIState').useNavUIState()
//       a = a.isAutoHideEnabled
//       var k = c('useGeminiLayoutIsFullWidth')(),
//         m = d(
//           'useGeminiLayoutHorizontalScrolling',
//         ).useGeminiLayoutHorizontalScrollingListener()
//       a = c('useGeminiLayoutChannelMeasureListenerForNonSticky')(
//         u ? v + t : v + s,
//         w,
//         a,
//       )
//       var n = a[0],
//         o = a[1],
//         q = a[2],
//         x = a[3],
//         y = p(
//           function () {
//             return {
//               leftNav: q,
//               entity: x - q,
//             }
//           },
//           [x, q],
//         ),
//         z = g != null,
//         A = U({
//           hasFixedBanner: z,
//         }),
//         B = p(
//           function () {
//             return {
//               bottom: 0,
//               left: 0,
//               right: 0,
//               top: A,
//             }
//           },
//           [A],
//         ),
//         C = T(z, G.contentWithTopBannerNarrowBuffer)
//       return l.jsx(b('cr:8131').GeminiLayoutPageWrapper, {
//         children: function () {
//           var a
//           return l.jsxs(l.Fragment, {
//             children: [
//               b('cr:2287') && l.jsx(b('cr:2287'), {}),
//               l.jsx('div', {
//                 className: (j || (j = c('stylex'))).apply(void 0, arguments),
//                 ref: o,
//                 children: l.jsx(c('BaseViewportMarginsContext').Provider, {
//                   value: B,
//                   children: l.jsx(P.Provider, {
//                     value: y,
//                     children: l.jsx(
//                       d('GeminiLayoutHasFixedBannerContext.react').Provider,
//                       {
//                         hasFixedBanner: z,
//                         children: l.jsxs(
//                           d('useGeminiLayoutHorizontalScrolling')
//                             .GeminiLayoutHorizontalScrollingContextProvider,
//                           {
//                             value: m,
//                             children: [
//                               g != null
//                                 ? l.jsx(O, {
//                                     children: g,
//                                   })
//                                 : null,
//                               l.jsxs(
//                                 d('GeminiLayoutHeaderHeightContext.react')
//                                   .Provider,
//                                 {
//                                   children: [
//                                     l.jsx(
//                                       c('CometSSRMultipassBoundary.react'),
//                                       {
//                                         id: 'top_nav',
//                                         children: l.jsx(b('cr:1829651'), {
//                                           name: 'navigation',
//                                           children: l.jsx(H, {
//                                             channelContent: e,
//                                             hasFixedBanner: z,
//                                             isLayoutFullWidth: k,
//                                             navContent: h,
//                                             navContentAndChannelContainer:
//                                               (a = i) != null ? a : l.Fragment,
//                                             ref: n,
//                                           }),
//                                         }),
//                                       },
//                                     ),
//                                     l.jsxs('div', {
//                                       className: r(j(G.content, C)),
//                                       children: [
//                                         b('cr:6171') && l.jsx(b('cr:6171'), {}),
//                                         f,
//                                       ],
//                                     }),
//                                   ],
//                                 },
//                               ),
//                             ],
//                           },
//                         ),
//                       },
//                     ),
//                   }),
//                 }),
//               }),
//             ],
//           })
//         },
//       })
//     }
//     e.displayName = e.name + ' [from ' + f.id + ']'
//     function R(a) {
//       var e = a.children,
//         f = a.contentPlaceholder,
//         g = a.forceFullHeight,
//         h = g === void 0 ? !1 : g
//       g = a.forceHeaderExpanded
//       var i = a.hasHeaderCoverPhoto,
//         k = a.hasHeaderTabs,
//         m = a.headerContent,
//         o = a.sidebarCollapseKey,
//         q = a.sidebarContent
//       a = c('useWorkGalahadIsRHCCollapsed')(o)
//       var r = a[0],
//         s = a[1]
//       o = n(c('GeminiLayoutQuickchatContext.react'))
//       var t = o.quickchat,
//         u = o.showInbox
//       a = n(P)
//       o = a.leftNav
//       a = i ? x : -1
//       var v = d(
//         'GeminiLayoutHasFixedBannerContext.react',
//       ).useGeminiLayoutHasFixedBanner()
//       a = d(
//         'useGeminiLayoutIntersectionObserverForSticky',
//       ).useGeminiLayoutIntersectionObserverForSticky(a - (v ? B : 0), !i)
//       var w = a[0]
//       a = a[1]
//       var y = U({
//         hasHeaderTabs: k,
//         hasHeaderContent: m != null,
//         hasFixedBanner: v,
//       })
//       v = p(
//         function () {
//           return {
//             bottom: 0,
//             left: 0,
//             right: 0,
//             top: y,
//           }
//         },
//         [y],
//       )
//       var z = p(
//           function () {
//             return q != null
//               ? l.jsx(c('CometSSRMultipassBoundary.react'), {
//                   id: 'rhc',
//                   children: l.jsx(b('cr:1829651'), {
//                     name: 'rhc',
//                     children: l.jsx(
//                       d('WorkGalahadEntitySidebarState').Provider,
//                       {
//                         collapsed: r,
//                         setCollapsed: s,
//                         children: q,
//                       },
//                     ),
//                   }),
//                 })
//               : null
//           },
//           [q, r, s],
//         ),
//         A = p(
//           function () {
//             return l.jsx(c('BaseHeadingContextWrapper.react'), {
//               children: l.jsx(b('cr:1829651'), {
//                 name: 'entity',
//                 children: l.jsx(N, {
//                   contentPlaceholder: f,
//                   hasHeaderTabs: k,
//                   children: l.jsx(
//                     d('useCometScrollAnchor').CometScrollFixerRoot,
//                     {
//                       children: l.jsxs(l.Fragment, {
//                         children: [
//                           e,
//                           t != null &&
//                             u === !0 &&
//                             h !== !0 &&
//                             l.jsx('div', {
//                               className: 'xn3w4p2 x2lah0s',
//                             }),
//                         ],
//                       }),
//                     },
//                   ),
//                 }),
//               }),
//             })
//           },
//           [e, f, h, k, t, u],
//         )
//       return l.jsx(
//         d('useGeminiLayoutIntersectionObserverForSticky')
//           .GeminiLayoutStickyContextProvider,
//         {
//           value: a,
//           children: l.jsx(c('BaseViewportMarginsContext').Provider, {
//             value: v,
//             children: l.jsx('div', {
//               className: (j || (j = c('stylex')))(h && G.contentFullHeight),
//               children: l.jsx(c('GeminiRouterFocusRegion.react'), {
//                 children: l.jsxs(
//                   d('GeminiLayoutHeaderContext.react').Provider,
//                   {
//                     forceHeaderExpanded: g,
//                     hasHeaderCoverPhoto: i,
//                     hasHeaderTabs: k,
//                     leftNav: o,
//                     observerRef: w,
//                     children: [
//                       m != null
//                         ? l.jsx(J, {
//                             children: l.jsx(c('CometErrorBoundary.react'), {
//                               children: m,
//                             }),
//                           })
//                         : null,
//                       l.jsxs('div', {
//                         className: 'x78zum5 x15zctf7 x1iyjqo2',
//                         children: [
//                           z,
//                           l.jsx(c('CometPlaceholder.react'), {
//                             fallback: null,
//                             children: l.jsx(S, {}),
//                           }),
//                           A,
//                         ],
//                       }),
//                     ],
//                   },
//                 ),
//               }),
//             }),
//           }),
//         },
//       )
//     }
//     R.displayName = R.name + ' [from ' + f.id + ']'
//     var S = l.memo(function () {
//       var a = n(c('GeminiLayoutQuickchatContext.react')),
//         d = a.quickchat,
//         e = n(c('HiddenSubtreeContext')).hidden
//       return l.jsx(b('cr:8131').GeminiLayoutEntityAddonsWrapper, {
//         children: function () {
//           return l.jsx(
//             'div',
//             babelHelpers['extends'](
//               {},
//               c('gkx')('1914859') ||
//                 c('CometVisualCompletionAttributes').IGNORE_DYNAMIC,
//               {
//                 className: (j || (j = c('stylex'))).apply(void 0, arguments),
//                 children:
//                   d != null && !e
//                     ? l.jsx(L, {
//                         children: d,
//                       })
//                     : null,
//               },
//             ),
//           )
//         },
//       })
//     })
//     function T(a, b) {
//       return !a ? null : b
//     }
//     function U(a) {
//       var b = a.hasFixedBanner,
//         c = a.hasHeaderContent
//       c = c === void 0 ? !1 : c
//       a = a.hasHeaderTabs
//       a = a === void 0 ? !1 : a
//       var d = 0
//       b && (d += B)
//       if (!c) return d
//       d = y
//       a && (d += z)
//       return d
//     }
//     function V(a) {
//       var b = a.children,
//         d = a.testid
//       d = a.width
//       return l.jsx(c('CometContentArea.react'), {
//         children: l.jsx('div', {
//           className: (j || (j = c('stylex')))(
//             G.entityContentColumnBase,
//             d === 'full' && G.entityContentColumnFull,
//             d === 'narrow' && G.entityContentColumnNarrow,
//             d === 'wide' && G.entityContentColumnWide,
//             d === 'fullWithMargins' && G.entityContentColumnFullWithMargins,
//             !1,
//             d === 'feed' && G.entityContentColumnFeedWider,
//           ),
//           'data-testid': void 0,
//           children: b,
//         }),
//       })
//     }
//     V.displayName = V.name + ' [from ' + f.id + ']'
//     function W(a) {
//       var b = a.children,
//         d = a.mode
//       a = a.testid
//       a = n(c('BaseViewportMarginsContext'))
//       var e = a.top
//       a = p(
//         function () {
//           return {
//             height: 'calc(100vh - ' + e + 'px)',
//             width: '100%',
//           }
//         },
//         [e],
//       )
//       return l.jsx(c('CometContentArea.react'), {
//         children: l.jsx('div', {
//           className: (j || (j = c('stylex')))(
//             d === 'center-content' && G.entityContentStretchedCenterContent,
//           ),
//           'data-testid': void 0,
//           style: a,
//           children: b,
//         }),
//       })
//     }
//     W.displayName = W.name + ' [from ' + f.id + ']'
//     m = l.memo(e)
//     f = l.memo(a)
//     g.GeminiLayoutPageEntitySizeContext = P
//     g.GeminiLayoutContent = R
//     g.GeminiLayoutEntityContentColumn = V
//     g.GeminiLayoutEntityContentStretched = W
//     g.GeminiLayoutPage = m
//     g.GeminiLayoutPageHeader = f
//   },
//   98,
// )
