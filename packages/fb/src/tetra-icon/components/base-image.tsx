import { mergeRefs } from '@fb/hooks/use-merge-refs'
import executionEnvironment from '@fb/utils/execution-environment'
import React, { forwardRef, useEffect, useMemo, useRef } from 'react'
import { addImage } from '../utils'
import { RecoverableViolationWithComponentStack } from '@fb/error/errorguard'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { makeStyles, mergeClasses } from '@griffel/react'

type BaseImageProps = React.JSX.IntrinsicElements['img'] & {
  alt?: boolean
  elementtiming?: any
  objectFit?: 'none' | 'contain' | 'cover' | 'fill'
  onLoad?: any
  referrerPolicy?: any
  sizes?: any
  testid?: string
}

const useStyles = makeStyles({
  contain: {
    objectFit: 'contain',
  },
  cover: {
    objectFit: 'cover',
  },
  fill: {
    objectFit: 'fill',
  },
})

const BaseImage = forwardRef<HTMLElement, BaseImageProps>(
  (
    {
      alt = '',
      'aria-labelledby': al,
      elementtiming,
      objectFit = 'none',
      onLoad,
      referrerPolicy = 'origin-when-cross-origin',
      sizes,
      src,
      srcSet,
      testid,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const u = useRef<any>(null)
    const v = useMemo(() => {
      return mergeRefs(u, ref)
    }, [u, ref])

    !executionEnvironment.canUseDOM && src && addImage(src)

    useEffect(() => {
      onLoad && u.current && u.current.complete && onLoad()
    }, [onLoad])

    return src === ''
      ? jsx(RecoverableViolationWithComponentStack, {
          errorMessage: 'Invalid src provided to image',
          projectName: 'comet_ui',
        })
      : jsx(
          'img',
          Object.assign({}, rest, {
            alt,
            'aria-labelledby': al,
            className:
              objectFit === 'none' && className == null
                ? void 0
                : mergeClasses(
                    objectFit !== 'none' && classes[objectFit],
                    className,
                  ),
            elementtiming,
            onLoad,
            ref: v,
            referrerPolicy,
            sizes,
            src,
            srcSet,
          }),
        )
  },
)

export default BaseImage
