import BaseContextualLayerOrientationContext from '@fb/context/base-contextual-layer-orientation-context'
import React, { ReactNode, forwardRef, useContext } from 'react'
//@ts-ignore
import { jsx } from 'react/jsx-runtime'
import { mergeClasses } from '@fluentui/react-components'
import {
  useAboveStyles,
  useBelowStyles,
  useEndStyles,
  useStartStyles,
  useStyles,
} from './styles'
import { BasePopover } from '../base-popover'
import { BasePopoverSVGArrowContainer } from '../base-popover-svg-arrow-container'

type CometPopoverProps = {
  animatedPopover?: boolean
  children?: ReactNode
  popoverName?: string
  withArrow?: boolean
  label: string
}

const CometPopover = forwardRef<HTMLDivElement, CometPopoverProps>(
  (
    {
      label,
      animatedPopover = false,
      children,
      popoverName,
      withArrow = false,
      ...rest
    },
    ref,
  ) => {
    const classses = useStyles()
    const aboveClasses = useAboveStyles()
    const belowClasses = useBelowStyles()
    const endClasses = useEndStyles()
    const startClasses = useStartStyles()

    const { align, position } = useContext(
      BaseContextualLayerOrientationContext,
    )

    return jsx(
      BasePopover,
      Object.assign({}, rest, {
        arrowImpl: withArrow ? BasePopoverSVGArrowContainer : undefined,
        ref,
        className: withArrow && classses.popoverWithArrow,
        children: jsx('div', {
          className: mergeClasses(
            classses.card,
            classses.cardBackground,
            classses.cardShadow,
            classses.cardBorderRadius,
            classses.cardOverflow,
            withArrow &&
              o(
                position,
                align,
                aboveClasses,
                belowClasses,
                endClasses,
                startClasses,
              ),
          ),
          // ref,
          children,
        }),
      }),
    )
  },
)

function o(
  position: 'end' | 'start' | 'above' | 'below',
  align: 'end' | 'start' | 'stretch' | 'middle',
  k: any,
  l: any,
  n: any,
  m: any,
) {
  switch (position) {
    case 'above':
      return k[align]
    case 'below':
      return l[align]
    case 'end':
      return n[align]
    case 'start':
      return m[align]
  }
}

export default CometPopover
