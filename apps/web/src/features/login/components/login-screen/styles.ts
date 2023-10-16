import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...shorthands.gap('2rem'),
  },
})
