import React, { PureComponent, Fragment, ReactNode } from 'react'

interface Toast {
  expired: boolean
  id: string
  toast: any // You can replace 'any' with the appropriate type for your toast data.
}

interface MyComponentProps {
  maxVisible: number
  toasterState: Record<string, Toast>
  children: (
    toast: any,
    id: string,
    expired: boolean,
    index: number,
  ) => ReactNode // Replace 'any' with the appropriate type for your toast data.
}

interface MyComponentState {
  visibleToasts: Toast[]
}

class XPlatReactToasterView extends PureComponent<
  MyComponentProps,
  MyComponentState
> {
  static defaultProps = {
    maxVisible: 1,
  }

  constructor(props: MyComponentProps) {
    super(props)
    this.state = {
      visibleToasts: [],
    }
  }

  static getDerivedStateFromProps(a: any, b: any) {
    b = b != null ? b.visibleToasts.slice(0, a.maxVisible) : []
    var c = 0,
      d = a.filterToasts,
      e = a.toasterState,
      f: any = {},
      g =
        d != null
          ? Object.keys(e).filter(function (b) {
              var c,
                g = e[b]
              f[b] = g
              var h = g == null ? void 0 : g.shown
              c =
                g == null
                  ? void 0
                  : (c = g.value) == null
                  ? void 0
                  : (c = c.type) == null
                  ? void 0
                  : c.name
              if (g == null || c == null) return !0
              if (d.has(c) && !h) {
                a.onExpireToast(b)
                return !1
              }
            })
          : Object.keys(e),
      h = b.reduce(function (a: any, b: any) {
        b != null && a.add(b.id)
        return a
      }, new Set()),
      i = 0
    while (c < a.maxVisible) {
      var j = b[c],
        k = Object.keys(f).length > 0 ? f : a.toasterState
      if (j != null) {
        k = Object.prototype.hasOwnProperty.call(k, j.id)
        if (k) {
          k = e[j.id]
          b[c] = {
            expired: k.expired,
            id: k.id,
            toast: k.value,
          }
          c++
          continue
        } else b[c] = null
      }
      j = null
      while (j == null && i < g.length) {
        k = g[i++]
        var l = h.has(k)
        l || (j = a.toasterState[k])
      }
      j != null &&
        (b[c] = {
          expired: j.expired,
          id: j.id,
          toast: j.value,
        })
      c++
    }
    return {
      visibleToasts: b,
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.visibleToasts.map((visibleToast, index) =>
          visibleToast !== null
            ? this.props.children(
                visibleToast.toast,
                visibleToast.id,
                visibleToast.expired,
                index,
              )
            : null,
        )}
      </Fragment>
    )
  }
}

export default XPlatReactToasterView
