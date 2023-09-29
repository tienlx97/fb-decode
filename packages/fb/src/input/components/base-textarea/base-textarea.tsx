import { BaseFocusRing } from '@fb/focus/components/base-focus-ring'
import { mergeRefs } from '@fb/hooks/use-merge-refs'
import usePrevious from '@fb/hooks/usePrevious'
import React, { forwardRef, useLayoutEffect, useMemo, useRef } from 'react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { BaseInput } from '../base-input'
import { mergeClasses } from '@fluentui/react-components'
import { useStyles } from './styles'

type BaseTextareaProp = {
  maxRows?: number
  minRows?: number
  suppressFocusRing?: boolean
  unresizable?: boolean
  value?: any
  className?: string
} & React.JSX.IntrinsicElements['textarea']

const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextareaProp>(
  (
    {
      maxRows = 200,
      minRows = 1,
      suppressFocusRing,
      unresizable = false,
      value,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    const normalizeValue = value ? String(value) : value

    const internalRef = useRef<HTMLTextAreaElement | undefined>(undefined)

    const previousMaxRows = usePrevious(maxRows)
    const previousValue = usePrevious(normalizeValue)

    useLayoutEffect(() => {
      const val = internalRef?.current

      if (val) {
        if (
          !previousMaxRows ||
          !previousValue ||
          !normalizeValue ||
          maxRows < previousMaxRows ||
          normalizeValue.length < previousValue.length
        ) {
          val.rows = Math.min(Math.max(minRows, 1), maxRows)
        }

        let { clientHeight } = val

        while (val.rows < maxRows && clientHeight < val.scrollHeight) {
          val.rows += 1

          const clientHeightChange = clientHeight

          if (clientHeight === clientHeightChange) {
            break
          }

          clientHeight = clientHeightChange
        }

        val.style.overflow = val.rows < maxRows ? 'hidden' : 'auto'
      }
    }, [maxRows, minRows, previousMaxRows, previousValue])

    var baseInputRef = useMemo(() => mergeRefs(internalRef, ref), [ref])

    return jsx(BaseFocusRing, {
      suppressFocusRing,
      children: (param: any) => {
        return jsx(
          BaseInput,
          Object.assign({}, rest, {
            ref: baseInputRef,
            type: 'textarea',
            value: normalizeValue,
            className: mergeClasses(
              param,
              unresizable && classes.unresizable,
              className,
            ),
          }),
        )
      },
    })
  },
)

export default BaseTextArea

/*

__d(
  'BaseTextArea.react',
  [
    'BaseFocusRing.react',
    'BaseInput.react',
    'mergeRefs',
    'react',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var useLayoutEffect = b.useLayoutEffect,
      useMemo = b.useMemo,
      useRef = b.useRef,
      l = {
        unresizable: {
          resize: 'xtt52l0',
          $$css: !0,
        },
      }
    function a(a, b) {
      var suppressFocusRing = a.maxRows,
        _maxRows = suppressFocusRing === void 0 ? 200 : suppressFocusRing
      suppressFocusRing = a.minRows
      var _minRows = suppressFocusRing === void 0 ? 1 : suppressFocusRing
      suppressFocusRing = a.suppressFocusRing
      var value = a.unresizable,
        unresizable = value === void 0 ? !1 : value
      value = a.value
      var xstyle = a.xstyle,
        o = babelHelpers.objectWithoutPropertiesLoose(a, [
          'maxRows',
          'minRows',
          'suppressFocusRing',
          'unresizable',
          'value',
          'xstyle',
        ]),
        normalizeValue = value != null ? String(value) : value,
        internalRef = useRef(null),
        previousMaxRows = c('usePrevious')(_maxRows),
        previousValue = c('usePrevious')(normalizeValue)
      useLayoutEffect(
        function () {
          var a = internalRef.current
          if (a != null) {
            ;(previousMaxRows == null ||
              previousValue == null ||
              normalizeValue == null ||
              _maxRows < previousMaxRows ||
              normalizeValue.length < previousValue.length) &&
              (a.rows = Math.min(Math.max(_minRows, 1), _maxRows))
            var b = a.clientHeight
            while (a.rows < _maxRows && b < a.scrollHeight) {
              a.rows += 1
              var c = a.clientHeight
              if (b === c) break
              b = c
            }
            a.style.overflowY = a.rows < _maxRows ? 'hidden' : 'auto'
          }
        },
        [_maxRows, _minRows, previousMaxRows, previousValue, normalizeValue],
      )
      var t = useMemo(
        function () {
          return c('mergeRefs')(internalRef, b)
        },
        [b],
      )
      return h.jsx(c('BaseFocusRing.react'), {
        suppressFocusRing: suppressFocusRing,
        children: function (a) {
          return h.jsx(
            c('BaseInput.react'),
            babelHelpers['extends']({}, o, {
              ref: t,
              type: 'textarea',
              value: normalizeValue,
              xstyle: [a, unresizable && l.unresizable, xstyle],
            }),
          )
        },
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.forwardRef(a)
    g['default'] = e
  },
  98,
)

*/
