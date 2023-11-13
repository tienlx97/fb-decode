import React, { ReactNode } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import CometKeyCommandWrapper from './comet-key-command-wrapper'
import { makeStyles, mergeClasses } from '@griffel/react'
import useKeyCommands from '../hooks/use-key-commands'

type CometComponentWithKeyCommandsProps = {
  children?: ReactNode
  commandConfigs: any[]
  elementType?: ReactNode
  className?: string
  isWrapperFocusable?: boolean
  debugName?: string
}

function j(props: any) {
  useKeyCommands(props.commandConfigs)
  return null
}

const useStyles = makeStyles({
  displayInherit: {
    display: 'inherit',
  },

  inherit: {
    alignContent: 'inherit',
    alignItems: 'inherit',
    flexDirection: 'inherit',
    flexGrow: 'inherit',
    flexShrink: 'inherit',
    height: 'inherit',
    justifyContent: 'inherit',
    maxHeight: 'inherit',
    maxWidth: 'inherit',
    minHeight: 'inherit',
    minWidth: 'inherit',
    position: 'relative',
    width: 'inherit',
  },
})

export function CometComponentWithKeyCommands({
  commandConfigs,
  className,
  children,
  elementType,
  ...rest
}: CometComponentWithKeyCommandsProps) {
  const classes = useStyles()

  return jsxs(
    CometKeyCommandWrapper,
    Object.assign(
      {
        elementType,
        className:
          className ??
          (elementType === 'span'
            ? classes.inherit
            : mergeClasses(classes.inherit, classes.displayInherit)),
      },
      rest,
      {
        children: [
          jsx(j, {
            commandConfigs,
          }),
          children,
        ],
      },
    ),
  )
}
