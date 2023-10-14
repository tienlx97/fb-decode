import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  ellisis: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
  },

  oneLine: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  root: {
    display: 'block',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
  },

  supportLineHeight: {
    right: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
  },
})
