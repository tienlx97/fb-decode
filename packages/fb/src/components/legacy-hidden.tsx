/* eslint-disable camelcase */
import React, {
  ReactNode,
  forwardRef,
  // @ts-ignore
  unstable_Offscreen,
  // @ts-ignore
  unstable_LegacyHidden,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type LegacyHiddenOrLegacyHiddenOffscreenProps = {
  children?: ReactNode
  htmlAttributes: any
  mode: string
  suppressHydrationWarning?: boolean
}

const LegacyHidden = forwardRef<
  HTMLDivElement,
  LegacyHiddenOrLegacyHiddenOffscreenProps
>(
  (
    {
      htmlAttributes,
      mode,
      children,
      suppressHydrationWarning,
    }: LegacyHiddenOrLegacyHiddenOffscreenProps,
    ref,
  ) => {
    // @ts-ignore
    return jsx(
      'div',
      Object.assign({}, htmlAttributes, {
        hidden: mode === 'hidden' ? true : undefined,
        ref,
        suppressHydrationWarning,
        // @ts-ignore
        children: jsx(unstable_LegacyHidden, {
          mode: mode === 'hidden' ? 'unstable-defer-without-hiding' : mode,
          children,
        }),
      }),
    )
  },
)

const LegacyHiddenOffscreen = forwardRef<
  HTMLDivElement,
  LegacyHiddenOrLegacyHiddenOffscreenProps
>(({ htmlAttributes, mode, children, suppressHydrationWarning }, ref) => {
  // @ts-ignore
  return jsx(unstable_Offscreen, {
    mode,
    // @ts-ignore
    children: jsx(
      'div',
      Object.assign({}, htmlAttributes, {
        ref,
        suppressHydrationWarning,
        children,
      }),
    ),
  })
})

LegacyHidden.displayName = 'LegacyHidden'
LegacyHiddenOffscreen.displayName = 'LegacyHiddenOffscreen'

export { LegacyHidden, LegacyHiddenOffscreen }
