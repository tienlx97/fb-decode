import React, { forwardRef, ReactNode, useContext, useMemo } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'

import { BaseHeadingContext, useBaseTextContext } from '../../context'
import { useStyles } from './styles'

type BaseHeadingReactProps = {
  children: ReactNode
  isPrimaryHeading?: boolean
  testid?: string
  className?: string
} & any

const BaseHeading = forwardRef<any, BaseHeadingReactProps>(
  ({ children, className, isPrimaryHeading = false, testid, ...rest }, ref) => {
    const classes = useStyles()

    const heading = useContext(BaseHeadingContext)

    const HeadingComponent = useMemo(
      () => (isPrimaryHeading ? 'h1' : 'h' + Math.max(Math.min(heading, 6), 2)),
      [isPrimaryHeading, heading],
    )

    const baseTextContextValue = useBaseTextContext()
    const isNested =
      (baseTextContextValue === null
        ? undefined
        : baseTextContextValue?.nested) === true

    // HeadingComponent
    return jsx(
      HeadingComponent,
      Object.assign({}, rest, {
        className: mergeClasses(classes.root, className),
        'data-testid': undefined,
        dir: isNested ? undefined : 'auto',
        ref,
        children,
      }),
    )
  },
)

BaseHeading.displayName = 'BaseHeading.react'

export default BaseHeading
