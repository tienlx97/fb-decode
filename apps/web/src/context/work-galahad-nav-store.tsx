/* eslint-disable camelcase */
'use client'

import React, {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'

export type SubMenu = {
  icon: {
    uri: string
  }
  entity_key: string
  key: string
  path: string
  title: string
  subtitle?: string
}

export type Menu = {
  key: string
  title: string
  path: string
  children: SubMenu[]
  default_bookmark_count?: number
}

const selectAppTab = ['home', 'notification', 'knowledge', 'chat', 'profile']

type SelectedAppTabID =
  | 'home'
  | 'notification'
  | 'knowledge'
  | 'chat'
  | 'profile'

export type WorkGalahadNavStoreState = {
  activeEntityKey?: any
  loading: boolean
  // home / notification / knowledge / chat
  selectedAppTabID: SelectedAppTabID
  allowChannelAutoFocus: boolean
  lastNavigationIntentTimestamp: number
  publicContentBanner?: any
  stackedChannelData: any[]
  pendingTransitionState?: any

  // All the menu
  menus: Menu[]
  // specific stack channel menu
  specificMenu: Menu | undefined
}

export const selectAppTabID = (
  appTabID: string,
): {
  type: 'nav/selectAppTabID'
  payload: {
    appTabID: string
  }
} => ({
  type: 'nav/selectAppTabID',
  payload: {
    appTabID,
  },
})

export const allowChannelAutoFocus = (): {
  type: 'nav/allowChannelAutoFocus'
  payload: undefined
} => ({
  type: 'nav/allowChannelAutoFocus',
  payload: undefined,
})

export const dismissAllStackedChannels = (): {
  type: 'nav/dismissAllStackedChannels'
  payload: undefined
} => ({
  type: 'nav/dismissAllStackedChannels',
  payload: undefined,
})

export const markPendingTransition = (
  appTabID: string,
  entityKey: string,
  uri: string,
): {
  type: 'nav/markPendingTransition'
  payload: {
    appTabID: string
    entityKey: string
    uri: string
  }
} => ({
  type: 'nav/markPendingTransition',
  payload: {
    appTabID,
    entityKey,
    uri,
  },
})

export const pushStackedChannel = (
  stackedChannelData: any,
): {
  type: 'nav/pushStackedChannel'
  payload: {
    stackedChannelData: any
  }
} => ({
  type: 'nav/pushStackedChannel',
  payload: {
    stackedChannelData,
  },
})

export const dismissStackedChannel = (): {
  type: 'nav/dismissStackedChannel'
  payload: undefined
} => ({
  type: 'nav/dismissStackedChannel',
  payload: undefined,
})

export const replaceStackedChannel = (
  stackedChannelData: any,
): {
  type: 'nav/replaceStackedChannel'
  payload: { stackedChannelData: any }
} => ({
  type: 'nav/replaceStackedChannel',
  payload: { stackedChannelData },
})

type WorkGalahadNavStoreAction =
  | ReturnType<typeof selectAppTabID>
  | ReturnType<typeof allowChannelAutoFocus>
  | ReturnType<typeof dismissAllStackedChannels>
  | ReturnType<typeof markPendingTransition>
  | ReturnType<typeof pushStackedChannel>
  | ReturnType<typeof dismissStackedChannel>
  | ReturnType<typeof replaceStackedChannel>

const menus: Menu[] = [
  {
    key: 'home',
    title: 'home',
    path: '/home',
    children: [
      {
        icon: {
          uri: '/assets/menu/home/post.png',
        },
        key: 'posts',
        entity_key: 'home',
        path: '/home',
        title: 'Posts',
        subtitle: undefined,
      },
      {
        icon: {
          uri: '/assets/menu/home/important-news.png',
        },
        key: 'important_news',
        entity_key: 'home',
        path: '/home/important-news',
        title: 'Important news',
        subtitle: undefined,
      },
      {
        icon: {
          uri: '/assets/menu/home/knowledge.png',
        },
        key: 'knowledge',
        entity_key: 'home',
        path: '/knowledge',
        title: 'Knowledge Library',
        subtitle: undefined,
      },
      {
        icon: {
          uri: '/assets/menu/home/directory.png',
        },
        key: 'directory',
        entity_key: 'home',
        path: '/home/orgsearch',
        title: 'Directory',
        subtitle: undefined,
      },
      {
        icon: {
          uri: '/assets/menu/home/org.png',
        },
        key: 'org',
        entity_key: 'home',
        path: '/home/org',
        title: 'Org Chart',
        subtitle: undefined,
      },
    ],
  },
]

const workGalahadNavStoreInitial = {
  activeEntityKey: null,
  loading: false,
  selectedAppTabID: (selectAppTab.includes(
    window.location.pathname.split('/')[1],
  )
    ? window.location.pathname.split('/')[1]
    : 'home') as SelectedAppTabID,
  allowChannelAutoFocus: false,
  lastNavigationIntentTimestamp: 0,
  publicContentBanner: undefined,
  stackedChannelData: [],
  pendingTransitionState: undefined,
  menus,
  specificMenu:
    menus.find(menu => menu.key === window.location.pathname.split('/')[1]) ??
    menus[0], // default is home menu
}

const navigationIntentTimestampProvider = () => {
  return {
    lastNavigationIntentTimestamp: Date.now(),
  }
}

const workGalahadNavStoreReducer = (
  state: WorkGalahadNavStoreState,
  { payload, type }: WorkGalahadNavStoreAction,
) => {
  switch (type) {
    case 'nav/allowChannelAutoFocus': {
      return { ...state, allowChannelAutoFocus: true }
    }

    case 'nav/dismissAllStackedChannels': {
      return {
        ...state,
        ...navigationIntentTimestampProvider(),
        stackedChannelData: [],
      }
    }

    case 'nav/pushStackedChannel': {
      const { stackedChannelData } = payload

      return {
        ...state,
        ...navigationIntentTimestampProvider(),
        // @ts-ignore
        stackedChannelData: [].concat(state.stackedChannelData, [
          stackedChannelData,
        ]),
      }
    }

    case 'nav/dismissStackedChannel': {
      return {
        ...state,
        ...navigationIntentTimestampProvider(),
        stackedChannelData: state.stackedChannelData.slice(0, -1),
      }
    }

    case 'nav/replaceStackedChannel': {
      const { stackedChannelData } = payload
      return {
        ...state,
        // @ts-ignore
        stackedChannelData: [].concat(state.stackedChannelData.slice(0, -1), [
          stackedChannelData,
        ]),
      }
    }

    case 'nav/markPendingTransition': {
      const { appTabID, entityKey, uri } = payload

      return {
        ...state,
        ...navigationIntentTimestampProvider(),
        pendingTransitionState: {
          appTabID,
          entityKey,
          uri,
        },
      }
    }

    case 'nav/selectAppTabID': {
      const { appTabID } = payload

      if (state.selectedAppTabID !== appTabID) {
        const geminiMenuChannel = state.menus.find(
          menu => menu.key === appTabID,
        )

        return {
          ...state,
          specificMenu: geminiMenuChannel,
          ...navigationIntentTimestampProvider(),
          selectedAppTabID: (selectAppTab.includes(appTabID)
            ? appTabID
            : 'home') as SelectedAppTabID,
          stackedChannelData: [],
        }
      } else {
        return { ...state, ...navigationIntentTimestampProvider() }
      }

      // return state.selectedAppTabID !== appTabID
      //   ? {
      //       ...state,
      //       ...navigationIntentTimestampProvider(),
      //       selectedAppTabID: appTabID,
      //       stackedChannelData: [],
      //     }
      //   : { ...state, ...navigationIntentTimestampProvider() }
    }

    default:
      return state
  }
}

const getSelectedAppTabID = (state: WorkGalahadNavStoreState) =>
  state.selectedAppTabID

const getActiveEntityKey = (state: WorkGalahadNavStoreState) =>
  state.activeEntityKey

const getNavigationKey = (state: WorkGalahadNavStoreState) =>
  'navigation-key-' + state.lastNavigationIntentTimestamp

const isChannelAutoFocusAllowed = (state: WorkGalahadNavStoreState) =>
  state.allowChannelAutoFocus

const getStackedChannelData = ({
  stackedChannelData,
}: WorkGalahadNavStoreState) =>
  stackedChannelData[stackedChannelData.length - 1]

const WorkGalahadNavStoreContext = createContext<{
  state: WorkGalahadNavStoreState
  dispatch: Dispatch<WorkGalahadNavStoreAction>
}>({} as any)

export const WorkGalahadNavStoreProvider = ({
  children,
}: {
  children?: any
}) => {
  const [state, dispatch] = useReducer<
    Reducer<WorkGalahadNavStoreState, WorkGalahadNavStoreAction>
  >(workGalahadNavStoreReducer, workGalahadNavStoreInitial)

  const memoizedState = useMemo(() => state, [state])

  return (
    <WorkGalahadNavStoreContext.Provider
      value={{ state: memoizedState, dispatch }}
    >
      {children}
    </WorkGalahadNavStoreContext.Provider>
  )
}

export const useWorkGalahadNavStore = () => {
  const context = useContext(WorkGalahadNavStoreContext)

  if (context === undefined) {
    throw new Error('useWorkGalahadNavStore was used outside of its Provider')
  }
  return context
}

export const WorkGalahadNavStore = {
  getSelectedAppTabID,
  getActiveEntityKey,
  getNavigationKey,
  isChannelAutoFocusAllowed,
  getStackedChannelData,
}
