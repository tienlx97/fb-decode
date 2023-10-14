import { useMemo } from 'react'
import { CometComponentWithKeyCommands, cometKeys } from '@metamon/keyboards'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometCompositeStructureContext } from '@metamon/context'
import { BaseFocusRing } from './base-focus-ring'
import { makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  noOutline: {
    outlineStyle: 'none',
  },
})

const m = true // c('gkx')('1721477') || c('gkx')('1459'))

type CometCompositeFocusIndicatorProps = {
  children?: any
  compositeInfo?: any
  elementType?: any
}

export function CometCompositeFocusIndicator({
  children,
  compositeInfo,
  elementType,
}: CometCompositeFocusIndicatorProps) {
  const classes = useStyles()

  const commandConfigs = useMemo(() => {
    const a = []
    compositeInfo.horizontal === !0 &&
      a.push(
        {
          command: {
            key: cometKeys.RIGHT,
          },
          description: `h._('__JHASH__1VqMgLPpraa__JHASH__')`,
          handler: function () {},
        },
        {
          command: {
            key: cometKeys.LEFT,
          },
          description: `h._('__JHASH__7zajSsSIBFZ__JHASH__')`,
          handler: function () {},
        },
      )
    compositeInfo.vertical === !0 &&
      a.push(
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
      )
    return a
  }, [compositeInfo])

  return jsx(CometComponentWithKeyCommands, {
    commandConfigs: commandConfigs,
    debugName: 'composite-role_' + (compositeInfo.role || ''),
    elementType,
    children: jsx(CometCompositeStructureContext.Provider, {
      value: compositeInfo,
      children: jsx(BaseFocusRing, {
        children: (a: any) => children(m ? a : classes.noOutline),
      }),
    }),
  })
}
