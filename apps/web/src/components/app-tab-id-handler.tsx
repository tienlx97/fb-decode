'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import {
  selectAppTabID,
  useWorkGalahadNavStore,
} from '@/context/work-galahad-nav-store'

type AppTabIdHandlerProps = {
  children?: React.ReactNode
}

export function AppTabIdHandler({ children }: AppTabIdHandlerProps) {
  const pathname = usePathname()

  const { dispatch } = useWorkGalahadNavStore()

  useEffect(() => {
    dispatch(selectAppTabID(pathname.split('/')[1]))
  }, [pathname])

  return <>{children}</>
}
