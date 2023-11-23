import React from 'react'
import { JSResource } from '@negiganaito/lazy-load-component'
import type { EntryPoint } from 'react-relay'

type Params = any

// @ts-ignore
const GeminiUserSettingsMenuEntryPoint: EntryPoint = {
  getPreloadProps(params: any) {
    return {
      queries: {
        menuQueryReference: {
          parameters: c('GeminiUserSettingsMenuQuery$Parameters'),
          variables: {
            scale: d('WebPixelRatio').get(),
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
