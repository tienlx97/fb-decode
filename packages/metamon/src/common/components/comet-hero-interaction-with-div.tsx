import { ReactNode, forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { LegacyHidden } from './legacy-hidden'

type CometHeroInteractionWithDivProps = {
  children?: ReactNode
  hidden?: any
  htmlAttributes?: any
  pageletAriaProps?: any
  className?: string
}

export const CometHeroInteractionWithDiv = forwardRef<
  any,
  CometHeroInteractionWithDivProps
>(({ children, className, hidden, htmlAttributes, pageletAriaProps }, ref) => {
  return jsx(LegacyHidden, {
    htmlAttributes: Object.assign(
      {
        className,
        onMouseLeave: !htmlAttributes ? void 0 : htmlAttributes.onMouseLeave,
        style: !htmlAttributes ? void 0 : htmlAttributes.style,
      },
      pageletAriaProps,
    ),
    mode: hidden === !0 ? 'hidden' : 'visible',
    ref,
    children,
  })
})
