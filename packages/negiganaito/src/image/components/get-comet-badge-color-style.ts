import { makeStyles } from '@griffel/react'
import { unrecoverableViolation } from '@negiganaito/error'

const useStyles = makeStyles({
  blue: {
    backgroundColor: 'x107p15e',
  },
  darkGray: {
    backgroundColor: 'x167v862',
  },
  gray: {
    backgroundColor: 'x80cks',
  },
  green: {
    backgroundColor: 'x7amd0a',
  },
  lightBlue: {
    backgroundColor: 'x56hhle',
  },
  red: {
    backgroundColor: 'xdi0jry',
  },
  yellow: {
    backgroundColor: 'x1ajtyu9',
  },
})

export function getCometBadgeColorStyle(color: string) {
  const classes = useStyles()

  switch (color) {
    case 'blue':
      return classes.blue
    case 'gray':
      return classes.gray
    case 'darkGray':
      return classes.darkGray
    case 'green':
      return classes.green
    case 'lightBlue':
      return classes.lightBlue
    case 'red':
      return classes.red
    case 'yellow':
      return classes.yellow
    default:
      color
      throw unrecoverableViolation(
        ' Invalid color in getCometBadgeColorStyle',
        'comet_ui',
      )
  }
}
