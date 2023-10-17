import { makeStyles, mergeClasses } from '@griffel/react'
import { BaseView } from '@negiganaito/common'
import { FocusRegion, tabbableScopeQuery } from '@negiganaito/focus'
import { useCurrentDisplayMode } from '@negiganaito/hooks'
import { BaseInlinePressable } from '@negiganaito/pressable'
import { BaseTheme } from '@negiganaito/styles'
import React, { useId, useMemo } from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

const config = {
  dark: '__fb-dark-mode ',
  light: '__fb-light-mode ',
  type: 'CLASSNAMES',
}
const useStyles = makeStyles({
  item: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 'var(--toast-addon-padding-vertical)',
    paddingRight: 'var(--toast-addon-padding-horizontal)',
    paddingLeft: 'var(--toast-addon-padding-horizontal)',
    paddingTop: 'var(--toast-addon-padding-vertical)',
  },
  itemText: {
    flexGrow: 1,
  },
  link: {
    wordBreak: 'keep-all',
  },
  root: {
    alignItems: 'center',
    backgroundColor: 'var(--toast-background)',
    borderTopLeftRadius: 'var(--toast-corner-radius)',
    borderTopRightRadius: 'var(--toast-corner-radius)',
    borderBottomRightRadius: 'var(--toast-corner-radius)',
    borderBottomLeftRadius: 'var(--toast-corner-radius)',
    boxShadow: 'var(--shadow-elevated)',
    display: 'flex',
    flexShrink: 0,
    maxWidth: 'var(--toast-container-max-width)',
    minWidth: 'var(--toast-container-min-width)',
    paddingLeft: 'var(--toast-container-padding-horizontal)',
    paddingRight: 'var(--toast-container-padding-horizontal)',
    paddingTop: 'var(--toast-container-padding-vertical)',
    paddingBottom: 'var(--toast-container-padding-vertical)',
  },
  rootFullWidth: {
    width: '100%',
  },
})

type BaseToastProps = {
  action?: any
  addOnStart?: any
  closeButton?: any
  linkWrapper?: any
  message?: any
  onDismiss?: any
  size?: string
  testid?: string
  toastRef?: any
  useInvertedDisplayMode?: boolean
}

export function BaseToast({
  action,
  addOnStart,
  closeButton,
  linkWrapper,
  message,
  onDismiss,
  size = 'full-width',
  testid,
  toastRef,
  useInvertedDisplayMode = true,
}: BaseToastProps) {
  const classes = useStyles()

  const displayMode = useCurrentDisplayMode() === 'dark' ? 'light' : 'dark'

  const toastMessageId = useId()
  const ariaProps = useMemo(
    function () {
      if (action != null) return {}
      else
        return {
          'aria-atomic': !0,
          role: 'alert',
        }
    },
    [action],
  )
  const Wrapper = jsxs(React.Fragment, {
    children: [
      addOnStart != null &&
        jsx(BaseView, {
          xstyle: classes.item,
          children: addOnStart,
        }),
      jsx(
        BaseView,
        Object.assign(
          {
            className: mergeClasses(classes.item, classes.itemText),
          },
          ariaProps,
          {
            children: message({
              toastMessageId: toastMessageId,
            }),
          },
        ),
      ),
      action != null &&
        jsx(FocusRegion, {
          autoFocusQuery: tabbableScopeQuery,
          children: jsx(BaseView, {
            'aria-labelledby': toastMessageId,
            role: 'group',
            xstyle: classes.item,
            children:
              action.element != null
                ? action.element
                : action.labelRenderer &&
                  jsx(BaseInlinePressable, {
                    onPress: function (a: any) {
                      onDismiss()
                      action.onPress(a)
                    },
                    testid: void 0,
                    className: classes.link,
                    children: action.labelRenderer(action.label),
                  }),
          }),
        }),
      closeButton != null &&
        jsx(BaseView, {
          className: classes.item,
          children: closeButton,
        }),
    ],
  })
  const linkWrapperComp = linkWrapper != null ? linkWrapper(Wrapper) : Wrapper
  return useInvertedDisplayMode
    ? jsx(BaseTheme, {
        config: config,
        displayMode: displayMode,
        ref: toastRef,
        testid: void 0,
        className: mergeClasses(
          classes.root,
          size === 'full-width' && classes.rootFullWidth,
        ),
        children: linkWrapperComp,
      })
    : jsx(BaseView, {
        ref: toastRef,
        testid: void 0,
        className: mergeClasses(
          classes.root,
          size === 'full-width' && classes.rootFullWidth,
        ),
        children: linkWrapperComp,
      })
}
