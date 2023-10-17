import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometPressable } from './comet-pressable'
import { makeStyles, mergeClasses } from '@griffel/react'

const useStyles = makeStyles({
  defaultCursor: {
    cursor: 'default',
  },
  disabled: {
    textDecorationLine: 'none',
  },
  disabledColor: {
    color: 'var(--disabled-text)',
  },
  disabledLink: {
    opacity: 0.5,
  },
  expanding: {
    display: 'inline-flex',
  },
  link: {
    ':hover': {
      textDecorationLine: 'underline',
    },
  },
  linkColor: {
    color: 'var(--blue-link)',
  },
  root: {
    display: 'inline',
    position: 'relative',
    userSelect: 'none',
  },
})

type BaseInlinePressableProps = {
  ariaLabel?: string
  children?: any
  color?: string
  cursorDisabled?: boolean
  expanding?: boolean
  linkProps?: any
  onPress: any
  className?: string
}

export const BaseInlinePressable = forwardRef<any, BaseInlinePressableProps>(
  (
    {
      ariaLabel,
      children,
      color = 'blue',
      cursorDisabled,
      expanding = false,
      linkProps,
      onPress,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const root = mergeClasses(
      classes.root,
      cursorDisabled === !0 && classes.defaultCursor,
      expanding && classes.expanding,
      className,
    )
    const linkColor =
      color !== 'inherit' && (linkProps != null || onPress != null)
    return jsx(
      CometPressable,
      Object.assign(
        {
          'aria-label': ariaLabel,
          linkProps: linkProps,
          onPress: onPress,
          overlayDisabled: !0,
        },
        rest,
        {
          ref: ref,
          className: function ({ disabled, hovered }: any) {
            return mergeClasses(
              root,
              linkColor && classes.linkColor,
              hovered && !disabled && classes.link,
              disabled && classes.disabled,
              disabled && !linkColor && classes.disabledColor,
              disabled && linkColor && classes.disabledLink,
            )
          },
          children: children,
        },
      ),
    )
  },
)
