import React, { ReactNode } from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import CometKeyCommandWrapper from '../comet-key-command-wrapper'
import { mergeClasses } from '@griffel/react'
import useKeyCommands from '@fb/key-command/hooks/use-key-commands'
import { useStyles } from './styles'

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

export default function CometComponentWithKeyCommands({
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
          className ?? elementType === 'span'
            ? classes.inherit
            : mergeClasses(classes.inherit, classes.displayInherit),
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
