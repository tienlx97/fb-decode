import React from 'react'

import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  root: {
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    touchAction: 'manipulation',

    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  zIndex: {
    zIndex: 1,
  },
})
