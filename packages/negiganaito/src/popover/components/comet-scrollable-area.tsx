import React, { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import {
  BaseScrollableArea,
  BaseScrollableAreaProps,
} from './base-scrollable-area'

export const CometScrollableArea = forwardRef<any, BaseScrollableAreaProps>(
  ({ horizontal = true, id, vertical = true, ...rest }, ref) => {
    return jsx(
      BaseScrollableArea,
      Object.assign({}, rest, {
        horizontal,
        id,
        ref,
        vertical,
      }),
    )
  },
)
