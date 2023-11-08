import React, { useContext, useMemo } from 'react'
import { useCometTrackingNodes } from '../hooks/use-comet-tracking-nodes'
import { CometTrackingNodeAbstractViewHierarchyWrapperContext } from '../context/comet-tracking-node-abstract-view-hierarchy-wrapper-context'
import { CometTrackingNodesContext } from '../context/comet-tracking-nodes-context'
import { encodeTrackingNode } from '../config/encode-tracking-node'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type CometTrackingNodeProviderProps = {
  children?: any
  index?: number
  trackingNode?: any
}

export function CometTrackingNodeProvider({
  children,
  index,
  trackingNode,
}: CometTrackingNodeProviderProps) {
  const f = useCometTrackingNodes()
  const cometTrackingNodesContextvalue = useMemo(
    function () {
      if (trackingNode == null) return f
      var a = encodeTrackingNode(trackingNode, index)
      return [a].concat(f)
    },
    [f, trackingNode, index],
  )
  let g = children,
    h = useContext(CometTrackingNodeAbstractViewHierarchyWrapperContext)
  h && (g = h(cometTrackingNodesContextvalue, children))
  return jsx(CometTrackingNodesContext.Provider, {
    value: cometTrackingNodesContextvalue,
    children: g,
  })
}
