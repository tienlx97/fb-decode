/* eslint-disable camelcase */
import React from 'react'
import FocusWithinHandlerStrictModeReact from './focus-within-handler-strict-mode-react'
import FocusWithinHandlerNonStrictMode_DEPRECATED from './focus-within-handler-non-strict-mode_DEPRECATED'

const gkx3696 = false

export default function FocusWithinHandler(props: any) {
  if (gkx3696) {
    return <FocusWithinHandlerStrictModeReact {...props} />
  } else {
    return <FocusWithinHandlerNonStrictMode_DEPRECATED {...props} />
  }
}
