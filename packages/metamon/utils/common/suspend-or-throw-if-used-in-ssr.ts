import { CometSSRClientRender } from './comet-ssr-client-render'
import executionEnvironment from './execution-environment'

export default function suspendOrThrowIfUsedInSSR(a: any) {
  if (!executionEnvironment.isInBrowser) {
    throw CometSSRClientRender(a)
  }
}
