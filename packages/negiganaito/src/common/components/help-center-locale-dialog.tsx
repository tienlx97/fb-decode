import React from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import { TetraButton } from '@negiganaito/button'
import { CometCardedDialogLegacy } from '@negiganaito/dialog'
import { CometHideLayerOnEscape } from '@negiganaito/keyboards'

import { CometRow } from './comet-row'
import { CometRowItem } from './comet-row-item'

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
    // @ts-ignore
    children: jsxs(CometCardedDialogLegacy, {
      onClose,
      title: 'Select your language',
      withCloseButton: true,
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
                disabled: true,
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
