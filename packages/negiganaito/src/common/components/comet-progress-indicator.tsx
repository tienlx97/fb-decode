import { makeStyles, mergeClasses } from '@griffel/react'
import { BaseLoadingStateElement } from '@negiganaito/popover'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

const useStyles = makeStyles({
  animateDot: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        opacity: 0.265,
        transform: 'scale(.8,.8)',
      },

      '5%': {
        opacity: 0.25,
      },

      '50%': {
        transform: 'scale(1,1)',
      },

      '55%': {
        opacity: 1,
      },

      '100%': {
        opacity: 0.265,
        transform: 'scale(.8,.8)',
      },
    },
    animationTimingFunction: 'cubic-bezier(.5,0,.5,1)',
    opacity: 0.265,
    transform: 'scale(.8,.8)',
  },
  animationDelay300: {
    animationDelay: '.3s',
  },
  animationDelay600: {
    animationDelay: '.6s',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
})

const useSizeStyles = makeStyles({
  default: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    height: '8px',
    marginRight: '2px',
    marginLeft: '2px',
    width: '8px',
  },
  small: {
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    borderBottomLeftRadius: '2px',

    height: '4px',
    marginRight: '1px',
    marginLeft: '1px',
    width: '4px',
  },
})

const useOverrideBGColorContext = makeStyles({
  media: {
    backgroundColor: 'var(--always-white)',
  },
  primary: {
    backgroundColor: 'var(--glimmer-spinner-icon)',
  },
})

type CometProgressIndicatorProps = {
  disableLoadingStateTracker?: any
  overrideBGColorContext?: 'media' | 'primary'
  size?: 'default' | 'small'
}

export function CometProgressIndicator({
  disableLoadingStateTracker,
  overrideBGColorContext = 'primary',
  size = 'default',
}: CometProgressIndicatorProps) {
  const classes = useStyles()
  const sizeClasses = useSizeStyles()
  const overrideBGColorContextClasses = useOverrideBGColorContext()

  const className = mergeClasses(
    classes.animateDot,
    sizeClasses[size],
    overrideBGColorContextClasses[overrideBGColorContext],
  )

  return jsxs(BaseLoadingStateElement, {
    disableLoadingStateTracker,
    className: classes.root,
    children: [
      jsx('div', {
        className,
      }),
      jsx('div', {
        className: mergeClasses(className, classes.animationDelay300), // h.apply(void 0, a.concat([k.animationDelay300])),
      }),
      jsx('div', {
        className: mergeClasses(className, classes.animationDelay600), // h.apply(void 0, a.concat([k.animationDelay600])),
      }),
    ],
  })
}
