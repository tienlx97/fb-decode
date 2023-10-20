'use client'

import React, {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'

export type WorkGalahadNavStoreState = {
  activeEntityKey?: any
  loading: boolean
  selectedAppTabID: string
  allowChannelAutoFocus: boolean
  lastNavigationIntentTimestamp: number
  publicContentBanner?: any
  stackedChannelData: any[]
  pendingTransitionState?: any
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

const workGalahadNavStoreInitial = {
  activeEntityKey: null,
  loading: false,
  selectedAppTabID: 'home',
  allowChannelAutoFocus: false,
  lastNavigationIntentTimestamp: 0,
  publicContentBanner: undefined,
  stackedChannelData: [],
  pendingTransitionState: undefined,
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

      return state.selectedAppTabID !== appTabID
        ? {
            ...state,
            ...navigationIntentTimestampProvider(),
            selectedAppTabID: appTabID,
            stackedChannelData: [],
          }
        : { ...state, ...navigationIntentTimestampProvider() }
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
