import React, {
  createContext,
  forwardRef,
  memo,
  useContext,
  useMemo,
} from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { VoyageUserJourneyUILayerProvider } from '@/components'
import {
  Provider as GeminiLayoutHasFixedBannerContextProvider,
  useGeminiLayoutHasFixedBanner,
} from '@/context/gemini-layout-has-fixed-banner-context'
import { Provider as GeminiLayoutHeaderHeightProvider } from '@/context/gemini-layout-header-height-context'
import { useNavUIState } from '@/context/gemini-nav-and-channel-context'
import {
  GeminiLayoutHorizontalScrollingContextProvider,
  useGeminiLayoutChannelMeasureListenerForNonSticky,
  useGeminiLayoutHorizontalScrolling,
  useGeminiLayoutHorizontalScrollingListener,
} from '@/hooks'
import { useGeminiLayoutIsFullWidth } from '@/hooks/use-gemini-layout-is-full-width'
import { mergeClasses } from '@fluentui/react-components'
import { BaseViewportMarginsContext } from '@metamon/context'
import { CometErrorBoundary } from '@metamon/error'
import { CometPagelet, CometSSRMultipassBoundary } from '@metamon/placeholder'
import { thatReturnsArgument } from '@metamon/utils/common/empty-function'
import executionEnvironment from '@metamon/utils/common/execution-environment'
import { supportsCSSSticky } from '@metamon/utils/common/supports-css-sticky'

import {
  GeminiLayoutLeftHandColumnWrapper,
  GeminiLayoutPageWrapper,
} from '../gemini-layout-non-responsiveness-wrappers'
import { useStyles } from './styles'

type GeminiLayoutPageProps = {
  channelContent?: any
  children?: any
  fixedBannerContent?: any
  mainNavContent?: any
  navContentAndChannelContainer?: any
}

const u = false // c('GalileoNavFeatureGating').isGalileoNavMode('employee_appbar_on_workplace',)

const r = thatReturnsArgument

const F = executionEnvironment.canUseDOM ? supportsCSSSticky : !0

const v = 300,
  s = 96,
  w = 870

const E = 'marginLeft' // d('Locale').isRTL() ? 'marginRight' : 'marginLeft',
const C = 'right'
const D = 'left'

var P = createContext({
  entity: w,
  leftNav: v + s,
})

export function GeminiLayoutPage({
  channelContent,
  children,
  fixedBannerContent,
  mainNavContent,
  navContentAndChannelContainer,
}: GeminiLayoutPageProps) {
  const classes = useStyles()

  const { isAutoHideEnabled } = useNavUIState()
  const k = useGeminiLayoutIsFullWidth(),
    m = useGeminiLayoutHorizontalScrollingListener()
  const [n, o, q, x] = useGeminiLayoutChannelMeasureListenerForNonSticky(
    v + s,
    w,
    isAutoHideEnabled,
  )
  const y = useMemo(
      function () {
        return {
          leftNav: q,
          entity: x - q,
        }
      },
      [x, q],
    ),
    z = fixedBannerContent != null,
    A = U({
      hasFixedBanner: z,
    }),
    B = useMemo(
      function () {
        return {
          bottom: 0,
          left: 0,
          right: 0,
          top: A,
        }
      },
      [A],
    ),
    C = T(z, classes.contentWithTopBannerNarrowBuffer)
  return jsx(GeminiLayoutPageWrapper, {
    children: function (clazz: any) {
      return jsxs(React.Fragment, {
        children: [
          // GeminiAccessibilitySkipToContent
          // b('cr:2287') && jsx(b('cr:2287'), {}),
          jsx('div', {
            className: clazz,
            ref: o,
            children: jsx(BaseViewportMarginsContext.Provider, {
              value: B,
              children: jsx(P.Provider, {
                value: y,
                children: jsx(GeminiLayoutHasFixedBannerContextProvider, {
                  hasFixedBanner: z,
                  children: jsxs(
                    GeminiLayoutHorizontalScrollingContextProvider,
                    {
                      value: m,
                      children: [
                        fixedBannerContent
                          ? jsx(O, {
                              children: fixedBannerContent,
                            })
                          : null,
                        jsxs(GeminiLayoutHeaderHeightProvider, {
                          children: [
                            jsx(CometSSRMultipassBoundary, {
                              id: 'top_nav',
                              children: jsx(VoyageUserJourneyUILayerProvider, {
                                name: 'navigation',
                                children: jsx(H, {
                                  channelContent: channelContent,
                                  hasFixedBanner: z,
                                  isLayoutFullWidth: k,
                                  navContent: mainNavContent,
                                  navContentAndChannelContainer:
                                    navContentAndChannelContainer ??
                                    React.Fragment,
                                  ref: n,
                                }),
                              }),
                            }),
                            jsxs('div', {
                              className: r(mergeClasses(classes.content, C)),
                              children: [
                                // b('cr:6171') && jsx(b('cr:6171'), {}),
                                children,
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                  ),
                }),
              }),
            }),
          }),
        ],
      })
    },
  })
}

const B = 22
const y = 85
const z = 35

function U(a: any) {
  let b = a.hasFixedBanner,
    c = a.hasHeaderContent
  c = c === void 0 ? !1 : c
  a = a.hasHeaderTabs
  a = a === void 0 ? !1 : a
  var d = 0
  b && (d += B)
  if (!c) return d
  d = y
  a && (d += z)
  return d
}

function T(a: any, b: any) {
  return !a ? null : b
}

function O(a: any) {
  const classes = useStyles()

  a = a.children
  let b = useGeminiLayoutHorizontalScrolling(),
    e: any = useContext(P),
    f = e.entity,
    g = e.leftNav
  e = useGeminiLayoutHasFixedBanner()
  e = T(e, classes.fixedBannerContainerNarrow)
  const h = useMemo(
    function () {
      let a: any
      return F ? {} : ((a = {}), (a[D] = b * -1), (a.minWidth = g + f), a)
    },
    [b, g, f],
  )
  return jsx('div', {
    className: mergeClasses(classes.fixedBannerContainer, e),
    style: h,
    children: a,
  })
}

const H = memo(
  forwardRef((a: any, ref) => {
    const classes = useStyles()

    const {
      channelContent,
      hasFixedBanner,
      isLayoutFullWidth,
      navContent,
      navContentAndChannelContainer,
    } = a

    const { isAutoHideEnabled, isChannelVisible } = useNavUIState()

    const o = useGeminiLayoutHorizontalScrolling()
    const style = useMemo(
      function () {
        let a: any
        return F
          ? {}
          : ((a = {}),
            (a[E] = isLayoutFullWidth ? -o : 'auto'),
            (a.width = 'inherit'),
            a)
      },
      [o, isLayoutFullWidth],
    )
    const r = T(hasFixedBanner, classes.navigationInnerWithBannerNarrowBuffer)
    a = useMemo(
      function () {
        let a = navContentAndChannelContainer
        return jsx(GeminiLayoutLeftHandColumnWrapper, {
          ref: ref,
          children: function (clazz: any) {
            return jsxs(React.Fragment, {
              children: [
                !F &&
                  jsx('div', {
                    className: classes.dummy1, // 'xh8yej3 x5yr21d',
                  }),
                jsx(a, {
                  children: jsx('div', {
                    className: mergeClasses(
                      F ? classes.navigationSticky : classes.navigationFixed,
                      u && classes.navigationFixedWP4MAppBar,
                    ),
                    style: style,
                    children: jsxs('div', {
                      className: mergeClasses(classes.navigationInner, r),
                      children: [
                        jsx(CometErrorBoundary, {
                          children: jsx(CometPagelet.Placeholder, {
                            className: mergeClasses(
                              classes.navigationAppNavList,
                              u && classes.navigationAppNavListWP4MAppBar,
                            ),
                            fallback: null,
                            name: 'GeminiLayoutNavigationAppList',
                            children: navContent,
                          }),
                        }),
                        jsx('div', {
                          className: mergeClasses(
                            clazz,
                            classes.channelWrapper,
                            isAutoHideEnabled &&
                              (isChannelVisible
                                ? classes.channelWrapperAutoHideButVisible
                                : classes.channelWrapperHidden),
                            u &&
                              isAutoHideEnabled &&
                              isChannelVisible &&
                              classes.channelWrapperAutoHideButVisibleWP4MAppBar,
                          ),
                          children: jsx(CometErrorBoundary, {
                            children: jsx(CometPagelet.Placeholder, {
                              fallback: null,
                              name: 'GeminiLayoutNavigationChannel',
                              children: jsx(VoyageUserJourneyUILayerProvider, {
                                name: 'channel',
                                children: channelContent,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          },
        })
      },
      [
        navContentAndChannelContainer,
        ref,
        style,
        r,
        navContent,
        isAutoHideEnabled,
        isChannelVisible,
        channelContent,
      ],
    )
    return a
  }),
)
