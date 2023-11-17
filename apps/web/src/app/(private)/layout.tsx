import React from 'react'

import { GeminiAppContent } from '@/components/gemini-app-content'

interface Props {
  children?: React.ReactNode
}

export default async function AuthLayout({ children }: Props) {
  return <GeminiAppContent>{children}</GeminiAppContent>
}
