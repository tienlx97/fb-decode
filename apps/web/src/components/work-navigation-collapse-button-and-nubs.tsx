import React, { memo } from 'react'
import { WorkNavigationCenteredChannelToggle } from './work-navigation-centered-channel-toggle'
import { WorkGalahadAppTabProfileItem } from './work-galahad-app-tab-profile-item'

export const WorkNavigationCollapseButtonAndNubs = memo(() => {
  return (
    <React.Fragment>
      {/* WorkNavigationCenteredChannelToggle */}
      <WorkNavigationCenteredChannelToggle />
      {/* GeminiNubs */}
      <WorkGalahadAppTabProfileItem />
    </React.Fragment>
  )
})

/*

__d("WorkNavigationCenteredChannelToggle.react", ["WorkGalahadUIAppsListItem.react", "cr:5458", "react"], (function(a, b, c, d, e, f, g) {
__d("ChannelGeminiToggle.react", ["fbt", "WorkGalahadColumnCollapseButton.react", "WorkGalahadNavUIState", "react"], (function(a, b, c, d, e, f, g, h) {
__d("WorkGalahadColumnCollapseButton.react", ["ix", "CometIcon.react", "CometPressable.react", "CometTooltip.react", "Locale", "WorkGalahadHoverHelper", "fbicon", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g, h) {

    */
