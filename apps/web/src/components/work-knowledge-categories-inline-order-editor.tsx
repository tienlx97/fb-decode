import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import equalsSet from 'fbjs/lib/equalsSet'

/*

__d("WorkKnowledgeCategoriesInlineOrderEditor.react", 
  ["cx", 
  "WorkGalahadKnowledgeDraggablePlaceholder.react", //
  "WorkGalahadShortcutsReorderableList.react",  //
  "equalsSet", "immutable", "react"], 

__d("WorkGalahadShortcutsReorderableList.react", 
  ["AbstractDraggableList.react", //
  "ChannelGeminiFocusableTable.react", //
  "FBOverlayBase.react",  //
  "WorkGalahadDraggableItem.react", "react"] //

__d("AbstractDraggableList.react", 
  ["cx", "invariant", 
  "AbstractDraggableItem.react", //
  "BinarySearch", //
  "DOMDimensions", //
  "Rect", "joinClasses", "prop-types", "react"]


__d("AbstractDraggableItem.react", //
  ["cssVar", "cx", //
  "CenteredContainer.react", //
  "DOMDimensions", //
  "Draggable", //
  "Event", //
  "FBOverlayContainer.react", //
  "FBOverlayElement.react", "Keys", "Rect", //
  "getScrollPosition", //
  "getViewportDimensions", //
  "joinClasses", "react"], (function(a, b, c, d, e, f, g, h, i) {

__d("Rect", ["invariant", "$", "Vector", "react"]
__d("Vector", ["DOMVector", "Event", "Scroll"], (function(a, b, c, d, e, f, g) {


__d("getScrollPosition", //
  ["getDocumentScrollElement", 
  "getUnboundedScrollPosition"], (function(a, b, c, d, e, f, g) { //

__d("getUnboundedScrollPosition", ["Scroll"], (function(a, b, c, d, e, f) {

*/

import { makeStyles, shorthands } from '@griffel/react'
import { useLayoutEffect } from 'react'
import Immutable from 'immutable'
import { WorkGalahadShortcutsReorderableList } from './work-galahad-shortcuts-reorderable-list'
import { WorkGalahadKnowledgeDraggablePlaceholder } from './work-galahad-knowledge-draggable-placeholder'

const useStyles = makeStyles({
  placeholderCategoryIcon: {
    height: '38px',
    marginLeft: '25px',
    width: '38px',
    ...shorthands.borderTop('1px', 'dashed', 'var(--disabled-icon)'),
    ...shorthands.borderRight('1px', 'dashed', 'var(--disabled-icon)'),
    ...shorthands.borderTop('1px', 'dashed', 'var(--disabled-icon)'),
    ...shorthands.borderTop('1px', 'dashed', 'var(--disabled-icon)'),
    ...shorthands.borderRadius('8px'),
    boxSizing: 'border-box',
  },
})

type WorkKnowledgeCategoriesInlineOrderEditorProps = {
  items?: any
  order?: any
  setOrder?: any
}

export function WorkKnowledgeCategoriesInlineOrderEditor({
  items,
  order,
  setOrder,
}: WorkKnowledgeCategoriesInlineOrderEditorProps) {
  const classes = useStyles()

  useLayoutEffect(() => {
    const a = items.map((item: any) => {
      item = item[0]
      return item
    })
    if (order == null) {
      setOrder(a)
      return
    }
    !equalsSet(new Set(order), new Set(a.slice(0, order.length)))
      ? setOrder(a)
      : a.length !== order.length &&
        setOrder(order.concat(a.slice(order.length)))
  }, [items, order, setOrder])

  if (order == null || order.length === 0) {
    return null
  }

  const renderedItemsByID = Immutable.Map(items)

  return jsx('div', {
    className: '_3-95 _7fur',
    children: jsx(WorkGalahadShortcutsReorderableList, {
      ids: Immutable.List(
        (order ?? []).filter((a: any) => {
          return renderedItemsByID.has(a)
        }),
      ),
      onChange: (a: any) => {
        return setOrder(a.toArray())
      },
      placeHolder: (a: any) => {
        return jsx(WorkGalahadKnowledgeDraggablePlaceholder, {
          height: a.height,
          className: classes.placeholderCategoryIcon,
        })
      },
      renderedItemsByID: renderedItemsByID,
    }),
  })
}
