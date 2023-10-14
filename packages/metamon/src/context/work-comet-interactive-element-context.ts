import { createContext } from 'react'

type WorkCometInteractiveElementContextProps = {
  hovered: boolean
  focused: boolean
  pressed: boolean
}

const initial = {
  hovered: !1,
  focused: !1,
  pressed: !1,
}

const WorkCometInteractiveElementContext =
  createContext<WorkCometInteractiveElementContextProps>(initial)

export default WorkCometInteractiveElementContext
