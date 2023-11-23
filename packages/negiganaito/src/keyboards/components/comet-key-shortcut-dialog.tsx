import { makeStyles, shorthands } from '@griffel/react'
import React, { useCallback, useContext, useState } from 'react'
import { createKeyCommand, isSingleCharKey } from '../util'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import {
  BaseHeadingContextWrapper,
  CometListCellText,
  TetraText,
} from '@negiganaito/text'
import { CometKeyCommandSettingsContext } from '../context'
import { CometCardedDialogLegacy } from '@negiganaito/dialog'
import { CometRow, CometRowItem } from '@negiganaito/common'
import { CometSwitch } from '@negiganaito/switch'
import { fbicon } from '@negiganaito/image'
import { CometListCell } from '@negiganaito/cell'
import { TetraCircleButton } from '@negiganaito/button'
import { KeyInfoList } from './key-info-list'

const globalKeyboards: any = {
  global: {
    label: 'Global',
    shortcuts: {
      toggleNub: {
        command: {
          key: '?',
          shift: true,
        },
        description: 'Show/hide shortcuts',
      },
      toggleNubFunctionKey: {
        command: {
          key: 'f1',
        },
        description: 'Show/hide shortcuts',
      },
      contextualSearch: {
        command: {
          key: 'k',
          command: true,
        },
        description: 'Contextual search',
      },
      navigationAssistant: {
        isHiddenCommand: true,
        command: {
          key: '0',
          alt: true,
        },
        description: 'Open navigation assistant',
      },
    },
  },
  chats: {
    label: 'Chats',
    shortcuts: {
      nextChannelItem: {
        command: {
          key: 'arrowdown',
          alt: true,
        },
        description: 'Select next chat',
        order: 1,
        triggerFromInputs: true,
      },
      previousChannelItem: {
        command: {
          key: 'arrowup',
          alt: true,
        },
        description: 'Select previous chat',
        order: 2,
        triggerFromInputs: true,
      },
    },
  },
  notifications: {
    label: 'Notifications',
    shortcuts: {
      nextChannelItem: {
        command: {
          key: 'arrowdown',
          alt: true,
        },
        description: 'Select next notification',
        triggerFromInputs: true,
      },
      previousChannelItem: {
        command: {
          key: 'arrowup',
          alt: true,
        },
        description: 'Select previous notification',
        triggerFromInputs: true,
      },
    },
  },
  newsfeed: {
    label: 'News Feed',
    shortcuts: {
      commentStory: {
        command: {
          key: 'c',
        },
        description: 'Leave comment',
      },
      likeStory: {
        command: {
          key: 'l',
        },
        description: 'Like or unlike post',
      },
      newPost: {
        command: {
          key: 'p',
        },
        description: 'Create new post',
      },
      openAttachment: {
        command: {
          key: 'o',
        },
        description: 'Open attachment of post',
        shouldStopPropagation: false,
      },
      scrollNext: {
        command: {
          key: 'j',
        },
        description: 'Next post',
      },
      scrollPrevious: {
        command: {
          key: 'k',
        },
        description: 'Previous post',
      },
      seeMore: {
        command: {
          key: 'enter',
        },
        description: 'See more',
      },
      shareStory: {
        command: {
          key: 's',
        },
        description: 'Share post',
      },
    },
  },
  photoViewer: {
    label: 'Photo Albums',
    shortcuts: {
      fullscreen: {
        command: {
          key: 'f',
        },
        description: 'Enter or exit fullscreen',
      },
      like: {
        command: {
          key: 'l',
        },
        description: 'Like photo',
      },
      viewNext: {
        command: {
          key: 'k',
        },
        description: 'Next photo',
      },
      viewPrevious: {
        command: {
          key: 'j',
        },
        description: 'Previous photo',
      },
    },
  },
}

const useStyles = makeStyles({
  commandList: {
    display: 'flex',
    flexGrow: '1',
    flexWrap: 'wrap',
    fontSize: '.9375rem',
    fontWeight: '500',
    paddingTop: '16px',
    paddingRight: '0',
    paddingBottom: '16px',
    paddingLeft: '0',
  },
  divWrapper: {
    '@media only screen and (max-width: 970px)': {
      maxWidth: 'unset',
      paddingRight: '32px',
      width: '100%',
    },
    // '@media only screen and (max-width: 970px)_maxWidth': 'xvob6b',
    // '@media only screen and (max-width: 970px)_paddingEnd': 'x1s0knhj',
    // '@media only screen and (max-width: 970px)_paddingLeft': null,
    // '@media only screen and (max-width: 970px)_paddingRight': null,
    // '@media only screen and (max-width: 970px)_width': 'x1noequ8',
  },
  footer: {
    ...shorthands.borderTop('1px', 'solid', 'var(--divider)'),
    paddingBottom: '16px',
  },
  footerRow: {
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  footerRowItem: {
    '@media (max-width: 960px)': {
      width: '100%',
    },
  },
  pinnedButton: {
    maxWidth: '380px',
  },
  sectionWrapper: {
    maxWidth: '350px',
    minWidth: '280px',
    paddingRight: '16px',
    paddingLeft: '16px',
    '@media only screen and (max-width: 970px)': {
      maxWidth: 'unset',
      width: '100%',
    },
  },
  settingInfo: {
    '@media (max-width: 960px)': {
      maxWidth: '100%',
    },
  },
  shortcutSetting: {
    maxWidth: '320px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '16px',
    paddingRight: '0',
    paddingBottom: '16px',
    paddingLeft: '0',
  },

  dummy1: {
    // x1dc814f x1u2d2a2 x1pi30zi x1swvt13 xvob6b x1noequ8
    maxWidth: '350px',
    minWidth: '280px',
    paddingRight: '16px',
    paddingLeft: '16px',
    '@media only screen and (max-width: 970px)': {
      maxWidth: 'unset',
      width: '100%',
    },
  },

  dummy2: {
    // x78zum5 x1iyjqo2 x1a02dak x6prxxf xk50ysn xyamay9 x4uap5 x1l90r2v xkhd6sd
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    fontSize: '.9375rem',
    fontWeight: '500',
    paddingTop: '16px',
    paddingRight: 0,
    paddingBottom: '16px',
    paddingLeft: 0,
  },

  dummy3: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '16px',
    paddingRight: 0,
    paddingBottom: '16px',
    paddingLeft: 0,
  },

  dummy4: {
    // xihhdvq
    maxWidth: '320px',
    '@media (max-width: 960px)': {
      maxWidth: '100%',
    },
  },

  dummy5: {
    // x1n2xptk x1l90r2v
    ...shorthands.borderTop('1px', 'solid', 'var(--divider)'),
    paddingBottom: '16px',
  },

  dummy6: {
    // xihhdvq x1dt7z5j
    maxWidth: '380px',
    '@media (max-width: 960px)': {
      maxWidth: '100%',
    },
  },

  dummy7: {
    // xvob6b x1s0knhj x1noequ8
    '@media only screen and (max-width: 970px)': {
      maxWidth: 'unset',
      paddingRight: '32px',
      width: '100%',
    },
  },
})
// q = c("gkx")("1820857");
const dynamic1820857 = true

type RProps = {
  areSingleKeysDisabled?: boolean
  getCustomKeyCombination?: any
  groupID?: string
  keyCommandSection?: any
}

function r({
  areSingleKeysDisabled,
  getCustomKeyCombination,
  groupID,
  keyCommandSection,
}: RProps) {
  const classes = useStyles()

  // fetch global key board
  const commandsMap1 = new Map()
  const commandsMap2 = new Map()

  Object.keys(keyCommandSection.shortcuts).forEach((shortcutItem: any) => {
    const shortcutItemValue = keyCommandSection.shortcuts[shortcutItem]
    const keyCommand = createKeyCommand(shortcutItemValue.command)
    const customKeyCombination = getCustomKeyCombination(groupID, shortcutItem)
    const isSingleChar = isSingleCharKey(
      createKeyCommand(customKeyCombination) || keyCommand,
    )

    const isEmptyKey =
      (!customKeyCombination ? void 0 : customKeyCombination.key) === ''

    areSingleKeysDisabled === true && (isSingleChar || isEmptyKey)
      ? commandsMap2.set(keyCommand, [
          Object.assign({}, shortcutItemValue, {
            commandID: shortcutItem,
            groupID,
          }),
        ])
      : commandsMap1.set(keyCommand, [
          Object.assign({}, shortcutItemValue, {
            commandID: shortcutItem,
            groupID,
          }),
        ])
  })

  return jsxs('div', {
    className: classes.dummy1,
    children: [
      jsx(TetraText, {
        isSemanticHeading: true,
        type: 'headlineEmphasized3',
        children: keyCommandSection.label,
      }),
      jsx('div', {
        className: classes.dummy2, // 'x78zum5 x1iyjqo2 x1a02dak x6prxxf xk50ysn xyamay9 x4uap5 x1l90r2v xkhd6sd',
        children: jsx(KeyInfoList, {
          commands: commandsMap1,
          editable: false, //c('gkx')('6950'),
          isFullTable: true,
        }),
      }),
      areSingleKeysDisabled && commandsMap2.size > 0
        ? jsxs(BaseHeadingContextWrapper, {
            children: [
              jsx(TetraText, {
                color: 'primary',
                isSemanticHeading: !0,
                type: 'headlineEmphasized4',
                children: 'Disabled',
              }),
              jsx('div', {
                className: classes.dummy2,
                // 'x78zum5 x1iyjqo2 x1a02dak x6prxxf xk50ysn xyamay9 x4uap5 x1l90r2v xkhd6sd',
                children: jsx(KeyInfoList, {
                  commands: commandsMap2,
                  disabled: true,
                  isFullTable: true,
                }),
              }),
            ],
          })
        : null,
    ],
  })
}

type CometKeyShortcutDialogProps = {
  onClose?: any
  onHide?: any
}

export function CometKeyShortcutDialog({
  onClose,
  onHide,
}: CometKeyShortcutDialogProps) {
  globalKeyboards.global
  // globalKeyboards.groups
  // globalKeyboards.search

  const classes = useStyles()

  const { global, ...rest } = globalKeyboards

  const {
    getAreSingleKeysDisabled,
    getCustomKeyCombination,
    setAreSingleKeysDisabled: setAreSingleKeysDisabledFromContext,
    setViewerInfo,
  } = useContext(CometKeyCommandSettingsContext)

  const [areSingleKeysDisabled, setAreSingleKeysDisabled] = useState(
    !getAreSingleKeysDisabled() ? true : Boolean(getAreSingleKeysDisabled()),
  )

  const handleOnClose = useCallback(() => {
    setViewerInfo(!1, 'see_all')
    onClose()
  }, [onClose, setViewerInfo])

  const onPressCb = useCallback(() => {
    setViewerInfo(true, 'pinned')
    onClose()
  }, [setViewerInfo, onClose])

  const y = []
  const z = jsx(
    r,
    {
      areSingleKeysDisabled: areSingleKeysDisabled,
      getCustomKeyCombination: getCustomKeyCombination,
      groupID: 'global',
      keyCommandSection: globalKeyboards.global,
    },
    'global',
  )

  if (globalKeyboards.search) {
    const A = jsx(
      r,
      {
        areSingleKeysDisabled: areSingleKeysDisabled,
        getCustomKeyCombination: getCustomKeyCombination,
        groupID: 'search',
        keyCommandSection: globalKeyboards.search,
      },
      'search',
    )
    y.push(
      jsxs(
        'div',
        {
          className: classes.dummy7, // 'xvob6b x1s0knhj x1noequ8',
          children: [z, A],
        },
        'global and search',
      ),
    )
  } else {
    y.push(z)
  }

  const A = Object.keys(rest)

  for (let z = 0; z < A.length; z += 3) {
    y.push(
      A.slice(z, z + 3).map((_groupID: any) => {
        const _keyCommandSection = globalKeyboards[_groupID]
        return jsx(
          r,
          {
            areSingleKeysDisabled: areSingleKeysDisabled,
            getCustomKeyCombination: getCustomKeyCombination,
            groupID: _groupID,
            keyCommandSection: _keyCommandSection,
          },
          _groupID,
        )
      }),
    )
  }

  if (globalKeyboards.groups) {
    const a = jsx(
      r,
      {
        areSingleKeysDisabled: areSingleKeysDisabled,
        getCustomKeyCombination: getCustomKeyCombination,
        groupID: 'groups',
        keyCommandSection: globalKeyboards.groups,
      },
      'groups',
    )
    y.push(a)
  }

  return jsx(CometCardedDialogLegacy, {
    onClose: handleOnClose,
    size: 'content',
    title: 'All Workrooms keyboard shortcuts',
    withCloseButton: !0,
    children: jsxs(BaseHeadingContextWrapper, {
      children: [
        jsx('div', {
          className: classes.dummy3, //'x78zum5 x1a02dak xyamay9 x4uap5 x1l90r2v xkhd6sd',
          children: y,
        }),
        jsx('div', {
          className: classes.dummy5, // 'x1n2xptk x1l90r2v',
          children: jsxs(CometRow, {
            align: 'end',
            paddingHorizontal: 16,
            classes: classes.footerRow,
            children: [
              jsx(CometRowItem, {
                expanding: true,
                verticalAlign: 'top',
                classes: classes.footerRowItem,
                children: jsx('div', {
                  className: classes.dummy4, // 'xihhdvq x1va8c73',
                  children: jsx(CometListCell, {
                    addOnEnd: jsx(CometSwitch, {
                      onValueChange: (value: any) => {
                        setAreSingleKeysDisabled(!value)
                        setAreSingleKeysDisabledFromContext(!value)
                      },
                      size: 'small',
                      value: areSingleKeysDisabled !== !0,
                      children: 'Single-character shortcuts',
                    }),
                    addOnEndVerticalAlign: 'top',
                    content: jsx(CometListCellText, {
                      body: 'Use single-character shortcuts to perform common actions faster on Workplace.',
                      emphasized: !0,
                      headline: 'Single-character shortcuts',
                    }),
                    level: 4,
                    paddingVertical: 0,
                    verticalAlign: 'top',
                  }),
                }),
              }),
              jsx(CometRowItem, {
                expanding: !0,
                children: jsx('div', {}),
              }),
              dynamic1820857
                ? jsx(CometRowItem, {
                    className: classes.footerRowItem,
                    children: jsx('div', {
                      className: classes.dummy6, // 'xihhdvq x1dt7z5j',
                      children: jsx(CometListCell, {
                        addOnEnd: jsx(TetraCircleButton, {
                          icon: fbicon(
                            {
                              sprited: 2,
                              spi: '/assets/workplace/O4LPGH9U0OO.png',
                              _spi: '/assets/workplace/O4LPGH9U0OO.png',
                              w: 20,
                              h: 20,
                              p: '0 0',
                              sz: 'auto',
                              loggingID: '1414201',
                            },
                            20,
                          ),
                          label: 'Pin keyboard shortcut help',
                          onPress: onPressCb,
                          size: 36,
                        }),
                        addOnEndVerticalAlign: 'top',
                        content: jsx(CometListCellText, {
                          body: `In the corner of your screen, you'll see shortcuts that relate to what you're doing. They'll change as you use Workplace.`,
                          emphasized: true,
                          headline: 'Pin keyboard shortcut help',
                        }),
                        level: 4,
                        paddingVertical: 0,
                        verticalAlign: 'top',
                      }),
                    }),
                  })
                : null,
            ],
          }),
        }),
      ],
    }),
  })
}
