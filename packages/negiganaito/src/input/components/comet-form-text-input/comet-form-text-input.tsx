/* eslint-disable camelcase */

'use client'

import {
  CometIcon,
  CometFormInputPasswordStateIcon,
  ImageIconSource,
} from '@negiganaito/image'
import { CometFormInputWrapper } from '@negiganaito/text'
import { mergeClasses } from '@griffel/react'
import React, { forwardRef, useState } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseTextInput } from '../base-text-input'
import { useStyles } from './styles'
import { CometPressable } from '@negiganaito/pressable'
import { useBaseInputValidators } from '../../hooks'

type CometFormTextInputProps = {
  autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD?: boolean
  auxContent?: any
  emojiSkittle?: any
  helperText?: any
  helperTextIsHidden?: boolean
  icon?: any
  label?: string
  labelRef?: any
  onValueChange?: (value: string, event: React.ChangeEvent<HTMLElement>) => void
  suppressFocusRing?: boolean
  testid?: string
  validationState?: any
  validator?: any
}

const CometFormTextInput = forwardRef<
  HTMLInputElement,
  CometFormTextInputProps & React.JSX.IntrinsicElements['input']
>(
  (
    {
      autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
      auxContent,
      disabled = false,
      emojiSkittle,
      helperText,
      helperTextIsHidden = false,
      icon,
      inputMode,
      label,
      labelRef,
      maxLength,
      onBlur,
      onClick,
      onFocus,
      onValueChange,
      placeholder,
      readOnly,
      suppressFocusRing,
      type = 'text',
      validationState,
      validator,
      value,
      className,
      autoComplete,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const { topResultReason, topResultType } = useBaseInputValidators({
      validator,
      value: value ?? '',
    })

    const isPassword = type === 'password'

    const [isPress, setPress] = useState(false)

    const isPasswordIcon = isPassword && Boolean(value)

    const PasswordIcon = isPasswordIcon ? (
      <div className={classes.dummy1}>
        <div className={classes.dummy2}>
          <CometPressable onPress={() => setPress(!isPress)} overlayDisabled>
            <CometFormInputPasswordStateIcon isVisible={isPress} />
          </CometPressable>
        </div>
      </div>
    ) : null

    const typeAfterChange = isPassword ? (isPress ? 'text' : 'password') : type
    const normalTopResultType =
      topResultType !== 'CORRECT' ? topResultType : validationState

    return jsx(CometFormInputWrapper, {
      addOnStart:
        (icon &&
          icon instanceof ImageIconSource &&
          icon.height === 40 &&
          jsx('div', {
            className: mergeClasses(classes.icon, classes.largeImageIcon),
            children: jsx('CometImage', {
              height: parseInt(icon.height.toString(), 10),
              src: icon.src,
              width: parseInt(icon.width.toString(), 10),
              className: classes.imageIcon,
            }),
          })) ||
        (icon &&
          jsx('div', {
            className: classes.icon,
            children: jsx(CometIcon, {
              color: 'secondary',
              icon,
            }),
          })) ||
        (emojiSkittle &&
          jsx('div', {
            className: classes.emoji,
            children: emojiSkittle,
          })),
      auxContent: PasswordIcon ?? auxContent,
      cursor: 'text',
      disabled,
      helperText: topResultReason ?? helperText,
      helperTextIsHidden,
      label,
      labelRef,
      suppressFocusRing,
      validationState: normalTopResultType,
      value,
      children: ({ focused, helperTextID, id }: any) => {
        return jsx(
          BaseTextInput,
          Object.assign(
            {},
            {
              'aria-describedby': helperTextID,
              'aria-invalid': normalTopResultType === 'ERROR',
              autoComplete,
              autoFocus: autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
              disabled,
              id,
              inputMode,
              maxLength,
              onBlur,
              onClick,
              onFocus,
              onValueChange,
              placeholder: focused ? placeholder : null,
              readOnly,
              ref,
              suppressFocusRing: true,
              testid: undefined,
              type: typeAfterChange,
              value,
              className: mergeClasses(
                classes.input,
                disabled && classes.disabled,
                readOnly && readOnly === true && classes.readOnly,
                className,
              ),
            },
            rest,
          ),
        )
      },
    })
  },
)

export default CometFormTextInput
