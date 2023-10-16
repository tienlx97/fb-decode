import { forwardRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { processSpritedImagesForSSRPreload } from '../utils'
import coerceImageishSprited from '../utils/coerce-imageish-sprited'
import coerceImageishURL from '../utils/coerce-imageish-url'
import BaseImage from './base-image'
import { xplatToDOMRef } from '@negiganaito/utils/common/xplat-to-dom-ref'
import { RecoverableViolationWithComponentStack } from '@negiganaito/error'
import { mergeClasses } from '@griffel/react'

type CometImageFromIXValueProps = {
  alt?: string
  objectFit?: string
  source?: any
  className?: string
  testid?: string
}

const CometImageFromIXValue = forwardRef<
  HTMLElement,
  CometImageFromIXValueProps
>(({ alt = '', objectFit, source, testid, className }, ref) => {
  processSpritedImagesForSSRPreload(source)

  const j = coerceImageishSprited(source)

  if (j) {
    return jsx(
      'i',
      Object.assign(
        {},
        // c('CometVisualCompletionAttributes').CSS_IMG,
        // c('testID')(i),
        {
          'aria-label': alt === '' ? null : alt,
          className:
            j.type === 'css'
              ? className !== ''
                ? mergeClasses(j.className, className)
                : j.className
              : className,
          ref,
          role: alt === '' ? null : 'img',
          style: j.type === 'cssless' ? j.style : void 0,
        },
      ),
    )
  }

  const i = coerceImageishURL(source)

  if (i) {
    const { height, width, uri } = i

    return jsx(BaseImage, {
      alt,
      draggable: false,
      height: objectFit === 'cover' ? '100%' : height,
      objectFit,
      ref: xplatToDOMRef(ref),
      src: uri,
      testid: void 0,
      width: objectFit === 'cover' ? '100%' : width,
      className,
    })
  }

  return jsx(RecoverableViolationWithComponentStack, {
    errorMessage:
      'asset provided to CometImageFromIXValue cannot be transformed by Haste',
    projectName: 'comet_ui',
  })
})

export default CometImageFromIXValue
