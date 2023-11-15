import { useEffect, useRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

type BaseSvgImageProps = {
  onError?: any
  src?: any
  testid?: any
}

export function BaseSvgImage({
  onError,
  src,
  testid,
  ...rest
}: BaseSvgImageProps) {
  // var b = a.onError,
  //   d = a.src,
  //   e = a.testid
  // e = babelHelpers.objectWithoutPropertiesLoose(a, ['onError', 'src', 'testid'])
  // a = c('useFeedImageErrorEventLoggerCbs')({
  //   onError: b,
  //   src: d,
  // })
  // b = a._onError
  // a = a._onLoad
  const f = useRef<any>(null),
    g = useRef(src)

  useEffect(
    function () {
      f.current &&
        f.current.getAttribute('xlink:href') !== g.current &&
        f.current.setAttribute('xlink:href', g.current)
    },
    [f, g],
  )
  return jsx(
    'image',
    Object.assign({}, rest, {
      'data-testid': void 0,
      height: '100%',
      onError,
      // onLoad: a,
      preserveAspectRatio: 'xMidYMid slice',
      ref: f,
      width: '100%',
      xlinkHref: src,
    }),
  )
}
