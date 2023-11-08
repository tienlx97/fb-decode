import React, {
  ReactNode,
  useCallback,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

import {
  CometHeroInteractionWithDiv,
  HeroInteractionContextPassthrough,
} from '@negiganaito/common'
import {
  BaseButtonPopoverContext,
  BaseScrollableAreaContext,
  CometMenuContext,
} from '@negiganaito/context'
import { CometErrorBoundary } from '@negiganaito/error'
import {
  useMergeRefs,
  useOnOutsideClick,
  useVisibilityObserver,
} from '@negiganaito/hooks'
import { CometHideLayerOnEscape } from '@negiganaito/keyboards'
import { CometPlaceholder } from '@negiganaito/placeholder'
import { useCometPrerendererImpl } from '@negiganaito/popover/hooks'
import { getCurrentQueueTime } from '@negiganaito/utils/common/comet-event-timings'

// import BaseContextualLayer from '../base-contextual-layer'

const BaseContextualLayer = dynamic(
  // @ts-ignore
  import('../base-contextual-layer').then(r => r.default),
  {
    ssr: false,
  },
)

import BaseContextualLayerDefaultContainer from '../base-contextual-layer-default-container'
import { BasePopoverLayerVisibility } from '../base-popover-layer-visibility'
import { CometPrerenderer } from '../comet-prerenderer'
import dynamic from 'next/dynamic'

// p = c('gkx')('8058')
const p = true

function popoverRendererComp({ content, fallback }: any) {
  return jsx(CometPlaceholder, {
    fallback: fallback ?? null,
    children: content,
  })
}

function repositionContetual({ contextualLayerRef }: any) {
  useLayoutEffect(() => {
    const curr = contextualLayerRef.current
    curr &&
      curr.reposition({
        autoflip: true,
      })
  }, [contextualLayerRef])
  return null
}

export type BasePopoverTriggerProps = {
  children?: any
  doNotCloseOnOutsideClick?: boolean
  fallback?: ReactNode
  imperativeRef?: any
  interactionTracker?: any
  onHighIntentPreload?: any
  onLayerDetached?: any
  onVisibilityChange?: any
  popover?: any
  popoverRenderer?: any
  popoverPreloadResource?: any
  popoverProps?: any
  popoverType?: string
  preloadTrigger?: any
  tracePolicy?: any
  visibleOnLoad?: boolean
  triggerOutsideClickOnDrag?: any
}

function BasePopoverTrigger({
  children,
  doNotCloseOnOutsideClick = false,
  fallback,
  imperativeRef,
  interactionTracker,
  onHighIntentPreload,
  onLayerDetached,
  onVisibilityChange,
  popover,
  popoverRenderer = popoverRendererComp,
  popoverPreloadResource,
  popoverProps,
  popoverType = 'dialog',
  preloadTrigger,
  tracePolicy,
  visibleOnLoad = false,
  triggerOutsideClickOnDrag,
  ...rest
}: BasePopoverTriggerProps) {
  const H = useRef(false)
  const [I, J] = useState(false)

  const [K, L] = useState(null)
  const contextRef = useRef<any>(null)
  const N = useRef<any>(null)
  const O = useCallback(
    (a: any) => {
      J(a)
      if (onVisibilityChange) {
        onVisibilityChange(a)
      }
    },
    [onVisibilityChange],
  )

  const onCloseCb = useCallback(() => {
    O(!1)
    L(null)
    N.current = null
  }, [O])

  const Q = useCallback(
    (a?: any) => {
      if (!I)
        if (!interactionTracker) {
          O(!0)
        } else {
          const [b, a0] = getCurrentQueueTime(a ?? a.timeStamp)

          interactionTracker(
            (e: any) => {
              N.current = e
              O(!0)
              // L(
              //   c('CometHeroLogging').genHeroInteractionUUIDAndMarkStart(
              //     e.getTraceId(),
              //   ),
              // )
            },
            b,
            a0,
          )
        }
    },
    [I, interactionTracker, O],
  )

  useImperativeHandle(
    imperativeRef,
    function () {
      return {
        hide: function () {
          onCloseCb()
        },
        show: function () {
          Q()
        },
      }
    },
    [Q, onCloseCb],
  )

  const cometInteractionVCRef = useCallback(
    (a: any) => {
      // CometInteractionVC
      // b('cr:1791018') &&
      //   a != null &&
      //   K != null &&
      //   b('cr:1791018').addMutationRootForTraceId(K, a)
    },
    [K],
  )

  const imperativeContextLayerRef = useRef(null)
  const [prerenderingProps, y, u, S, a] = useCometPrerendererImpl(
    popoverRenderer,
    I,
    popoverPreloadResource,
    onHighIntentPreload,
  )

  useLayoutEffect(() => {
    if (visibleOnLoad === !0 && H.current === !1) {
      H.current = !0
      Q()
    }
    // visibleOnLoad === !0 && H.current === !1 && ((H.current = !0), Q())
  }, [Q, visibleOnLoad])

  const T = useContext(BaseScrollableAreaContext)

  const U = useVisibilityObserver({
    onHidden: useCallback(
      ({ hiddenReason }: any) => {
        if (hiddenReason === 'COMPONENT_UNMOUNTED') {
          return
        }
        T[T.length - 1] != null && onCloseCb()
      },
      [onCloseCb, T],
    ),
  })

  const baseButtonPopoverContextValue = useMemo(() => {
    switch (popoverType) {
      case 'menu':
        return {
          expanded: I,
          haspopup: 'menu',
        }
      case 'dialog':
      default:
        return null
    }
  }, [I, popoverType])

  const W = useCallback(
    (a: any) => {
      contextRef.current = a != null ? a : null
      U(a)
    },
    [U],
  )

  const X = () => {
    const b = N.current == null ? void 0 : N.current.getTrace()
    if (N.current == null || b == null) {
      return
    }
    let { traceStatus } = b
    if (traceStatus != null && traceStatus !== 'START') {
      return
    }
    traceStatus = !0
    N.current.cancelTrace('close_popover', traceStatus)
  }

  const Y = useCallback(() => {
    doNotCloseOnOutsideClick || (p && X(), onCloseCb())
  }, [doNotCloseOnOutsideClick, onCloseCb])

  const outSideClickRef = useOnOutsideClick(
    I ? Y : null,
    useMemo(
      function () {
        return {
          isTargetEligible: (a: any) => {
            const b = contextRef.current
            return b != null ? !b.contains(a) : !0
          },
          triggerOutsideClickOnDrag: triggerOutsideClickOnDrag,
        }
      },
      [triggerOutsideClickOnDrag],
    ),
  )

  const Z = useCallback(
    (a: any) => {
      I ? onCloseCb() : Q(a)
    },
    [I, onCloseCb, Q],
  )

  const baseContextualLayerRef = useMergeRefs(
    outSideClickRef,
    cometInteractionVCRef,
  )

  const cometMenuContextValue = useMemo(() => {
    return {
      onClose: onCloseCb,
    }
  }, [onCloseCb])

  const isPopoverTypeMenu = popoverType === 'menu'

  return jsxs(React.Fragment, {
    children: [
      jsx(BaseButtonPopoverContext.Provider, {
        value: baseButtonPopoverContextValue,
        children: children(W, Z, onCloseCb, y, u, S, a, I),
      }),
      jsx(CometErrorBoundary, {
        children: jsx(CometPrerenderer, {
          prerenderingProps: prerenderingProps,
          children: (a: any) => {
            return jsx(
              BaseContextualLayer,
              Object.assign({}, a, rest, {
                containFocus: !0,
                contextRef: contextRef,
                customContainer: BaseContextualLayerDefaultContainer, // BaseContextualLayerDefaultContainer
                imperativeRef: imperativeContextLayerRef,
                key: 'popover',
                onEscapeFocusRegion: isPopoverTypeMenu ? onCloseCb : void 0,
                ref: baseContextualLayerRef,
              }),
              jsx(CometHideLayerOnEscape, {
                onHide: onCloseCb,
                children: jsx(CometMenuContext.Provider, {
                  value: cometMenuContextValue,
                  children: jsx(HeroInteractionContextPassthrough, {
                    clear: true,
                    children: jsx(CometHeroInteractionWithDiv, {
                      interactionDesc:
                        'popover_' +
                        (popoverPreloadResource != null
                          ? popoverPreloadResource.getModuleId()
                          : 'Unknown'),

                      interactionUUID: K,
                      children: jsx(BasePopoverLayerVisibility, {
                        onLayerDetached: onLayerDetached,
                        children: popoverRenderer({
                          content: jsxs(React.Fragment, {
                            children: [
                              jsx(repositionContetual, {
                                contextualLayerRef: imperativeContextLayerRef,
                              }),
                              jsx(
                                popover,
                                Object.assign({}, popoverProps, {
                                  onClose: onCloseCb,
                                }),
                              ),
                            ],
                          }),
                          fallback: jsxs(React.Fragment, {
                            children: [
                              jsx(repositionContetual, {
                                contextualLayerRef: imperativeContextLayerRef,
                              }),
                              fallback,
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            )
          },
        }),
      }),
    ],
  })
}

export default BasePopoverTrigger
