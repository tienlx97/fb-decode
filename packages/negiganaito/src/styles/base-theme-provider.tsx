import { useContext, useMemo } from 'react'
import { useCurrentDisplayMode } from '@negiganaito/hooks'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import {
  BaseThemeConfigContext,
  BaseThemeDisplayModeContext,
} from '@negiganaito/context'

type BaseThemeProviderProps = {
  children?: any
  config: any
  displayMode?: 'dark' | 'light'
}

export function BaseThemeProvider({
  children,
  config,
  displayMode,
}: BaseThemeProviderProps) {
  const baseThemeConfigValue = useContext(BaseThemeConfigContext)
  const currentDisplayMode = displayMode ?? useCurrentDisplayMode()

  const themeClass = useMemo(() => {
    let temp
    config != null && config.type === 'CLASSNAMES'
      ? (temp = currentDisplayMode === 'dark' ? config.dark : config.light)
      : (temp =
          currentDisplayMode === 'dark'
            ? baseThemeConfigValue.darkClassName
            : baseThemeConfigValue.lightClassName)
    return temp != null
      ? {
          theme: temp,
        }
      : null
  }, [
    config,
    baseThemeConfigValue.darkClassName,
    baseThemeConfigValue.lightClassName,
    currentDisplayMode,
  ])

  const baseThemeConfigContextValue = useMemo(
    function () {
      if (config != null)
        if (config.type === 'VARIABLES')
          return Object.assign({}, baseThemeConfigValue, {
            darkVariables: Object.assign(
              {},
              baseThemeConfigValue.darkVariables,
              config.dark,
            ),
            lightVariables: Object.assign(
              {},
              baseThemeConfigValue.lightVariables,
              config.light,
            ),
          })
        else if (config.type === 'CLASSNAMES')
          return Object.assign({}, baseThemeConfigValue, {
            darkClassName: config.dark,
            lightClassName: config.light,
          })
      return baseThemeConfigValue
    },
    [config, baseThemeConfigValue],
  )

  const themeVariable = convert2CssVariable(
    currentDisplayMode === 'dark'
      ? baseThemeConfigContextValue.darkVariables
      : baseThemeConfigContextValue.lightVariables,
  )

  return jsx(BaseThemeConfigContext.Provider, {
    value: baseThemeConfigContextValue,
    children: jsx(BaseThemeDisplayModeContext.Provider, {
      value: currentDisplayMode,
      children: children(themeClass, themeVariable),
    }),
  })
}

function convert2CssVariable(a: any) {
  let b = {}
  Object.keys(a).forEach(function (c) {
    // @ts-ignore
    b['--' + c] = a[c]
  })
  return b
}
