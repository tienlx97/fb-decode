import { makeStyles, shorthands } from '@fluentui/react-components'

export const useStyles = makeStyles({
  container: {
    backgroundColor: 'var(--tooltip-background)',
    ...shorthands.borderRadius('var(--tooltip-corner-radius)'),
    boxShadow: 'var(--tooltip-box-shadow)',
    display: 'block',
    marginBottom: '2px',
    marginTop: '2px',
    maxWidth: '334px',
    opacity: 0,
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '12px',
    paddingBottom: '12px',
    position: 'relative',
    transitionDuration: 'var(--fds-duration-extra-extra-short-out)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--fds-animation-fade-out)',
  },
  containerVisible: {
    opacity: 1,
    transitionDuration: 'var(--fds-duration-extra-extra-short-in)',
    transitionTimingFunction: 'var(--fds-animation-fade-in)',
  },
  contextualLayer: {
    pointerEvents: 'none',
  },
  loadingState: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export const useDummyStyles = makeStyles({
  dummy1: {
    display: 'flex',
    justifyContent: 'center',
  },
})
