import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'
import { BaseMultiPageViewContext } from '@negiganaito/context'
import {
  FocusInertRegion,
  FocusRegion,
  headerOrTabbableScopeQuery,
  tabbableScopeQuery,
} from '@negiganaito/focus'
import { mergeRefs } from '@negiganaito/hooks'
import { emptyFunction } from '@negiganaito/utils/common/empty-function'

import HiddenSubtreeContextProvider from '../hidden-subtree-context-provider'
import { useStyles } from './styles'

type BaseMultiPageViewContainerProps = {
  children?: any
  disableAutoFocus?: boolean
  disableAutoRestoreFocus?: boolean
  disableFocusContainment?: boolean
  disableInitialAutoFocus?: boolean
  fallback?: any
  imperativeRef?: any
  onPageChange?: any
  onAddPage?: any
  onPopPage?: any
  onClearRemovedPages?: any
  pageXStyle?: any
  pageHistory?: any
  placeholderComponent?: any
  className?: any
}

const q = false

const p = 300

const o = false

function r(a: any) {
  return Math.cos((a + 1) * Math.PI) / 2 + 0.5
}

const BaseMultiPageViewContainer = forwardRef<
  HTMLElement,
  BaseMultiPageViewContainerProps
>(
  (
    {
      children,
      disableAutoFocus = false,
      disableAutoRestoreFocus = false,
      disableFocusContainment = false,
      disableInitialAutoFocus = false,
      fallback,
      imperativeRef,
      onPageChange = emptyFunction,
      onAddPage,
      onPopPage,
      onClearRemovedPages,
      pageXStyle,
      pageHistory,
      placeholderComponent,
      className,
    },
    ref,
  ) => {
    const classes = useStyles()

    const E = useRef<any>(null),
      F = useRef<any>(null),
      G = useRef<any>(null),
      H = useRef(!1),
      I = disableInitialAutoFocus && !H.current,
      J = useCallback(function () {
        const a = E.current,
          b = F.current
        b != null
          ? (G.current = b.getBoundingClientRect())
          : a != null && (G.current = a.getBoundingClientRect())
      }, [])

    const onAddPageCb = useCallback(
      (a: any, b: any, c: any) => {
        J()
        H.current = !0
        onAddPage(a, b, c)
      },
      [onAddPage, J],
    )

    const popPageCb = useCallback(
      (a: any) => {
        J()
        onPopPage(a)
      },
      [onPopPage, J],
    )

    const onPushPageCb = useCallback(
      (a: any, b: any) => {
        return onAddPageCb('end', a, b)
      },
      [onAddPageCb],
    )

    const N = useMemo(() => {
      for (let a = pageHistory.length - 1; a >= 0; a--) {
        const b = pageHistory[a]
        if (b.type !== 'pushed_page' || !b.removed) return a
      }
      return 0
    }, [pageHistory])

    const O = useRef(N)

    useEffect(() => {
      N !== O.current && onPageChange && onPageChange(N), (O.current = N)
    }, [onPageChange, N])

    const P = useCallback(
      (a: any) => {
        const b = F.current,
          c = E.current
        if (a != null) {
          let d = pageHistory[N]
          d = d.type === 'pushed_page' ? d.direction : 'end'
          O.current > N && (d = d === 'start' ? 'end' : 'start')
          const e = G.current,
            f = a.getBoundingClientRect()
          if (!q && b != null && b !== a && e != null && c != null) {
            d = (d === 'start' ? -1 : 1) * (o ? -1 : 1)
            b.style.cssText = ''
            a.style.cssText = ''
            b.style.setProperty('display', 'flex')
            b.style.setProperty('width', e.width + 'px')
            b.style.setProperty('height', e.height + 'px')
            a.style.removeProperty('display')
            a.style.removeProperty('width')
            a.style.removeProperty('height')
            const g = Math.round(60 * (p / 1e3)),
              h = [],
              i = [],
              j = []
            for (let k = 0; k <= g; k++) {
              let l = k / g,
                m = r(l),
                n = e.width / f.width,
                s = e.height / f.height
              n = n + (1 - n) * m
              s = s + (1 - s) * m
              let t = e.left - f.left,
                u = e.top - f.top
              t = t * (1 - m)
              let v = u * (1 - m),
                w = Math.min(e.width, f.width),
                x = w * -d * m
              w = w * d * (1 - m)
              m = u - v
              u = -v
              h.push({
                easing: 'step-end',
                offset: l,
                transform:
                  'translateX(' +
                  t +
                  'px) translateY(' +
                  v +
                  'px) scaleX(' +
                  n +
                  ') scaleY(' +
                  s +
                  ')',
              })
              i.push({
                easing: 'step-end',
                offset: l,
                transform:
                  'scaleX(' +
                  1 / n +
                  ') scaleY(' +
                  1 / s +
                  ') translateX(' +
                  x +
                  'px) translateY(' +
                  m +
                  'px)',
              })
              j.push({
                easing: 'step-end',
                offset: l,
                transform:
                  'scaleX(' +
                  1 / n +
                  ') scaleY(' +
                  1 / s +
                  ') translateX(' +
                  w +
                  'px) translateY(' +
                  u +
                  'px)',
              })
            }
            a.animate(j, p)
            c.animate(h, p)
            b.animate(i, p)
            a.animate(
              [
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                },
              ],
              p,
            )
            b.animate(
              [
                {
                  opacity: 1,
                },
                {
                  opacity: 0,
                },
              ],
              p,
            ).onfinish = function () {
              b.style.cssText = ''
              onClearRemovedPages && onClearRemovedPages()
            }
          }
          F.current = a
        }
      },
      [N, onClearRemovedPages, pageHistory],
    )

    useImperativeHandle(
      imperativeRef,
      () => {
        return {
          addPage: onAddPageCb,
          popPage: popPageCb,
        }
      },
      [popPageCb, onAddPageCb],
    )

    const Q = useMemo(() => {
      return {
        fallback,
        placeholderComponent,
        popPage: popPageCb,
        pushPage: onPushPageCb,
      }
    }, [fallback, placeholderComponent, popPageCb, onPushPageCb])

    const a = useMemo(() => {
      return mergeRefs(E, ref)
    }, [ref])

    return jsx(
      'div',
      Object.assign(
        {
          className: mergeClasses(classes.root, className),
          ref: a,
        },
        // c('testID')('BaseMultiStepContainer'),
        {
          children: pageHistory.map(function (a: any, b: any) {
            return jsx(
              'div',
              Object.assign(
                {
                  'aria-hidden': b !== N,
                  className: mergeClasses(
                    classes.page,
                    b !== N && classes.pageInactive,
                    pageXStyle,
                  ),
                  ref: b === N ? P : null,
                },
                // c('testID')(
                //   b === 0 ? 'base-multistep-container-first-step' : null,
                // ),
                {
                  children: jsx(FocusRegion, {
                    autoFocusQuery:
                      !disableAutoFocus && !I && b === N
                        ? headerOrTabbableScopeQuery
                        : null,
                    autoRestoreFocus: !disableAutoRestoreFocus,
                    containFocusQuery: disableFocusContainment
                      ? null
                      : tabbableScopeQuery,
                    recoverFocusQuery: headerOrTabbableScopeQuery,
                    children: jsx(FocusInertRegion, {
                      disabled: b === N,
                      children: jsx(HiddenSubtreeContextProvider, {
                        isHidden: b !== N,
                        children: jsx(BaseMultiPageViewContext.Provider, {
                          value: Q,
                          children:
                            a.type === 'initial_page'
                              ? typeof children === 'function'
                                ? children(onPushPageCb)
                                : children
                              : a.type === 'pushed_page'
                              ? React.createElement(a.component, {
                                  onReturn: popPageCb,
                                })
                              : null,
                        }),
                      }),
                    }),
                  }),
                },
              ),
              a.key,
            )
          }),
        },
      ),
    )
  },
)

export default BaseMultiPageViewContainer
