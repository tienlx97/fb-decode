import { QueryResponseCache } from 'relay-runtime'

const IS_SERVER = typeof window === typeof undefined
const CACHE_TTL = 5 * 1000 // 5 seconds, to resolve preloaded results

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    })
