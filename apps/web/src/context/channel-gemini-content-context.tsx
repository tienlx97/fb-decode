import React, { createContext } from 'react'

const ChannelGeminiContentContext = createContext({
  preloadedEntryPoints: {},
  currentAppTabID: null,
  setPreloadedEntryPoint: function (a: any, b: any) {},
})

type WorkGalahadChannelContentContextProviderProps = {
  children?: React.ReactNode
}

function WorkGalahadChannelContentContextProvider(a) {
  var b
  a = a.children
  var e = d('FluxHooks').useFluxStore(c('WorkGalahadNavStore'), p),
    f = d('RelayHooks').useRelayEnvironment(),
    g = m(
      function () {
        return {
          getEnvironment: function (a) {
            return f
          },
        }
      },
      [f],
    )
  b = n(((b = {}), (b[r] = s), b))
  var i = b[0],
    t = b[1]
  l(
    function () {
      var a = d('Run').onLoad(function () {
        ;(h || (h = c('JSScheduler'))).scheduleSpeculativeCallback(function () {
          if (q || r == null || !c('gkx')('1756551')) return
          var a = {}
          c('WorkAppTabSet').forEach(function (b) {
            b.id != r &&
              b.channelEntryPoint != null &&
              b.skipPreload !== !0 &&
              (a[b.id] = d('RelayHooks').loadEntryPoint(
                g,
                b.channelEntryPoint,
                {},
              ))
          })
          t(function (b) {
            return babelHelpers['extends']({}, b, a)
          })
          q = !0
        })
      })
      return function () {
        return a.remove()
      }
    },
    [g],
  )
  var u = k(
    function (a, b) {
      if (Object.prototype.hasOwnProperty.call(i, a)) return
      t(function (c) {
        return babelHelpers['extends']({}, c, ((c = {}), (c[a] = b), c))
      })
    },
    [i],
  )
  b = m(
    function () {
      return {
        preloadedEntryPoints: i,
        currentAppTabID: e,
        setPreloadedEntryPoint: u,
      }
    },
    [i, e, u],
  )
  return j.jsx(o.Provider, {
    value: b,
    children: a,
  })
}
