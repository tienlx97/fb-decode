import React, { useState } from 'react'
import { WorkKnowledgeNavItemContent } from './work-knowledge-nav-item-content'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { KnowledgeItem } from '@/config/knowledge'

type WorkKnowledgeNavItemWithStatusDotProps = {
  canShowCategoryTitleTooltip?: any
  children?: any
  collectionRef?: KnowledgeItem
  hideStatusDot?: boolean
  indentLevel?: number
  onPress?: any
  onPressIn?: any
  primaryIndicator?: any
  secondaryIndicator?: any
  selected?: any
  statusDotXstyle?: any
  strikeThrough?: any
  tertiaryIndicator?: any
  testid?: string
  url?: string
}

export function WorkKnowledgeNavItemWithStatusDot({
  canShowCategoryTitleTooltip,
  children,
  collectionRef,
  hideStatusDot = false,
  indentLevel,
  onPress,
  onPressIn,
  primaryIndicator,
  secondaryIndicator,
  selected,
  statusDotXstyle,
  strikeThrough,
  tertiaryIndicator,
  testid,
  url,
}: WorkKnowledgeNavItemWithStatusDotProps) {
  const [isTooltipVisible, setTooltipVisibility] = useState(true)

  const onTooltipVisibilityChange = (val: boolean) => {
    return setTooltipVisibility(!val)
  }

  const isEditableAndNotHidden =
    (!collectionRef ? undefined : collectionRef.canEdit) &&
    collectionRef &&
    !hideStatusDot

  const tertiaryIndicatorWithDot = jsxs(React.Fragment, {
    children: [
      tertiaryIndicator,
      isEditableAndNotHidden &&
        jsx('WorkKnowledgeSmartStatusDot', {
          collectionRef,
          onTooltipVisibilityChange: onTooltipVisibilityChange,
          className: statusDotXstyle,
        }),
    ],
  })
  return jsx(WorkKnowledgeNavItemContent, {
    canShowCategoryTitleTooltip:
      isTooltipVisible && canShowCategoryTitleTooltip !== false,
    children,
    collectionStatus: !collectionRef ? undefined : collectionRef.status,
    // eslint-disable-next-line camelcase
    collection_title: !collectionRef
      ? undefined
      : collectionRef.collectiontitle,
    indentLevel,
    onPress,
    onPressIn,
    primaryIndicator,
    secondaryIndicator,
    selected,
    strikeThrough,
    tertiaryIndicator: tertiaryIndicatorWithDot,
    testid: undefined,
    url,
  })
}
