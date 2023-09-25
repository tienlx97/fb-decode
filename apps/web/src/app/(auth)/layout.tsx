import React, { ReactNode } from 'react'

import { redirect } from 'next/navigation'

import { LoginLayout } from '@/features/layout'
import { getCurrentUser } from '@/lib/auth'
// eslint-disable-next-line camelcase
import { Space_Grotesk } from 'next/font/google'

async function getData() {
  const user = await getCurrentUser()

  if (user) {
    redirect('/')
  }
}

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

interface Props {
  children?: ReactNode
}

export default async function AuthLayout({ children }: Props) {
  await getData()

  return (
    <LoginLayout
      style={{
        fontFamily: `${spaceGrotesk.style.fontFamily} !important`,
      }}
    >
      {/* @ts-ignore */}
      {children}
    </LoginLayout>
  )
}
