import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

// @ts-ignore
import { jsx } from 'react'
import { ReactStrictDomWeb } from '../react-strict-dom-web'

const useStyles = makeStyles({
  divider: {
    backgroundColor: 'var(--divider)',
    boxSizing: 'border-box',
    height: '1px',
  },
  reset: {
    backgroundColor: 'transparent',
    ...shorthands.borderWidth(0),
    ...shorthands.margin(0),
  },
})

export function BaseDivider(a: any) {
  const classes = useStyles()

  return jsx(ReactStrictDomWeb.html.hr, {
    'aria-hidden': a.ariaHidden,
    style: mergeClasses(classes.reset, classes.divider, a.className),
  })
}
