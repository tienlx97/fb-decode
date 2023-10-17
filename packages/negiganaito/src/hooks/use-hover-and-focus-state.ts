import { useFocusState } from './use-focus-state'
import { useHover } from './work-galahad-hover-helper'

export function useHoverAndFocusState() {
  const [hovered, hoverOption] = useHover()
  const [focused, onFocusIn, onFocusOut] = useFocusState()

  return {
    hovered: hovered,
    focused: focused,
    onHoverIn: hoverOption.onMouseEnter,
    onHoverOut: hoverOption.onMouseLeave,
    onFocusIn: onFocusIn,
    onFocusOut: onFocusOut,
  }
}
