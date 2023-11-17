import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  wrapperFocusable: {
    ':focus': {
      outlineStyle: 'none',
    },
  },
})
