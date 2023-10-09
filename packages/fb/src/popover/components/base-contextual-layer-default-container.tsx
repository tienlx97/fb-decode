import { LegacyHidden } from '@fb/components/legacy-hidden'
import { ReactNode, forwardRef } from 'react'

//@ts-ignore
import { jsx } from 'react/jsx-runtime'

type BaseContextualLayerDefaultContainerProps = {
  className?: string
  stopClickPropagation?: boolean
  hidden?: boolean
  children?: any
}

const BaseContextualLayerDefaultContainer = forwardRef<
  HTMLElement,
  BaseContextualLayerDefaultContainerProps
>(({ className, stopClickPropagation, hidden, children }, ref) => {
  return jsx(LegacyHidden, {
    htmlAttributes: Object.assign(
      {},
      {
        className,
        onClick:
          stopClickPropagation === !0
            ? function (event: any) {
                return event.stopPropagation()
              }
            : void 0,
      },
    ),
    mode: hidden ? 'hidden' : 'visible',
    ref,
    children,
  })
})

export default BaseContextualLayerDefaultContainer
