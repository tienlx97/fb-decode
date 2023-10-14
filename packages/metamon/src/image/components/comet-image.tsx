import { mergeRefs } from '@metamon/hooks'
import { forwardRef, useMemo, useRef } from 'react'
import BaseImage from './base-image'
import { xplatToDOMRef } from '@metamon/utils/common/xplat-to-dom-ref'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import CometImageFromIXValue from './comet-image-from-ix-value'
import React from 'react'

type CometImageProp = React.JSX.IntrinsicElements['img'] & {
  alt?: string
  objectFit?: 'none' | 'contain' | 'cover' | 'fill'
  onError?: any
  onLoad?: any
  sizes?: any
  src?: any
  srcSet?: any
  testid?: string
  className?: string
}

const CometImage = forwardRef<HTMLElement, CometImageProp>(
  (
    {
      alt,
      objectFit,
      onError,
      onLoad,
      sizes,
      src,
      srcSet,
      testid,
      className,
      ...rest
    },
    ref,
  ) => {
    const f = useRef(null),
      g = useMemo(
        function () {
          return mergeRefs(f, ref)
        },
        [f, ref],
      )

    // n = c('useFeedImageErrorEventLoggerCbs')({
    //   onError: n,
    //   onLoad: o,
    //   src: q,
    // })

    const t = undefined

    // function u(a, c, d, e, g, h) {
    //   b('cr:2010754') &&
    //     c === 'mount' &&
    //     f.current != null &&
    //     typeof q === 'string' &&
    //     b('cr:2010754').trackImagePerf(f.current, h, q, {
    //       mutationType: 'reactCommit',
    //     })
    // }

    if (typeof src === 'string') {
      return jsx(
        BaseImage,
        Object.assign({}, rest, {
          alt,
          elementtiming: t,
          objectFit,
          onError,
          onLoad,
          ref: xplatToDOMRef(g),
          sizes,
          src,
          srcSet,
          testid: void 0,
          className,
        }),
      )
    }

    return jsx(CometImageFromIXValue, {
      alt,
      objectFit,
      ref: g,
      source: src,
      testid: void 0,
      className,
    })
  },
)

export default CometImage
