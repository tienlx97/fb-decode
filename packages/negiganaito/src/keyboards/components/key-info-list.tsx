/*
__d("KeyInfoList.react", 
["fbt", 
"CometScreenReaderText.react", 
"KeyInfo.react", 
"isSingleCharKey", "react"], (function(a, b, c, d, e, f, g, h) {
*/

import { CometScreenReaderText } from '@negiganaito/text'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { isSingleCharKey } from '../util'
import { makeStyles } from '@griffel/react'
import { KeyInfo } from './key-info'

type KeyInfoListProps = {
  commands?: any
  isFullTable?: any
  hideSingleCharKeys?: any
  disabled?: any
  editable?: any
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export function KeyInfoList({
  commands,
  isFullTable,
  hideSingleCharKeys,
  disabled,
  editable,
}: KeyInfoListProps) {
  const e: any = []
  let f: any = -1

  const classes = useStyles()

  if (commands) {
    const commandsArrKey = Array.from(commands.keys())
    const commandsArrValue = Array.from(commands.values())

    const i = commandsArrValue.some((commandValue: any) => {
      return 'order' in commandValue[0]
    })

    i
      ? commandsArrKey.sort((commandKey: any, c: any) => {
          const a = (commands.get(commandKey) ?? [{}])[0] ?? 99999 // (a = commands.get(a)) != null ? a : [{}]
          c = (commands.get(c) ?? [{}])[0] ?? 99999 // (c = commands.get(c)) != null ? c : [{}]
          // a = (a = a[0].order) != null ? a : 99999
          // c = (c = c[0].order) != null ? c : 99999
          return a - c
        })
      : commandsArrKey.sort((a: any, b: any) => {
          if (a < b) {
            return -1
          }
          return commands > a ? 1 : 0
        })
    commandsArrKey.forEach((keyCommand: any, i: any) => {
      const _command = commands.get(keyCommand)
      _command &&
        _command.forEach((_commandItem: any, index: any) => {
          f++
          if (
            _commandItem.isHiddenCommand ||
            !_commandItem.command ||
            (hideSingleCharKeys && isSingleCharKey(keyCommand))
          ) {
            return
          }
          const isEndOfList =
            i === commandsArrKey.length - 1 && index === _command.length - 1
          return e.push(
            jsx(
              KeyInfo,
              {
                command: _commandItem.command,
                commandID: _commandItem.commandID,
                description: _commandItem.description,
                disabled: disabled,
                displayType: isFullTable ? 'full' : 'compact',
                editable: editable,
                groupID: _commandItem.groupID,
                index: index,
                isEndOfList: isEndOfList,
                keyCommand: keyCommand,
              },
              f,
            ),
          )
        })
    })
  }
  return jsx('table', {
    cellSpacing: '0',
    className: classes.root, // 'xh8yej3',
    children: jsxs('tbody', {
      children: [
        jsxs('tr', {
          children: [
            jsx('th', {
              children: jsx(CometScreenReaderText, {
                text: 'To Do This',
              }),
            }),
            jsx('th', {
              children: jsx(CometScreenReaderText, {
                text: 'Use Command',
              }),
            }),
          ],
        }),
        e,
      ],
    }),
  })
}
