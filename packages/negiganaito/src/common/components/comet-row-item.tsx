import { makeStyles, mergeClasses } from '@griffel/react'
import React, { forwardRef, useContext } from 'react'
import { CometRowContext } from '../context/comet-row-context'
import { CometPlaceholder } from '@negiganaito/placeholder'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseRowItem } from './base-row-item'
import { CometErrorBoundary } from '@negiganaito/error'

const useK = makeStyles({
  4: {
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  8: {
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  12: {
    paddingLeft: '6px',
    paddingRight: '6px',
  },
  16: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  24: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  32: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})

const useL = makeStyles({
  4: {
    paddingBottom: '2px',
    paddingTop: '2px',
  },
  8: {
    paddingBottom: '4px',
    paddingTop: '4px',
  },
  12: {
    paddingBottom: '6px',
    paddingTop: '6px',
  },
  16: {
    paddingBottom: '8px',
    paddingTop: '8px',
  },
  24: {
    paddingBottom: '12px',
    paddingTop: '12px',
  },
  32: {
    paddingBottom: '16px',
    paddingTop: '16px',
  },
})

type CometRowItemProps = {
  fallback?: any
  placeholder?: any
  useDeprecatedStyles?: any
  className?: string
  children?: any
}

// @ts-ignore
const _CometRowItem = (props: CometRowItemProps, ref: any) => {
  const k = useK()
  const l = useL()

  const { fallback, placeholder, ...rest } = props

  const { spacingHorizontal, spacingVertical } =
    useContext(CometRowContext) ?? {}

  if (placeholder !== undefined) {
    // a.placeholder
    const { placeholder, ...n } = props
    return jsx(CometPlaceholder, {
      fallback:
        placeholder != null
          ? jsx(
              CometRowItem,
              Object.assign({}, n, {
                ref,
                children: placeholder,
              }),
            )
          : null,
      children: jsx(
        CometRowItem,
        Object.assign({}, n, {
          ref,
        }),
      ),
    })
  }

  if (fallback !== void 0) {
    // a.fallback

    const { fallback, ...o } = props

    return fallback === null
      ? jsx(CometErrorBoundary, {
          children: jsx(
            CometRowItem,
            Object.assign({}, o, {
              ref,
            }),
          ),
        })
      : jsx(CometErrorBoundary, {
          fallback: function (a: any, c: any) {
            return jsx(
              CometRowItem,
              Object.assign({}, o, {
                ref,
                children:
                  typeof fallback === 'function' ? fallback(a, c) : fallback,
              }),
            )
          },
          children: jsx(
            CometRowItem,
            Object.assign({}, o, {
              ref,
            }),
          ),
        })
  }

  return jsx(
    BaseRowItem,
    Object.assign({}, rest, {
      ref,
      useDeprecatedStyles: rest.useDeprecatedStyles,
      className: mergeClasses(
        // @ts-ignore
        k[spacingHorizontal],
        // @ts-ignore
        l[spacingVertical],
        rest.className,
      ),
      children: jsx(CometRowContext.Provider, {
        value: null,
        children: rest.children,
      }),
    }),
  )
}

// @ts-ignore
export const CometRowItem = forwardRef(_CometRowItem)
