import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  disabled: {
    backgroundColor: 'var(--input-background-disabled)',
    ...shorthands.borderColor('var(--input-border-color)'),
    boxShadow: 'none',
    cursor: 'not-allowed',
    ':active': {
      backgroundColor: 'var(--input-background-disabled)',
    },
  },
  error: {
    ...shorthands.borderColor('var(--negative)'),
    ':active': {
      backgroundColor:
        'hsla(var(--negative-h),var(--negative-s),var(--negative-l),.05)',
    },
  },
  errorFocused: {
    boxShadow:
      '0 0 0 3px hsla(var(--negative-h),var(--negative-s),var(--negative-l),.2) inset',
  },
  errorHovered: {
    backgroundColor:
      'hsla(var(--negative-h),var(--negative-s),var(--negative-l),.05)',
  },
  headerMask: {
    backgroundColor: 'var(--input-background)',
    right: '16px',
    height: '16px',
    position: 'absolute',
    left: '16px',
    top: '8px',
  },
  helperText: {
    marginTop: '8px',
  },
  hiddenHelperText: {
    clip: 'rect(0,0,0,0)',
    clipPath: 'inset(50%)',
    WebkitClipPath: 'inset(50%)',
    height: '1px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
    width: '1px',
  },
  hovered: {
    ...shorthands.borderColor('var(--input-border-color-hover)'),
  },
  input: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    maxWidth: '100%',
    minWidth: '0',
    position: 'relative',
  },
  inputRow: {
    display: 'flex',
    width: '100%',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '1.25',
    maxWidth: '100%',
    transformOrigin: 'top left',
  },
  labelDisabled: {
    color: 'var(--disabled-text)',
  },
  labelError: {
    color: 'var(--negative)',
  },
  labelHighlighted: {
    color: 'var(--input-label-color-highlighted)',
  },
  labelInside: {
    color: 'var(--secondary-text)',
    cursor: 'inherit',
    display: 'block',
    right: '8px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    left: '16px',
    textOverflow: 'ellipsis',
    top: '18px',
    transitionDuration: 'var(--fds-fast)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'var(--fds-soft)',
    whiteSpace: 'nowrap',
  },
  labelOutside: {
    color: 'var(--text-input-outside-label)',
    marginBottom: ' 8px',
    position: 'relative',
  },
  labelShrunk: {
    right: 'auto',
    transform: 'scale(.75) translateY(-11px)',
  },
  root: {
    backgroundColor: 'var(--input-background)',
    ...shorthands.borderRadius('var(--input-corner-radius)'),
    ...shorthands.border(
      'var(--input-border-width)',
      'solid',
      'var(--input-border-color)',
    ),

    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    zIndex: 'unset',
    ':active': {
      backgroundColor:
        'hsla(var(--accent-h),var(--accent-s),var(--accent-l),.05)',
    },
  },
  secondary: {
    display: 'flex',
  },
  shake: {
    animationDuration: '.82s',
    animationFillMode: 'both',
    animationName: {
      '10%': {
        transform: 'translate3d(-1px,0,0)',
      },

      '20%': {
        transform: 'translate3d(2px,0,0)',
      },

      '30%': {
        transform: 'translate3d(-4px,0,0)',
      },

      '40%': {
        transform: 'translate3d(4px,0,0)',
      },

      '50%': {
        transform: 'translate3d(-4px,0,0)',
      },

      '60%': {
        transform: 'translate3d(4px,0,0)',
      },

      '70%': {
        transform: 'translate3d(-4px,0,0)',
      },

      '80%': {
        transform: 'translate3d(2px,0,0)',
      },

      '90%': {
        transform: 'translate3d(-1px,0,0)',
      },
    },
    animationTimingFunction: 'var(--fds-soft)',
  },
  validationIcon: {
    paddingRight: '16px',
    paddingTop: '18px',
  },
  validationIconHideLabel: {
    paddingTop: '12px',
  },
  warn: {
    ...shorthands.borderColor('var(--warning)'),
    ':active': {
      backgroundColor:
        'hsla(var(--warning-h),var(--warning-s),var(--warning-l),.05)',
    },
  },
  warnFocused: {
    boxShadow:
      '0 0 0 3px hsla(var(--warning-h),var(--warning-s),var(--warning-l),.2) inset',
  },
  warnHovered: {
    backgroundColor:
      'hsla(var(--warning-h),var(--warning-s),var(--warning-l),.05)',
  },

  //

  labelInternal: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: 1.25,
    maxWidth: '100%',
    transformOrigin: 'top left',
    color: 'var(--text-input-outside-label)',
    marginBottom: '8px',
    position: 'relative',
  },

  helperTextIsHidden: {
    clip: 'rect(0,0,0,0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
    width: '1px',
  },

  dummy5: {
    marginTop: '8px',
  },

  dummy4: {
    display: 'flex',
  },

  dummy2: {
    display: 'flex',
    width: '100%',
  },

  dummy3: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    maxWidth: '100%',
    minWidth: 0,
    position: 'relative',
  },

  dummy: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
})

export const useCursorStyles = makeStyles({
  pointer: {
    cursor: 'pointer',
  },
  text: {
    cursor: 'text',
  },
})

export const useBluePrintStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('12px'),
  },
})
