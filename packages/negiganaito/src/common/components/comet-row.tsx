import { makeStyles, mergeClasses } from '@griffel/react'
import React, { forwardRef, useContext, useMemo } from 'react'
import { CometColumnContext } from '../context/comet-column-context'
import { CometRowContext } from '../context/comet-row-context'
import { BaseRow } from './base-row'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometColumnItem } from './comet-column-item'
import { CometRowItem } from './comet-row-item'

const useL = makeStyles({
  4: {
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  8: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  12: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  16: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})
const useM = makeStyles({
  0: {
    paddingTop: '0',
  },
  4: {
    paddingTop: '4px',
  },
  8: {
    paddingTop: '8px',
  },
  12: {
    paddingTop: '12px',
  },
  16: {
    paddingTop: '16px',
  },
})
const useN = makeStyles({
  4: {
    paddingBottom: '4px',
    paddingTop: '4px',
  },
  8: {
    paddingBottom: '8px',
    paddingTop: '8px',
  },
  12: {
    paddingBottom: '12px',
    paddingTop: '12px',
  },
  16: {
    paddingBottom: '16px',
    paddingTop: '16px',
  },
})
const useO = makeStyles({
  4: {
    marginLeft: '-2px',
    marginRight: '-2px',
  },
  8: {
    marginLeft: '-4px',
    marginRight: '-4px',
  },
  12: {
    marginLeft: '-6px',
    marginRight: '-6px',
  },
  16: {
    marginLeft: '-8px',
    marginRight: '-8px',
  },
  24: {
    marginLeft: '-12px',
    marginRight: '-12px',
  },
  32: {
    marginLeft: '-16px',
    marginRight: '-16px',
  },
})
const useP = makeStyles({
  4: {
    marginBottom: '-2px',
    marginTop: '-2px',
  },
  8: {
    marginBottom: '-4px',
    marginTop: '-4px',
  },
  12: {
    marginBottom: '-6px',
    marginTop: '-6px',
  },
  16: {
    marginBottom: '-8px',
    marginTop: '-8px',
  },
  24: {
    marginBottom: '-12px',
    marginTop: '-12px',
  },
  32: {
    marginBottom: '-16px',
    marginTop: '-16px',
  },
})

type CometRowProps = {
  children?: any
  paddingHorizontal?: any
  paddingTop?: any
  paddingVertical?: 0 | 4 | 8 | 12 | 16
  spacing?: number
  spacingHorizontal?: 4 | 8 | 12 | 16 | 24 | 32
  spacingVertical?: 4 | 8 | 12 | 16 | 24 | 32
  className?: string
  expanding?: boolean
}

export const CometRow = forwardRef<any, CometRowProps>(
  (
    {
      children,
      paddingHorizontal,
      paddingTop,
      paddingVertical,
      spacing = 12,
      spacingHorizontal,
      spacingVertical,
      className,
      ...rest
    },
    ref,
  ) => {
    const l = useL()
    const m = useM()
    const n = useN()
    const o = useO()
    const p = useP()

    const d = useContext(CometColumnContext)
    const e = useContext(CometRowContext)

    let f = (!d ? undefined : d.paddingHorizontal) ? 0 : 12
    let g = (!d ? undefined : d.spacing) ? 0 : 16

    f = !paddingHorizontal ? f : paddingHorizontal
    g = !paddingTop ? (!paddingVertical ? g : null) : paddingTop
    let _spacingHorizontal = !spacingHorizontal ? spacing : spacingHorizontal
    let _spacingVertical = !spacingVertical ? spacing : spacingVertical

    const cometRowValue = useMemo(() => {
      return {
        spacingHorizontal: _spacingHorizontal,
        spacingVertical: _spacingVertical,
      }
    }, [_spacingHorizontal, _spacingVertical])

    const b = jsx(
      BaseRow,
      Object.assign({}, rest, {
        ref,
        className: mergeClasses(
          // @ts-ignore
          l[f],
          // @ts-ignore
          n[paddingVertical],
          // @ts-ignore
          g != null && m[g],
          // @ts-ignore
          o[_spacingHorizontal],
          // @ts-ignore
          p[_spacingVertical],
          className,
        ),
        children: jsx(CometRowContext.Provider, {
          value: cometRowValue,
          children,
        }),
      }),
    )

    if (e) {
      return jsx(CometRowItem, {
        expanding: rest.expanding,
        children: b,
      })
    }

    return d
      ? jsx(CometColumnItem, {
          expanding: rest.expanding,
          children: b,
        })
      : b
  },
)
