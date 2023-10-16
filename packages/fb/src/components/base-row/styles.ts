import { makeStyles } from '@griffel/react'

export const alignVariable = {
  end: 'start',
  start: 'end',
}

export const useExpanding = makeStyles({
  expanding: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  row: {
    display: 'flex',
    flexShrink: 0,
  },
})

export const useAlignStyles = makeStyles({
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  justify: {
    justifyContent: 'space-between',
  },
  start: {
    justifyContent: 'flex-start',
  },
})

export const useVerticalAlignStyles = makeStyles({
  bottom: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
  top: {
    alignItems: 'flex-start',
  },
})

export const useWrapStyles = makeStyles({
  backward: {
    flexWrap: 'wrap-reverse',
  },
  forward: {
    flexWrap: 'wrap',
  },
  none: {
    flexWrap: 'nowrap',
  },
})

export const useDirectionStyles = makeStyles({
  backward: {
    flexDirection: 'row-reverse',
  },
  forward: {
    flexDirection: 'row',
  },
})
