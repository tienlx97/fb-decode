import { CSSProperties, forwardRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'

import { BaseView } from '@negiganaito/common'
import { BaseThemeProvider } from './base-theme-provider'

type BaseThemeProps = {
  config: any
  displayMode?: 'dark' | 'light'
  testid?: string
  style?: CSSProperties
  className?: string
  children?: any
}

const BaseTheme = forwardRef<any, BaseThemeProps>(
  ({ config, displayMode, style, className, ...rest }, ref) => {
    return jsx(BaseThemeProvider, {
      config: config,
      displayMode: displayMode,
      children: function (internalClass: any, internalStyle: any) {
        return jsx(
          BaseView,
          Object.assign({}, rest, {
            ref,
            style: Object.assign({}, internalStyle, style),
            className: mergeClasses(internalClass.theme, className),
          }),
        )
      },
    })
  },
)

export default BaseTheme
