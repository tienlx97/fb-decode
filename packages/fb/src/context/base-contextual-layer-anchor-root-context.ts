'use-client'

import { createContext } from 'react'

type BaseContextualLayerAnchorRootContextProps = {
  current: any
}

const BaseContextualLayerAnchorRootContext =
  createContext<BaseContextualLayerAnchorRootContextProps>({
    current: document.body,
  })

export default BaseContextualLayerAnchorRootContext
