import { CometMenu } from '@negiganaito/react-components'
import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { GeminiUserSettingsMenuItemDisplayOptions } from './gemini-user-settings-menuItem-display-options'

export function GeminiUserSettingsMenu() {
  // fetch comp from server

  const settingArr = [
    // 'GeminiUserSettingsMenuItemProfile.react',
    // 'GeminiUserSettingsMenuItemStatus.react',
    // 'GeminiUserSettingsMenuItemDoNotDisturb.react',
    // 'GeminiUserSettingsMenuItemActivityLog.react',
    // 'GeminiUserSettingsMenuItemDivider.react',
    // jsx(GeminiUserSettingsMenuItemDisplayOptions, {}),
    jsx(
      'div',
      {
        children: 'asasdas',
      },
      'd-1',
    ),
    // 'GeminiUserSettingsMenuItemSettings.react',
    // 'GeminiUserSettingsMenuItemDivider.react',
    // 'GeminiUserSettingsMenuItemSwitchWorkplace.react',
    // 'GeminiUserSettingsMenuItemLogout.react',
  ]

  //
  return jsx(CometMenu, {
    label: 'Profile optiops',
    children: settingArr,
    truncate: true,
    withArrow: true,
  })
}

/*

__d("GeminiUserSettingsMenuItemDoNotDisturb.react", 
  ["WorkDoNotDisturbMenuItem.react", "react"], (function(a, b, c, d, e, f, g) {


__d("WorkDoNotDisturbMenuItem.react", ["fbt", "ix", 
  "CometMenuItem.react", "CometMenuItemCheckbox.react", 
  "CometMenuItemWithSubmenu.react", "CurrentUser", "JSResource", "RelayHooks", 
  "WorkChatAvailabilityStatusActions", "WorkDoNotDisturbSettingsTypedLogger",
   "WorkGalahadDropdownMenuHelper", "WorkUserAvailabilityStatusMutation", 
   "WorkUserAvailabilityStatusSource", "WorkUserDoNotDisturbSettingsMutation", 
   "WorkplaceDoNotDisturbUtils", "cr:1536127", "cr:549", "fbicon", "gkx", "react", 
   "useCometLazyDialog", "useWorkUserStatusState"], (function(a, b, c, d, e, f, g, h, i) {




__d("WorkGalahadDisplayMenu.react",
 ["fbt", "ix", 
 "ChannelGeminiProfileTabContainer.entrypoint", 
 "CometHovercardSettingsContext", 
 "CometKeyCommandSettingsContext", 
 "CometMenuItem.react", "CometMenuItemCheckbox.react", //
 "CometMenuItemRadio.react",  //
 "CometMenuItemRadioGroup.react", //
 "CometMenuItemWithSubmenu.react", //
 "CometSeparatorMenuItem.react", "JSResourceForInteraction", 
 "WorkGalahadDarkModeToggle.react", "WorkGalahadNavActions", 
 "XCometSettingsControllerRouteBuilder", "cr:1055", "fbicon", "gkx", "react",
  "useChannelGeminiEntryPoint", "useCometLazyDialog"], (function(a, b, c, d, e, f, g, h, i) {

*/
