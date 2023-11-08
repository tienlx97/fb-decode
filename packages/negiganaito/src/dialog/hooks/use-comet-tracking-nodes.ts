import React, { useContext } from 'react'
import { CometTrackingNodesContext } from '../context/comet-tracking-nodes-context'

export function useCometTrackingNodes() {
  return useContext(CometTrackingNodesContext)
}
