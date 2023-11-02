import React, { forwardRef, useContext } from 'react'

import { makeStyles, mergeClasses } from '@griffel/react'
import { isBrowser } from '@negiganaito/utils/user-agent'

import { CometColumnContext } from '../context/comet-column-context'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import BaseView from './base-view'
import { CometErrorBoundary } from '@negiganaito/error'
import { CometPlaceholder } from '@negiganaito/placeholder'

const useL = makeStyles({
  divider: {
    borderTopColor: 'var(--divider)',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    ':first-child': {
      display: 'none',
    },
  },
  dividerMargin: {
    ':first-child:empty+*': {
      marginTop: 0,
    },
  },
  expanding: {
    flexBasis: '100%',
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  expandingIE11: {
    flexBasis: 'auto',
  },
  marginFirstChild: {
    ':first-child': {
      marginTop: 0,
    },
  },
  marginLastChild: {
    ':last-child': {
      marginBottom: 0,
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    maxWidth: '100%',
  },
})

const useM = makeStyles({
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  start: {
    alignItems: 'flex-start',
  },
})

const useN = makeStyles({
  4: {
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  8: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  12: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  16: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  20: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
})

const useO = makeStyles({
  0: {
    paddingTop: '0',
  },
  4: {
    paddingTop: '4px',
  },
  8: {
    paddingTop: '8px',
  },
  12: {
    paddingTop: '12px',
  },
  16: {
    paddingTop: '16px',
  },
  20: {
    paddingTop: '20px',
  },
  40: {
    paddingTop: '40px',
  },
})

const useP = makeStyles({
  4: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  8: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  12: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  16: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  20: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  40: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
})

const useQ = makeStyles({
  4: {
    marginTop: '2px',
    marginBottom: '2px',
  },
  8: {
    marginTop: '4px',
    marginBottom: '4px',
  },
  12: {
    marginTop: '6px',
    marginBottom: '6px',
  },
  16: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  20: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  24: {
    marginTop: '12px',
    marginBottom: '12px',
  },
  32: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  40: {
    marginTop: '20px',
    marginBottom: '20px',
  },
})

const useR = makeStyles({
  bottom: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  'space-between': {
    justifyContent: 'space-between',
  },
})

const useS = makeStyles({
  4: {
    marginLeft: '4px',
    marginRight: '4px',
  },
  8: {
    marginLeft: '8px',
    marginRight: '8px',
  },
  12: {
    marginLeft: '12px',
    marginRight: '12px',
  },
  16: {
    marginLeft: '16px',
    marginRight: '16px',
  },
  20: {
    marginLeft: '20px',
    marginRight: '20px',
  },
})

const t = isBrowser('IE >= 11')

type CometColumnItemProps = {
  align?: string
  children?: any
  expanding?: boolean
  fallback?: any
  paddingHorizontal?: any
  paddingTop?: any
  paddingVertical?: 0 | 4 | 8 | 12 | 16 | 20 | 40
  placeholder?: any
  verticalAlign?: 'bottom' | 'center' | 'space-between' | 'top'
  className?: any
}

const _CometColumnItem = (props: CometColumnItemProps, ref: any) => {
  const {
    align,
    children,
    expanding = false,
    fallback,
    paddingHorizontal,
    paddingTop,
    paddingVertical = 0,
    placeholder,
    verticalAlign = 'top',
    ...rest
  } = props

  const l = useL()
  const m = useM()
  const n = useN()
  const o = useO()
  const p = useP()
  const q = useQ()
  const r = useR()
  const s = useS()

  const d = useContext(CometColumnContext) ?? {}

  const _align = !align ? d.align ?? 'stretch' : align
  const _paddingHorizontal = !paddingHorizontal
    ? d.paddingHorizontal ?? 0
    : paddingHorizontal

  let g = jsxs(React.Fragment, {
    children: [
      d.hasDividers &&
        jsx(BaseView, {
          role: 'seperator',
          className: mergeClasses(
            l.divider,
            // @ts-ignore
            s[d.paddingHorizontal ?? 0],
            d.spacing && l.dividerMargin,
          ),
        }),
      jsx(
        BaseView,
        Object.assign({}, rest, {
          ref,
          className: mergeClasses(
            l.root,
            expanding && l.expanding,
            expanding && t && l.expandingIE11,
            // @ts-ignore
            _align !== 'stretch' && m[_align],
            verticalAlign !== 'top' && r[verticalAlign],
            // @ts-ignore
            n[_paddingHorizontal],
            // @ts-ignore
            p[paddingVertical],
            // @ts-ignore
            paddingTop && o[paddingTop],
            // @ts-ignore
            d.spacing && q[d.spacing],
            // TODO: fix here // C = (h || (h = c("stylex"))).compose(a.xstyle);
            // d.spacing && C.marginBottom == null && l.marginLastChild,
            // d.spacing && C.marginTop == null && l.marginFirstChild,
            props.className,
          ),
          children: jsx(CometColumnContext.Provider, {
            value: null,
            children,
          }),
        }),
      ),
    ],
  })

  if (fallback !== void 0) {
    const { fallback, ...D } = props
    fallback === null
      ? (g = jsx(CometErrorBoundary, {
          children: g,
        }))
      : (g = jsx(CometErrorBoundary, {
          fallback: function (a: any, c: any) {
            return jsx(
              CometColumnItem,
              Object.assign({}, D, {
                ref,
                children:
                  typeof fallback === 'function' ? fallback(a, c) : fallback,
              }),
            )
          },
          children: g,
        }))
  }

  if (placeholder !== void 0) {
    // a.placeholder
    const { placeholder, ...B } = props
    g = jsx(CometPlaceholder, {
      fallback:
        placeholder != null
          ? jsx(
              CometColumnItem,
              Object.assign({}, B, {
                ref,
                children: placeholder,
              }),
            )
          : null,
      children: g,
    })
  }

  return g
}

export const CometColumnItem = forwardRef(_CometColumnItem)
