import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    ...shorthands.borderRadius('999px'),
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
  },
})

type BaseBadgeProps = {
  children?: any
  testid?: string
  className?: string
} & any

export function BaseBadge({
  children,
  testid,
  className,
  ...rest
}: BaseBadgeProps) {
  const classes = useStyles()

  return jsx(
    'span',
    Object.assign(
      {},
      rest,
      {
        className: mergeClasses(classes.root, className),
      },
      // c('testID')(d),
      // c('CometVisualCompletionAttributes').IGNORE,
      {
        children,
      },
    ),
  )
}
