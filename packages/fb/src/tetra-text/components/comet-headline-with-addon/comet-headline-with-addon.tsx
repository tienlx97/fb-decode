import React, { forwardRef, ReactNode } from 'react'

import { BaseRow } from '@fb/components/base-row'
import { TypeKeys } from '@fb/styles'

import { TetraText } from '../tetra-text'
import { useDirectionStyles, useStyles } from './styles'
import { BaseRowItem } from '@fb/components/base-row-item'

type CometHeadlineWithAddOnProps = {
  addOn?: ReactNode
  children?: ReactNode
  color?:
    | 'blueLink'
    | 'disabled'
    | 'disabledButton'
    | 'highlight'
    | 'negative'
    | 'placeholder'
    | 'positive'
    | 'primary'
    | 'primaryButton'
    | 'primaryDeemphasizedButton'
    | 'primaryOnMedia'
    | 'secondary'
    | 'secondaryButton'
    | 'secondaryOnMedia'
    | 'tertiary'
    | 'white'
  headlineRef?: any
  isPrimaryHeading?: boolean
  isSemanticHeading?: boolean
  numberOfLines?: number
  type: TypeKeys
}

const CometHeadlineWithAddOn = forwardRef<
  HTMLSpanElement,
  CometHeadlineWithAddOnProps
>(
  (
    {
      numberOfLines,
      addOn,
      children,
      color,
      headlineRef,
      isPrimaryHeading,
      isSemanticHeading,
      type,
    },
    ref,
  ) => {
    const directionClasses = useDirectionStyles()
    const classes = useStyles()

    return (
      <TetraText ref={ref} isSemanticHeading={false} type={type}>
        <BaseRow verticalAlign="center" className={directionClasses.ltr}>
          <BaseRowItem expanding className={classes.textFlexFixForIE}>
            <TetraText
              color={color}
              isPrimaryHeading={isPrimaryHeading}
              isSemanticHeading={isSemanticHeading}
              numberOfLines={numberOfLines}
              ref={headlineRef}
              type={type}
            >
              {children}
            </TetraText>
            <BaseRowItem verticalAlign="top" className={classes.addOn}>
              <BaseRow verticalAlign="center">
                <BaseRowItem className={classes.nonBreakingSpace}>
                  \xa0
                </BaseRowItem>
                <BaseRowItem>
                  <BaseRow>{addOn}</BaseRow>
                </BaseRowItem>
              </BaseRow>
            </BaseRowItem>
          </BaseRowItem>
        </BaseRow>
      </TetraText>
    )
  },
)

CometHeadlineWithAddOn.displayName = 'CometHeadlineWithAddOn.react'

export default CometHeadlineWithAddOn
