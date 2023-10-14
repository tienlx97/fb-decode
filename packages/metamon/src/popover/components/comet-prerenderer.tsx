import React, { ReactNode } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import HiddenSubtreeContextProvider from './hidden-subtree-context-provider'

type CometPrerendererProps = {
  children?: any
  prerenderingProps?: any
}

export function CometPrerenderer({
  children,
  prerenderingProps = {},
}: CometPrerendererProps) {
  const { isVisible = true, shouldPrerender = false } = prerenderingProps

  return isVisible || shouldPrerender
    ? jsx(HiddenSubtreeContextProvider, {
        isHidden: !isVisible && shouldPrerender,
        children: children({
          hidden: !isVisible && shouldPrerender,
        }),
      })
    : null
}
