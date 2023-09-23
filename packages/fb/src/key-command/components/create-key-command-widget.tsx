import React, { createContext, useContext, useEffect } from 'react'
import { createKeyCommandWrapper } from './create-key-command-wrapper'

export default function createKeyCommandWidget(isFocusCapture = true) {
  const context = createContext<any>(undefined)
  const wrapper = createKeyCommandWrapper(isFocusCapture, context)

  function useKeyCommands(commands: any, d: any, dependencies: any) {
    d === void 0 && (d = !1)
    var contextValue = useContext(context)
    useEffect(() => {
      if (!contextValue) {
        if (!d) {
          console.error(
            "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
          )
        }
        // d ||
        //   c('recoverableViolation')(
        //     "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
        //     'comet_ax',
        //   )
        return
      }
      if (commands) {
        return contextValue.addCommands(commands, dependencies)
      }
    }, [contextValue, commands, d, dependencies])
  }
  return {
    Context: context,
    Wrapper: wrapper,
    useKeyCommands,
  }
}
