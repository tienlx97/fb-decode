/* eslint-disable camelcase */
import { WorkKnowledgeNavHeaderState } from '@/config/work-knowledge-nav-header-state'
import React, { useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiNavList } from './channel-gemini-nav-list'
import { WorkKnowledgeNavCollectionsHeader } from './work-knowledge-nav-collections-header'
import { CometIcon, fbicon } from '@negiganaito/react-components'
import { WorkKnowledgeCategoriesInlineOrderEditor } from './work-knowledge-categories-inline-order-editor'
import { WorkKnowledgeNavItem } from './work-knowledge-nav-item'

export function WorkKnowledgeStackedChannelPinnedCollections() {
  const [k, n] = useState(null)
  const [o, p] = useState(false)
  const [q, r] = useState(WorkKnowledgeNavHeaderState.ENABLED)
  // fetch `pinned_knowledge_collections`
  // "client:61553101316293:work_info:pinned_knowledge_collections"
  const pinned_knowledge_collections: any[] = []

  const onCancelClick = function () {
    r(WorkKnowledgeNavHeaderState.ENABLED)
    p(!1)
  }

  const onEditClick = function () {
    n(null)
    p(!0)
  }

  const onSaveClick = () => {}

  return jsx(ChannelGeminiNavList, {
    'aria-label': 'Your shortcuts',
    header: jsx(WorkKnowledgeNavCollectionsHeader, {
      // entrypoint: d("WorkKnowledgeReorderingLoggingUtils").ReorderingEntrypoint.Pinned_shortcuts,
      title: 'Your shortcuts',
      showEditButton: false,
      headerState: q,
      isEditing: false,
      manageButtonAriaLabel: 'Manage your shortcuts',
      onCancelClick: onCancelClick,
      onEditClick: onEditClick,
      onSaveClick: onSaveClick,
    }),
    children: o
      ? jsx(WorkKnowledgeCategoriesInlineOrderEditor, {
          items: pinned_knowledge_collections.map(function (
            collectionRef: any,
          ) {
            return [
              collectionRef.id,
              jsx(
                WorkKnowledgeNavItem,
                {
                  collectionRef: collectionRef,
                  indentLevel: 1,
                  secondaryIndicator: jsx(CometIcon, {
                    color: 'tertiary',
                    icon: fbicon(
                      {
                        sprited: 2,
                        spi: '/assets/workplace/x1TiwlXkRuu.png',
                        _spi: '/assets/workplace/x1TiwlXkRuu.png',
                        w: 16,
                        h: 16,
                        p: '0 -912px',
                        sz: 'auto',
                      },
                      16,
                    ),
                  }),
                },
                collectionRef.id,
              ),
            ]
          }),
          order: k,
          setOrder: n,
        })
      : g.map((collectionRef: any) => {
          return jsx(
            'WorkKnowledgePinnedCollectionNavItem',
            {
              collectionRef: collectionRef,
            },
            collectionRef.id,
          )
        }),
  })
}
