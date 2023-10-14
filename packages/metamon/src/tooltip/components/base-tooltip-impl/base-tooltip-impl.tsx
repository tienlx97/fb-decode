import React, { useLayoutEffect, useRef } from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import { useTooltipDelayedContent } from '../../hooks'

import { HeroInteractionContextPassthrough } from '@metamon/common'
import { useFadeEffect } from '@metamon/hooks'
import { BaseContextualLayer } from '@metamon/popover'
import { mergeClasses } from '@fluentui/react-components'
import { CometPlaceholder } from '@metamon/placeholder'
import { useDummyStyles, useStyles } from './styles'

type BaseTooltipImplProps = {
  contentKey?: string
  contextRef?: any
  id?: string
  isVisible: boolean
  loadingState?: any
  position: 'above' | 'below' | 'start' | 'end'
  align?: 'above' | 'middle' | 'start' | 'end'

  tooltip?: any
  className?: string
  delayContentMs: number
  headline?: any
  tooltipTheme?: string
}

function l(a: any) {
  var b = a.contextualLayerRef
  useLayoutEffect(() => {
    var a = b.current
    a &&
      a.reposition({
        autoflip: !0,
      })
  }, [b])
  return null
}

export default function BaseTooltipImpl({
  contentKey,
  delayContentMs,
  headline,
  id,
  isVisible,
  loadingState,
  tooltip,
  tooltipTheme,
  className,
  ...rest
}: BaseTooltipImplProps) {
  const classes = useStyles()
  const dummyclasses = useDummyStyles()

  const ref = useRef(null)
  const [isTransitioning, shouldBeVisible, fadeRef] = useFadeEffect(isVisible)

  // var r = c('useCometDisplayTimingTrackerForInteraction')('ToolTip')

  const { isPending } = useTooltipDelayedContent({
    delayContentMs,
    isVisible,
  })

  return !tooltip || !isTransitioning
    ? null
    : jsx(HeroInteractionContextPassthrough, {
        clear: true,
        children: jsx(
          BaseContextualLayer,
          Object.assign(
            {
              align: 'middle',
            },
            rest,
            {
              imperativeRef: ref,
              // ref: r,
              className: classes.contextualLayer,
              children: jsx('span', {
                className: mergeClasses(
                  classes.container,
                  className,
                  shouldBeVisible && classes.containerVisible,
                ),
                'data-testid': undefined,
                id,
                ref: fadeRef,
                role: 'tooltip',
                children: isPending
                  ? jsx('div', {
                      className: dummyclasses.dummy1,
                      children: loadingState,
                    })
                  : jsxs(
                      CometPlaceholder,
                      {
                        fallback: loadingState,
                        children: [
                          jsx(l, {
                            contextualLayerRef: ref,
                          }),
                          tooltip,
                        ],
                      },
                      contentKey,
                    ),
              }),
            },
          ),
        ),
      })
}