import React, { forwardRef, memo } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'
import { BaseFocusRing } from '@negiganaito/focus'

import { BaseInput } from '../base-input'
import { useStyles } from './styles'

type BaseTextInputProps = {
  onValueChange?: (value: string, event: React.ChangeEvent<HTMLElement>) => void
  suppressFocusRing?: boolean
}

const BaseTextInput = forwardRef<
  HTMLInputElement,
  BaseTextInputProps & React.JSX.IntrinsicElements['input']
>(({ suppressFocusRing, className, ...rest }, ref) => {
  const classes = useStyles()

  return jsx(BaseFocusRing, {
    suppressFocusRing,
    children: (_className: string) => {
      return jsx(
        BaseInput,
        Object.assign({}, rest, {
          ref,
          className: mergeClasses(classes.root, _className, className),
        }),
      )
    },
  })
})

export default memo(BaseTextInput)
