import { legacySVGIcon } from '@negiganaito/utils/common/svg-icon'
import { BaseToasterStateManager } from '../utils/base-toaster-state-manager'
import { TetraIcon, fbicon } from '@negiganaito/image'
import { NetworkStatus } from '@negiganaito/utils/common/network'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { CometIconWirelessSlashFilled } from '@negiganaito/icons'
import { cometPushToast } from './comet-push-toast'

let Comp: any

function cb(props: any) {
  const online = props.online
  let instance = BaseToasterStateManager.getInstance()
  Comp && (instance.expire(Comp), (Comp = null))
  Comp = online
    ? cometPushToast(
        {
          icon: jsx(TetraIcon, {
            color: 'positive',
            icon: fbicon(
              {
                sprited: 2,
                spi: '/assets/workplace/3CFzL_qTzlf.png',
                _spi: '/assets/workplace/3CFzL_qTzlf.png',
                w: 24,
                h: 24,
                p: '0 -815px',
                sz: 'auto',
              },
              24,
            ),
          }),
          message: 'Your internet connection was restored.',
        },
        4e3,
        instance,
      )
    : cometPushToast(
        {
          action: {
            label: 'Refresh',
            onPress: function () {
              // d(
              //   'CometRelayEnvironmentFactory',
              // ).commitLocalUpdateForEachEnvironment(function (a, b, c) {
              //   c.invalidateStore()
              // })

              window.location.reload()
            },
          },
          icon: jsx(TetraIcon, {
            color: 'disabled',
            icon: legacySVGIcon(CometIconWirelessSlashFilled),
            size: 24,
          }),
          message: 'You are currently offline.',
        },
        Infinity,
        instance,
      )
}

function subscribe() {
  NetworkStatus.onChange(cb)
}

export const CometNetworkStatusToast = {
  subscribe,
}
