import { mergeClasses } from '@griffel/react'
import React, { forwardRef } from 'react'
import { FBOverlayBase } from './fb-overlay-base'
import { FBOverlayElement } from './fb-overlay-element'

export const FBOverlayContainer = forwardRef<
  any,
  React.JSX.IntrinsicElements['div']
>(({ children, className, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={mergeClasses(className, '_23n-')}>
      {children}
    </div>
  )
})

FBOverlayContainer.propTypes = {
  // @ts-ignore
  children: function (a, b) {
    a = a[b]
    var d = 0
    React.Children.forEach(a, function (a) {
      if (a == null) return
      switch (a.type) {
        case FBOverlayBase:
          d++
          break
        case FBOverlayElement:
          break
        default:
          // i(0, 435)
          break
      }
    })
    // d === 1 || i(0, 436)
  },
}
