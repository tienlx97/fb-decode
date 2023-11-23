import { makeStyles } from '@griffel/react'
import { unrecoverableViolation } from '@negiganaito/error'

const useStyles = makeStyles({
  blue: {
    backgroundColor: 'var(--badge-background-color-blue)',
  },
  darkGray: {
    backgroundColor: 'var(--badge-background-color-dark-gray)',
  },
  gray: {
    backgroundColor: 'var(--badge-background-color-gray)',
  },
  green: {
    backgroundColor: 'var(--badge-background-color-green)',
  },
  lightBlue: {
    backgroundColor: 'var(--badge-background-color-light-blue)',
  },
  red: {
    backgroundColor: 'var(--badge-background-color-red)',
  },
  yellow: {
    backgroundColor: 'var(--badge-background-color-yellow)',
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
