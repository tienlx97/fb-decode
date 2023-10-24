/* eslint-disable camelcase */
import React, { useState } from 'react'

// @ts-ignore
import { jsx } from 'react/'
import { ChannelGeminiNavList } from './channel-gemini-nav-list'
import ChannelGeminiBookmarkContainer from './channel-gemini-bookmark-container'
import { ChannelGeminiBookmarksToggleItem } from './channel-gemini-bookmarks-toggle-item'
import { useCometRouterState } from '@/context/comet-router-state-context'

type ChannelGeminiSectionWithBookmarksProps = {
  bookmarks?: any[]
  default_bookmark_count?: number
  subtitle?: any
  title?: any
}

const bookmarks = [
  {
    entity_key: 'feed',
    icon: {
      uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/4mhXitnfwjM.png',
    },
    href: '/home',
    title: 'Posts',
    subtitle: null,
  },
  {
    entity_key: null,
    icon: {
      uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/8AIkmY8ASX6.png',
    },
    href: '/home/important-news',
    title: 'Key updates',
    subtitle: null,
  },
  {
    entity_key: 'knowledge',
    icon: {
      uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/6EB2VQOON-3.png',
    },
    href: '/knowledge',
    title: 'Knowledge Library',
    subtitle: null,
  },
  {
    entity_key: 'directory',
    icon: {
      uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/YLO0spooJdL.png',
    },
    href: '/home/orgsearch',
    title: 'Directory',
    subtitle: null,
  },
  {
    entity_key: 'org',
    icon: {
      uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/2XSFu6dqGH8.png',
    },
    href: '/home/org',
    title: 'Org Chart',
    subtitle: null,
  },
]

export function ChannelGeminiSectionWithBookmarks(
  props: ChannelGeminiSectionWithBookmarksProps,
) {
  // fetch bookmarks base on app id

  const [isExpanded, setExpanded] = useState(false)

  const { entityKeyConfig } = useCometRouterState()

  if (!props) {
    return null
  }

  const { bookmarks = [], default_bookmark_count, subtitle, title } = props

  const header = title
    ? jsx('WorkGalahadNavTextHeader', {
        subtitle: subtitle ?? undefined,
        title,
      })
    : undefined

  if (!default_bookmark_count || bookmarks.length <= 3) {
    return jsx(ChannelGeminiNavList, {
      header,
      children: bookmarks.map((bookmark, index) => {
        return jsx(
          ChannelGeminiBookmarkContainer,
          {
            bookmark,
          },
          'bookmark' + index,
        )
      }),
    })
  }

  const displayBookmarks: any[] = []
  const hiddenBookmarks: any[] = []

  bookmarks.forEach((bookmark, index) => {
    let isSelect = false

    if (
      bookmark.entity_key &&
      entityKeyConfig &&
      entityKeyConfig.entity_key === bookmark.entity_key
    ) {
      isSelect = true
    }

    const needDisplay =
      index < default_bookmark_count || (isSelect && !isExpanded)

    // let f = bookmark.entity_key ?? undefined
    // f = bookmark.entity_key ? entityKeyConfig?.entity_key === f : !1
    // f = index < default_bookmark_count || (f && !isExpanded)

    if (needDisplay) {
      displayBookmarks.push(
        jsx(
          ChannelGeminiBookmarkContainer,
          {
            bookmark: bookmark,
          },
          'bookmark' + index,
        ),
      )
    } else {
      hiddenBookmarks.push(
        jsx(
          ChannelGeminiBookmarkContainer,
          {
            bookmark: bookmark,
          },
          'bookmark' + index,
        ),
      )
    }

    // ;(f ? displayBookmarks : hiddenBookmarks).push(
    //   jsx(
    //     ChannelGeminiBookmarkContainer,
    //     {
    //       bookmark: bookmark,
    //     },
    //     'bookmark' + index,
    //   ),
    // )
  })

  return displayBookmarks.length === 0
    ? null
    : jsx(ChannelGeminiNavList, {
        'data-testid': void 0,
        header,
        children: [].concat(
          // @ts-ignore
          displayBookmarks,
          [
            hiddenBookmarks.length > 0 &&
              jsx(
                ChannelGeminiBookmarksToggleItem,
                {
                  expanded: isExpanded,
                  toggle: () => setExpanded(val => !val),
                },
                'bookmark-toggle',
              ),
          ],
          // @ts-ignore
          isExpanded ? hiddenBookmarks : [],
        ),
      })
}
