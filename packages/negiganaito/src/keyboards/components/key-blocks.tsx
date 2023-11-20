import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { getKeyCombinationAsStringList } from '../util/get-key-combination-as-string-list'
import { CometScreenReaderText } from '@negiganaito/text'
import { intlList } from '../util/intl-list'

type KeyBlocksProps = {
  command?: any
  displayType?: any
  isActive?: any
}

const useStyles = makeStyles({
  activeKey: {
    backgroundColor: 'var(--primary-button-background)',
    color: 'var(--primary-button-text)',
  },
  disabledKey: {
    ...shorthands.borderColor('transparent'),
    paddingLeft: 0,
    paddingRight: 0,
  },
  keyInfo: {
    ...shorthands.borderColor('var(--divider)'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('1px'),
    boxSizing: 'border-box',
    display: 'inline-block',
    lineHeight: '1',
    ...shorthands.margin('3px'),
    minWidth: '.75em',
    ...shorthands.padding('4px', '6px'),
    textAlign: 'center',
  },
  keyInfoLarge: {
    marginBottom: '6px',
    marginTop: '6px',
  },
})

export function KeyBlocks({ command, displayType, isActive }: KeyBlocksProps) {
  const classes = useStyles()

  const clazzName = mergeClasses(
    classes.keyInfo,
    isActive && classes.activeKey,
    displayType === 'full' && classes.keyInfoLarge,
  )

  if (command.key === '') {
    return jsx('span', {
      className: mergeClasses(
        classes.keyInfo,
        displayType === 'full' && classes.keyInfoLarge,
        classes.disabledKey,
      ),
      children: 'Disabled',
    })
  }

  const [keysWithoutModifiers, keysWithModifiers] =
    getKeyCombinationAsStringList(command)

  return jsxs('span', {
    children: [
      jsx('span', {
        'aria-hidden': 'true',
        children: keysWithoutModifiers.map((key: any, index: any) => {
          return jsxs(
            React.Fragment,
            {
              children: [
                index !== 0 ? ' + ' : null,
                jsx('span', {
                  className: clazzName,
                  children: key,
                }),
              ],
            },
            index,
          )
        }),
      }),
      jsx(CometScreenReaderText, {
        text: intlList(keysWithModifiers, intlList.CONJUNCTIONS.AND),
      }),
    ],
  })
}
