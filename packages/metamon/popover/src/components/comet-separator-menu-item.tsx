import { CometMenuItemBaseRoleContext } from '@metamon/context'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import React, { forwardRef, useContext } from 'react'

type CometSeparatorMenuItemProps = {} & React.JSX.IntrinsicElements['div']

const useStyles = makeStyles({
  separator: {
    ...shorthands.borderTop('1px', 'solid', 'var(--divider)'),
    marginTop: '4px',
    marginRight: '16px',
    marginBottom: '4px',
    marginLeft: '16px',
  },
})

const CometSeparatorMenuItem = forwardRef<
  HTMLDivElement,
  CometSeparatorMenuItemProps
>(({ className, ...rest }, ref) => {
  const classes = useStyles()

  const d = useContext(CometMenuItemBaseRoleContext)

  return (
    <div
      {...rest}
      className={mergeClasses(classes.separator, className)}
      ref={ref}
      role={d === 'menuitem' ? 'separator' : 'presentation'}
    />
  )
})

export default CometSeparatorMenuItem
