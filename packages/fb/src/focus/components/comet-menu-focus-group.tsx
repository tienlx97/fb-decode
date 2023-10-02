import React from 'react'
import cometKeys from '@fb/key-command/utils/comet-keys'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometComponentWithKeyCommands } from '@fb/key-command/components/comet-component-with-key-commands'
import { createFocusGroup } from './focus-group'
import { tabbableScopeQuery } from '../utils/focus-scope-queries'

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
