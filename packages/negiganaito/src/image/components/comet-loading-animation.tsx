import { makeStyles, mergeClasses } from '@griffel/react'
import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometLoadingAnimationProps = {
  animationPaused?: boolean
  size?: number
}

const l = 38,
  m = 62,
  n = 42,
  o = 2,
  p = 3,
  q = 4,
  r = l / 2,
  s = m / 2,
  t = n / 2,
  u = r - 2,
  v = s - 2,
  w = t - 2

const useStyles = makeStyles({
  animationCircleWrapper: {
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: {
      to: {
        transform: 'rotate(1turn)',
      },
    },
    animationTimingFunction: 'linear',
    transformOrigin: '50% 50%',
  },
  animationPaused: {
    animationPlayState: 'paused',
  },
  animationRoot: {
    position: 'absolute',
  },
  animationRootSize36: {
    left: '-3px',
    top: '-3px',
  },
  animationRootSize40: {
    left: '-3px',
    top: '-3px',
  },
  animationRootSize60: {
    left: '-3px',
    top: '-3px',
  },
  animationUploadingCircle: {
    animationDirection: 'reverse',
    animationDuration: '16s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: '50% 50%',
  },
  animationUploadingCircleSize36: {
    animationDirection: 'reverse',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        animationTimingFunction: 'cubic-bezier(.895,.03,.685,.22)',
        strokeDasharray: '71 95',
        strokeDashoffset: '0',
      },

      '49.999%': {
        strokeDasharray: '0 95',
        strokeDashoffset: ' 0',
      },

      '50.001%': {
        animationTimingFunction: 'cubic-bezier(.165,.84,.44,1)',
        strokeDasharray: '0 95',
        strokeDashoffset: '-95',
      },

      '100%': {
        strokeDasharray: '71 95',
        strokeDashoffset: '0',
      },
    },
    animationTimingFunction: 'linear',
    strokeWidth: '2',
  },
  animationUploadingCircleSize40: {
    animationDirection: 'reverse',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        animationTimingFunction: 'cubic-bezier(.895,.03,.685,.22)',
        strokeDasharray: '79 106',
        strokeDashoffset: '0',
      },

      '49.999%': {
        strokeDasharray: '0 106',
        strokeDashoffset: '0',
      },

      '50.001%': {
        animationTimingFunction: 'cubic-bezier(.165,.84,.44,1)',
        strokeDasharray: '0 106',
        strokeDashoffset: '-106',
      },

      '100%': {
        strokeDasharray: '79 106',
        strokeDashoffset: '0',
      },
    },
    animationTimingFunction: 'linear',
    strokeWidth: '3',
  },
  animationUploadingCircleSize60: {
    animationDirection: 'reverse',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        animationTimingFunction: 'cubic-bezier(.895,.03,.685,.22)',
        strokeDasharray: '118 158',
        strokeDashoffset: '0',
      },

      '49.999%': {
        strokeDasharray: '0 158',
        strokeDashoffset: '0',
      },

      '50.001%': {
        animationTimingFunction: 'cubic-bezier(.165,.84,.44,1)',
        strokeDasharray: '0 158',
        strokeDashoffset: '-158',
      },

      '100%': {
        strokeDasharray: '118 158',
        strokeDashoffset: '0',
      },
    },
    animationTimingFunction: 'linear',
    strokeWidth: '4',
  },
})

export function CometLoadingAnimation({
  animationPaused,
  size,
}: CometLoadingAnimationProps) {
  const classes = useStyles()

  let d, e, f

  switch (size) {
    case 36:
      d = l
      e = r
      f = u
      break
    case 40:
      d = n
      e = t
      f = w
      break
    case 60:
    default:
      d = m
      e = s
      f = v
      break
  }
  return jsx('svg', {
    className: mergeClasses(
      classes.animationRoot,
      size === 36 && classes.animationRootSize36,
      size === 60 && classes.animationRootSize60,
      size === 40 && classes.animationRootSize40,
    ),
    height: d,
    width: d,
    children: jsx('g', {
      className: mergeClasses(
        classes.animationCircleWrapper,
        animationPaused && classes.animationPaused,
      ),
      children: jsx('circle', {
        className: mergeClasses(
          classes.animationUploadingCircle,
          size === 36 && classes.animationUploadingCircleSize36,
          size === 40 && classes.animationUploadingCircleSize40,
          size === 60 && classes.animationUploadingCircleSize60,
          animationPaused && classes.animationPaused,
        ),
        cx: e,
        cy: e,
        fill: 'none',
        r: f,
        stroke: '#1877F2',
        strokeWidth: size === 36 ? o : size === 40 ? p : q,
      }),
    }),
  })
}
