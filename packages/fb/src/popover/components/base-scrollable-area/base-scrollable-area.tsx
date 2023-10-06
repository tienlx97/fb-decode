import {
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'
import ResizeObserver from 'resize-observer-polyfill'

/* eslint-disable camelcase */
import BaseScrollableAreaContext from '@fb/context/base-scrollable-area-context'
import useVisibilityObserver from '@fb/hooks/use-visibility-observer'
import useUnsafeRef_DEPRECATED from '@fb/hooks/useUnsafeRef_DEPRECATED'
import { CometDebounce } from '@fb/utils/comet-debounce'
import { isBrowser, isPlatform } from '@fb/utils/user-agent'
import { mergeClasses } from '@fluentui/react-components'
import { useDummyStyles, useOStyles, usePStyles, useTStyles } from './styles'

type BaseScrollableAreaProps = {
  children?: ReactNode
  contentRef?: any
  expanding?: boolean
  forceBrowserDefault?: boolean
  hideScrollbar?: boolean
  horizontal?: string
  id?: string
  //
  onScroll?: any
  onScrollBottom?: any
  onScrollTop?: any
  scrollTracePolicy?: any
  style?: any
  tabIndex?: number
  testid?: string
  vertical?: any
  withBottomShadow?: boolean
  withTopShadow?: boolean
  className?: string
}

// d("Locale").isRTL()
const q = false
const r = false

export const BaseScrollableArea = forwardRef<
  HTMLDivElement,
  BaseScrollableAreaProps
>(
  (
    {
      children,
      contentRef,
      expanding = false,
      forceBrowserDefault = false,
      hideScrollbar = false,
      horizontal,
      id,
      onScroll,
      onScrollBottom,
      onScrollTop,
      scrollTracePolicy,
      style,
      tabIndex,
      testid,
      vertical,
      withBottomShadow = false,
      withTopShadow = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const o = useOStyles()
    const p = usePStyles()

    const dummyClasses = useDummyStyles()

    const J = useMemo(() => {
      return (
        forceBrowserDefault || !vertical || hideScrollbar || horizontal || x()
      )
    }, [forceBrowserDefault, vertical, hideScrollbar, horizontal])

    const [mouseEnter, setMouseEnter] = useState(false)
    const [N, O] = useState(false)
    const [aa, P] = useState(false)

    const Q = useContext(BaseScrollableAreaContext)

    const R = useRef(null)
    const S = useUnsafeRef_DEPRECATED(null)
    const T = useRef<any>(null)
    const U = useRef<any>(null)
    const V = useRef<any>(null)
    const W = useRef(0)

    useEffect(() => {
      let a
      if (J) {
        return
      }
      let b: any = S.current,
        d: any = R.current,
        f =
          (a = contentRef == null ? void 0 : contentRef.current) != null
            ? a
            : d,
        g: any = U.current,
        h: any = T.current
      if (d == null || f == null || b == null || h == null || g == null) return
      let i = 0,
        j = 0
      a = function () {
        g.style.display = 'none'
        h.style.display = 'none'
        let a = b.getBoundingClientRect(),
          c = f.getBoundingClientRect(),
          e = b.scrollHeight,
          k = d.scrollHeight,
          l = f.scrollHeight
        k = k - l
        let m = k !== 0
        k = Math.ceil(a.height - k)
        j = a.top
        W.current = m ? l : e
        l = W.current
        i = Math.pow(k, 2) / l
        h.style.height = l <= k ? '0px' : i + 'px'
        g.style.height = l + 'px'
        q
          ? ((h.style.left = '0px'), (g.style.left = '0px'))
          : ((h.style.right = '0px'), (g.style.right = '0px'))
        e = b.scrollTop
        c = c.top - a.top + e
        a = 0
        m && ((a = c * -1), (g.style.top = c + 'px'), (h.style.top = c + 'px'))
        e = (k - i) / (l - k)
        h.style.transform = [
          'matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,' +
            a +
            ',1,0,\n          0,0,0,-1)',
          'scale(' + 1 / e + ')',
          'translateZ(' + (1 - 1 / e) + 'px)',
          'translateZ(-2px)',
        ].join(' ')
        h.style.display = 'block'
        g.style.display = l <= k ? 'none' : 'block'
      }
      const k = function (a: any) {
          s(a)
          let c = a.clientY
          a = b.clientHeight
          let d = b.scrollTop
          P(true)
          let e = W.current / a
          a = d / e
          if (c < j + a || c > j + a + i) {
            let f = c < j + a ? -20 : 20,
              h = true,
              k = window.setInterval(function () {
                h &&
                  b.scrollTo({
                    top: b.scrollTop + f,
                  })
              }, 16)
            a = function a(b: any) {
              s(b),
                k && window.clearInterval(k),
                window.removeEventListener('mouseup', a, true),
                g.removeEventListener('mouseenter', l),
                g.removeEventListener('mouseleave', m)
            }
            let l = function (a: any) {
                s(a), (h = true)
              },
              m = function (a: any) {
                s(a), (h = false)
              }
            window.addEventListener('mouseup', a, true)
            g.addEventListener('mouseenter', l)
            g.addEventListener('mouseleave', m)
            return
          }
          let n = function (a: any) {
            s(a)
            a = a.clientY - c
            b.scrollTo({
              top: d + a * e,
            })
          }
          a = function a(b: any) {
            s(b),
              P(false),
              window.removeEventListener('mousemove', n, true),
              window.removeEventListener('mouseup', a, true)
          }
          window.addEventListener('mousemove', n, true)
          window.addEventListener('mouseup', a, true)
        },
        l = CometDebounce(a, {
          wait: 100,
        })
      window.addEventListener('resize', l)
      g.addEventListener('mousedown', k)
      const m = new ResizeObserver(l)
      m.observe(d)
      m.observe(b)
      return function () {
        window.removeEventListener('resize', l),
          g.removeEventListener('mousedown', k),
          m.disconnect(),
          l.reset()
      }
    }, [contentRef, S, J])

    const onMouseEnter = function () {
      setMouseEnter(true)
    }

    const onMouseLeave = function () {
      return setMouseEnter(false)
    }

    const onScrollFunc = function (a: any) {
      onScroll && onScroll(a),
        O(true),
        V.current && window.clearTimeout(V.current),
        (V.current = window.setTimeout(function () {
          O(false)
        }, 1e3))
    }

    useEffect(function () {
      return function () {
        window.clearTimeout(V.current)
      }
    }, [])

    const Y = useMemo(function () {
      return {
        getDOMNode: function () {
          return S.current
        },
      }
    }, [])

    useImperativeHandle(
      ref,
      // @ts-ignore
      () => {
        return Y
      },
      [Y],
    )

    const b = useMemo(
      function () {
        // @ts-ignore
        return [].concat(Q, [Y])
      },
      [Y, Q],
    )

    const TopShadowComppnent = jsx('div', {
      className: dummyClasses.dummy1,
      // 'x78zum5 xdt5ytf x2lah0s x10wjd1d xds687c x17qophe x47corl x7wzq59 x1vjfegm x19bjbvb x1nhvcw1 xepu288',
      children: jsx('div', {
        className: dummyClasses.dummy2,
        // 'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy',
      }),
    })

    const BottomShadowComppnent = jsx('div', {
      className: dummyClasses.dummy3,
      // 'x78zum5 xdt5ytf x2lah0s x10wjd1d xds687c x17qophe x47corl x7wzq59 x1vjfegm x1l3hj4d x1vjtdzu x13a6bvl x1yztbdb',
      children: jsx('div', {
        className: dummyClasses.dummy4,
        // 'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij',
      }),
    })

    return J
      ? jsx(BaseScrollableAreaContext.Provider, {
          value: b,
          children: jsxs(
            'div',
            Object.assign({}, rest, {
              className: mergeClasses(
                o['default'],
                expanding && (r ? o.expandingIE11 : o.expanding),
                hideScrollbar && o.hideScrollbar,
                horizontal && o.horizontalAuto,
                vertical && o.verticalAuto,
                className,
              ),
              'data-testid': void 0,
              id: id,
              onScroll: onScrollFunc,
              ref: S,
              style,
              tabIndex,
              children: [
                withTopShadow && TopShadowComppnent,
                jsxs('div', {
                  className: mergeClasses(
                    o.baseScroller,
                    horizontal && !vertical && o.baseScrollerHorizontal,
                    withTopShadow && o.baseScrollerWithTopShadow,
                    withBottomShadow && o.baseScrollerWithBottomShadow,
                  ),
                  children: [
                    onScrollTop
                      ? jsx(onScrollTopComp, {
                          onVisible: onScrollTop,
                          scrollerRef: S,
                        })
                      : null,
                    children,
                    onScrollBottom
                      ? jsx(v, {
                          onVisible: onScrollBottom,
                          scrollerRef: S,
                        })
                      : null,
                  ],
                }),
                withBottomShadow && BottomShadowComppnent,
              ],
            }),
          ),
        })
      : jsx(BaseScrollableAreaContext.Provider, {
          value: b,
          children: jsxs(
            'div',
            Object.assign({}, rest, {
              className: mergeClasses(
                o['default'],
                o.hideScrollbar,
                expanding && (r ? o.expandingIE11 : o.expanding),
                o.perspective,
                q && o.perspectiveRTL,
                horizontal && o.horizontalAuto,
                vertical && o.verticalAuto,
                className,
              ),
              'data-scrolltracepolicy': scrollTracePolicy,
              'data-testid': void 0,
              id,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              onScroll: onScrollFunc,
              ref: S,
              style,
              tabIndex,
              children: [
                withTopShadow && TopShadowComppnent,
                jsxs('div', {
                  className: mergeClasses(
                    o.baseScroller,
                    horizontal && !vertical && o.baseScrollerHorizontal,
                    withTopShadow && o.baseScrollerWithTopShadow,
                    withBottomShadow && o.baseScrollerWithBottomShadow,
                  ),
                  ref: R,
                  children: [
                    onScrollTop
                      ? jsx(onScrollTopComp, {
                          onVisible: onScrollTop,
                          scrollerRef: S,
                        })
                      : null,
                    children,
                    onScrollBottom
                      ? jsx(v, {
                          onVisible: onScrollBottom,
                          scrollerRef: S,
                        })
                      : null,
                  ],
                }),
                withBottomShadow && BottomShadowComppnent,
                jsx(
                  'div',
                  Object.assign(
                    {
                      className: dummyClasses.dummy5,
                      // 'x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq',
                    },
                    // c('CometVisualCompletionAttributes').IGNORE,
                    {
                      'data-thumb': 1,
                      ref: U,
                    },
                  ),
                ),
                jsx(
                  'div',
                  Object.assign(
                    {
                      className: mergeClasses(
                        p.base,
                        q && p.rtl,
                        (mouseEnter || N || aa) && p.hovered,
                      ),
                    },
                    // c('CometVisualCompletionAttributes').IGNORE,
                    {
                      'data-thumb': 1,
                      ref: T,
                      children: jsx('div', {
                        className: dummyClasses.dummy6,
                        // 'x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3',
                      }),
                    },
                  ),
                ),
              ],
            }),
          ),
        })
  },
)

function x() {
  return (
    isPlatform('iOS') ||
    isPlatform('Android') ||
    isBrowser('Edge') ||
    isBrowser('IE') ||
    isBrowser('Firefox < 64')
  )
}

const s = function (a: any) {
  a.preventDefault()
  a.stopPropagation()
  a.stopImmediatePropagation()
}

function u(a: any) {
  const t = useTStyles()

  let b = a.onVisible,
    d = a.scrollerRef
  a = a.xstyle
  let e = useMemo(
    function () {
      return function () {
        return d.current
      }
    },
    [d],
  )
  b = useVisibilityObserver({
    onVisible: b,
    options: {
      root: e,
      rootMargin: 0,
    },
  })
  return jsx('div', {
    className: mergeClasses(t.main, a),
    ref: b,
  })
}

function onScrollTopComp(a: any) {
  const t = useTStyles()

  let b = a.onVisible
  a = a.scrollerRef
  return jsx(u, {
    onVisible: b,
    scrollerRef: a,
    className: t.top,
  })
}

function v(a: any) {
  const t = useTStyles()

  let b = a.onVisible
  a = a.scrollerRef
  return jsx(u, {
    onVisible: b,
    scrollerRef: a,
    xstyle: t.bottom,
  })
}
