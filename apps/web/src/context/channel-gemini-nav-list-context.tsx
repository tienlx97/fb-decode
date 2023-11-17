import React, { createContext } from 'react'

type ChannelGeminiNavListContextProps = {
  focused: boolean
  hovered: boolean
}

export const ChannelGeminiNavListContext =
  createContext<ChannelGeminiNavListContextProps>({
    focused: false,
    hovered: false,
  })
