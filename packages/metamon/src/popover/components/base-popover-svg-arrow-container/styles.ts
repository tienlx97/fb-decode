import { makeStyles } from '@fluentui/react-components'

export const useArrowStyles = makeStyles({
  arrow: {
    position: 'absolute',
  },
  container: {
    position: 'relative',
  },
})
export const usePopoverStyles = makeStyles({
  above: {
    marginBottom: '15px',
  },
  below: {
    marginTop: '15px',
  },
  end: {
    marginStart: '15px',
  },
  start: {
    marginEnd: '15px',
  },
})

export const usePositionStyles = makeStyles({
  above: {
    top: 'calc(100% - 1px)calc(100% - 1px)',
  },
  below: {
    bottom: 'calc(100% - 1px)',
  },
  end: {
    right: 'calc(100% - 1px)',
  },
  start: {
    left: 'calc(100% - 1px)',
  },
})
export const useAlign1 = makeStyles({
  end: {
    right: 0,
  },
  middle: {
    left: 'calc(50% - 12.5px)',
  },
  start: {
    left: 0,
  },
  stretch: {},
})
export const useAlign2 = makeStyles({
  end: {
    bottom: 0,
  },
  middle: {
    top: 'calc(50% - 12.5px)',
  },
  start: {
    top: 0,
  },
  stretch: {},
})
