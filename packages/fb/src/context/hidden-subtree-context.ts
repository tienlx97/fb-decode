import { createContext } from 'react'

type HiddenSubtreeContextProps = {
  backgrounded: boolean
  hidden: boolean
  hiddenOrBackgrounded: boolean
  hiddenOrBackgrounded_FIXME: boolean
}

const HiddenSubtreeContext = createContext<HiddenSubtreeContextProps>({
  backgrounded: !1,
  hidden: !1,
  hiddenOrBackgrounded: !1,
  // eslint-disable-next-line camelcase
  hiddenOrBackgrounded_FIXME: !1,
})

export default HiddenSubtreeContext
