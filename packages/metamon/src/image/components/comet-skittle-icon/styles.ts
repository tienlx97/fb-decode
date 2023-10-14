import { makeStyles, shorthands } from '@fluentui/react-components'

export const useShapeStyles = makeStyles({
  circle: {
    ...shorthands.borderRadius('50%'),
  },
  iconBadge: {
    alignItems: 'center',
    backgroundColor: 'var(--accent)',
    ...shorthands.borderColor('var(--card-background)'),
    ...shorthands.borderRadius('50%'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    ...shorthands.padding('2px'),
    position: 'absolute',
  },
  roundedRect: {
    ...shorthands.borderRadius('8px'),
  },
  skittle: {
    alignItems: 'center',
    ...shorthands.borderWidth('0'),
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    position: 'relative',
  },
})

export const useColorStyles = makeStyles({
  accent: {
    backgroundColor: 'var(--accent)',
  },
  blue: {
    backgroundColor: 'var(--base-blue)',
  },
  cherry: {
    backgroundColor: 'var(--base-cherry)',
  },
  grape: {
    backgroundColor: 'var(--base-grape)',
  },
  gray: {
    backgroundColor: 'var(--secondary-button-background)',
  },
  green: {
    backgroundColor: 'var(--positive)',
  },
  lemon: {
    backgroundColor: 'var(--base-lemon)',
  },
  lightblue: {
    backgroundColor: 'var(--primary-deemphasized-button-background)',
  },
  lime: {
    backgroundColor: 'var(--base-lime)',
  },
  pink: {
    backgroundColor: 'var(--base-pink)',
  },
  red: {
    backgroundColor: 'var(--negative)',
  },
  seafoam: {
    backgroundColor: 'var(--base-seafoam)',
  },
  teal: {
    backgroundColor: 'var(--base-teal)',
  },
  tomato: {
    backgroundColor: 'var(--base-tomato)',
  },
  white: {
    backgroundColor: 'var(--always-white)',
  },
})

export const useSizeStyles = makeStyles({
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
  56: {
    height: '56px',
    width: '56px',
  },
  60: {
    height: '60px',
    width: '60px',
  },
})

export const useDymmyStyles = makeStyles({
  dummy1: {
    alignItems: 'center',
    backgroundColor: 'var(--accent)',
    ...shorthands.borderColor('var(--card-background)'),
    ...shorthands.borderRadius('50%'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    paddingTop: '2px',
    paddingRight: '2px',
    paddingBottom: '2px',
    paddingLeft: '2px',
    position: 'absolute',
  },
})
