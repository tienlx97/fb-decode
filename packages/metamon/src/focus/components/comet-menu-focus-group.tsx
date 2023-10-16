import React from 'react'
import {
  cometKeys,
  CometComponentWithKeyCommands,
} from '@negiganaito/keyboards'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { createFocusGroup } from './focus-group'
import { tabbableScopeQuery } from '../util'

const b = createFocusGroup(tabbableScopeQuery)

var j = b[0]

export const FocusItem = b[1]

export function FocusGroup(a: any) {
  const commandConfigs = [
    {
      command: {
        key: cometKeys.UP,
      },
      description: `h._('__JHASH__1VqMgLPpraa__JHASH__')`,
      handler: function () {},
    },
    {
      command: {
        key: cometKeys.DOWN,
      },
      description: `h._('__JHASH__7zajSsSIBFZ__JHASH__')`,
      handler: function () {},
    },
  ]
  return jsx(CometComponentWithKeyCommands, {
    commandConfigs,
    children: jsx(j, Object.assign({}, a)),
  })
}
