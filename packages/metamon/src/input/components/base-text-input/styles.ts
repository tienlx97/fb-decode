import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  root: {
    ':disabled': {
      color: 'var(--disabled-text)',
    },
  },
})
