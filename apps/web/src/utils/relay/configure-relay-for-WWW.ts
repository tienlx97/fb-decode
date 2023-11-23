import { configureRelayFeatureFlagsForWWW } from './configure-relay-feature-flags-for-WWW'
import { configureRelayForFB } from './configure-relay-for-FB'

let h = false

function configureRelayForWWW() {
  if (h) {
    return
  }

  configureRelayForFB()
  configureRelayFeatureFlagsForWWW()
}
