// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseBadge } from './base-badge'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'

type BaseStyledBadgeProps = {
  border?: boolean
  children?: any
  colorXStyle?: any
  size?: 6 | 7 | 8 | 9 | 10 | 12 | 14 | 15 | 18 | 20 | 22 | 24 | 32 | 41
  className?: string
} & any

export function BaseStyledBadge({
  border = false,
  children,
  colorXStyle,
  size = 8,
  className,
  ...rest
}: BaseStyledBadgeProps) {
  const sizeWithBorderClasses = useSizeWithBorderStyles()
  const sizeWithoutBorderClasses = useSizeWithoutBorderStyles()

  return jsx(
    BaseBadge,
    Object.assign({}, rest, {
      className: mergeClasses(
        colorXStyle,
        // @ts-ignore
        border ? sizeWithBorderClasses[size] : sizeWithoutBorderClasses[size],
        className,
      ),
      children,
    }),
  )
}

const useSizeWithoutBorderStyles = makeStyles({
  6: {
    height: '6px',
    width: '6px',
  },
  7: {
    height: '7px',
    width: '7px',
  },
  8: {
    height: '8px',
    width: '8px',
  },
  9: {
    height: '9px',
    width: '9px',
  },
  10: {
    height: '10px',
    width: '10px',
  },
  12: {
    height: '12px',
    width: '12px',
  },
  14: {
    height: '14px',
    width: '14px',
  },
  15: {
    height: '15px',
    width: '15px',
  },
  18: {
    height: '18px',
    width: '18px',
  },
  20: {
    height: '20px',
    width: '20px',
  },
  22: {
    height: '22px',
    width: '22px',
  },
  24: {
    height: '24px',
    width: '24px',
  },
  32: {
    height: '32px',
    width: '32px',
  },
  41: {
    height: '41px',
    width: '41px',
  },
})

const useSizeWithBorderStyles = makeStyles({
  6: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('1.5px'),
    height: '9px',
    width: '9px',
  },
  7: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '11px',
    width: '11px',
  },
  8: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '12px',
    width: '12px',
  },
  9: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '13px',
    width: '13px',
  },
  10: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '14px',
    width: '14px',
  },
  12: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '16px',
    width: '16px',
  },
  14: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '18px',
    width: '18px',
  },
  15: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '19px',
    width: '19px',
  },
  18: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('2px'),
    height: '22px',
    width: '22px',
  },
  20: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    height: '30px',
    width: '30px',
  },
  22: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    height: '28px',
    width: '28px',
  },
  24: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    height: '32px',
    width: '32px',
  },
  32: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    height: '40px',
    width: '40px',
  },
  41: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    height: '49px',
    width: '49px',
  },
})
