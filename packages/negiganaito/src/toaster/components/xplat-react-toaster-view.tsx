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

  static getDerivedStateFromProps(
    nextProps: MyComponentProps,
    prevState: MyComponentState,
  ) {
    let visibleToasts: any =
      prevState.visibleToasts.slice(0, nextProps.maxVisible) || []
    let c = 0
    let f: Record<string, Toast> = {}
    let g = Object.keys(nextProps.toasterState)
    let h = new Set<string>()

    visibleToasts = visibleToasts.map((b: any) => {
      if (b !== null) {
        let k = nextProps.toasterState[b.id]
        return {
          expired: k.expired,
          id: k.id,
          toast: k.toast,
        }
      } else {
        let j: Toast | null = null
        while (j === null && c < g.length) {
          let k = g[c]
          let l = h.has(k)
          if (!l) {
            j = nextProps.toasterState[k]
          }
          c++
        }
        if (j !== null) {
          visibleToasts[c - 1] = {
            expired: j.expired,
            id: j.id,
            toast: j.toast,
          }
        } else {
          visibleToasts[c - 1] = null
        }
      }
    })

    return {
      visibleToasts,
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.visibleToasts.map((b, c) =>
          b !== null ? this.props.children(b.toast, b.id, b.expired, c) : null,
        )}
      </Fragment>
    )
  }
}

export default XPlatReactToasterView
