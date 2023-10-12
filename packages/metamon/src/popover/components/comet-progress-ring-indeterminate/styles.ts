import { makeStyles } from '@fluentui/react-components'

export const useStyles = makeStyles({
  animationFillModeAndTimingFn: {
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0,0,1,1)',
  },
  foregroundCircle: {
    animationDuration: '2s',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(.33,0,.67,1)',
    transformOrigin: '50% 50%',
  },
  foregroundCircle12: {
    animationName: {
      '0%': {
        strokeDashoffset: '6.3px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '28.3px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '14.1px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '28.3px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '6.3px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle16: {
    animationName: {
      '0%': {
        strokeDashoffset: '8.8px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '39.6px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '19.8px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '39.6px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '8.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle20: {
    animationName: {
      '0%': {
        strokeDashoffset: '11.3px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '50.9px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '25.4px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '50.9px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '11.3px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle24: {
    animationName: {
      '0%': {
        strokeDashoffset: '13.8px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '62.2px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '31.1px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '62.2px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '13.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle32: {
    animationName: {
      '0%': {
        strokeDashoffset: '18.8px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '84.8px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '42.4px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '84.8px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '18.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle48: {
    animationName: {
      '0%': {
        strokeDashoffset: '28.9px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '130px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '65px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '130px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '28.9px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle60: {
    animationName: {
      '0%': {
        strokeDashoffset: '36.4px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '164px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '82px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '164px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '36.4px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle72: {
    animationName: {
      '0%': {
        strokeDashoffset: '43.98px;',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '197.9px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '98.9px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '197.9px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '43.98px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  root: {
    display: 'flex',
  },
  rotationCircle: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        transform: 'rotate(-90deg)',
      },

      '25%': {
        transform: 'rotate(90deg)',
      },

      '50%': {
        transform: 'rotate(270deg)',
      },

      '75%': {
        transform: 'rotate(450deg)',
      },

      '100%': {
        transform: 'rotate(990deg)',
      },
    },
    animationTimingFunction: 'steps(10,end)',
    transformOrigin: '50% 50%',
  },
})

export const useDummyStyles = makeStyles({
  dumm1: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        transform: 'rotate(-90deg)',
      },

      '25%': {
        transform: 'rotate(90deg)',
      },

      '50%': {
        transform: 'rotate(270deg)',
      },

      '75%': {
        transform: 'rotate(450deg)',
      },

      '100%': {
        transform: 'rotate(990deg)',
      },
    },
  },
})
