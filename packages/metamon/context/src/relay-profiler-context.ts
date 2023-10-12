import { createContext } from 'react'

type RelayProfilerContextProps = {
  wrapPrepareQueryResource: any

  // consumeBootload: function () {},
  // retainQuery: function () {},
}

const RelayProfilerContext = createContext<RelayProfilerContextProps>({
  wrapPrepareQueryResource: (a: any) => {
    return a()
  },
})

export default RelayProfilerContext
