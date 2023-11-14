import React from 'react'
import { TetraButton } from '@negiganaito/button'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometEntryPointDialogTrigger } from './comet-entry-point-dialog-trigger'
import { HelpCenterLocaleDialog } from './help-center-locale-dialog'
import { CometTransientDialogProvider } from '@negiganaito/dialog/components/comet-transient-dialog-provider'

type HelpCenterHeaderLanguageSelectorProps = {
  buttonTheme?: string
  selectedLanguage?: string
}

export function HelpCenterHeaderLanguageSelector({
  buttonTheme,
  selectedLanguage,
}: HelpCenterHeaderLanguageSelectorProps) {
  return jsx(CometTransientDialogProvider, {
    children: jsx(CometEntryPointDialogTrigger, {
      dialogEntryPoint: {
        root: HelpCenterLocaleDialog,
      },
      otherProps: {
        currentLocale: 'e',
        helpIdentifier: 'FACEBOOK',
      },
      preloadParams: {
        helpIdentifier: 'FACEBOOK',
      },
      preloadTrigger: 'button',
      children: (
        onPress: any,
        onHoverIn: any,
        onHoverOut: any,
        onPressIn: any,
      ) => {
        return jsx(TetraButton, {
          label: selectedLanguage,
          onHoverIn,
          onHoverOut,
          onPress,
          onPressIn,
          size: 'large',
          type: buttonTheme,
        })
      },
    }),
  })
}
