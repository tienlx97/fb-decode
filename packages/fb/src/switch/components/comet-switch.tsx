import React, { ReactNode, forwardRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseStyledSwitch } from './base-styled-switch'
import { makeStyles, mergeClasses } from '@fluentui/react-components'

// @ts-ignore
interface CometSwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  testid?: string
  size: 'small' | 'medium' | undefined
  value: boolean | undefined
}

const useStyles = makeStyles({
  toggle: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: '-4px',
    marginLeft: 0,
  },
})

const CometSwitch = forwardRef<HTMLInputElement, CometSwitchProps>(
  (
    { children, disabled = false, size = 'medium', testid, className, ...rest },
    ref,
  ) => {
    const classes = useStyles()

    return jsx(
      BaseStyledSwitch,
      Object.assign({}, rest, {
        'aria-label': children,
        children,
        disabled,
        ref,
        size,
        testid: undefined,
        className: mergeClasses(classes.toggle, className),
      }),
    )
  },
)

export default CometSwitch
