/**
__d("KeyInfo.react", 
  ["CometKeyCommandSettingsContext", 
  "CometPressable.react", 
  "JSResourceForInteraction", 
  "KeyBlocks.react", 
  "TetraText.react", 
  "createKeyCommand", 
  "isSingleCharKey", "react", 
  "stylex", "useCometLazyDialog"], (function(a, b, c, d, e, f, g) {

 */

import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import React, { useContext, useRef } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { CometKeyCommandSettingsContext } from '../context'
import { useCometLazyDialog } from '@negiganaito/dialog'
import { createKeyCommand, isSingleCharKey } from '../util'
import { TetraText } from '@negiganaito/text'
import { CometPressable } from '@negiganaito/pressable'
import { KeyBlocks } from './key-blocks'

const useStyles = makeStyles({
  compactDescriptionCellItem: {
    paddingRight: '10px',
  },
  descriptionCellItem: {
    paddingBottom: '8px',
    paddingRight: '30px',
    paddingTop: '8px',
  },
  disabled: {
    color: 'var(--disabled-text)',
  },
  enabled: {
    color: 'var(--primary-text)',
  },
  keyBlock: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
  keyCellItem: {
    textAlign: 'right',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 970px)': {
      width: '140px',
    },
  },
  rowItem: {
    ...shorthands.padding('0'),
    textAlign: 'left',
  },
  tableCellItem: {
    fontSize: '.9375rem',
    fontWeight: 'inherit',
    lineHeight: '1.5',
    paddingBottom: '6px',
    paddingTop: '6px',
  },

  dummy1: {
    // '       ',
    fontSize: '.9375rem',
    fontWeight: 'inherit',
    lineHeight: '1.5',
    paddingBottom: '6px',
    paddingTop: '6px',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 970px)': {
      width: '140px',
    },
  },

  dummy2: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
})

type KeyInfoProps = {
  command?: any
  commandID?: any
  description?: any
  displayType?: any
  groupID?: any
  index?: any
  isActive?: any
  keyCommand?: any
  disabled?: any
  editable?: any
}

export function KeyInfo({
  command,
  commandID,
  description,
  displayType,
  groupID,
  index,
  isActive,
  keyCommand,
  //
  disabled,
  editable,
}: KeyInfoProps) {
  const classes = useStyles()

  const cometKeyCommandSettingsContextValue = useContext(
    CometKeyCommandSettingsContext,
  )
  let areSingleKeysDisabled: any =
    (!cometKeyCommandSettingsContextValue
      ? void 0
      : cometKeyCommandSettingsContextValue.getAreSingleKeysDisabled()) ||
    !false
  const dialogRef = useRef()
  // f = a.command,
  // g = a.commandID,
  // i = a.description,
  // o = a.displayType,
  // p = a.groupID,
  // q = a.index,
  // r = a.isActive,
  // s = a.keyCommand,
  const [lazyDialog, _] = useCometLazyDialog('KeyBindDialog')

  let effectiveCommand = command

  let keyCommandString: any
  // t = f
  // s = s

  if (groupID && commandID) {
    effectiveCommand =
      cometKeyCommandSettingsContextValue.getCustomKeyCombination(
        groupID,
        commandID,
      ) || command

    keyCommandString = createKeyCommand(effectiveCommand)
  }

  // groupID &&
  //   commandID &&
  //   ((effectiveCommand =
  //     cometKeyCommandSettingsContextValue.getCustomKeyCombination(
  //       groupID,
  //       commandID,
  //     ) || command),
  //   (s = createKeyCommand(effectiveCommand)))

  const isSingleCharKeyCommand = isSingleCharKey(keyCommandString)
  areSingleKeysDisabled = areSingleKeysDisabled && isSingleCharKeyCommand
  const keyString =
    keyCommandString && index
      ? keyCommandString +
        '_' +
        index +
        '_' +
        (areSingleKeysDisabled ? '1' : '0')
      : effectiveCommand.key

  switch (displayType) {
    case 'compact':
    case 'full':
      return jsxs(
        'tr',
        {
          className: mergeClasses(
            classes.rowItem,
            areSingleKeysDisabled && classes.disabled,
            !areSingleKeysDisabled && classes.enabled,
          ),
          ref: dialogRef,
          children: [
            jsx('th', {
              className: mergeClasses(
                classes.tableCellItem,
                displayType === 'full' && classes.descriptionCellItem,
                displayType === 'compact' && classes.compactDescriptionCellItem,
              ),
              children: jsx(TetraText, {
                color: disabled ? 'disabled' : 'primary',
                type: 'body3',
                children: description,
              }),
            }),
            jsx('td', {
              className: classes.dummy1,
              // 'x6prxxf x1pd3egz x1evy7pa x10b6aqq x1yrsyyn xp4054r xuxw1ft x10vfum5',
              children: jsx(TetraText, {
                color: disabled ? 'disabled' : 'primary',
                type: displayType === 'full' ? 'body3' : 'body4',
                children:
                  editable && groupID && commandID
                    ? jsx(CometPressable, {
                        onPress: function () {
                          // @ts-ignore
                          lazyDialog({
                            commandID: commandID,
                            defaultCommand: command,
                            groupID: groupID,
                          })
                        },
                        overlayOffset: {
                          bottom: 0,
                          left: 4,
                          right: 4,
                          top: 0,
                        },
                        overlayRadius: 8,
                        children: jsx(KeyBlocks, {
                          command: effectiveCommand,
                          displayType: displayType,
                          isActive: isActive,
                        }),
                      })
                    : jsx(KeyBlocks, {
                        command: effectiveCommand,
                        displayType: displayType,
                        isActive: isActive,
                      }),
              }),
            }),
          ],
        },
        keyString,
      )
    default:
      return jsxs('div', {
        className: classes.dummy2, // 'x6s0dn4 x78zum5 xozqiw3 xuxw1ft',
        ref: dialogRef,
        children: [
          jsx('span', {
            children: description,
          }),
          jsx(KeyBlocks, {
            command: effectiveCommand,
            displayType: displayType,
            isActive: isActive,
          }),
        ],
      })
  }
}
