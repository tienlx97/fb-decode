import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  root: {
    ':disabled': {
      color: 'var(--disabled-text)',
    },
  },
})
