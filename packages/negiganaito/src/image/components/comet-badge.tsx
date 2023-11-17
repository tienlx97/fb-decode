// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { BaseStyledBadge } from './base-styled-badge'
import { getCometBadgeColorStyle } from './get-comet-badge-color-style'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

type CometBadgeProps = {
  border?: string
  color?: string
  colorOverride?: any
  isProfileBadge?: boolean
  label?: any
  wide?: any
  children?: any
  size?: number
}

export function CometBadge({
  border = 'none',
  color = 'none',
  colorOverride,
  isProfileBadge = false,
  label,
  wide = 'normal',
  children,
  size = 8,
  ...rest
}: CometBadgeProps) {
  const classes = useStyles()
  const wideClasses = useWideStyles()
  const extraWideClasses = useExtraWideStyles()
  return jsx(
    BaseStyledBadge,
    Object.assign({}, rest, {
      'aria-label': label,
      border: border !== 'none',
      colorXStyle: colorOverride ?? getCometBadgeColorStyle(color),
      size,
      className: mergeClasses(
        !isProfileBadge && classes.isNoneProfileBadge,
        border === 'white' && classes.borderWhite,
        border === 'dark' && classes.borderDark,
        // @ts-ignore
        wide === 'wide' && wideClasses[size],
        // @ts-ignore
        wide === 'extraWide' && extraWideClasses[size],
      ),
      children,
    }),
  )
}

const useStyles = makeStyles({
  borderDark: {
    ...shorthands.borderColor('var(--comment-background)'),
  },
  borderWhite: {
    ...shorthands.borderColor('var(--card-background)'),
  },
  isNoneProfileBadge: {
    marginRight: '8px',
  },
})

const useWideStyles = makeStyles({
  6: {
    marginLeft: '3px',
    width: '9px',
  },
  7: {
    marginLeft: '3.5px',
    width: '10.5px',
  },
  8: {
    marginLeft: '4px',
    width: '12px',
  },
  9: {
    marginLeft: '4.5px',
    width: '13.5px',
  },
  10: {
    marginLeft: '5px',
    width: '15px',
  },
  12: {
    marginLeft: '6px',
    width: '18px',
  },
  14: {
    marginLeft: '7px',
    width: '21px',
  },
  15: {
    marginLeft: '7.5px',
    width: '22.5px',
  },
  18: {
    marginLeft: '9px',
    width: '27px',
  },
  20: {
    marginLeft: '10px',
    width: '30px',
  },
  22: {
    marginLeft: '11px',
    width: '33px',
  },
  24: {
    marginLeft: '12px',
    width: '36px',
  },
  32: {
    marginLeft: '16px',
    width: '48px',
  },
  41: {
    marginLeft: '20.5px',
    width: '61.5px',
  },
})

const useExtraWideStyles = makeStyles({
  6: {
    marginLeft: '6px',
    width: '12px',
  },
  7: {
    marginLeft: '7px',
    width: '14px',
  },
  8: {
    marginLeft: '8px',
    width: '16px',
  },
  9: {
    marginLeft: '9px',
    width: '18px',
  },
  10: {
    marginLeft: '10px',
    width: '20px',
  },
  12: {
    marginLeft: '12px',
    width: '24px',
  },
  14: {
    marginLeft: '14px',
    width: '28px',
  },
  15: {
    marginLeft: '15px',
    width: '30px',
  },
  18: {
    marginLeft: '18px',
    width: '36px',
  },
  20: {
    marginLeft: '20px',
    width: '40px',
  },
  22: {
    marginLeft: '22px',
    width: '44px',
  },
  24: {
    marginLeft: '24px',
    width: '48px',
  },
  32: {
    marginLeft: '32px',
    width: '64px',
  },
  41: {
    marginLeft: '41px',
    width: '82px',
  },
})
