/* eslint-disable camelcase */
import { HeroInteractionContextPassthrough } from '@negiganaito/common'
import React, { ReactNode, createContext } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiUIChannelHideableArea } from './channel-gemini-ui-channel-hideable-area'
import { CometPlaceholder } from '@negiganaito/placeholder'
import { ChannelGeminiTabContext } from '@/context/channel-gemini-tab-context'

type ChannelGeminiEntryPointContainerProps = {
  hidden: boolean
  channelEntryPoint: ReactNode
  appTabID: string
}

const l = {
  show_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: !0,
}
const m = {
  show_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: !1,
}

export function ChannelGeminiEntryPointContainer({
  channelEntryPoint,
  hidden,
  appTabID,
}: ChannelGeminiEntryPointContainerProps) {
  const g = false

  return jsx(React.Fragment, {
    children: jsx(HeroInteractionContextPassthrough, {
      clear: false, // c('gkx')('2049386') && g,
      children: jsx(ChannelGeminiUIChannelHideableArea, {
        show: true, // !g,
        children: jsx(CometPlaceholder, {
          fallback: jsx(<></>, {
            appTabID,
          }),
          children: jsx(ChannelGeminiTabContext.Provider, {
            value: g ? m : l,
            children: jsx(channelEntryPoint, {}),
          }),
        }),
      }),
    }),
  })
}

/*


function o(a) {
        a = a.appTabID;
        if (a === "home")
            return i.jsxs(i.Fragment, {
                children: [i.jsx(c("ChannelGeminiUIChannelHeaderGlimmer.react"), {}), i.jsx(c("ChannelGeminiItemChromeList.react"), {
                    amount: 6,
                    initialIndex: 2,
                    type: "groups",
                    withHeader: !0
                }), i.jsx(c("ChannelGeminiItemChromeList.react"), {
                    amount: 6,
                    initialIndex: 8,
                    type: "people",
                    withHeader: !0
                })]
            });
        if (a === "notifications")
            return i.jsxs(i.Fragment, {
                children: [i.jsx(c("ChannelGeminiUIChannelHeaderGlimmer.react"), {
                    hasPivotActions: !0,
                    numberOfPivotActions: n ? 2 : 3
                }), i.jsx(c("ChannelGeminiItemChromeList.react"), {
                    amount: 12,
                    initialIndex: 3,
                    type: "notifications"
                })]
            });
        return a === "chats" ? i.jsxs(i.Fragment, {
            children: [i.jsx(c("ChannelGeminiUIChannelHeaderGlimmer.react"), {
                hasPivotActions: !0,
                hasSearchInput: !0,
                hasSecondaryAction: !0
            }), i.jsx(c("ChannelGeminiItemChromeList.react"), {
                amount: 12,
                initialIndex: 3,
                type: "chats"
            })]
        }) : i.jsxs(i.Fragment, {
            children: [i.jsx(c("ChannelGeminiUIChannelHeaderGlimmer.react"), {
                hasSecondaryAction: !0
            }), i.jsx(c("ChannelGeminiItemChromeList.react"), {
                amount: 12,
                initialIndex: 2,
                type: "groups",
                withHeader: !0
            })]
        })
    }

*/
