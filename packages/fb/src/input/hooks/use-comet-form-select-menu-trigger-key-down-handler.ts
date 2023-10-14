import React, { useCallback, useRef } from 'react'

const time = 500

export default function useCometFormSelectMenuTriggerKeyDownHandler(
  setActiveValue: any,
  activeValue: any,
  filteredOptions: any,
  isMenuVisible: any,
  onShow: any,
) {
  const g = useRef<any>(null),
    k = useRef(''),
    l = useRef(''),
    m = useRef(-1)

  return useCallback(
    (event: any) => {
      if (
        k.current === '' &&
        (event.code === 'Backspace' ||
          event.code === 'Clear' ||
          event.key === ' ')
      ) {
        return
      }

      if (
        !(
          event.key.length === 1 ||
          event.code === 'Backspace' ||
          event.code === 'Clear'
        ) ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return
      }

      event.code === 'Backspace' || event.code === 'Clear'
        ? (k.current = k.current.substring(0, k.current.length - 1))
        : (k.current += event.key.toLocaleLowerCase())

      event.preventDefault()

      g.current && clearTimeout(g.current)
      g.current = setTimeout(() => {
        k.current = ''
        g.current = null
      }, time)

      event = filteredOptions.findIndex((a: any) => {
        return a.value === activeValue
      })
      event = event === -1 ? 0 : event

      for (let i = 0; i < filteredOptions.length; i++) {
        const n = (i + event) % filteredOptions.length
        const o = filteredOptions[n]

        if (o.label.toString().toLocaleLowerCase().startsWith(k.current)) {
          if (!isMenuVisible) {
            onShow()
            setActiveValue(o.value)
            l.current = k.current.toLocaleLowerCase().substring(0, 1)
            m.current = n
            return
          }

          if (
            l.current === k.current.toLocaleLowerCase().substring(0, 1) &&
            m.current === n
          ) {
            continue
          }

          l.current = k.current.toLocaleLowerCase().substring(0, 1)
          m.current = n
          setActiveValue(o.value)
          return
        }
      }
    },
    [activeValue, filteredOptions, isMenuVisible, onShow, setActiveValue],
  )
}

/*

__d(
  'useCometFormSelectMenuTriggerKeyDownHandler',
  ['clearTimeout', 'react', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    b = d('react')
    var h = b.useCallback,
      i = b.useRef,
      j = 500
    function a(a, b, d, e, f) {
      var g = i(null),
        k = i(''),
        l = i(''),
        m = i(-1)
      return h(
        function (h) {
          if (
            k.current === '' &&
            (h.code === 'Backspace' || h.code === 'Clear' || h.key === ' ')
          )
            return
          if (
            !(
              h.key.length === 1 ||
              h.code === 'Backspace' ||
              h.code === 'Clear'
            ) ||
            h.altKey ||
            h.ctrlKey ||
            h.metaKey
          )
            return
          h.code === 'Backspace' || h.code === 'Clear'
            ? (k.current = k.current.substring(0, k.current.length - 1))
            : (k.current += h.key.toLocaleLowerCase())
          h.preventDefault()
          g.current != null && c('clearTimeout')(g.current)
          g.current = c('setTimeout')(function () {
            ;(k.current = ''), (g.current = null)
          }, j)
          h = d.findIndex(function (a) {
            return a.value === b
          })
          h = h === -1 ? 0 : h
          for (var i = 0; i < d.length; i++) {
            var n = (i + h) % d.length,
              o = d[n]
            if (o.label.toString().toLocaleLowerCase().startsWith(k.current)) {
              if (!e) {
                f()
                a(o.value)
                l.current = k.current.toLocaleLowerCase().substring(0, 1)
                m.current = n
                return
              }
              if (
                l.current === k.current.toLocaleLowerCase().substring(0, 1) &&
                m.current === n
              )
                continue
              l.current = k.current.toLocaleLowerCase().substring(0, 1)
              m.current = n
              a(o.value)
              return
            }
          }
        },
        [b, d, e, f, a],
      )
    }
    g['default'] = a
  },
  98,
)


*/
