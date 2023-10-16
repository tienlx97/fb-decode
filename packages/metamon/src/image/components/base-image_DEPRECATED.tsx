/* eslint-disable camelcase */

import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
} from 'react'
//@ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'
import { mergeRefs } from '@negiganaito/hooks'

import {
  coerceImageishSprited,
  coerceImageishURL,
  processSpritedImagesForSSRPreload,
} from '../utils'

type BaseImage_DEPRECATEDProps = {
  alt: string
  testid?: string
  onLoad?: () => any
  src: any
  className?: string
  draggable?: boolean
  height?: string
  width?: string
  style?: CSSProperties
}

const BaseImage_DEPRECATED = forwardRef<HTMLElement, BaseImage_DEPRECATEDProps>(
  ({ alt, src, testid, onLoad, ...rest }, ref) => {
    const p = useRef<any>(null)
    const a = useMemo(() => {
      return mergeRefs(p, ref)
    }, [p, ref])
    processSpritedImagesForSSRPreload(src)
    const q = coerceImageishSprited(src)
    const r = coerceImageishURL(src)

    useEffect(() => {
      var a
      onLoad &&
        p.current instanceof HTMLImageElement &&
        ((a = p.current) == null ? undefined : a.complete) &&
        onLoad()
    }, [onLoad, src])

    if (r && r.uri) {
      return !m(r.uri) ? (
        //
        // jsx(c('RecoverableViolationWithComponentStack.react'), {
        //     errorMessage: 'Invalid src provided as imageish uri',
        //     projectName: 'comet_ui',
        //   })
        <></>
      ) : (
        jsx(
          'img',
          Object.assign({}, rest, {
            alt: alt ? src : '',
            'data-testid': undefined,
            height: rest.height ? rest.height : r.height,
            ref: a,
            src: r.uri,
            width: rest.width ? rest.width : r.width,
          }),
        )
      )
    } else if (q) {
      const { height, style, width, ...restt } = rest

      return jsx(
        'i',
        Object.assign(
          {},
          // c('CometVisualCompletionAttributes').CSS_IMG,
          restt,
          {
            'aria-label': alt === '' ? null : alt,
            className: mergeClasses(
              rest.className,
              q.type === 'css' ? q.className : undefined,
            ),
            'data-testid': undefined,
            ref: a,
            role: alt === '' ? null : 'img',
            style:
              q.type === 'cssless' ? Object.assign({}, style, q.style) : style,
          },
        ),
      )
    }

    if (!m(src)) {
      // return h.jsx(c('RecoverableViolationWithComponentStack.react'), {
      //   errorMessage: 'Invalid src provided to image',
      //   projectName: 'comet_ui',
      // })

      throw new Error('Invalid src provided to image')
    }

    return jsx(
      'img',
      Object.assign({}, rest, {
        alt: alt ? q : '',
        'data-testid': undefined,
        elementtiming: r,
        ref: a,
        onLoad,
        src,
      }),
    )
  },
)

function m(uri?: any) {
  return (
    uri && typeof uri === 'string' && uri !== '' && uri !== '[object Object]'
  )
}

export default BaseImage_DEPRECATED
