import { CometHideLayerOnEscape } from '@negiganaito/keyboards'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { CometRowItem } from './comet-row-item'
import { TetraButton } from '@negiganaito/button'
import { CometRow } from './comet-row'
import { CometCardedDialogLegacy } from '@negiganaito/dialog'

type HelpCenterLocaleDialogProps = {
  currentLocale?: string
  onClose?: any
  onHide?: any
}

export function HelpCenterLocaleDialog({
  currentLocale,
  onClose,
}: HelpCenterLocaleDialogProps) {
  return jsx(CometHideLayerOnEscape, {
    onHide: onClose,
    children: jsxs(CometCardedDialogLegacy, {
      onClose,
      title: 'Select your language',
      withCloseButton: !0,
      children: [
        // jsx('div', {
        //   className: 'xqui205 xqmxbcd x1hq5gj4 xmupa6y',
        //   children: jsx(c('HelpCenterLocaleSearchBar.react'), {
        //     queryReference: a.typeaheadQueryReference,
        //     setLocale: j,
        //   }),
        // }),
        jsxs(CometRow, {
          align: 'end',
          paddingVertical: 16,
          spacingHorizontal: 8,
          children: [
            jsx(CometRowItem, {
              children: jsx(TetraButton, {
                label: 'Cancel',
                onPress: onClose,
                type: 'secondary',
              }),
            }),
            jsx(CometRowItem, {
              children: jsx(TetraButton, {
                // disabled: n == null || n.label === f,
                label: `Save Changes`,
                onPress: () => {}, // p,
                type: 'primary',
              }),
            }),
          ],
        }),
      ],
    }),
  })
}
