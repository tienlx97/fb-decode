import React, { useMemo } from 'react'
import { useCometIconColors } from './use-comet-icon-colors'

const k = {
    'mds-accent': 'var(--icon-accent-color)',
    'mds-destructive': 'var(--icon-destructive-color)',
    'mds-inactive': 'var(--icon-inactive-color)',
    'mds-nux': 'var(--icon-nux-color)',
    'mds-selected': 'var(--icon-selected-color)',
    primary: 'var(--icon-primary-color)',
    secondary: 'var(--icon-secondary-color)',
    tertiary: 'var(--icon-tertiary-color)',
    white: 'var(--icon-white-color)',
  },
  l = {
    'mds-accent': 'primaryAccent',
    'mds-destructive': 'negative',
    'mds-inactive': 'disabled',
    'mds-nux': 'tertiary',
    'mds-selected': 'primary',
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    white: 'white',
  }

// const j = c("gkx")("571") && c("gkx")("386")
const j = false

export function useMDSIconColors() {
  let a: any = useCometIconColors()
  return useMemo(
    function () {
      let b: any = {},
        c: any = Object.entries(a)
      for (var d: any = 0; d < c.length; d++) {
        var e: any = c[d]
        var f = e[0]
        e = e[1]
        b[f] = e
      }
      f = Object.entries(k)
      for (e = 0; e < f.length; e++) {
        c = f[e]
        d = c[0]
        c = c[1]
        b[d] = c
      }
      if (!j) {
        d = Object.entries(l)
        for (c = 0; c < d.length; c++) {
          f = d[c]
          e = f[0]
          f = f[1]
          b[e] = a[f]
        }
      }
      return b
    },
    [a],
  )
}
