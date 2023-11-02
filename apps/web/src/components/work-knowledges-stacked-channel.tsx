'use client'

import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { ChannelGeminiUIChannelRoot } from './channel-gemini-ui-channel-root'
import { ChannelGeminiNavList } from './channel-gemini-nav-list'
import {
  // CometColumn,
  // CometPlaceholder,
  // CometRow,
  // CometRowItem,
  CometSkittleIcon,
  fbiconWithoutMemorize,
} from '@negiganaito/react-components'
import dynamic from 'next/dynamic'

const WorkGalahadUIChannelItem = dynamic(
  // @ts-ignore
  () =>
    import('./work-galahad-ui-channel-item').then(
      r => r.WorkGalahadUIChannelItem,
    ),
  { ssr: false },
)

// import { WorkGalahadUIChannelItem } from './work-galahad-ui-channel-item'
import { usePipedriveRoute } from '@/context/pipedrive-route-context'
import { useRouter } from 'next/navigation'
// import { ChannelGeminiItemChromeList } from './channel-gemini-item-chrome-list'

export function WorkKnowledgesStackedChannel() {
  const { subMenu, view } = usePipedriveRoute()

  return jsxs(ChannelGeminiUIChannelRoot, {
    'data-testid': void 0,
    title: 'Knowledge Library',
    children: [
      jsxs(ChannelGeminiNavList, {
        isFocusTable: false,
        children: [
          jsx(Home, {
            icon: subMenu?.children[0].icon?.fbicon,
            href: subMenu?.children[0].path,
            selected: view === subMenu?.children[0].key,
          }),
          jsx(Category, {
            icon: subMenu?.children[1].icon?.fbicon,
            href: subMenu?.children[1].path,
            selected: view === subMenu?.children[1].key,
          }),
          // can manage knowledge
        ],
      }),
      // jsxs(CometColumn, {
      //   paddingTop: 20,
      //   spacing: 20,
      //   children: [
      //     jsx(CometRow, {
      //       align: 'start',
      //       paddingHorizontal: 0,
      //       children: jsx(CometPlaceholder, {
      //         fallback: jsx(ChannelGeminiItemChromeList, {
      //           amount: 3,
      //           type: 'groups',
      //           withHeader: !0,
      //         }),
      //         children: jsx('WorkKnowledgeStackedChannelPinnedCollections', {
      //           // userRef: a == null ? void 0 : a.actor,
      //         }),
      //       }),
      //     }),
      //     jsx(CometRow, {
      //       align: 'start',
      //       paddingHorizontal: 0,
      //       children: jsx(CometRowItem, {
      //         expanding: !0,
      //         role: 'grid',
      //         children: jsx(CometPlaceholder, {
      //           fallback: jsx(ChannelGeminiItemChromeList, {
      //             amount: 3,
      //             type: 'groups',
      //             withHeader: !0,
      //           }),
      //           children: jsx(
      //             'WorkKnowledgesStackedChannelNavigationCategories',
      //             {
      //               // companyId: h.id,
      //               // companyRef: h,
      //             },
      //           ),
      //         }),
      //       }),
      //     }),
      //   ],
      // }),
    ],
  })
}

type Props = {
  icon?: any
  href: string
  selected?: boolean
}

function Home({ icon, href, selected }: Props) {
  // var a = d('WorkGalahadEntityKey').forKnowledge()
  // a = d('WorkGalahadEntityKeyMatcher').useMatch(a, 'key')
  // var b = d('WorkKnowledgeUrls').useRedirectToKnowledge()

  const router = useRouter()

  return jsx(WorkGalahadUIChannelItem, {
    addOnPrimary: jsx(CometSkittleIcon, {
      color: selected ? 'blue' : 'gray',
      icon: fbiconWithoutMemorize(icon, 20),
      size: 36,
    }),
    headline: 'Home', // h._('Home'),
    onPress: () => {
      router.push(href)
    },
    selected,
    testid: void 0,
  })
}

function Category({ icon, href, selected }: Props) {
  console.log({ icon })

  return jsx(WorkGalahadUIChannelItem, {
    addOnPrimary: jsx(CometSkittleIcon, {
      color: selected ? 'blue' : 'gray',
      icon: fbiconWithoutMemorize(icon, 20),
      size: 36,
    }),
    headline: 'Categories', // h._('Categories'),
    linkProps: {
      url: href,
    },
    selected: selected,
    testid: void 0,
  })
}
