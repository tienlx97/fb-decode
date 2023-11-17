/*
__d("LazyCometProfileVideoSection.react", 
  ["CometPlaceholder.react", 
  "CometProfileVideoGlimmer.react", 
  "JSResourceForInteraction", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g) {

*/

import { CometPlaceholder } from '@negiganaito/placeholder'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type LazyCometProfileVideoSectionProps = any

export function LazyCometProfileVideoSection(
  props: LazyCometProfileVideoSectionProps,
) {
  return jsx(CometPlaceholder, {
    fallback: jsx('CometProfileVideoGlimmer', {
      size: props.size,
    }),
    children: jsx('CometProfileVideoSection', Object.assign({}, props)),
  })
}
