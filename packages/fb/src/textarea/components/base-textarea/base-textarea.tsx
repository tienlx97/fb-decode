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
        p = value != null ? String(value) : value,
        q = useRef(null),
        r = c('usePrevious')(_maxRows),
        s = c('usePrevious')(p)
      useLayoutEffect(
        function () {
          var a = q.current
          if (a != null) {
            ;(r == null ||
              s == null ||
              p == null ||
              _maxRows < r ||
              p.length < s.length) &&
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
        [_maxRows, _minRows, r, s, p],
      )
      var t = useMemo(
        function () {
          return c('mergeRefs')(q, b)
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
              value: p,
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
