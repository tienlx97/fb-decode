import React, { forwardRef } from 'react'
import Link, { LinkProps } from 'next/link'
import { mergeClasses } from '@griffel/react'
import { useStyles } from './styles'

const CometLink = forwardRef<
  HTMLAnchorElement,
  LinkProps &
    React.JSX.IntrinsicElements['a'] & {
      color?: 'secondary' | 'primary'
    }
>(({ href, className, color, ...props }, ref) => {
  const classes = useStyles()

  return (
    // @ts-ignore
    <Link
      href={href}
      className={mergeClasses(
        classes.root,
        color === 'secondary' && classes.secondary,
        color === 'primary' && classes.primary,
        className,
      )}
      {...props}
      ref={ref}
    />
  )
})

export default CometLink
