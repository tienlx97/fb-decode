import '@negiganaito/react-components/src/styles/theme.css'

import '../styles/index.css'

import React, { useEffect } from 'react'

import AppProvider from '@/utils/registry'
import { GoogleAnalytics } from '@/components/google-analystic'
import AuthProvider from '@/components/auth-provider'
import { CookieBanner } from '@/components/cookie-banner'

import GeminiApp from '@/components/gemini-app'
import { WorkGalahadNavStoreProvider } from '@/context/work-galahad-nav-store'

export const metadata = {
  title: 'ChiThanh Potal',
  description: 'ChiThanh portal',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('123')

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
        <div
          style={{
            position: 'relative',
            boxSizing: 'border-box',
            zIndex: 0,
          }}
        >
          <WorkGalahadNavStoreProvider>
            <AuthProvider>
              {/* @ts-ignore */}
              <AppProvider className="app-custom">
                <GeminiApp>{children}</GeminiApp>
                <CookieBanner />
              </AppProvider>
            </AuthProvider>
          </WorkGalahadNavStoreProvider>
        </div>
      </body>
    </html>
  )
}
