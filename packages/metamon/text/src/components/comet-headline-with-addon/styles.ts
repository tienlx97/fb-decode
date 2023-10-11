import { makeStyles } from '@fluentui/react-components'

export const useDirectionStyles = makeStyles({
  ltr: {
    direction: 'ltr',
  },
  rtl: {
    direction: 'rtl',
  },
})

export const useStyles = makeStyles({
  addOn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '8px',
  },
  nonBreakingSpace: {
    visibility: 'hidden',
    width: '0',
  },
  textFlexFixForIE: {
    flexBasis: 'auto',
  },
})
