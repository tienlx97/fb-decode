export function hasFocusKeyboardEventPropagationStopped(a: any) {
  return a._stopFocusKeyboardPropagation === !0
}

export function stopFocusKeyboardEventPropagation(a: any) {
  a._stopFocusKeyboardPropagation = !0
}
