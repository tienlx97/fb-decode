import { makeStyles, shorthands } from '@griffel/react'

export const useStyles = makeStyles({
  button: {
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    display: 'inline-flex',
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    position: 'relative',
    verticalAlign: 'bottom',
    ':after': {
      ...shorthands.borderRadius('50%'),
      bottom: '-8px',
      content: "''",
      right: '-8px',
      position: 'absolute',
      left: '-8px',
      top: '-8px',
      zIndex: 1,
    },
  },
  image: {
    verticalAlign: '-0.25em',
  },
  imageContain: {
    objectFit: 'fill',
  },
  imageCover: {
    objectFit: 'cover',
  },
  pressed: {
    transform: 'scale(.96)',
  },
})
