import BaseView from '@fb/components/base-view'
import { BaseFocusRing } from '@fb/focus/components/base-focus-ring'
import { BaseInput } from '@fb/input/components/base-input'
import { mergeClasses } from '@fluentui/react-components'
import React, { forwardRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
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
                'aria-check': rest.checked ?? false,
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
