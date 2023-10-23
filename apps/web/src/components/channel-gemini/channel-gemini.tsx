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

import React, { useMemo } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
// import { ChannelGeminiUIChannel } from '../channel-gemini-ui-channel'
// import { CometPagelet } from '@negiganaito/placeholder'
// import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
// import { emptyFunction } from '@negiganaito/utils/common/empty-function'
// import { ChannelGeminiAutoFocusRegion } from '@negiganaito/index'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import {
  WorkGalahadNavStore,
  WorkGalahadNavStoreState,
  useWorkGalahadNavStore,
} from '@/context/work-galahad-nav-store'
import { WorkAppTabSet } from '../work-app-tab-set'
import { GeminiStackedChannelType } from '@/utils/gemini-stacked-channel-type'
import ErrorBoundaryReact from '@negiganaito/error/errorguard/error-boundary'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'
import { CometPlaceholder } from '@negiganaito/placeholder'

const isRTL = false

const useStyles = makeStyles({
  disabledSearch: {
    paddingTop: '8px',
    paddingRight: '8px',
    paddingBottom: '8px',
    paddingLeft: '8px',
  },
  popStackedChannelButton: {
    marginRight: '8px',
  },
  search: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    ...shorthands.margin(0),
    minHeight: '0',
    minWidth: '0',
    position: 'relative',
    zIndex: 'unset',
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
    ...shorthands.padding('16px'),
  },
  stackedChannel: {
    position: 'relative',
    left: '300px',
    transitionDuration: 'var(--fds-fast)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'var(--fds-strong)',
  },
  stackedChannelVisible: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transform: 'translateX(-300px)',
  },
  stackedChannelVisibleRTL: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transform: 'translateX(300px)',
  },
  placeholder: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  dummy1: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

function o(state: WorkGalahadNavStoreState) {
  return WorkGalahadNavStore.getSelectedAppTabID(state)
}
function p(state: WorkGalahadNavStoreState) {
  return WorkGalahadNavStore.getNavigationKey(state)
}
function q() {
  return false
  // return (
  //   c('WorkGalahadCompanyData').showInviteLinkOnHeader && c('gkx')('678688')
  // )
}
function r(state: WorkGalahadNavStoreState) {
  return WorkGalahadNavStore.getStackedChannelData(state)
}
function s(state: WorkGalahadNavStoreState) {
  return WorkGalahadNavStore.isChannelAutoFocusAllowed(state)
}

export function ChannelGemini() {
  const classes = useStyles()
  const { state } = useWorkGalahadNavStore()

  const f = WorkGalahadNavStore.getStackedChannelData(state)
  const g = WorkGalahadNavStore.getSelectedAppTabID(state)
  const j = WorkGalahadNavStore.getNavigationKey(state)
  const a = WorkGalahadNavStore.isChannelAutoFocusAllowed(state)

  // const e = c("useWorkplaceSearchOverlay")();
  // e = e.isSearchOverlayShown;

  const isSearchOverlayShown = false

  const tab = WorkAppTabSet().find(tab => tab.id === g)

  const trackingNode = !tab ? undefined : tab.id

  const u = false // t(g)

  const v = f != null
  const w = f != null && !isSearchOverlayShown
  const x =
    (f == null ? void 0 : f.type) === GeminiStackedChannelType.EVENTS ||
    g === 'events'

  const y = useMemo(() => {
    return v
      ? jsx('div', {
          className: 'x1emribx',
          children: jsx('ChannelGeminiStackedChannelPopButton.react', {}),
        })
      : null
  }, [v])

  const z = useMemo(() => {
    return u
      ? jsx('div', {
          'aria-label': 'Workplace', //  h._('Workplace'),
          className:
            'x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x2lah0s xyamay9 x1pi30zi x1l90r2v x1swvt13',
          role: 'search',
          children: jsxs(ErrorBoundaryReact, {
            onError: emptyFunction,
            children: [
              y,
              jsx(CometPlaceholder, {
                fallback: null,
                children: jsx(m, {
                  show: u,
                }),
              }),
            ],
          }),
        })
      : jsx('div', {
          className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
        })
  }, [y, u])

  return <div />
}
