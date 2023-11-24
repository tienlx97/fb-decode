import React from 'react'
import { JSResource } from '@negiganaito/lazy-load-component'
import type { EntryPoint } from 'react-relay'
import { WebPixelRatio } from '@negiganaito/utils'

// @ts-ignore
const GeminiUserSettingsMenuEntryPoint: EntryPoint = {
  getPreloadProps(params: any) {
    return {
      queries: {
        Media: {
          parameters: c('GeminiUserSettingsMenuQuery$Parameters'),
          variables: {
            // scale: WebPixelRatio.get(),
            id: 15125,
          },
        },
      },
    }
  },

  root: JSResource(
    'GeminiUserSettingsMenu.react',
    () => import(/* webpackPrefetch: true */ './gemini-user-settings-menu'),
  ),
}

export default GeminiUserSettingsMenuEntryPoint
