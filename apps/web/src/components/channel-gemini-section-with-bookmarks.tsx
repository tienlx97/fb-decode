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
