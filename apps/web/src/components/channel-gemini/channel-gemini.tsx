// /*

// __d("ChannelGemini.react",
//   ["fbt",
//   "ChannelGeminiAutoFocusRegion.react", //
//   "ChannelGeminiEntryPointContainer.react",
//   "ChannelGeminiInviteButton.react", ?
//   "ChannelGeminiStackedChannelContainer.react",
//   "ChannelGeminiStackedChannelPopButton.react",
//   "ChannelGeminiUIChannel.react", //
//   "CometPagelet.react", //
//   "CometPlaceholder.react", //
//   "ErrorBoundary.react", "FluxHooks", //
//   "GeminiStackedChannelType", "Locale", "TrackingNodes", //
//   "WorkAppTabSet", "WorkChannelNetworkErrorState.react", //
//   "WorkGalahadCompanyData", "WorkGalahadNavStore", //
//   "WorkGalahadNetworkErrorBoundary.react", ?
//   "WorkGalahadSearchOverlay.react", "deferredLoadComponent", ?
//   "emptyFunction", "gkx", "react", "requireDeferredForDisplay", "stylex",
//   "useWorkplaceSearchOverlay"], (function(a, b, c, d, e, f, g, h) {

// __d("ChannelGeminiUIChannel.react",
// ["BaseViewportMarginsContext",
// "WorkGalahadNavUIState",
// "WorkGalahadTopbar", "react", "stylex"], (function(a, b, c, d, e, f, g) {

// __d("ChannelGeminiAutoFocusRegion.react",
//   ["FocusRegion.react",
//   "Parent", "focusScopeQueries", "react"], (function(a, b, c, d, e, f, g) {

// __d("Parent", ["CSS"], (function(a, b, c, d, e, f, g) {

// __d("CSS", ["$", "CSSCore"], (function(a, b, c, d, e, f, g) {
// __d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g, h) {
// __d("$", ["$-core"], (function(a, b, c, d, e, f, g) {
// __d("$-core", ["fb-error-lite"], (function(a, b, c, d, e, f, g) {

// __d("ChannelGeminiStackedChannelContainer.react",
// ["ChannelGeminiTabContext.react",
// "CometPlaceholder.react",
// "ErrorBoundary.react",
// "RelayHooks", "react", "stylex"], (function(a, b, c, d, e, f, g) {

// */

// import React from 'react'

// // @ts-ignore
// import { jsx, jsxs } from 'react/jsx-runtime'
// import { ChannelGeminiUIChannel } from '../channel-gemini-ui-channel'
// import { CometPagelet } from '@negiganaito/placeholder'
// import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
// import { emptyFunction } from '@negiganaito/utils/common/empty-function'
// import { ChannelGeminiAutoFocusRegion } from '@negiganaito/index'
// import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

// const isRTL = false

// const useStyles = makeStyles({
//   disabledSearch: {
//     paddingTop: '8px',
//     paddingRight: '8px',
//     paddingBottom: '8px',
//     paddingLeft: '8px',
//   },
//   popStackedChannelButton: {
//     marginRight: '8px',
//   },
//   search: {
//     ...shorthands.borderStyle('solid'),
//     ...shorthands.borderWidth('0'),
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     ...shorthands.margin(0),
//     minHeight: '0',
//     minWidth: '0',
//     position: 'relative',
//     zIndex: 'unset',
//     alignItems: 'center',
//     flexDirection: 'row',
//     flexShrink: 0,
//     ...shorthands.padding('16px'),
//   },
//   stackedChannel: {
//     position: 'relative',
//     left: '300px',
//     transitionDuration: 'var(--fds-fast)',
//     transitionProperty: 'transform',
//     transitionTimingFunction: 'var(--fds-strong)',
//   },
//   stackedChannelVisible: {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100%',
//     transform: 'translateX(-300px)',
//   },
//   stackedChannelVisibleRTL: {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100%',
//     transform: 'translateX(300px)',
//   },
//   placeholder: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },

//   dummy1: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
// })

// export function ChannelGemini() {
//   const classes = useStyles()

//   /*
//   const e = c("WorkGalahadNavStore")
//   const a = d("FluxHooks")
//   var b, e, f = a.useFluxStore(e, r),
//   g = a.useFluxStore(e, o),
//   j = a.useFluxStore(e, p);

//   */

//   return jsx(ChannelGeminiUIChannel, {
//     //   bottom: k.jsx(k.Fragment, {
//     //     children: q() ? k.jsx(c("CometPlaceholder.react"), {
//     //         fallback: null,
//     //         children: k.jsx(c("ChannelGeminiInviteButton.react"), {})
//     //     }) : null
//     // }),
//     // hideBottom: !q(),
//     hideBottom: true,
//     hideTop: true,
//     children: jsxs(CometPagelet.Placeholder, {
//       className: classes.dummy1, // 'x5yr21d x78zum5 xdt5ytf',
//       fallback: null,
//       name: 'ChannelGemini',
//       children: [
//         jsx(ChannelGeminiAutoFocusRegion, {
//           inert: v || !a,
//           navigationKey: j,
//           children: k.jsx('div', {
//             'aria-labelledby': v ? void 0 : g,
//             className: mergeClasses(!v && !e && n.content),
//             role: !v && !e ? 'navigation' : void 0,
//             children: jsx('ChannelGeminiEntryPointContainer.react', {
//               hidden: v || e,
//             }),
//           }),
//         }),
//         jsx('div', {
//           'aria-label':
//             w && (f == null ? void 0 : f.title)
//               ? f == null
//                 ? void 0
//                 : f.title
//               : void 0,
//           className: mergeClasses(
//             n.stackedChannel,
//             w &&
//               (isRTL
//                 ? classes.stackedChannelVisibleRTL
//                 : classes.stackedChannelVisible),
//           ),
//           role: w ? 'navigation' : void 0,
//           children:
//             f &&
//             jsx(ChannelGeminiAutoFocusRegion, {
//               navigationKey: 'stack',
//               children: jsx('ChannelGeminiStackedChannelContainer', {
//                 show: !e,
//                 stackedChannelData: f,
//               }),
//             }),
//         }),
//         // jsx(ErrorBoundaryReact, {
//         //   onError: emptyFunction,
//         //   children: k.jsx(c('WorkGalahadSearchOverlay.react'), {
//         //     show: e,
//         //   }),
//         // }),
//       ],
//     }),
//   })
// }
