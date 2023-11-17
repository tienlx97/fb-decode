import { CometHovercardSettingsContext } from '@negiganaito/context'
import {
  CometKeyCommandContext,
  CometKeyCommandSettingsContext,
} from '@negiganaito/keyboards'
import React, { useContext } from 'react'

type WorkGalahadDisplayMenuProps = {
  source: 'PROFILE_MENU_DISPLAY_OPTIONS'
}

export function WorkGalahadDisplayMenu({
  source,
}: WorkGalahadDisplayMenuProps) {
  var e = r()
}

function r() {
  const {
    getModifiedKeyboardShortcutsPreference: b,
    setModifiedKeyboardShortcutsPreference: d,
  } = useContext(CometKeyCommandSettingsContext)

  const a = b()
  const f = s()

  return []
}

function s() {
  const {
    hovercardInteractionPreference: b,
    setHovercardInteractionPreference: d,
  } = useContext(CometHovercardSettingsContext)

  return []

  // return c('gkx')('4028')
  //   ? [
  //       k.jsx(
  //         c('CometSeparatorMenuItem.react'),
  //         {},
  //         'hovercard-settings-options-separator',
  //       ),
  //       k.jsxs(
  //         c('CometMenuItemRadioGroup.react'),
  //         {
  //           label: h._('Show link previews'),
  //           children: [
  //             k.jsx(
  //               c('CometMenuItemRadio.react'),
  //               {
  //                 isSelected: b === 2,
  //                 onClick: function () {
  //                   return d(2)
  //                 },
  //                 primaryText: h._('When hovering pointer over link'),
  //               },
  //               'enabled_on_hover',
  //             ),
  //             k.jsx(
  //               c('CometMenuItemRadio.react'),
  //               {
  //                 isSelected: b === 3,
  //                 onClick: function () {
  //                   return d(3)
  //                 },
  //                 primaryText: h._('After clicking link'),
  //               },
  //               'enabled_on_click',
  //             ),
  //             k.jsx(
  //               c('CometMenuItemRadio.react'),
  //               {
  //                 isSelected: b === 1,
  //                 onClick: function () {
  //                   return d(1)
  //                 },
  //                 primaryText: h._('Never'),
  //               },
  //               'disabled',
  //             ),
  //           ],
  //         },
  //         'hovercard-settings-options',
  //       ),
  //     ]
  //   : []
}
