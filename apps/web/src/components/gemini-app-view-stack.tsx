import React, { useMemo } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { GeminiLayoutPage } from '@/features/layout'
import { makeStyles } from '@fluentui/react-components'
import { useStable } from '@metamon/hooks'
import { CometSearchKeyCommandWrapper } from '@metamon/keyboards'
import { CometPlaceholder } from '@metamon/placeholder'
import { CometContextualLayerAnchorRoot } from '@metamon/popover'
import { BaseDOMContainer, BasePortalTargetContext } from '@metamon/portal'
import executionEnvironment from '@metamon/utils/common/execution-environment'

import ChannelGeminiContainer from './channel-gemini-container'
import { GeminiAppsGlimmer } from './gemini-apps-glimmer'
import { WorkGalahadUIAppsRoot } from './work-galahad-ui-apps-root'

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

export default function GeminiAppViewStack() {
  const classes = useStyles()

  const basePortalTargetContextValue = useStable(function () {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  const MainNavContentComp = useMemo(function () {
    return jsx(WorkGalahadUIAppsRoot, {
      children: jsx(CometPlaceholder, {
        fallback: jsx(GeminiAppsGlimmer, {}),
        // children: jsx(WorkNavigation, {}),
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
            children: jsx(GeminiLayoutPage, {
              channelContent: ChannelContentComp,
              mainNavContent: MainNavContentComp,
              navContentAndChannelContainer: NavContentAndChannelContainer,
              children: jsx(CometSearchKeyCommandWrapper, {
                className: classes.contentContainer,
                // children: jsx(o, {
                //   routerState: a,
                // }),
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

const m = undefined

function NavContentAndChannelContainer(props: any) {
  const { children } = props
  return jsx(React.Fragment, {
    children: !m
      ? children
      : jsx(m, {
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
