/* eslint-disable camelcase */
import { CometPressable } from '@fb/components'
import CometCompositeStructureContext from '@fb/context/comet-composite-structure-context'
import CometDensityAwarenessContext from '@fb/context/comet-density-awareness-context'
import { CometDensityModeContext } from '@fb/context/comet-density-mode-context'
import CometFocusGroupContext from '@fb/context/comet-focus-group-context'
import CometFocusTableContext from '@fb/context/comet-focus-table-context'
import { TetraText, TetraTextPairing } from '@fb/tetra-text'
import { getItemRoleFromCompositeRole } from '@fb/utils/get-item-role-from-composite-role'
import { mergeClasses } from '@griffel/react'
import React, { forwardRef, useContext } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import {
  useDummyStyles,
  useEndVerticalAlignStyles,
  useStartVerticalAlignStyles,
  useStyles,
} from './styles'
import { CometIcon, CometSkittleIcon } from '@fb/tetra-icon'
import { getEndAddOn } from '../get-list-cell-add-on'

type CometListCellStrictProps = {
  addOnBottom?: any
  addOnEnd?: any
  addOnEndDisabled?: any
  addOnEndRef?: any
  addOnEndTestId?: any
  addOnEndVerticalAlign?: string
  addOnStart?: any
  addOnStartCssSelectionId?: any
  addOnStartDisabled?: any
  addOnStartOverrideVerticalStyle?: any
  addOnStartTestId?: any
  addOnStartVerticalAlign?: any
  'aria-label'?: string
  'aria-pressed'?: string
  body?: any
  bodyColor?: any
  bodyLineLimit?: any
  contentHorizontalPadding?: any
  dataAttributes?: any
  describedby?: any
  disabled?: boolean
  emphasized?: boolean
  focusable?: boolean
  hasBottomDivider?: any
  headline?: any
  headlineAddOn?: any
  headlineColor?: any
  headlineLineLimit?: any
  level?: number
  linkProps?: any
  meta?: any
  metaColor?: any
  metaLineLimit?: any
  metaLocation?: any
  onFocusChange?: any
  onHoverIn?: any
  onHoverOut?: any
  onPress?: any
  onPressIn?: any
  onPressOut?: any
  paddingHorizontal?: any
  role?: any
  selected?: boolean
  selectedBackground?: any
  size?: string
  testid?: string
  testOnly_pressed?: any
}

const CometListCellStrict = forwardRef<HTMLElement, CometListCellStrictProps>(
  (
    {
      addOnBottom,
      addOnEnd,
      addOnEndDisabled,
      addOnEndRef,
      addOnEndTestId,
      addOnEndVerticalAlign = 'top',
      addOnStart,
      addOnStartCssSelectionId,
      addOnStartDisabled,
      addOnStartOverrideVerticalStyle,
      addOnStartTestId,
      addOnStartVerticalAlign = 'top',
      'aria-label': ariaLabel,
      'aria-pressed': ariaPressed,
      body,
      bodyColor = 'secondary',
      bodyLineLimit,
      contentHorizontalPadding,
      dataAttributes,
      describedby,
      disabled = false,
      emphasized = false,
      focusable,
      hasBottomDivider,
      headline,
      headlineColor = 'primary',
      headlineAddOn,
      headlineLineLimit,
      level = 3,
      linkProps,
      meta,
      metaColor = 'tertiary',
      metaLineLimit,
      metaLocation,
      onFocusChange,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      onPressOut,
      paddingHorizontal,
      role,
      selected = false,
      selectedBackground,
      size = 'default',
      testid,
      testOnly_pressed,
    },
    ref,
  ) => {
    const classes = useStyles()
    const startVerticalAlignClasses = useStartVerticalAlignStyles()
    const endVerticalAlignClasses = useEndVerticalAlignStyles()
    const dymmyClasses = useDummyStyles()

    let disabledInternal = disabled
    let onPressInternal = onPress

    if (!onPress && (!addOnEnd ? undefined : addOnEnd.type) === 'switch') {
      onPressInternal = (!addOnEnd ? undefined : addOnEnd.onChange)
        ? addOnEnd.onChange
        : onPress
      disabledInternal = (!addOnEnd ? undefined : addOnEnd.disabled)
        ? addOnEnd.disabled
        : disabled
    }

    const cometDensityModeValue = useContext(CometDensityModeContext)
    const densityMode = cometDensityModeValue[0] as boolean
    const cometDensityAwarenessContextValue = useContext(
      CometDensityAwarenessContext,
    )

    const onlyHeadline = headline && !body && !meta
    const onlyBody = !headline && body && !meta
    const onlyMeta = !headline && !body && meta
    const Z =
      (onlyHeadline && headlineLineLimit && headlineLineLimit === 1) ||
      (onlyBody && bodyLineLimit && bodyLineLimit === 1) ||
      (onlyMeta && metaLineLimit && metaLineLimit === 1)

    const multipleLinesLimitExceeded =
      (onlyHeadline && headlineLineLimit && headlineLineLimit > 1) ||
      (onlyBody && bodyLineLimit && bodyLineLimit > 1) ||
      (onlyMeta && metaLineLimit && metaLineLimit > 1)

    const addOnEndButtonTypeIs_primary_secondary_body =
      addOnEnd &&
      (addOnEnd.type === 'primary-button' ||
        addOnEnd.type === 'secondary-button' ||
        addOnEnd.type === 'body')

    const addOnEndIsExpander = addOnEnd && addOnEnd.type === 'expander'

    const p =
      addOnEndButtonTypeIs_primary_secondary_body || addOnEndIsExpander
        ? 'center'
        : addOnEndVerticalAlign
    const u = Z ? 'center' : addOnStartVerticalAlign
    var addOnBottomTypeIsButton = addOnBottom && addOnBottom.type === 'buttons'

    const variableMakeMeConfused =
      !addOnStart &&
      (multipleLinesLimitExceeded ||
        (Z &&
          (addOnEndButtonTypeIs_primary_secondary_body || addOnEndIsExpander)))

    const dataAttrValue = dataAttributes
      ? Object.keys(dataAttributes).reduce(function (a: any, b) {
          a != null && b != null && (a['data-' + b] = dataAttributes[b])
          return a
        }, {})
      : null

    var _children = jsxs('div', {
      className: mergeClasses(
        classes.root,
        addOnEndIsExpander &&
          size !== 'small' &&
          classes.rootWithIncreasedHeight,
        size !== 'small' && classes.listCellMinHeight,
      ),
      style: !contentHorizontalPadding
        ? undefined
        : {
            paddingLeft: contentHorizontalPadding,
            paddingRight: contentHorizontalPadding,
          },
      children: [
        addOnStart
          ? jsx('div', {
              className: mergeClasses(
                classes.startAddOn,
                addOnStartOverrideVerticalStyle,
                // @ts-ignore
                startVerticalAlignClasses[u],
                densityMode && classes.startAddOnDense,
                cometDensityAwarenessContextValue &&
                  classes.startAddOnDensityAware,
              ),
              'data-testid': undefined,
              id: addOnStartCssSelectionId,
              children: jsx(AddOnStartComp, {
                addOnStart,
                disabled: addOnStartDisabled ?? disabledInternal, // (A = s) != null ? A : a,
              }),
            })
          : null,
        jsxs('div', {
          className: dymmyClasses.dummy1,
          children: [
            jsxs('div', {
              className: mergeClasses(
                classes.content,
                densityMode && classes.contentDense,
                variableMakeMeConfused && classes.contentWithMoreSpacing,
                variableMakeMeConfused &&
                  densityMode &&
                  classes.contentWithMoreSpacingDense,
                addOnBottomTypeIsButton && classes.responsiveContent,
              ),
              children: [
                jsx('div', {
                  className: mergeClasses(
                    addOnBottomTypeIsButton && classes.responsiveText,
                  ),
                  children: jsx(TetraTextPairing, {
                    body,
                    bodyColor: disabledInternal ? 'disabled' : bodyColor,
                    bodyLineLimit,
                    headline,
                    headlineAddOn,
                    headlineColor: disabledInternal
                      ? 'disabled'
                      : headlineColor,
                    headlineLineLimit,
                    level,
                    meta,
                    metaColor: disabledInternal ? 'disabled' : metaColor,
                    metaLineLimit,
                    metaLocation,
                    reduceEmphasis: emphasized === false,
                  }),
                }),
                addOnBottom &&
                  jsx('div', {
                    className: mergeClasses(
                      classes.bottomAddOn,
                      addOnBottom.type === 'facepile' &&
                        classes.bottomAddOnWithFacepile,
                      addOnBottom.type === 'override-row' &&
                        classes.bottomAddOnOverrideRow,
                      addOnBottomTypeIsButton && classes.responsiveButtons,
                    ),
                    children: jsx('div', {
                      className: dymmyClasses.dummy2,
                      children: jsx(AddOnBottomComp, {
                        addOnBottom,
                      }),
                    }),
                  }),
              ],
            }),
            addOnEnd
              ? jsx('div', {
                  className: mergeClasses(
                    size !== 'small' && classes.endAddOn,
                    size === 'small' && classes.endAddOnSmall,
                    (addOnEndButtonTypeIs_primary_secondary_body ||
                      addOnEndIsExpander) &&
                      classes.endAddOnCenter,
                    // @ts-ignore
                    endVerticalAlignClasses[p],
                  ),
                  'data-testid': undefined,
                  ref: addOnEndRef,
                  children: jsx(AddOnEndComp, {
                    addOn: addOnEnd,
                    disabled: addOnEndDisabled ?? disabledInternal, // (t = f) != null ? t : a,
                    level,
                  }),
                })
              : null,
            hasBottomDivider ?? false //  ((u = ba) != null ? u : !1)
              ? jsx('div', {
                  className: dymmyClasses.dummy3,
                })
              : null,
          ],
        }),
      ],
    })

    const addOnEndExpanderComp =
      addOnEnd &&
      addOnEnd.type === 'expander' &&
      addOnEnd.open &&
      addOnEnd.children
        ? addOnEnd.children
        : null

    let checkbox_radio_switch: any = undefined,
      checkbox_radio_switch_Type = undefined

    if (addOnEnd) {
      switch (addOnEnd.type) {
        case 'checkbox':
          checkbox_radio_switch_Type = addOnEnd.on
          checkbox_radio_switch = 'checkbox'
          break
        case 'radio':
          checkbox_radio_switch_Type = addOnEnd.on
          checkbox_radio_switch = 'radio'
          break
        case 'switch':
          checkbox_radio_switch_Type = addOnEnd.value
          checkbox_radio_switch = 'switch'
          break
      }
    }

    const addOnEndExpanderAria =
      addOnEnd &&
      addOnEnd.type === 'expander' &&
      addOnEnd.open &&
      addOnEnd.children

    const { FocusItem } = useContext(CometFocusGroupContext)

    const { FocusCell, FocusRow } = useContext(CometFocusTableContext)

    const { role: cometCompositeStructureRole } = useContext(
      CometCompositeStructureContext,
    )

    const normalizeRole =
      role ?? getItemRoleFromCompositeRole(cometCompositeStructureRole)
    const FocusComp =
      normalizeRole === 'row' && FocusRow
        ? FocusRow
        : FocusItem ?? React.Fragment

    const FocusCellComp = FocusCell ?? React.Fragment

    return jsxs(FocusComp, {
      children: [
        jsx(
          'div',
          Object.assign(
            {},
            {
              'aria-selected':
                normalizeRole === 'option' ? selected : undefined,
              role: normalizeRole ?? undefined, // (E = I) != null ? E : void 0,
              style: {
                paddingLeft: paddingHorizontal ?? 8, // ($ = Q) != null ? $ : 8,
                paddingRight: paddingHorizontal ?? 8, // (d = Q) != null ? d : 8,
              },
            },
            dataAttrValue,
            {
              children: jsx(FocusCellComp, {
                children:
                  onPressInternal || linkProps
                    ? jsx(CometPressable, {
                        'aria-checked': checkbox_radio_switch_Type,
                        'aria-current': selected ? 'page' : undefined,
                        'aria-describedby': describedby ?? undefined,
                        'aria-expanded':
                          addOnEnd && addOnEnd.type === 'expander'
                            ? addOnEndExpanderAria
                            : undefined,
                        'aria-label': ariaLabel,
                        'aria-pressed': ariaPressed,
                        disabled: disabledInternal,
                        display: 'block',
                        focusable,
                        linkProps,
                        onFocusChange,
                        onHoverIn,
                        onHoverOut,
                        onPress: onPressInternal,
                        onPressIn,
                        onPressOut,
                        overlayDisabled: selected,
                        overlayFocusRingPosition: 'inset',
                        ref,
                        role: checkbox_radio_switch,
                        // eslint-disable-next-line camelcase
                        testOnly_pressed,
                        testid: undefined,
                        className: mergeClasses(
                          classes.pressable,
                          selected &&
                            selectedBackground !== 'none' &&
                            classes.selected,
                          selected &&
                            selectedBackground === 'wash' &&
                            classes.selectedWashBackground,
                          disabledInternal && classes.disabled,
                        ),
                        children: _children,
                      })
                    : jsx('div', {
                        className: mergeClasses(
                          classes.pressable,
                          selected && classes.selected,
                          selected &&
                            selectedBackground === 'wash' &&
                            classes.selectedWashBackground,
                          disabledInternal && classes.disabled,
                        ),
                        'data-testid': void 0,
                        ref,
                        children: _children,
                      }),
              }),
            },
          ),
        ),
        addOnEndExpanderComp,
      ],
    })
  },
)

function AddOnStartComp(props: any) {
  const { addOnStart, disabled } = props

  switch (addOnStart.type) {
    case 'icon': {
      const { type, ...rest } = addOnStart

      return jsx(
        CometIcon,
        Object.assign({}, rest, {
          disabled: disabled,
        }),
      )
    }
    case 'profile-photo': {
      // addOnStart.type
      // d = babelHelpers.objectWithoutPropertiesLoose(addOnStart, ['type'])
      // return h.jsx(c('CometProfilePhoto.react'), babelHelpers['extends']({}, d))
      return null
    }
    case 'profile-photo-for-actor': {
      // addOnStart.type
      // d = babelHelpers.objectWithoutPropertiesLoose(addOnStart, ['type'])
      // return h.jsx(
      //   c('CometProfilePhotoForActor.react'),
      //   babelHelpers['extends']({}, d),
      // )
      return null
    }
    case 'contained-icon': {
      const { color = 'gray', type, ...rest } = addOnStart

      return jsx(CometSkittleIcon, Object.assign({ color }, rest, { disabled }))
      // d = addOnStart.color
      // d = d === void 0 ? 'gray' : d
      // addOnStart.type
      // var e = babelHelpers.objectWithoutPropertiesLoose(addOnStart, [
      //   'color',
      //   'type',
      // ])
      // return h.jsx(
      //   c('CometSkittleIcon.react'),
      //   babelHelpers['extends'](
      //     {
      //       color: d,
      //     },
      //     e,
      //     {
      //       disabled: disabled,
      //     },
      //   ),
      // )
    }
    case 'contained-progress-ring-indeterminate': {
      // return h.jsx(c('CometProgressSkittleIndeterminate.react'), {})
      return null
    }
    case 'messenger-facepile': {
      // addOnStart.type
      // d = babelHelpers.objectWithoutPropertiesLoose(addOnStart, ['type'])
      // return h.jsx(
      //   c('MWJewelThreadFacepile.react'),
      //   babelHelpers['extends']({}, d),
      // )
      return null
    }
    case 'override': {
      return addOnStart.component
    }
    case 'emoji': {
      // e = addOnStart.color
      // disabled = e === void 0 ? 'gray' : e
      // d = addOnStart.emoji
      // e = addOnStart.emojiSize
      // e = e === void 0 ? 20 : e
      // var f = addOnStart.size
      // f = f === void 0 ? 40 : f
      // return h.jsx(c('CometSkittleEmoji.react'), {
      //   color: disabled,
      //   emoji: d,
      //   emojiSize: e,
      //   size: f,
      // })
      return null
    }
    case 'sprite': {
      // disabled = addOnStart.sprite
      // return h.jsx(c('CometImageFromIXValueRelayWrapper.react'), {
      //   sprite: disabled,
      // })

      return null
    }
    default: {
      addOnStart.type
      return null
    }
  }
}

function AddOnBottomComp(props: any) {
  const { addOnBottom } = props
  switch (addOnBottom.type) {
    case 'facepile':
      return addOnBottom.facepile
    default:
      return addOnBottom.component
  }
}

function AddOnEndComp(props: any) {
  const { addOn, disabled, level } = props
  const classes = useStyles()

  const dummyClasses = useDummyStyles()

  const f = getEndAddOn(addOn, disabled, level)
  const g = addOn.type === 'disclosure' && addOn.text ? addOn.text : undefined

  return jsxs('div', {
    clasName: mergeClasses(
      classes.addOn,
      addOn.type === 'switch' && classes.visualSwitch,
    ),
    children: [
      g &&
        jsx('div', {
          className: dummyClasses.dummy4,
          children: jsx(TetraText, {
            color: disabled ? 'disabled' : 'secondary',
            numberOfLines: 1,
            type: level === 3 ? 'body2' : 'body3',
            children: g,
          }),
        }),
      jsx('div', {
        className: mergeClasses(
          addOn.type === 'expander' && classes.addOnWithExpander,
          g && classes.addOnWithText,
          addOn.type === 'icon' && classes.addOnWithIcon,
        ),
        children: f,
      }),
    ],
  })
}

export default CometListCellStrict
