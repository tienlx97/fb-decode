import { KnowledgeItem } from '@/config/knowledge'
import { usePipedriveRoute } from '@/context/pipedrive-route-context'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkKnowledgeNavItemWithStatusDot } from './work-knowledge-nav-item-with-status-dot'
import { WorkKnowledgeNavUnitStyles } from './work-knowledge-nav-unit-styles'
import { WorkKnowledgeTopicIconUnitContainer } from './work-knowledge-topic-icon-unit-container'

type WorkKnowledgeNavItemProps = {
  canShowCategoryTitleTooltip?: any
  collectionRef: KnowledgeItem
  hideStatusDot?: boolean
  indentLevel?: any
  onPress?: any
  onPressIn?: any
  primaryIndicator?: any
  secondaryIndicator?: any
  tertiaryIndicator?: any
  testid?: any
}

export function WorkKnowledgeNavItem({
  canShowCategoryTitleTooltip,
  collectionRef,
  hideStatusDot = false,
  indentLevel,
  onPress,
  onPressIn,
  primaryIndicator,
  secondaryIndicator,
  tertiaryIndicator,
  testid,
}: WorkKnowledgeNavItemProps) {
  const { view } = usePipedriveRoute()

  const selected = view === collectionRef.id

  //     g = c("useWorkKnowledgeBaseCollectionUrl")(a);
  const url = 'work/' + collectionRef.id

  return jsx(WorkKnowledgeNavItemWithStatusDot, {
    canShowCategoryTitleTooltip,
    collectionRef,
    hideStatusDot,
    indentLevel,
    onPress: (a: any) => onPress && onPress(a, selected),
    onPressIn: (a: any) => onPressIn && onPressIn(a, selected),
    primaryIndicator,
    secondaryIndicator,
    selected: selected,
    tertiaryIndicator,
    testid: void 0,
    url: selected || url == null ? void 0 : url,
    children: jsx(WorkKnowledgeTopicIconUnitContainer, {
      collectionRef,
      unitStyle: WorkKnowledgeNavUnitStyles.fromLevel(indentLevel),
    }),
  })
}
