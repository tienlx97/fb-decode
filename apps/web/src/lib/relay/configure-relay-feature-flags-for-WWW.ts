import {RelayFeatureFlags} from "relay-runtime"

export function configureRelayFeatureFlagsForWWW(){

  RelayFeatureFlags.ENABLE_CLIENT_EDGES = true
  // @ts-ignore
  RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING = false 
}

/*

ENABLE_CLIENT_EDGES: false,
  ENABLE_VARIABLE_CONNECTION_KEY: false,
  ENABLE_RELAY_RESOLVERS: false,
  ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: false,
  ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: false,
  ENABLE_LOAD_QUERY_REQUEST_DEDUPING: true,
  ENABLE_DO_NOT_WRAP_LIVE_QUERY: false,
  ENABLE_NOTIFY_SUBSCRIPTION: false,
  BATCH_ASYNC_MODULE_UPDATES_FN: null,
  ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: false,
  MAX_DATA_ID_LENGTH: null,
  STRING_INTERN_LEVEL: 0,
  LOG_MISSING_RECORDS_IN_PROD: false,
  ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION: false,
  ENABLE_OPERATION_TRACKER_OPTIMISTIC_UPDATES: false,
  ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE: false,
  ENABLE_FIELD_ERROR_HANDLING: false,
  ENABLE_SHALLOW_FREEZE_RESOLVER_VALUES: false,
*/