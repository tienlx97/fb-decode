/* eslint-disable camelcase */
import React, { useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiNavList } from './channel-gemini-nav-list'
import ChannelGeminiBookmarkContainer from './channel-gemini-bookmark-container'
import { ChannelGeminiBookmarksToggleItem } from './channel-gemini-bookmarks-toggle-item'
// import { useCometRouterState } from '@/context/comet-router-state-context'
import { SubMenu } from '@/config/ui-configuration'
import WorkGalahadNavTextHeader from './work-galahad-nav-text-header'

type ChannelGeminiSectionWithBookmarksProps = {
  bookmarks?: SubMenu[]
  default_bookmark_count?: number
  subtitle?: any
  title?: any
  entity_key?: string
  selectedKey: string
}

export function ChannelGeminiSectionWithBookmarks(
  props: ChannelGeminiSectionWithBookmarksProps,
) {
  // fetch bookmarks base on app id

  const [isExpanded, setExpanded] = useState(false)

  // const { entityKeyConfig } = useCometRouterState()

  if (!props) {
    return null
  }

  const { bookmarks = [], default_bookmark_count, subtitle, title } = props

  const header = title
    ? jsx(WorkGalahadNavTextHeader, {
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

  // not a good way, but easy
  bookmarks.forEach((bookmark, index) => {
    // const
    const needDisplay =
      index < default_bookmark_count ||
      (bookmark.key === props.selectedKey && !isExpanded)

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
  })

  // bookmarks.forEach((bookmark, index) => {
  //   let isSelect = false

  //   if (bookmark.key && props.entity_key && props.entity_key === bookmark.key) {
  //     isSelect = true
  //   }

  //   const needDisplay =
  //     index < default_bookmark_count || (isSelect && !isExpanded)

  //   // let f = bookmark.entity_key ?? undefined
  //   // f = bookmark.entity_key ? entityKeyConfig?.entity_key === f : !1
  //   // f = index < default_bookmark_count || (f && !isExpanded)

  //   if (needDisplay) {
  //     displayBookmarks.push(
  //       jsx(
  //         ChannelGeminiBookmarkContainer,
  //         {
  //           bookmark: bookmark,
  //         },
  //         'bookmark' + index,
  //       ),
  //     )
  //   } else {
  //     hiddenBookmarks.push(
  //       jsx(
  //         ChannelGeminiBookmarkContainer,
  //         {
  //           bookmark: bookmark,
  //         },
  //         'bookmark' + index,
  //       ),
  //     )
  //   }

  //   // ;(f ? displayBookmarks : hiddenBookmarks).push(
  //   //   jsx(
  //   //     ChannelGeminiBookmarkContainer,
  //   //     {
  //   //       bookmark: bookmark,
  //   //     },
  //   //     'bookmark' + index,
  //   //   ),
  //   // )
  // })

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
