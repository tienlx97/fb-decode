'use client'

import { createContext } from 'react'

type BaseContextualLayerAnchorRootContextProps = {
  current: HTMLElement
}

const BaseContextualLayerAnchorRootContext =
  createContext<BaseContextualLayerAnchorRootContextProps>({
    current: document.body,
  })

export default BaseContextualLayerAnchorRootContext
