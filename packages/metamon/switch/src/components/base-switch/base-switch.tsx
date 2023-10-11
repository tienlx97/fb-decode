import React, { forwardRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@fluentui/react-components'
import { BaseView } from '@metamon/common'
import { BaseFocusRing } from '@metamon/focus'
import { BaseInput } from '@metamon/input'

import { useStyles } from './styles'

type BaseSwitchProps = {
  suppressFocusRing?: boolean
  testid?: string
} & React.JSX.IntrinsicElements['input']

const BaseSwitch = forwardRef<HTMLInputElement, BaseSwitchProps>(
  ({ children, suppressFocusRing, testid, className, ...rest }, ref) => {
    const classes = useStyles()

    return jsx(BaseFocusRing, {
      suppressFocusRing,
      children: (_className: any) => {
        return jsx(BaseView, {
          testid: undefined,
          className: mergeClasses(classes.wrapper, _className, className),
          children: [
            children,
            jsx(
              BaseInput,
              Object.assign({}, rest, {
                'aria-checked': rest.checked ?? false,
                ref,
                role: 'switch',
                type: 'checkbox',
                className: classes.switch,
              }),
            ),
          ],
        })
      },
    })
  },
)

export default BaseSwitch
