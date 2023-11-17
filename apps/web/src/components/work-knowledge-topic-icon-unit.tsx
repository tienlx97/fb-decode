import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkKnowledgeTopicIconUnitNonInteractive } from './work-knowledge-topic-icon-unit-non-interactive'
import { WorkKnowledgeTopicIconFromEnum } from './work-knowledge-topic-icon-from-enum'

type WorkKnowledgeTopicIconUnitProps = {
  defaultColor?: string
  hexcolor: string
  icon: any
  unitStyle: any
}

export function WorkKnowledgeTopicIconUnit({
  defaultColor = '#F7F8FA',
  hexcolor,
  icon,
  unitStyle,
}: WorkKnowledgeTopicIconUnitProps) {
  if (hexcolor) {
    defaultColor = '#' + hexcolor
  }

  return jsx(WorkKnowledgeTopicIconUnitNonInteractive, {
    color: defaultColor,
    unitStyle,
    children: jsx(WorkKnowledgeTopicIconFromEnum, {
      icon,
      unitStyle,
    }),
  })
}
