import '@negiganaito/react-components/src/styles/theme.css'
import '../styles/index.css'

import React from 'react'

import { AppTabIdHandler } from '@/components/app-tab-id-handler'
import { CometKeyboardSettingsStateProvider } from '@/components/comet-keyboard-settings-state-provider'
import { CookieBanner } from '@/components/cookie-banner'
import GeminiApp from '@/components/gemini-app'
import { GoogleAnalytics } from '@/components/google-analystic'
import { WorkGalahadDarkModeStateProvider } from '@/components/work-galahad-dark-mode-state-provider'
import { PipedriveRouteContext } from '@/context/pipedrive-route-context'
import { WorkGalahadNavStoreProvider } from '@/context/work-galahad-nav-store'
import AppProvider from '@/utils/registry'
import { RelayProvider } from '@/utils/relay/relay-environment'

export const metadata = {
  title: 'ChiThanh Potal',
  description: 'ChiThanh portal',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="__fb-light-mode" id="portal" lang="vi" dir="ltr">
      <GoogleAnalytics />
      <body className="body-custom system-fonts--body segoe">
        <RelayProvider>
          <CometKeyboardSettingsStateProvider>
            <WorkGalahadDarkModeStateProvider>
              <WorkGalahadNavStoreProvider>
                <AppTabIdHandler>
                  <PipedriveRouteContext>
                    <AppProvider className="app-custom">
                      <GeminiApp>{children}</GeminiApp>
                      <CookieBanner />
                    </AppProvider>
                  </PipedriveRouteContext>
                </AppTabIdHandler>
              </WorkGalahadNavStoreProvider>
            </WorkGalahadDarkModeStateProvider>
          </CometKeyboardSettingsStateProvider>
        </RelayProvider>
      </body>
    </html>
  )
}
