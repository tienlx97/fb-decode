'use client'

import React, { useMemo } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { makeStyles } from '@griffel/react'
import { useStable } from '@negiganaito/hooks'
import { CometSearchKeyCommandWrapper } from '@negiganaito/keyboards'
import { CometPlaceholder } from '@negiganaito/placeholder'
import { CometContextualLayerAnchorRoot } from '@negiganaito/popover'
import { BaseDOMContainer, BasePortalTargetContext } from '@negiganaito/portal'
import executionEnvironment from '@negiganaito/utils/common/execution-environment'

import ChannelGeminiContainer from './channel-gemini-container'
import { GeminiAppsGlimmer } from './gemini-apps-glimmer'
import { GeminiLayoutPage } from './gemini-layout-page'
import { WorkGalahadUIAppsRoot } from './work-galahad-ui-apps-root'
import { WorkNavigationClassicRenderer } from './work-navigation-classic-renderer'
import { GeminiLayoutTopLevelProvider } from './gemini-layout-top-level-provider'

const useStyles = makeStyles({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 'inherit',
    position: 'relative',
  },
  contentContainerHidden: {
    display: 'none',
  },
})

type GeminiAppViewStackProps = {
  children?: any
}

export default function GeminiAppViewStack({
  children,
}: GeminiAppViewStackProps) {
  const classes = useStyles()

  const basePortalTargetContextValue = useStable(function () {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  const MainNavContentComp = useMemo(() => {
    return jsx(WorkGalahadUIAppsRoot, {
      children: jsx(CometPlaceholder, {
        fallback: jsx(GeminiAppsGlimmer, {}),
        children: jsx(WorkNavigationClassicRenderer, {}),
      }),
    })
  }, [])

  const ChannelContentComp = useMemo(function () {
    return jsx(ChannelGeminiContainer, {})
  }, [])

  return jsxs(React.Fragment, {
    children: [
      jsxs(BasePortalTargetContext.Provider, {
        value: basePortalTargetContextValue,
        children: [
          jsx(CometContextualLayerAnchorRoot, {
            children: jsx(GeminiLayoutTopLevelProvider, {
              children: jsx(GeminiLayoutPage, {
                // side nav 2
                channelContent: ChannelContentComp,
                // side nav 1
                mainNavContent: MainNavContentComp,
                navContentAndChannelContainer: NavContentAndChannelContainer,
                children: jsx(CometSearchKeyCommandWrapper, {
                  className: classes.contentContainer,
                  children,
                  // children: jsx(o, {
                  //   routerState: a,
                  // }),
                }),
              }),
            }),
          }),
        ],
      }),
      jsx(BaseDOMContainer, {
        node: basePortalTargetContextValue,
      }),
    ],
  })
}

// m = b("cr:3561") == null ? void 0 : b("cr:3561").GalileoNavExternalAppDrawerNuxProvider
const DynamicNavContentAndChannelContainer = undefined

function NavContentAndChannelContainer(props: any) {
  const { children } = props
  return jsx(React.Fragment, {
    children: !DynamicNavContentAndChannelContainer
      ? children
      : jsx(DynamicNavContentAndChannelContainer, {
          children,
        }),
  })
}

// function o(a) {
//   a = a.routerState
//   var b = !c('isPushViewRouteType')(a.main.route.routeType)
//   a = a.pushViewStack
//   a = Boolean(a && a.length > 0)
//   return b
//     ? j.jsx(c('HiddenSubtreeContextProvider.react'), {
//         isHidden: a,
//         children: j.jsx(c('CometMainRoutes.react'), {
//           contentXStyleProvider: function (a) {
//             a = a.isHidden
//             return [n.contentContainer, a && n.contentContainerHidden]
//           },
//         }),
//       })
//     : null
// }
