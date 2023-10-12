import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  wrapperFocusable: {
    ':focus': {
      outlineStyle: 'none',
    },
  },
})
