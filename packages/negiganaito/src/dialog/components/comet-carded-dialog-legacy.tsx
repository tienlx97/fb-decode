import React, { forwardRef, useId } from 'react'
import { useIsCometOnMobile } from '../hooks/use-is-comet-on-mobile'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { BaseDialog } from './base-dialog'
import { makeStyles, mergeClasses, shorthands } from '@griffel/react'
import {
  BaseHeadingContextWrapper,
  TetraText,
  TetraTextPairing,
} from '@negiganaito/text'
import { CometTrackingNodeProvider } from './comet-tracking-node-provider'
import { CometCircleButton } from '@negiganaito/button'
import { fbicon } from '@negiganaito/image'

const useStyles = makeStyles({
  anchor: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: 'var(--dialog-anchor-vertical-padding)',
    paddingBottom: 'var(--dialog-anchor-vertical-padding)',
    '@media (max-width: 564px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  anchorInMobileEnvironment: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  backButton: {
    position: 'absolute',
    left: '16px',
    top: '12px',
    zIndex: 1,
  },
  card: {
    backgroundColor: 'var(--card-background)',
    ...shorthands.borderRadius('var(--card-corner-radius)'),
    boxShadow:
      '0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset)',
    '@media (max-width: 564px)': {
      ...shorthands.borderRadius(0),
    },
  },
  closeButton: {
    right: '16px',
    position: 'absolute',
    top: '12px',
    zIndex: 1,
  },
  header: {
    boxSizing: 'border-box',
    height: '60px',
  },
  headerBottomBorder: {
    ...shorthands.borderBottom('1px', 'solid', 'var(--media-inner-border)'),
  },
  headerWithBackButton: {
    paddingLeft: '60px',
  },
  headerWithCloseButton: {
    paddingRight: '60px',
  },
  headerWithPadding: {
    paddingRight: '60px',
    paddingLeft: '60px',
  },
  rootInMobileEnvironment: {
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})

const e = makeStyles({
  headerBottomBorder: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--media-inner-border)',
  },
})

// c("gkx")("4855") = false
// var p = c("gkx")("4855") ? babelHelpers["extends"]({}, b, e) : b

const useSizeStyles = makeStyles({
  content: {
    maxWidth: '100%',
  },
  'content-mobile-safe': {
    width: '100%',
  },
  medium: {
    maxWidth: '700px',
    width: '100%',
  },
  small: {
    maxWidth: '548px',
    width: '100%',
  },
})

const useTitleHorizontalAlignmentStyles = makeStyles({
  center: {
    justifyContent: 'center',
  },
  start: {
    justifyContent: 'flex-start',
  },
})

const rightIcon = fbicon(
  {
    sprited: 2,
    spi: '/assets/workplace/uPfeic3zR5x.png',
    _spi: '/assets/workplace/uPfeic3zR5x.png',
    w: 20,
    h: 20,
    p: '0 -221px',
    sz: 'auto',
    loggingID: '514454',
  },
  20,
)

const LeftIcon = fbicon(
  {
    sprited: 2,
    spi: '/assets/workplace/uPfeic3zR5x.png',
    _spi: '/assets/workplace/uPfeic3zR5x.png',
    w: 20,
    h: 20,
    p: '0 -200px',
    sz: 'auto',
    loggingID: '512647',
  },
  20,
)

export type CometCardedDialogLegacyProps = {
  anchorXStyle?: any
  ariaLabel?: any
  rootXStyle?: any
  backButtonType?: any
  children?: any
  disableHeaderDivider?: any
  closeButtonType?: any
  closeButtonTestId?: string
  header?: any
  onBack?: any
  onClose?: any
  disableClosingWithMask?: any
  labelledBy?: any
  size?: any
  testid?: string
  title?: any
  titleWithEntities?: any
  subtitle?: any
  titleHorizontalAlignment?: any
  withBackButton?: boolean
  withCloseButton?: boolean
  withDeprecatedStyles?: boolean
}

export const CometCardedDialogLegacy = forwardRef<
  any,
  CometCardedDialogLegacyProps
>(
  (
    {
      anchorXStyle,
      ariaLabel,
      rootXStyle,
      backButtonType,
      children,
      disableHeaderDivider,
      closeButtonType,
      closeButtonTestId = 'close_button',
      header,
      onBack = function () {},
      onClose = function () {},
      disableClosingWithMask = false,
      labelledBy,
      size = 'small',
      testid,
      title,
      titleWithEntities,
      subtitle,
      titleHorizontalAlignment = 'center',
      withBackButton = false,
      withCloseButton = false,
      withDeprecatedStyles = true,
    },
    ref,
  ) => {
    const p = useStyles()
    const q = useSizeStyles()
    const r = useTitleHorizontalAlignmentStyles()

    const isCometMobile = useIsCometOnMobile()
    const contentSize =
      size === 'content-mobile-safe' && !isCometMobile ? 'content' : size
    const _title = title ?? titleWithEntities
    const id = useId()
    const fallbackId = !title && (header ?? titleWithEntities) ? id : void 0

    // d("Locale").isRTL();
    const isRTL = false

    return jsxs(BaseDialog, {
      anchorXStyle: mergeClasses(
        p.anchor,
        isCometMobile && p.anchorInMobileEnvironment,
        anchorXStyle,
      ),
      'aria-label': labelledBy ? void 0 : ariaLabel ?? title ?? undefined,
      'aria-labelledby': labelledBy ?? fallbackId,
      disableClosingWithMask,
      onClose,
      ref,
      rootXStyle: mergeClasses(
        isCometMobile && p.rootInMobileEnvironment,
        rootXStyle,
      ),
      testid: void 0,
      withDeprecatedStyles,
      // @ts-ignore
      className: mergeClasses(p.card, q[contentSize]),
      children: [
        header &&
          jsx('div', {
            className: mergeClasses(
              p.header,
              !disableHeaderDivider && p.headerBottomBorder,
              withCloseButton && p.headerWithCloseButton,
              withBackButton && p.headerWithBackButton,
              (withCloseButton || withBackButton) &&
                titleHorizontalAlignment === 'center' &&
                p.headerWithPadding,
            ),
            id: fallbackId,
            children: header,
          }),
        _title &&
          !header &&
          jsx('div', {
            className: mergeClasses(
              p.header,
              !disableHeaderDivider && p.headerBottomBorder,
              withCloseButton && p.headerWithCloseButton,
              withBackButton && p.headerWithBackButton,
              (withCloseButton || withBackButton) &&
                titleHorizontalAlignment === 'center' &&
                p.headerWithPadding,
            ),
            id: fallbackId,
            children: jsx('div', {
              className: mergeClasses(
                p.titleWrapper,
                // @ts-ignore
                r[titleHorizontalAlignment],
              ),
              children: subtitle
                ? jsx(TetraTextPairing, {
                    body: subtitle,
                    bodyLineLimit: 2,
                    headline: _title,
                    headlineLineLimit: 1,
                    isSemanticHeading: !0,
                    level: isCometMobile ? 3 : 2,
                    textAlign: 'center',
                  })
                : jsx(TetraText, {
                    isSemanticHeading: !0,
                    numberOfLines: 1,
                    type: isCometMobile
                      ? 'headlineEmphasized3'
                      : 'headlineEmphasized2',
                    children: _title,
                  }),
            }),
          }),
        withCloseButton
          ? jsx(CometTrackingNodeProvider, {
              trackingNode: 141,
              children: jsx('div', {
                className: p.closeButton,
                'data-testid': void 0,
                children: jsx(CometCircleButton, {
                  color: 'secondary',
                  icon: fbicon(
                    {
                      sprited: 2,
                      spi: '/assets/workplace/uPfeic3zR5x.png',
                      _spi: '/assets/workplace/uPfeic3zR5x.png',
                      w: 20,
                      h: 20,
                      p: '0 -494px',
                      sz: 'auto',
                      loggingID: '478233',
                    },
                    20,
                  ),
                  label: 'Close',
                  onPress: onClose,
                  size: 36,
                  type: closeButtonType,
                }),
              }),
            })
          : null,

        withBackButton
          ? jsx('div', {
              className: p.backButton,
              'data-testid': void 0,
              children: jsx(CometCircleButton, {
                color: 'secondary',
                icon: isRTL ? rightIcon : LeftIcon,
                label: 'Back',
                onPress: onBack,
                size: 36,
                type: backButtonType,
              }),
            })
          : null,
        jsx(BaseHeadingContextWrapper, {
          children,
        }),
      ],
    })
  },
)
