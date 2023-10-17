import React, { useMemo } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { makeStyles } from '@griffel/react'
import { CometCircleButton } from '@negiganaito/button'
import { fbicon } from '@negiganaito/image'
import { CometPressable } from '@negiganaito/pressable'
import { TetraText } from '@negiganaito/text'

import { BaseToast } from './base-toast'

const useStyles = makeStyles({
  pressable: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
})

type CometToastProps = {
  action?: any
  href?: string
  icon?: any
  impressionLoggingRef?: any
  message: string
  onDismiss?: any
  supressCloseButton?: boolean
  target?: any
  testid?: string
  truncateText?: boolean
  onPress?: any
}

export function CometToast({
  action,
  href,
  icon,
  impressionLoggingRef,
  message,
  onDismiss,
  supressCloseButton = false,
  target,
  testid = 'Toast',
  truncateText = false,
  ...rest
}: CometToastProps) {
  const classes = useStyles()

  const linkProps = useMemo(
    function () {
      return href != null
        ? {
            target: target,
            url: href,
          }
        : void 0
    },
    [href, target],
  )
  return jsx(BaseToast, {
    action:
      action != null
        ? {
            label: action.label,
            labelRenderer: (child: any) => {
              return jsx(TetraText, {
                color: 'blueLink',
                numberOfLines: 1,
                type: 'body3',
                children: child,
              })
            },
            onPress: action.onPress,
            testid: action.testid,
          }
        : void 0,
    addOnStart: icon,
    closeButton:
      supressCloseButton !== !0 &&
      jsx(CometCircleButton, {
        icon: fbicon(
          {
            sprited: 2,
            spi: '/assets/workplace/HuPTUqOhf0o.png',
            _spi: '/assets/workplace/HuPTUqOhf0o.png',
            w: 12,
            h: 12,
            p: '-124px -147px',
            sz: 'auto',
          },
          12,
        ),
        label: 'Close',
        onPress: onDismiss,
        size: 24,
      }),
    linkWrapper:
      rest.onPress != null || linkProps != null
        ? function (child: any) {
            return jsx(
              CometPressable,
              Object.assign({}, rest, {
                expanding: !0,
                linkProps: linkProps,
                className: classes.pressable,
                children: child,
              }),
            )
          }
        : void 0,
    message: ({ toastMessageId }: any) => {
      return jsx(TetraText, {
        color: 'primary',
        id: toastMessageId,
        numberOfLines: truncateText ? 4 : void 0,
        type: 'body3',
        children: message,
      })
    },
    onDismiss: onDismiss,
    testid: void 0,
    toastRef: impressionLoggingRef,
  })
}
