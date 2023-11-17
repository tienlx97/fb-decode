/* eslint-disable camelcase */
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

const bookmarks = {
  home: [
    {
      entity_key: 'feed',
      icon: {
        uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/4mhXitnfwjM.png',
      },
      href: '/home',
      title: 'Posts',
      subtitle: null,
    },
    {
      entity_key: null,
      icon: {
        uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/8AIkmY8ASX6.png',
      },
      href: '/home/important-news',
      title: 'Key updates',
      subtitle: null,
    },
    {
      entity_key: 'knowledge',
      icon: {
        uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/6EB2VQOON-3.png',
      },
      href: '/knowledge',
      title: 'Knowledge Library',
      subtitle: null,
    },
    {
      entity_key: 'directory',
      icon: {
        uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/YLO0spooJdL.png',
      },
      href: '/home/orgsearch',
      title: 'Directory',
      subtitle: null,
    },
    {
      entity_key: 'org',
      icon: {
        uri: 'https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/2XSFu6dqGH8.png',
      },
      href: '/home/org',
      title: 'Org Chart',
      subtitle: null,
    },
  ],
}

export function AppTabIdHandler({ children }: AppTabIdHandlerProps) {
  const pathname = usePathname()

  const { dispatch } = useWorkGalahadNavStore()

  useEffect(() => {
    dispatch(selectAppTabID(pathname.split('/')[1]))
  }, [pathname])

  return <>{children}</>
}
