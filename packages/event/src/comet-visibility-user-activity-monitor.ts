import visibility from './visibility'

const cometVisibilityUserActivityMonitor = {
  isUserActive: () => {
    return visibility.isHidden() === !1
  },

  subscribe: (a: any) => {
    const b = visibility.addListener(visibility.HIDDEN, function () {
        return a && a(!1)
      }),
      d = visibility.addListener(visibility.VISIBLE, function () {
        return a && a(!0)
      })
    return function () {
      b && b.remove(), d && d.remove()
    }
  },
}

export default cometVisibilityUserActivityMonitor
