import React from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseDivider } from './base-divider'

type CometDividerProps = {
  className?: string
}

export function CometDivider({ className }: CometDividerProps) {
  return jsx(BaseDivider, {
    className,
  })
}
