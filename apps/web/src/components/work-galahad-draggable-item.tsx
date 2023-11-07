import React from 'react'

import { AbstractDraggableItem } from '@negiganaito/react-components'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type WorkGalahadDraggableItemProps = any

export function WorkGalahadDraggableItem(props: WorkGalahadDraggableItemProps) {
  return jsx(
    AbstractDraggableItem,
    Object.assign({}, props, {
      useScroller: !1,
    }),
  )
}
