import {
  FBOverlayBase,
  AbstractDraggableList,
} from '@negiganaito/react-components'
import React, { useCallback } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { WorkGalahadDraggableItem } from './work-galahad-draggable-item'
import {
  ChannelGeminiFocusableTable,
  WorkGalahadChannelFocusableScopeQuery,
} from '@negiganaito/index'

type WorkGalahadShortcutsReorderableListProps = {
  ids?: any
  onChange?: any
  renderedItemsByID?: any
  placeHolder?: any
}

export function WorkGalahadShortcutsReorderableList({
  ids,
  onChange,
  placeHolder,
  renderedItemsByID,
}: WorkGalahadShortcutsReorderableListProps) {
  const itemsByID = {}
  renderedItemsByID.forEach((item: any, index: number) => {
    // @ts-ignore
    itemsByID[index] = {
      id: index,
      label: jsx(FBOverlayBase, {
        children: item,
      }),
      isMovable: !0,
      isRemovable: !1,
    }
  })
  const onReorderCB = useCallback(
    (a: any, c: any) => {
      var d = ids['delete'](ids.indexOf(a))
      if (c) {
        c = d.indexOf(c)
        d = d.splice(c, 0, a)
      } else d = d.push(a)
      onChange && onChange(d)
    },
    [ids],
  )

  const itemsRendererComp = function (a: any) {
    return jsx(
      WorkGalahadDraggableItem,
      Object.assign({}, a, {
        role: 'listitem',
      }),
    )
  }

  return jsx(ChannelGeminiFocusableTable, {
    allowModifiers: !0,
    wrapY: !0,
    tabScopeQuery: WorkGalahadChannelFocusableScopeQuery,
    children: jsx(AbstractDraggableList, {
      itemsRenderer: itemsRendererComp,
      itemIDs: ids.toArray(),
      itemsByID: itemsByID,
      onRemove: function () {},
      onReorder: onReorderCB,
      placeholderRenderer: placeHolder,
    }),
  })
}
