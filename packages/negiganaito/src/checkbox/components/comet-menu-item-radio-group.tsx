import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometMenuItemGroup } from './comet-menu-item-group'

type CometMenuItemRadioGroupProps = {
  label?: any
  children?: any
}

export const CometMenuItemRadioGroup = forwardRef<
  any,
  CometMenuItemRadioGroupProps
>(({ label, children }, ref) => {
  return jsx(CometMenuItemGroup, {
    label,
    ref,
    children,
  })
})
