import React from 'react'
import { WorkGalahadUIAppTabSelectorSVGIcon } from '../work-galahad-ui-app-tab-selector-svg-icon'

type WorkGalahadUIAppTabSelectorIconProps = {
  icon: string
  selected: boolean
}

export default function WorkGalahadUIAppTabSelectorIcon({
  icon,
  selected,
}: WorkGalahadUIAppTabSelectorIconProps) {
  return (
    <WorkGalahadUIAppTabSelectorSVGIcon selected={selected} iconName={icon} />
  )
}
