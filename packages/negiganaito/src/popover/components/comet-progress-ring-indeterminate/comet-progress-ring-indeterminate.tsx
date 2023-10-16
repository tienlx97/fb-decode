import { getRingColor, getRingGifUrl } from '../comet-progress-ring-utils'
import BaseLoadingStateElement from '../base-loading-state-element'
import { mergeClasses } from '@griffel/react'
import { useDummyStyles, useStyles } from './styles'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { useCurrentDisplayMode } from '@negiganaito/hooks'
import { CometImageFromIXValue } from '@negiganaito/image'

type CometProgressRingIndeterminateProps = {
  color: string
  size: any
  className?: string
}

const strokeWidth = 2,
  defaultClassName = 'always-enable-animations'

function CometProgressRingIndeterminate({
  color,
  size,
  className,
}: CometProgressRingIndeterminateProps) {
  const i = useStyles()

  const dummyClasses = useDummyStyles()

  const foregroundColor = getRingColor(color)
  var strokeDasharray = (size - strokeWidth) * Math.PI
  const isDark = useCurrentDisplayMode() === 'dark'
  const source = getRingGifUrl(
    color,
    size.toString(),
    isDark ? 'dark' : 'light',
  )

  return jsx(BaseLoadingStateElement, {
    xstyle: [i.root, className],
    children:
      color === 'dark'
        ? jsx('svg', {
            className: mergeClasses(defaultClassName, dummyClasses.dumm1),
            height: size,
            viewBox: '0 0 ' + size + ' ' + size,
            width: size,
            children: jsx('circle', {
              className: mergeClasses(
                defaultClassName,
                i.foregroundCircle,
                size === 12 && i.foregroundCircle12,
                size === 16 && i.foregroundCircle16,
                size === 20 && i.foregroundCircle20,
                size === 24 && i.foregroundCircle24,
                size === 32 && i.foregroundCircle32,
                size === 48 && i.foregroundCircle48,
                size === 60 && i.foregroundCircle60,
                size === 72 && i.foregroundCircle72,
              ),
              cx: size / 2,
              cy: size / 2,
              fill: 'none',
              r: (size - strokeWidth) / 2,
              stroke: foregroundColor,
              strokeDasharray,
              strokeWidth,
            }),
          })
        : jsx('div', {
            style: {
              height: size,
              width: size,
            },
            children: jsx(CometImageFromIXValue, {
              source: source,
              testid: void 0,
            }),
          }),
  })
}

export default CometProgressRingIndeterminate
