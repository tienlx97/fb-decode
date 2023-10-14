import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  heightGetter: {
    lineHeight: '0',
    position: 'relative',
  },
  heightSetter: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    visibility: 'hidden',
  },
  moreTab: {
    height: '60px',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  moreWrapper: {
    display: 'inline-block',
    height: '60px',
    position: 'relative',
    verticalAlign: 'top',
  },
  moreWrapperAdaptive: {
    height: 'calc((100% - 60px) * 9999)',
    maxHeight: '60px',
    minHeight: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  root: {
    height: '60px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    width: '100%',
    zIndex: 0,
  },
  tab: {
    display: 'inline-flex',
    float: 'left',
    height: '60px',
    verticalAlign: 'top',
  },
  tabsContainer: {
    bottom: 0,
    boxSizing: 'border-box',
    right: 0,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})

export const useLocaleStyles = makeStyles({
  default: {
    width: 'calc(6.5625rem + 52px)',
  },
  englishOrShorter: {
    width: 'calc(2.90625rem + 52px)',
  },
})

export const useDummyStyles = makeStyles({
  dummy1: {
    lineHeight: 0,
    position: 'relative',
  },

  dummy2: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    visibility: 'hidden',
  },
})
