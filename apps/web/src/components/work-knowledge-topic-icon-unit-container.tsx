import { KnowledgeItem } from '@/config/knowledge'
import { makeStyles } from '@griffel/react'
import React from 'react'
import { WorkKnowledgeNavUnitStyles } from './work-knowledge-nav-unit-styles'
import { WorkKnowledgeTypeDefs } from './work-knowledge-type-defs'
import { WorkKnowledgeUtils } from './work-knowledge-utils'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkKnowledgeTopicIconUnit } from './work-knowledge-topic-icon-unit'

const useStyles = makeStyles({
  unpublished: {
    opacity: 0.5,
  },
})

type WorkKnowledgeTopicIconUnitContainerProps = {
  collectionRef?: KnowledgeItem
  unitStyle: any
  grayedOut?: any
}

export function WorkKnowledgeTopicIconUnitContainer({
  collectionRef,
  unitStyle,
  grayedOut,
}: WorkKnowledgeTopicIconUnitContainerProps) {
  const classes = useStyles()

  const _unitStyle =
    unitStyle ??
    new WorkKnowledgeNavUnitStyles(WorkKnowledgeTypeDefs.UnitStyle.M_SOLID)

  const _visualSetting = !collectionRef
    ? undefined
    : collectionRef.visualSetting
  const icon =
    _visualSetting != null
      ? _visualSetting == null
        ? void 0
        : _visualSetting.icon
      : WorkKnowledgeUtils.DEFAULT_ICON
  const _hexcolor = (!_visualSetting ? undefined : _visualSetting.hexcolor)
    ? _visualSetting?.hexcolor
    : WorkKnowledgeUtils.DEFAULT_ICON_BACKGROUND_COLOR
  const allowsIcon = _unitStyle.allowsIcon()

  return jsx('div', {
    className: Boolean(grayedOut) && classes.unpublished,
    children: jsx(WorkKnowledgeTopicIconUnit, {
      hexcolor: _hexcolor,
      icon: allowsIcon ? icon : void 0,
      unitStyle: _unitStyle,
    }),
  })
}
