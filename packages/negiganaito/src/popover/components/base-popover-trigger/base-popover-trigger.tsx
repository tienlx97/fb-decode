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

import BaseContextualLayer from '../base-contextual-layer'

// const BaseContextualLayer = dynamic(
//   // @ts-ignore
//   import('../base-contextual-layer').then(r => r.default),
//   {
//     ssr: false,
//   },
// )
// import dynamic from 'next/dynamic'

import BaseContextualLayerDefaultContainer from '../base-contextual-layer-default-container'
import { BasePopoverLayerVisibility } from '../base-popover-layer-visibility'
import { CometPrerenderer } from '../comet-prerenderer'

// p = c('gkx')('8058')
const dynamic8058 = true

function popoverRendererComp({ content, fallback }: any) {
  return jsx(CometPlaceholder, {
    fallback: fallback ?? null,
    children: content,
  })
}

function repositionContextual({ contextualLayerRef }: any) {
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

// @ts-ignore
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
  const [visible, setVisible] = useState(false)

  // const [K, L] = useState(null)
  const [interactionUUID, setInteractionUUID] = useState(null)
  const contextRef = useRef<any>(null)
  const N = useRef<any>(null)

  const onVisibleHandler = useCallback(
    (val: boolean) => {
      setVisible(val)
      if (onVisibilityChange) {
        onVisibilityChange(val)
      }
    },
    [onVisibilityChange],
  )

  const onCloseCb = useCallback(() => {
    onVisibleHandler(false)
    setInteractionUUID(null)
    N.current = null
  }, [onVisibleHandler])

  const onOpenCb = useCallback(
    (a?: any) => {
      if (!visible)
        // if (!interactionTracker) {
        //   O(!0)
        // } else {
        //   // const [b, a0] = getCurrentQueueTime(a ?? a.timeStamp)

        //   O(!0)

        //   // interactionTracker(
        //   //   (e: any) => {
        //   //     N.current = e
        //   //     O(!0)
        //   //     // L(
        //   //     //   c('CometHeroLogging').genHeroInteractionUUIDAndMarkStart(
        //   //     //     e.getTraceId(),
        //   //     //   ),
        //   //     // )
        //   //   },
        //   //   b,
        //   //   a0,
        //   // )
        // }
        onVisibleHandler(true)
    },
    [visible, interactionTracker, onVisibleHandler],
  )

  useImperativeHandle(
    imperativeRef,
    () => {
      return {
        hide: () => {
          onCloseCb()
        },
        show: () => {
          onOpenCb()
        },
      }
    },
    [onOpenCb, onCloseCb],
  )

  const cometInteractionVCRef = useCallback(
    (a: any) => {
      // CometInteractionVC
      // b('cr:1791018') &&
      //   a != null &&
      //   K != null &&
      //   b('cr:1791018').addMutationRootForTraceId(K, a)

      return undefined
    },
    [interactionUUID],
  )

  const imperativeContextLayerRef = useRef(null)
  const [prerenderingProps, y, u, S, a] = useCometPrerendererImpl(
    popoverRenderer,
    visible,
    popoverPreloadResource,
    onHighIntentPreload,
  )

  useLayoutEffect(() => {
    if (visibleOnLoad === true && H.current === false) {
      H.current = true
      onOpenCb()
    }
    // visibleOnLoad === !0 && H.current === !1 && ((H.current = !0), Q())
  }, [onOpenCb, visibleOnLoad])

  const baseScrollableAreaValue = useContext(BaseScrollableAreaContext)

  const U = useVisibilityObserver({
    onHidden: useCallback(
      ({ hiddenReason }: any) => {
        if (hiddenReason === 'COMPONENT_UNMOUNTED') {
          return
        }
        baseScrollableAreaValue[baseScrollableAreaValue.length - 1] &&
          onCloseCb()
      },
      [onCloseCb, baseScrollableAreaValue],
    ),
  })

  const baseButtonPopoverContextValue = useMemo(() => {
    switch (popoverType) {
      case 'menu':
        return {
          expanded: visible,
          haspopup: 'menu',
        }
      case 'dialog':
      default:
        return null
    }
  }, [visible, popoverType])

  const internalRef = useCallback(
    (node: any) => {
      contextRef.current = node ?? undefined // a != null ? a : null
      U(node)
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

  const onOutSideClickHandler = useCallback(() => {
    // doNotCloseOnOutsideClick || (dynamic8058 && X(), onCloseCb())

    if (!doNotCloseOnOutsideClick) {
      onCloseCb()
    }
  }, [doNotCloseOnOutsideClick, onCloseCb])

  const outSideClickRef = useOnOutsideClick(
    visible ? onOutSideClickHandler : null,
    useMemo(() => {
      return {
        isTargetEligible: (a: any) => {
          const b = contextRef.current
          return b != null ? !b.contains(a) : !0
        },
        triggerOutsideClickOnDrag: triggerOutsideClickOnDrag,
      }
    }, [triggerOutsideClickOnDrag]),
  )

  const startHanderWhenPressWasDelegated = useCallback(
    (a: any) => {
      visible ? onCloseCb() : onOpenCb(a)
    },
    [visible, onCloseCb, onOpenCb],
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
        children: children(
          internalRef,
          startHanderWhenPressWasDelegated,
          onCloseCb,
          y,
          u,
          S,
          a,
          visible,
        ),
      }),
      jsx(CometErrorBoundary, {
        children: jsx(CometPrerenderer, {
          prerenderingProps,
          children: (cometPrerendererProps: any) => {
            return jsx(
              BaseContextualLayer,
              Object.assign({}, cometPrerendererProps, rest, {
                containFocus: true,
                contextRef: contextRef,
                customContainer: BaseContextualLayerDefaultContainer, // BaseContextualLayerDefaultContainer
                imperativeRef: imperativeContextLayerRef,
                key: 'popover',
                onEscapeFocusRegion: isPopoverTypeMenu ? onCloseCb : void 0,
                ref: baseContextualLayerRef,
                children: jsx(CometHideLayerOnEscape, {
                  onHide: onCloseCb,
                  children: jsx(CometMenuContext.Provider, {
                    value: cometMenuContextValue,
                    children: jsx(HeroInteractionContextPassthrough, {
                      clear: true,
                      children: jsx(CometHeroInteractionWithDiv, {
                        interactionDesc:
                          'popover_' +
                          (popoverPreloadResource
                            ? popoverPreloadResource.name
                            : // ? popoverPreloadResource.getModuleId()
                              'Unknown'),

                        interactionUUID: interactionUUID,
                        children: jsx(BasePopoverLayerVisibility, {
                          onLayerDetached,
                          children: popoverRenderer({
                            content: jsxs(React.Fragment, {
                              children: [
                                jsx(repositionContextual, {
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
                                jsx(repositionContextual, {
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
              }),
            )

            // return React.createElement(
            //   // @ts-ignore
            //   BaseContextualLayer,
            //   Object.assign({}, a, rest, {
            //     containFocus: !0,
            //     contextRef: contextRef,
            //     customContainer: BaseContextualLayerDefaultContainer, // BaseContextualLayerDefaultContainer
            //     imperativeRef: imperativeContextLayerRef,
            //     key: 'popover',
            //     onEscapeFocusRegion: isPopoverTypeMenu ? onCloseCb : void 0,
            //     ref: baseContextualLayerRef,
            //   }),
            //   jsx(CometHideLayerOnEscape, {
            //     onHide: onCloseCb,
            //     children: jsx(CometMenuContext.Provider, {
            //       value: cometMenuContextValue,
            //       children: jsx(HeroInteractionContextPassthrough, {
            //         clear: true,
            //         children: jsx(CometHeroInteractionWithDiv, {
            //           interactionDesc:
            //             'popover_' +
            //             (popoverPreloadResource
            //               ? popoverPreloadResource.getModuleId()
            //               : 'Unknown'),

            //           interactionUUID: K,
            //           children: jsx(BasePopoverLayerVisibility, {
            //             onLayerDetached: onLayerDetached,
            //             children: popoverRenderer({
            //               content: jsxs(React.Fragment, {
            //                 children: [
            //                   jsx(repositionContextual, {
            //                     contextualLayerRef: imperativeContextLayerRef,
            //                   }),
            //                   jsx(
            //                     popover,
            //                     Object.assign({}, popoverProps, {
            //                       onClose: onCloseCb,
            //                     }),
            //                   ),
            //                 ],
            //               }),
            //               fallback: jsxs(React.Fragment, {
            //                 children: [
            //                   jsx(repositionContextual, {
            //                     contextualLayerRef: imperativeContextLayerRef,
            //                   }),
            //                   fallback,
            //                 ],
            //               }),
            //             }),
            //           }),
            //         }),
            //       }),
            //     }),
            //   }),
            // )
          },
        }),
      }),
    ],
  })
}

export default BasePopoverTrigger
