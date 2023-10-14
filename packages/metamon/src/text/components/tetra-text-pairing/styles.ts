import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  item: {
    marginBottom: '5px',
    marginTop: '5px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-5px',
    marginTop: '-5px',
  },
})

export const useLevelStyles = makeStyles({
  1: {
    marginBottom: '7px',
    marginTop: '7px',
  },
  2: {
    marginBottom: '6px',
    marginTop: '6px',
  },
  entityHeader1: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  entityHeader2: {
    marginBottom: '8px',
    marginTop: '8px',
  },
})
