import React, { forwardRef } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import { CometPlaceholder } from './placeholder'
import { LegacyHidden } from '@negiganaito/common'

type CometPageletProps = {
  children?: any
}

const d = forwardRef(({ children }: CometPageletProps, ref: any) => {
  return jsxs(React.Fragment, {
    children: [
      ' ',
      children(ref, () => {
        return null
      }),
      ' ',
    ],
  })
})

type PlaceholderProps = {
  children?: any
  className?: string
  fallback?: any
  hidden?: boolean
  ignoreLateMutation?: any
  name?: string
  pageletAriaProps?: any
  pageletLogNamePoisitionLimit?: any
  position?: any
}

const Placeholder = forwardRef<any, PlaceholderProps>(
  (
    {
      children,
      className,
      fallback,
      hidden,
      ignoreLateMutation,
      name,
      pageletAriaProps,
      pageletLogNamePoisitionLimit,
      position,
      ...rest
    },
    ref,
  ) => {
    return jsx(CometPlaceholder, {
      fallback: fallback,
      children: [
        jsx(LegacyHidden, {
          htmlAttributes: Object.assign(
            {
              className,
            },
            pageletAriaProps,
          ),
          mode: hidden === !0 ? 'hidden' : 'visible',
          ref: ref,
          children,
        }),
      ],
    })
  },
)

export const CometPagelet = {
  Placeholder,
}
