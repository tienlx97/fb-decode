import {
  WorkCometIconKnowledgeLibrary,
  WorkCometIconKnowledgeLibraryFilled,
  WorkCometIconNotifications,
  WorkCometIconNotificationsFilled,
  WorkCometIconWorkplace,
} from '@negiganaito/icons'
import React from 'react'

type WorkGalahadUIAppTabSelectorSVGIconProps = {
  iconName: string
  selected: boolean
}

const defaultSize = 32

export default function WorkGalahadUIAppTabSelectorSVGIcon({
  iconName,
  selected,
}: WorkGalahadUIAppTabSelectorSVGIconProps) {
  const color = selected ? 'active-tab' : 'inactive-tab'

  switch (iconName) {
    case 'HOME':
      return <WorkCometIconWorkplace size={defaultSize} color={color} />
    case 'NOTIFICATIONS':
      return selected ? (
        <WorkCometIconNotificationsFilled size={defaultSize} color={color} />
      ) : (
        <WorkCometIconNotifications size={defaultSize} color={color} />
      )
    case 'KNOWLEDGE_LIBRARY':
      return selected ? (
        <WorkCometIconKnowledgeLibraryFilled size={defaultSize} color={color} />
      ) : (
        <WorkCometIconKnowledgeLibrary size={defaultSize} color={color} />
      )
    default:
      return <></>
  }
}
