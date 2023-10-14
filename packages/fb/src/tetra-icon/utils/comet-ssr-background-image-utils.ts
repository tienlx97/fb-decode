import executionEnvironment from '@fb/utils/execution-environment'
import { addImage } from './comet-ssr-preload-image-collection'

export function processSpritedImagesForSSRPreload(a: any) {
  var b
  if (a === null || executionEnvironment.canUseDOM) {
    return
  }
  b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri
  if (!b) {
    return
  }
  addImage(b)
}
