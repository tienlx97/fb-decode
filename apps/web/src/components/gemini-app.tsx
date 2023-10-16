// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { GeminiAppTopLevel } from './gemini-app-top-level-provider'
import { GeminiNavAndChannelContext } from '@/context/gemini-nav-and-channel-context'

type GeminiAppProps = {
  children?: any
}

export default function GeminiApp() {
  return jsx(GeminiAppTopLevel.Provider, {
    children: jsx(GeminiNavAndChannelContext.Provider, {
      children: jsx('GeminiAppContent', {}),
    }),
  })
}
