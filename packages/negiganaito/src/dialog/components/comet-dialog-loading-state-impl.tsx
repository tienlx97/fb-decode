import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import { CometGlimmer } from '@negiganaito/glimmer'
import React from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

const useStyles = makeStyles({
  firstLine: {
    height: '12px',
    marginBottom: '10px',
    maxWidth: '440px',
  },
  glimmer: {
    alignSelf: 'flex-start',
    ...shorthands.borderRadius('8px'),
    boxSizing: 'border-box',
    marginLeft: '16px',
    marginRight: '16px',
    width: 'calc(100% - 40px)',
  },
  heading: {
    height: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    maxWidth: '241px',
  },
  secondLine: {
    height: '12px',
    marginBottom: '20px',
    maxWidth: '296px',
  },
})

export const CometDialogLoadingStateImpl = () => {
  const classes = useStyles()

  return jsxs(React.Fragment, {
    children: [
      jsx(CometGlimmer, {
        index: 0,
        className: mergeClasses(classes.glimmer, classes.heading),
      }),
      jsx(CometGlimmer, {
        index: 1,
        className: mergeClasses(classes.glimmer, classes.firstLine),
      }),
      jsx(CometGlimmer, {
        index: 2,
        className: mergeClasses(classes.glimmer, classes.secondLine),
      }),
    ],
  })
}
