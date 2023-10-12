/* eslint-disable react/no-children-prop */
/* eslint-disable camelcase */

'use-client'

import dynamic from 'next/dynamic'
import React, { useCallback, useId, useMemo, useRef, useState } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import {
  FocusInertRegion,
  FocusWithinHandler,
  tabbableScopeQuery,
} from '@metamon/focus'
import { CometIcon, fbicon } from '@metamon/image'
import { CometComponentWithKeyCommands } from '@metamon/keyboards'
import {
  CometMenuBaseWithPopover,
  useCometFormSelectMenuTriggerKeyDownHandler,
  useCometFormSelectOnlyComboboxKeyConfigs,
} from '@metamon/popover'
import { CometFormInputWrapper } from '@metamon/text'
import { emptyFunction } from '@metamon/utils/common/empty-function'

import CometFormComboboxMenuItem from './comet-form-combobox-menu-item'

// import BaseContextualLayer from '@fb/components/base-contextual-layer'

const BaseContextualLayer = dynamic(
  // @ts-ignore
  () => import('@fb/components/base-contextual-layer'),
  {
    ssr: false,
  },
)

type CometFormSelectOnlyComboboxProps = {
  align?: any
  ariaLabel?: string
  auxItemType?: any
  defaultIcon?: any
  disabled?: boolean
  footer_deprecated?: any
  header?: any
  helperText?: any
  helperTextIsHidden?: boolean
  iconType?: any
  label?: string
  labelLocation_INTERNAL?: any
  labelRef?: any
  onNullValue?: any
  onValueChange?: any
  onVisibilityChange?: any
  options?: any
  position?: string
  size?: any
  testid?: string
  truncate?: boolean
  validationState?: any
  value?: any
}

const useStyles = makeStyles({
  button: {
    appearance: 'none',
    backgroundColor: 'transparent',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth(0),
    boxSizing: 'border-box',
    color: 'var(--primary-text)',
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: 1.25,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: '0',
    outlineStyle: 'none',
    paddingTop: '26px',
    paddingRight: '16px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    position: 'relative',
    textAlign: 'inherit',
    width: '100%',
    zIndex: 0,
  },
  buttonWithIcon: {
    paddingLeft: '52px',
  },
  disabled: {
    color: 'var(--disabled-text)',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  icon: {
    alignSelf: 'center',
    paddingRight: '16px',
  },
  labelOutsideButton: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  selectedIcon: {
    paddingLeft: '16px',
    paddingTop: '18px',
  },
  selectedProfilePicture: {
    paddingLeft: '16px',
    paddingTop: '12px',
  },
  truncated: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  wrapper: {
    width: '100%',
  },
  wrapperWithIcon: {
    marginLeft: '-36px',
  },
})

const useDummyStyles = makeStyles({
  dummy1: {
    paddingLeft: '16px',
    paddingTop: '18px',
  },

  dummy2: {
    paddingLeft: '16px',
    paddingTop: '12px',
  },

  dummy3: {
    alignSelf: 'center',
    paddingRight: '16px',
  },
})

export default function CometFormSelectOnlyCombobox({
  align,
  ariaLabel,
  auxItemType,
  defaultIcon,
  disabled = false,
  footer_deprecated,
  header,
  helperText,
  helperTextIsHidden = false,
  iconType = 'icon',
  label,
  labelLocation_INTERNAL,
  labelRef,
  onNullValue,
  onValueChange,
  onVisibilityChange = emptyFunction,
  options,
  position,
  size,
  testid,
  truncate = true,
  validationState,
  value,
  ...rest
}: CometFormSelectOnlyComboboxProps) {
  const classes = useStyles()
  const dummyclasses = useDummyStyles()

  const id1 = useId()
  const visibleId = useId()

  const [show, setShow] = useState(false)
  const [activeValue, setActiveValue] = useState(null)

  const isMenuVisible = useMemo(
    () => show && options.length > 0,
    [show, options],
  )
  // show && options.length > 0

  const contextRef = useRef(null)

  const filteredOptions = options.filter((option: any) => !option.disabled)
  const activeValueIndex = options.findIndex(
    (option: any) => option.value === activeValue,
  )

  const defaultOptionIconData = !defaultIcon
    ? undefined
    : {
        iconProps: defaultIcon,
        type: iconType,
      }

  let selectedOptionIcon: any = null
  let selectedOptionLabel: any = null

  const selectedOptions = options.find((option: any) => option.value === value)

  if (value && selectedOptions) {
    selectedOptionIcon = selectedOptions.icon
    selectedOptionLabel = selectedOptions.label
    if (iconType === 'profile-picture' && selectedOptionIcon) {
      selectedOptionIcon.shape =
        selectedOptionIcon.shape ?? selectedOptionIcon.style
      selectedOptionIcon.source = selectedOptionIcon.source ?? {
        uri: selectedOptionIcon.src,
      }
    }
  }

  const selectedOptionIconData = !selectedOptionIcon
    ? undefined
    : {
        iconProps: selectedOptionIcon,
        type: iconType,
      }

  const normalizeIcon = selectedOptionIconData ?? defaultOptionIconData

  const onShowCb = useCallback(() => {
    setShow(true)
    onVisibilityChange(true)
  }, [onVisibilityChange])

  const onHideCb = useCallback(() => {
    setActiveValue(null)
    setShow(false)
    onVisibilityChange(false)
  }, [onVisibilityChange])

  const onFocusChange = useCallback(
    (focusValue: any) => {
      if (!focusValue) {
        onHideCb()
      }
      // focusValue || onHideCb()
    },
    [onHideCb],
  )

  const mergeIds = (a: any, b: any) => {
    return a + '__' + (b ?? '0')
  }

  const onPressCb = useCallback(() => {
    if (isMenuVisible)
      activeValue
        ? onValueChange(activeValue)
        : !activeValue && onNullValue && onNullValue(null),
        onHideCb()
    else {
      setActiveValue(value ?? null)
      onShowCb()
    }
  }, [activeValue, isMenuVisible, onValueChange, onHideCb, onShowCb, value])

  const commandConfigs = useCometFormSelectOnlyComboboxKeyConfigs({
    activeValue: activeValue,
    filteredOptions: filteredOptions,
    isMenuVisible: isMenuVisible,
    onHide: onHideCb,
    onPress: onPressCb,
    onShow: onShowCb,
    setActiveValue: setActiveValue,
    value,
  })

  const comboboxKeyDown = useCometFormSelectMenuTriggerKeyDownHandler(
    setActiveValue,
    activeValue,
    filteredOptions,
    isMenuVisible,
    onShowCb,
  )

  return jsx(FocusWithinHandler, {
    onFocusChange,
    children: jsxs(CometComponentWithKeyCommands, {
      commandConfigs: disabled ? [] : commandConfigs,
      children: [
        jsx(CometFormInputWrapper, {
          addOnStart:
            normalizeIcon &&
            (normalizeIcon.type === 'icon'
              ? jsx('div', {
                  className: dummyclasses.dummy1, // 'x1swvt13 x109j2v6',
                  children: jsx(CometIcon, {
                    color: 'secondary',
                    icon: normalizeIcon.iconProps,
                  }),
                })
              : normalizeIcon.type === 'profile-picture'
              ? jsx('div', {
                  className: dummyclasses.dummy2, // 'x1swvt13 xz9dl7a',
                  children: jsx(
                    'CometProfilePhoto.react',
                    Object.assign({}, normalizeIcon.iconProps, {
                      size: 32,
                    }),
                  ),
                })
              : null),
          'aria-activedescendant':
            isMenuVisible && activeValue && activeValueIndex !== -1
              ? mergeIds(id1, activeValueIndex)
              : undefined,
          'aria-controls': isMenuVisible ? visibleId : undefined,
          'aria-expanded': isMenuVisible,
          'aria-haspopup': 'listbox',
          ariaLabel,
          auxContent: jsx('div', {
            className: dummyclasses.dummy3, //  'xamitd3 x1pi30zi',
            children: jsx(CometIcon, {
              color: 'primary',
              icon: fbicon(
                {
                  sprited: 2,
                  spi: '/assets/fb/yTUMQJovBsj.png',
                  _spi: '/assets/fb/yTUMQJovBsj.png',
                  w: 16,
                  h: 16,
                  p: '-119px -147px',
                  sz: 'auto',
                  loggingID: '481882',
                },
                16,
              ),
            }),
          }),
          comboboxKeyDown,
          cursor: 'pointer',
          disabled,
          helperText,
          helperTextIsHidden,
          label,
          // eslint-disable-next-line camelcase
          labelLocation_INTERNAL,
          labelRef,
          onPress: function (a: any) {
            if (a.target === contextRef.current) {
              return
            }
            onShowCb()
          },
          role: 'combobox',
          shrinkLabelOnFocus: false,
          validationState,
          value,
          children: ({ id }: any) => {
            return jsx('div', {
              className:
                normalizeIcon != null
                  ? classes.wrapperWithIcon
                  : classes.wrapper,
              id,
              ref: (a: any) => {
                contextRef.current = a
              },
              suppressHydrationWarning: true,
              children: jsx('div', {
                className: mergeClasses(
                  classes.button,
                  // eslint-disable-next-line camelcase
                  labelLocation_INTERNAL === 'outside' &&
                    classes.labelOutsideButton,
                  disabled && classes.disabled,
                  normalizeIcon != null && classes.buttonWithIcon,
                ),
                'data-testid': undefined,
                children: jsx('span', {
                  className: truncate && classes.truncated,
                  children: selectedOptionLabel ?? '\xa0',
                }),
              }),
            })
          },
        }),
        isMenuVisible &&
          jsx(
            BaseContextualLayer,
            Object.assign(
              {
                align: size === 'full' ? 'stretch' : align,
              },
              rest,
              {
                contextRef,
                children: jsx(FocusInertRegion, {
                  focusQuery: tabbableScopeQuery,
                  children: jsx(CometMenuBaseWithPopover, {
                    footer: footer_deprecated
                      ? {
                          text: footer_deprecated,
                        }
                      : undefined,
                    header,
                    id: visibleId,
                    role: 'listbox',
                    size,
                    truncate,
                    children: options.map((option: any, key: number) => {
                      const isSelected = option.value === value
                      return jsx(
                        CometFormComboboxMenuItem,
                        {
                          'aria-disabled': option.disabled,
                          'aria-setsize': options.length,
                          auxItemType,
                          bodyColor: option.bodyColor,
                          bodyText: option.bodyText,
                          disabled: option.disabled,
                          icon: option.icon,
                          iconType,
                          id: mergeIds(id1, key),
                          isSelected,
                          onClick: () => {
                            onValueChange(option.value)
                            onHideCb()
                          },
                          primaryText: option.label,
                          secondaryColor: option.secondaryColor,
                          secondaryText: option.secondaryText,
                          testid: undefined,
                          visuallyFocused: option.value === activeValue,
                        },
                        option.value,
                      )
                    }),
                  }),
                }),
              },
            ),
          ),
      ],
    }),
  })
}
