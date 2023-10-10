/* eslint-disable camelcase */
import { createContext } from 'react'

type HiddenSubtreePassiveContextProps = {
  getCurrentState: () => any
  subscribeToChanges: (props?: any) => any
}

const HiddenSubtreePassiveContext =
  createContext<HiddenSubtreePassiveContextProps>({
    getCurrentState: function () {
      return {
        backgrounded: !1,
        hidden: !1,
        hiddenOrBackgrounded: !1,
        hiddenOrBackgrounded_FIXME: !1,
      }
    },
    subscribeToChanges: function (a) {
      return {
        remove: function () {},
      }
    },
  })

export default HiddenSubtreePassiveContext
