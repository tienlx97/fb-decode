import { makeStyles } from '@fluentui/react-components'

export type CometSVGIconColor =
  | 'active-tab'
  | 'none'
  | 'black'
  | 'white'
  | 'baseCherry'
  | 'baseLemon'
  | 'baseLime'
  | 'blueLink'
  | 'disabled'
  | 'fb-logo'
  | 'highlight'
  | 'inactive-tab'
  | 'negative'
  | 'positive'
  | 'primary'
  | 'white'
  | 'primaryAccent'
  | 'rating-star-active'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'work-iris'

export type CometSVGIconSize =
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 8
  | 10
  | 12
  | 16
  | 20
  | 18
  | 30
  | 52
  | 56
  | 60
  | 72
  | 112
  | 132

export const useColorStyles = makeStyles({
  'active-tab': {
    color: 'var(--primary-button-background)',
  },
  baseCherry: {
    color: 'var(--base-cherry)',
  },
  baseLemon: {
    color: 'var(--base-lemon)',
  },
  baseLime: {
    color: 'var(--base-lime)',
  },
  black: {
    color: 'var(--always-black)',
  },
  blueLink: {
    color: 'var(--blue-link)',
  },
  disabled: {
    color: 'var(--disabled-icon)',
  },
  'fb-logo': {
    color: 'var(--fb-wordmark)',
  },
  highlight: {
    color: 'var(--accent)',
  },
  'inactive-tab': {
    color: 'var(--secondary-icon)',
  },
  negative: {
    color: 'var(--negative)',
  },
  none: {
    color: 'transparent',
  },
  positive: {
    color: 'var(--positive)',
  },
  primary: {
    color: 'var(--primary-icon)',
  },
  primaryAccent: {
    color: 'var(--accent)',
  },
  'rating-star-active': {
    color: 'var(--rating-star-active)',
  },
  secondary: {
    color: 'var(--secondary-icon)',
  },
  tertiary: {
    color: 'var(--placeholder-icon)',
  },
  warning: {
    color: 'var(--warning)',
  },
  white: {
    color: 'var(--always-white)',
  },
  'work-iris': {
    color: 'var(--wig-iris-100)',
  },
})

export const useIconSizeStyles = makeStyles({
  8: {
    height: '8px',
    width: '8px',
  },
  10: {
    height: '10px',
    width: '10px',
  },
  12: {
    height: '12px',
    width: '12px',
  },
  16: {
    height: '16px',
    width: '16px',
  },
  18: {
    height: '18px',
    width: '18px',
  },
  20: {
    height: '20px',
    width: '20px',
  },
  24: {
    height: '24px',
    width: '24px',
  },
  28: {
    height: '28px',
    width: '28px',
  },
  30: {
    height: '30px',
    width: '30px',
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
  52: {
    height: '52px',
    width: '52px',
  },
  56: {
    height: '56px',
    width: '56px',
  },
  60: {
    height: '60px',
    width: '60px',
  },
  72: {
    height: '72px',
    width: '72px',
  },
  112: {
    height: '112px',
    width: '112px',
  },
  132: {
    height: '132px',
    width: '132px',
  },
})

export const useStyles = makeStyles({
  icon: {
    display: 'block',
    transitionDuration: 'var(--fds-fast)',
    transitionProperty: 'color,fill,stroke',
    transitionTimingFunction: 'var(--fds-soft)',
  },
  inline: {
    display: 'inline-block',
  },
  shadow: {
    filter: 'drop-shadow(0 2px 8px var(--shadow-1))',
  },
})
