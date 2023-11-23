'use client'

import React, { forwardRef, ReactNode, useContext, useMemo } from 'react'

import {
  BaseTextContextProvider,
  useBaseTextContext,
  CometTextContext,
} from '../../context'
import {
  CometDensityModeContext,
  useCometDensityModeContext,
} from '@negiganaito/context'
import { CometTextTypography, TypeKeys } from '@negiganaito/styles'
import { mergeClasses } from '@griffel/react'

import { BaseHeading } from '../base-heading'
import { CometLineClamp } from '../comet-line-clamp'
import {
  useAlignStyles,
  useButtonColorStyles,
  useDefaultFontSizeStyles,
  useDensityModeFontStyles,
  usefontWeightStyles,
  useNestedAfterOffsetStyles,
  useNestedBeforeOffsetStyles,
  useOffsetValueStyles,
  useStyles,
} from './styles'

const BUTTON_TYPE: Record<string, string> = {
  disabled: 'disabledButton',
  highlight: 'primaryDeemphasizedButton',
  secondary: 'secondaryButton',
  white: 'primaryButton',
}

function getTypoColor(color: string, type: keyof typeof BUTTON_TYPE | boolean) {
  if (type) {
    // Check if the type is present in BUTTON_TYPE, otherwise use the provided color
    return (type = BUTTON_TYPE[color]) !== null ? type : color
  } else {
    // If no type provided, use the given color directly
    return color
  }
}

type TetraTextProps = {
  align?: 'center' | 'end' | 'start' | 'auto'
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
  dir?: 'ltr' | 'rtl' | 'auto'
  id?: string
  isPrimaryHeading?: boolean
  isSemanticHeading?: boolean
  numberOfLines?: number
  preserveNewLines?: boolean
  suppressHydrationWarning?: boolean
  truncationTooltip?: any
  type: TypeKeys
}

const TetraText = forwardRef<HTMLSpanElement, TetraTextProps>(
  (
    {
      align = 'auto',
      children,
      color,
      dir = 'auto',
      id,
      isPrimaryHeading = false,
      isSemanticHeading = false,
      numberOfLines,
      preserveNewLines = false,
      suppressHydrationWarning,
      type,
      truncationTooltip,
    },
    ref,
  ) => {
    const classes1 = useStyles()
    const classes2 = useAlignStyles()
    const classes3 = useButtonColorStyles()
    const classes4 = useDefaultFontSizeStyles()
    const classes5 = useDensityModeFontStyles()
    const classes6 = usefontWeightStyles()
    const classes7 = useNestedBeforeOffsetStyles()
    const classes8 = useNestedAfterOffsetStyles()
    const classes9 = useOffsetValueStyles()

    const [densityMode, _] = useContext(CometDensityModeContext)

    const typo = CometTextTypography[type]

    const {
      fontFamily,
      fontSize,
      defaultColor = 'primary',
      fontWeight = 'normal',
      offsets = [0, 0],
    } = typo

    const offsetsValue = offsets.length === 3 ? offsets[2] : 0

    const typoColor = getTypoColor(
      color ?? defaultColor,
      type === 'button1' || type === 'button2',
    )

    const CometTextContextValue = useMemo(() => {
      return { color: typoColor, type }
    }, [typoColor, type])

    const baseTextContextValue = useBaseTextContext()

    const nested =
      (baseTextContextValue === undefined
        ? undefined
        : baseTextContextValue.nested) === true

    const textChild = (
      <BaseTextContextProvider nested>
        <CometTextContext.Provider value={CometTextContextValue}>
          <span
            className={mergeClasses(
              classes1.base,
              fontFamily,
              !nested && classes1.block,
              // @ts-ignore
              !nested && classes7[offsets[0]],
              !nested && classes1.block,
              !nested &&
                // @ts-ignore
                classes8[
                  numberOfLines !== undefined
                    ? offsets[1] + offsetsValue
                    : offsets[1]
                ],
              // @ts-ignore
              densityMode ? classes5[fontSize] : classes4[fontSize],
              // @ts-ignore
              classes6[fontWeight],
              // @ts-ignore
              classes3[typoColor],
              align !== 'auto' && classes2[align],
              preserveNewLines && classes1.preserveNewLines,
            )}
            dir={nested ? undefined : dir}
            id={id}
            ref={ref}
            suppressHydrationWarning={suppressHydrationWarning}
            data-testid={undefined}
          >
            {numberOfLines ? (
              <CometLineClamp
                lines={numberOfLines}
                truncationTooltip={truncationTooltip}
                // @ts-ignore
                className={offsetsValue !== 0 && classes9[offsetsValue]}
              >
                {children}
              </CometLineClamp>
            ) : (
              children
            )}
          </span>
        </CometTextContext.Provider>
      </BaseTextContextProvider>
    )

    return isSemanticHeading ? (
      <BaseHeading
        isPrimaryHeading={isPrimaryHeading}
        className={classes1.heading}
      >
        {textChild}
      </BaseHeading>
    ) : (
      textChild
    )
  },
)

TetraText.displayName = 'TetraText.react'

export default TetraText
