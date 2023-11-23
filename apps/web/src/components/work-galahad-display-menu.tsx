import { CometHovercardSettingsContext } from '@negiganaito/context'
import {
  CometKeyShortcutDialog,
  CometMenuItem,
  CometMenuItemCheckbox,
  CometMenuItemWithSubmenu,
  CometSeparatorMenuItem,
  fbicon,
  useCometLazyDialog,
} from '@negiganaito/index'
import {
  CometKeyCommandContext,
  CometKeyCommandSettingsContext,
} from '@negiganaito/keyboards'
import React, { useCallback, useContext } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type WorkGalahadDisplayMenuProps = {
  source: 'PROFILE_MENU_DISPLAY_OPTIONS'
}

export function WorkGalahadDisplayMenu({
  source,
}: WorkGalahadDisplayMenuProps) {
  const e = r()
  const f = s()

  return jsx(CometMenuItemWithSubmenu, {
    icon: fbicon(
      {
        sprited: 2,
        spi: '/assets/workplace/rL4DunT40wl.png',
        _spi: '/assets/workplace/rL4DunT40wl.png',
        w: 20,
        h: 20,
        p: '0 -172px',
        sz: 'auto',
        loggingID: '868372',
      },
      20,
    ),
    primaryText: 'Display & accessibility',
    submenu: {
      items: [].concat(
        [
          // @ts-ignore
          jsx(
            'WorkGalahadRiverKnightToggle',
            {
              source,
            },
            'river-knight-toggle',
          ),
        ],
        [jsx('WorkGalahadDarkModeToggle', {}, 'dark-mode-item')],
        f,
        [
          jsx(CometSeparatorMenuItem, {}, 'display-menu-separator'),
          // jsx(o, {}, 'video-settings'),
          jsx(
            CometMenuItemWithSubmenu,
            {
              icon: fbicon(
                {
                  sprited: 2,
                  spi: '/assets/workplace/uuJpGwk8S8n.png',
                  _spi: '/assets/workplace/uuJpGwk8S8n.png',
                  w: 20,
                  h: 20,
                  p: '0 0',
                  sz: 'auto',
                  loggingID: '577847',
                },
                20,
              ),
              primaryText: 'Keyboard',
              submenu: {
                items: [
                  jsx(KeyboardSubmenuSeeAll, {}, 'keyboard-submenu-see-all'),
                  jsx(
                    KeyboardSubmenuToggleSingleCharacterShortcuts,
                    {},
                    'keyboard-submenu-toggle-single-character-shortcuts',
                  ),
                ].concat(e),
                truncate: true,
              },
            },
            'keyboard-submenu',
          ),
        ],
      ),
    },
  })
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

function KeyboardSubmenuToggleSingleCharacterShortcuts() {
  const { getAreSingleKeysDisabled, setAreSingleKeysDisabled } = useContext(
    CometKeyCommandSettingsContext,
  )

  const onClickCB = useCallback(() => {
    const isKeyDisabled = getAreSingleKeysDisabled() || false
    setAreSingleKeysDisabled(!isKeyDisabled)
  }, [getAreSingleKeysDisabled, setAreSingleKeysDisabled])

  return jsx(CometMenuItemCheckbox, {
    icon: fbicon(
      {
        sprited: 2,
        spi: '/assets/workplace/uuJpGwk8S8n.png',
        _spi: '/assets/workplace/uuJpGwk8S8n.png',
        w: 20,
        h: 20,
        p: '0 -21px',
        sz: 'auto',
        loggingID: '658042',
      },
      20,
    ),
    onClick: onClickCB,
    isSelected: getAreSingleKeysDisabled() === !1,
    primaryText: 'Single-character shortcuts',
    secondaryText: 'Use single-character shortcuts to perform common actions',
  })
}

// function o() {
//   var a = c('XCometSettingsControllerRouteBuilder').buildURL({
//       tab: 'videos',
//     }),
//     b = c('useChannelGeminiEntryPoint')(
//       c('ChannelGeminiProfileTabContainer.entrypoint'),
//       'profile',
//     ),
//     e = b[0]
//   b = function () {
//     e(), d('WorkGalahadNavActions').selectAppTabID('profile')
//   }
//   return k.jsx(c('CometMenuItem.react'), {
//     icon: d('fbicon')._(i('507228'), 20),
//     href: a,
//     primaryText: h._('Video settings'),
//     secondaryText: h._('Captions, auto-play and more'),
//     onClick: b,
//   })
// }

function KeyboardSubmenuSeeAll() {
  var [openLazyDialog, _] = useCometLazyDialog(CometKeyShortcutDialog)
  const { isViewerShowing, setViewerInfo } = useContext(
    CometKeyCommandSettingsContext,
  )
  const onClickCB = useCallback(() => {
    isViewerShowing ||
      (setViewerInfo(!0, 'see_all'), openLazyDialog({}, function () {}))
  }, [isViewerShowing, setViewerInfo, openLazyDialog])
  return jsx(CometMenuItem, {
    icon: fbicon(
      {
        sprited: 2,
        spi: '/assets/workplace/uuJpGwk8S8n.png',
        _spi: '/assets/workplace/uuJpGwk8S8n.png',
        w: 20,
        h: 20,
        p: '0 0',
        sz: 'auto',
        loggingID: '577847',
      },
      20,
    ),
    primaryText: 'See all keyboard shortcuts',
    onClick: onClickCB,
  })
}
