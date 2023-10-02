import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  switch: {
    cursor: 'pointer',
    height: '100%',

    ...shorthands.margin(0, 0, 0, 0),
    ...shorthands.padding(0, 0, 0, 0),

    opacity: '.001',
    outlineStyle: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
  },
  wrapper: {
    position: 'relative',
  },
})
