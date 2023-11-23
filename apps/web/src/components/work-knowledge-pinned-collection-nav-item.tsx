import { KnowledgeItem } from '@/config/knowledge'
import {
  pushStackedChannel,
  useWorkGalahadNavStore,
} from '@/context/work-galahad-nav-store'
import { isClickWithModifierKey } from '@negiganaito/react-components'
import React, { useState } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { ChannelGeminiItemChromeList } from './channel-gemini-item-chrome-list'
import { WorkKnowledgesStackedChannel } from './work-knowledges-stacked-channel'
import { WorkKnowledgeNavItem } from './work-knowledge-nav-item'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

type WorkKnowledgePinnedCollectionNavItemProps = {
  collectionRef?: KnowledgeItem
}

export function WorkKnowledgePinnedCollectionNavItem({
  collectionRef,
}: WorkKnowledgePinnedCollectionNavItemProps) {
  const [i, a] = useState(false)

  const { dispatch } = useWorkGalahadNavStore()

  if (!collectionRef?.id) {
    return null
  }

  const e = (a: any) => {
    collectionRef.isKnowledgeCategory &&
      !isClickWithModifierKey(a) &&
      dispatch(
        pushStackedChannel({
          type: 'KNOWLEDGES',
          title: 'Knowledge Library',
          props: {},
          placeholder: jsx(ChannelGeminiItemChromeList, {
            amount: 10,
            type: 'groups',
          }),
          extraData: undefined,
          entrypointComponent: WorkKnowledgesStackedChannel,
        }),
      )
    // d('WorkGalahadNavActions').pushStackedChannel(
    //   c('getGeminiKnowledgeRootCollectionStackedChannelData')(g, ''),
    // )
  }

  return jsx(WorkKnowledgeNavItem, {
    canShowCategoryTitleTooltip: !i,
    // collectionRef: f,
    indentLevel: 1,
    onPress: e,
    onPressIn: emptyFunction,
    tertiaryIndicator: jsx('WorkKnowledgePinCollectionCircleButton.react', {
      // collectionRef: f,
      onTooltipVisibilityChange: a,
      source: 'shortcuts',
    }),
    testid: void 0,
  })
}
