import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  default: {
    boxShadow: '0 0 0 2px var(--always-white),0 0 0 4px var(--base-blue)',
    outlineStyle: 'none',

    '@media (forced-colors: active)': {
      outlineColor: 'transparent !important',
      outlineStyle: 'auto !important',
      outlineWidth: '2px !important',
    },
  },

  inset: {
    boxShadow:
      'inset 0 0 0 2px var(--base-blue),inset 0 0 0 4px var(--always-white)',
    outlineStyle: 'none',
  },

  unfocused: {
    outlineStyle: 'none',
  },
})
