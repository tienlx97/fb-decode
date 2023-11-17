import executionEnvironment from '@negiganaito/utils/common/execution-environment'
import suspendOrThrowIfUsedInSSR from '@negiganaito/utils/common/suspend-or-throw-if-used-in-ssr'

type CometSSRSuspendOnServerProps = {
  children?: any
}

export function CometSSRSuspendOnServer({
  children,
}: CometSSRSuspendOnServerProps) {
  if (executionEnvironment.canUseDOM) {
    return children
  }
  suspendOrThrowIfUsedInSSR(
    'CometSSRSuspendOnServer: This component is marked to be client rendered',
  )
}
