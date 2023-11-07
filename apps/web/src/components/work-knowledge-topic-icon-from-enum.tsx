import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { CometIcon } from '@negiganaito/react-components'
import { WorkKnowledgeIconMapping } from './work-knowledge-icon-mapping'

type WorkKnowledgeTopicIconFromEnumProps = {
  icon?: any
  unitStyle?: any
}

export function WorkKnowledgeTopicIconFromEnum({
  icon,
  unitStyle,
}: WorkKnowledgeTopicIconFromEnumProps) {
  return !icon
    ? null
    : jsx(CometIcon, {
        color: unitStyle.getIconColor(),
        icon:
          unitStyle.getIconSize() === '24'
            ? WorkKnowledgeIconMapping.getBigIconFromEnum(icon)
            : WorkKnowledgeIconMapping.getIconFromEnum(icon),
      })
}
