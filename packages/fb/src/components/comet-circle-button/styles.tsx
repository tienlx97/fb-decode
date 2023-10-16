import { makeStyles, shorthands } from '@griffel/react'

export const useOverLayPressStyles = makeStyles({
  pressableOverlayPressed: {
    backgroundColor: 'var(--non-media-pressed)',
  },
  pressed: {
    transform: 'scale(.96)',
  },
  root: {
    alignItems: 'center',
    ...shorthands.borderRadius('50%'),
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    position: 'relative',
  },
})

export const useSizeStyles = makeStyles({
  24: {
    height: '24px',
    width: '24px',
  },
  28: {
    height: '28px',
    width: '28px',
  },
  32: {
    height: '32px',
    width: '32px',
  },
  36: {
    height: '36px',
    width: '36px',
  },
  40: {
    height: '40px',
    width: '40px',
  },
  48: {
    height: '48px',
    width: '48px',
  },
})

export const useColorTypeStyles = makeStyles({
  'dark-overlay': {
    backgroundColor: 'var(--always-dark-overlay)',
    color: 'var(--always-white)',
  },
  deemphasized: {
    backgroundColor: 'transparent',
  },
  'deemphasized-overlay': {
    backgroundColor: 'var(--primary-deemphasized-button-background)',
  },
  normal: {
    backgroundColor: 'var(--secondary-button-background)',
  },
  overlay: {
    backgroundColor: 'var(--popover-background)',
    boxShadow: '0 0 0 1px var(--shadow-1)',
    color: 'var(--secondary-text)',
  },
  'overlay-floating': {
    backgroundColor: 'var(--secondary-button-background-floating)',
    boxShadow: '0 2px 4px var(--shadow-1),0 12px 28px var(--shadow-2)',
  },
  'overlay-raised': {
    backgroundColor: 'var(--popover-background)',
    boxShadow: '0 2px 8px var(--shadow-1),0 0 0 1px var(--shadow-1)',
    color: 'var(--secondary-text)',
  },
  'primary-background-overlay': {
    backgroundColor: 'var(--primary-button-background)',
  },
})

export const useDisableStyles = makeStyles({
  'dark-overlay': {
    backgroundColor: 'var(--always-dark-overlay)',
  },
  deemphasized: {
    backgroundColor: 'transparent',
  },
  'deemphasized-overlay': {
    backgroundColor: 'var(--always-light-overlay)',
  },
  normal: {
    backgroundColor: 'var(--disabled-button-background)',
  },
  overlay: {
    backgroundColor: 'var(--progress-ring-on-media-background)',
    borderTopWidth: '0',
    borderRightWidth: '0',
    borderBottomWidth: '0',
    borderLeftWidth: '0',
    boxShadow: '0 2px 4px var(--shadow-1)',
    color: 'var(--disabled-text)',
  },
  'primary-background-overlay': {
    backgroundColor: 'var(--primary-button-background)',
  },
})

export const iconRatioNormal = {
  24: 12,
  28: 16,
  32: 16,
  36: 20,
  40: 20,
  48: 24,
}

export const iconRatioLarge = {
  24: 20,
  28: 20,
  32: 24,
  36: 28,
  40: 32,
  48: 32,
}
