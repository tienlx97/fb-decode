import '@negiganaito/react-components/src/styles/theme.css'
import '../styles/index.css'

import React from 'react'

import AppProvider from '@/utils/registry'
import { GoogleAnalytics } from '@/components/google-analystic'
import AuthProvider from '@/components/auth-provider'
import { CookieBanner } from '@/components/cookie-banner'

import GeminiApp from '@/components/gemini-app'
import { WorkGalahadNavStoreProvider } from '@/context/work-galahad-nav-store'
import { initTranslations } from '@/components/initTranslations'
import { AppTabIdHandler } from '@/components/app-tab-id-handler'

import { PipedriveRouteContext } from '@/context/pipedrive-route-context'
import { WorkGalahadDarkModeStateProvider } from '@/components/work-galahad-dark-mode-state-provider'
import { CometKeyboardSettingsStateProvider } from '@/components/comet-keyboard-settings-state-provider'

export const metadata = {
  title: 'ChiThanh Potal',
  description: 'ChiThanh portal',
}

initTranslations('vi_VN')

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="__fb-light-mode" id="portal" lang="vi" dir="ltr">
      <link
        rel="preload"
        href="/assets/icons/sprite.svg"
        as="image"
        type="image/svg+xml"
      />

      <GoogleAnalytics />
      <body className="body-custom system-fonts--body segoe">
        <CometKeyboardSettingsStateProvider>
          <WorkGalahadDarkModeStateProvider>
            <WorkGalahadNavStoreProvider>
              <AppTabIdHandler>
                <PipedriveRouteContext>
                  <AuthProvider>
                    <AppProvider className="app-custom">
                      <GeminiApp>{children}</GeminiApp>
                      <CookieBanner />
                    </AppProvider>
                  </AuthProvider>
                </PipedriveRouteContext>
              </AppTabIdHandler>
            </WorkGalahadNavStoreProvider>
          </WorkGalahadDarkModeStateProvider>
        </CometKeyboardSettingsStateProvider>
      </body>
    </html>
  )
}
