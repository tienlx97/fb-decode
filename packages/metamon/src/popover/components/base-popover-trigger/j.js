__d(
  'BasePopoverTrigger.react',
  [
    'BaseButtonPopoverContext',
    'BaseContextualLayer.react',
    'BasePopoverLayerVisibility.react',
    'BaseScrollableAreaContext',
    'CometErrorBoundary.react',
    'CometEventTimings',
    'CometHeroInteractionContextPassthrough.react',
    'CometHeroInteractionWithDiv.react',
    'CometHeroLogging',
    'CometHideLayerOnEscape.react',
    'CometMenuContext',
    'CometPlaceholder.react',
    'cr:1791018',
    'cr:1802022',
    'cr:1802023',
    'gkx',
    'react',
    'useCometPrerenderer',
    'useMergeRefs',
    'useOnOutsideClick',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    e = d('react')
    var useCallback = e.useCallback,
      useContext = e.useContext,
      useImperativeHandle = e.useImperativeHandle,
      useLayoutEffect = e.useLayoutEffect,
      useMemo = e.useMemo,
      useRef = e.useRef,
      useState = e.useState,
      p = c('gkx')('8058')
    function q(a) {
      var b = a.content
      a = a.fallback
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: (a = a) != null ? a : null,
        children: b,
      })
    }
    q.displayName = q.name + ' [from ' + f.id + ']'
    function r(a) {
      var b = a.contextualLayerRef
      useLayoutEffect(
        function () {
          var a = b.current
          a &&
            a.reposition({
              autoflip: !0,
            })
        },
        [b],
      )
      return null
    }
    function a(a) {
      var e = a.children,
        f = a.doNotCloseOnOutsideClick,
        g = f === void 0 ? !1 : f,
        s = a.fallback
      f = a.imperativeRef
      var t = a.interactionTracker,
        u = a.onHighIntentPreload,
        v = a.onLayerDetached,
        w = a.onVisibilityChange,
        x = a.popover,
        y = a.popoverRenderer,
        z = y === void 0 ? q : y,
        A = a.popoverPreloadResource,
        B = a.popoverProps
      y = a.popoverType
      var C = y === void 0 ? 'dialog' : y
      y = a.preloadTrigger
      a.tracePolicy
      var D = a.visibleOnLoad,
        E = D === void 0 ? !1 : D,
        F = a.triggerOutsideClickOnDrag,
        G = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'doNotCloseOnOutsideClick',
          'fallback',
          'imperativeRef',
          'interactionTracker',
          'onHighIntentPreload',
          'onLayerDetached',
          'onVisibilityChange',
          'popover',
          'popoverRenderer',
          'popoverPreloadResource',
          'popoverProps',
          'popoverType',
          'preloadTrigger',
          'tracePolicy',
          'visibleOnLoad',
          'triggerOutsideClickOnDrag',
        ]),
        H = useRef(!1)
      D = useState(!1)
      var I = D[0],
        J = D[1]
      a = useState(null)
      var K = a[0],
        L = a[1],
        M = useRef(null),
        N = useRef(null),
        O = useCallback(
          function (a) {
            J(a), w && w(a)
          },
          [w],
        ),
        P = useCallback(
          function () {
            O(!1), L(null), (N.current = null)
          },
          [O],
        ),
        Q = useCallback(
          function (a) {
            if (!I)
              if (t == null) O(!0)
              else {
                a = d('CometEventTimings').getCurrentQueueTime(
                  a == null ? void 0 : a.timeStamp,
                )
                var b = a[0]
                a = a[1]
                t(
                  function (a) {
                    ;(N.current = a),
                      O(!0),
                      L(
                        c(
                          'CometHeroLogging',
                        ).genHeroInteractionUUIDAndMarkStart(a.getTraceId()),
                      )
                  },
                  b,
                  a,
                )
              }
          },
          [I, t, O],
        )
      useImperativeHandle(
        f,
        function () {
          return {
            hide: function () {
              P()
            },
            show: function () {
              Q()
            },
          }
        },
        [Q, P],
      )
      D = useCallback(
        function (a) {
          b('cr:1791018') &&
            a != null &&
            K != null &&
            b('cr:1791018').addMutationRootForTraceId(K, a)
        },
        [K],
      )
      var R = useRef(null)
      a = c('useCometPrerenderer')(y, I, A, u)
      f = a[0]
      y = a[1]
      u = a[2]
      var S = a[3]
      a = a[4]
      useLayoutEffect(
        function () {
          E === !0 && H.current === !1 && ((H.current = !0), Q())
        },
        [Q, E],
      )
      var T = useContext(c('BaseScrollableAreaContext')),
        U = c('useVisibilityObserver')({
          onHidden: useCallback(
            function (a) {
              a = a.hiddenReason
              if (a === 'COMPONENT_UNMOUNTED') return
              a = T[T.length - 1]
              a != null && P()
            },
            [P, T],
          ),
        }),
        V = useMemo(
          function () {
            switch (C) {
              case 'menu':
                return {
                  expanded: I,
                  haspopup: 'menu',
                }
              case 'dialog':
              default:
                return null
            }
          },
          [I, C],
        ),
        W = useCallback(
          function (a) {
            ;(M.current = a != null ? a : null), U(a)
          },
          [U],
        ),
        X = function () {
          var a = N.current,
            b = a == null ? void 0 : a.getTrace()
          if (a == null || b == null) return
          b = b.traceStatus
          if (b != null && b !== 'START') return
          b = !0
          a.cancelTrace('close_popover', b)
        },
        Y = useCallback(
          function () {
            g || (p && X(), P())
          },
          [g, P],
        )
      Y = c('useOnOutsideClick')(
        I ? Y : null,
        useMemo(
          function () {
            return {
              isTargetEligible: function (a) {
                var b = M.current
                return b != null ? !b.contains(a) : !0
              },
              triggerOutsideClickOnDrag: F,
            }
          },
          [F],
        ),
      )
      var Z = useCallback(
          function (a) {
            I ? P() : Q(a)
          },
          [I, P, Q],
        ),
        $ = c('useMergeRefs')(Y, D),
        aa = useMemo(
          function () {
            return {
              onClose: P,
            }
          },
          [P],
        ),
        ba = C === 'menu'
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseButtonPopoverContext').Provider, {
            value: V,
            children: e(W, Z, P, y, u, S, a, I),
          }),
          h.jsx(c('CometErrorBoundary.react'), {
            children: h.jsx(b('cr:1802022'), {
              // CometPrerenderer
              prerenderingProps: f,
              children: function (a) {
                return h.createElement(
                  c('BaseContextualLayer.react'),
                  babelHelpers['extends']({}, a, G, {
                    containFocus: !0,
                    contextRef: M,
                    customContainer: b('cr:1802023'), // BaseContextualLayerDefaultContainer
                    imperativeRef: R,
                    key: 'popover',
                    onEscapeFocusRegion: ba ? P : void 0,
                    ref: $,
                  }),
                  h.jsx(c('CometHideLayerOnEscape.react'), {
                    onHide: P,
                    children: h.jsx(c('CometMenuContext').Provider, {
                      value: aa,
                      children: h.jsx(
                        c('CometHeroInteractionContextPassthrough.react'),
                        {
                          clear: !0,
                          children: h.jsx(
                            c('CometHeroInteractionWithDiv.react'),
                            {
                              interactionDesc:
                                'popover_' +
                                (A != null ? A.getModuleId() : 'Unknown'),
                              interactionUUID: K,
                              children: h.jsx(
                                c('BasePopoverLayerVisibility.react'),
                                {
                                  onLayerDetached: v,
                                  children: z({
                                    content: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(r, {
                                          contextualLayerRef: R,
                                        }),
                                        h.jsx(
                                          x,
                                          babelHelpers['extends']({}, B, {
                                            onClose: P,
                                          }),
                                        ),
                                      ],
                                    }),
                                    fallback: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(r, {
                                          contextualLayerRef: R,
                                        }),
                                        s,
                                      ],
                                    }),
                                  }),
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    }),
                  }),
                )
              },
            }),
          }),
        ],
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)
