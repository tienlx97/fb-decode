'use client'

import { ReactNode } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import {
  CacheConfig,
  Environment,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime'

/**
 * Relay requires developers to configure a "fetch" function that tells Relay how to load
 * the results of GraphQL queries from your server (or other data source). See more at
 * https://relay.dev/docs/en/quick-start-guide#relay-environment.
 */
async function fetchFunction(
  params: RequestParameters,
  variables: Variables,
  _cacheConfig: CacheConfig,
) {
  const response = fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  return Observable.from(response.then(data => data.json()))
}

// Export a singleton instance of Relay Environment configured with our network layer:
const environment = new Environment({
  // @ts-ignore
  network: Network.create(fetchFunction),
  store: new Store(new RecordSource()),
})

export function RelayProvider({ children }: { children?: ReactNode }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
