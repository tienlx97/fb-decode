import { makeStyles } from '@griffel/react'

export const useStyles = makeStyles({
  mount: {
    opacity: '1',
    transform: 'scale(1)',
    transitionDuration: 'var(--fds-duration-short-in)',
    transitionTimingFunction: 'var(--fds-animation-enter-exit-in)',
  },
  root: {
    opacity: '0',
    transform: 'scale(.8) translateY(300px)',
    transitionDuration: 'var(--fds-duration-short-out)',
    transitionProperty: 'transform,opacity',
    transitionTimingFunction: 'var(--fds-animation-enter-exit-out)',
  },
})
