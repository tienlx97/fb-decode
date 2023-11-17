import { recoverableViolation } from '@negiganaito/error'
import { useCallback, useContext, useMemo, useRef } from 'react'
import {
  CometKeyCommandContext,
  CometKeyCommandSettingsContext,
  CometKeyCommandUtilsContext,
} from '../context'
import { useStable } from '@negiganaito/hooks'
import {
  areKeyCombinationsEqual,
  createKeyCommand,
  isSingleCharKey,
} from '../util'
import { makeStyles, mergeClasses } from '@griffel/react'

// @ts-ignore
import { jsx } from 'react/jsx-runtime'

/* eslint-disable no-self-assign */
function p(a: any) {
  if (a instanceof HTMLInputElement)
    return a.type !== 'hidden' && a.type !== 'file' && !a.disabled
  return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement
    ? !a.disabled
    : a instanceof HTMLElement && a.isContentEditable
}
function q(a: any) {
  return a instanceof HTMLElement && a.getAttribute('role') === 'listbox'
    ? !a.getAttribute('aria-disabled')
    : !1
}
function r(a: any, b: any, c: any) {
  for (
    var d: any = a,
      e = Array.isArray(d),
      f: any = 0,
      // eslint-disable-next-line no-redeclare
      d = e
        ? d
        : d[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var g
    if (e) {
      if (f >= d.length) break
      g = d[f++]
    } else {
      f = d.next()
      if (f.done) break
      g = f.value
    }
    g = g
    var h = g[0]
    g = g[1]
    if (g.groupID === b && g.commandID === c) return a.get(h)
  }
}
// c('gkx')('3598')
const _3598 = false

function s(a: any, b: any) {
  return (
    _3598 &&
    b.triggerFromInputs === !0 &&
    p(a) &&
    ((a = b.command) == null ? void 0 : a.alt) === !0
  )
}
var t = function (a: any, b: any) {
    recoverableViolation(
      'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
      'comet_ax',
    )
  },
  u = function (a: any, b: any) {
    recoverableViolation(
      'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
      'comet_ax',
    )
  }

const useStyles = makeStyles({
  wrapperFocusable: {
    ':focus': {
      outlineStyle: 'none',
    },
  },
})

export function createKeyCommandWrapperV2(a: any, b: any) {
  return function (d: any) {
    const classes = useStyles()

    var e = useContext(CometKeyCommandContext),
      f = useContext(CometKeyCommandUtilsContext),
      g = useContext(CometKeyCommandSettingsContext),
      i = f && f.setActiveWrapper,
      v = useRef(t),
      w = useRef(u),
      x = useStable(function () {
        return new Map()
      }),
      y = useCallback(
        function (a: any) {
          var b,
            d = x.get(a)
          if (
            ((b = d) == null ? void 0 : b.groupID) != null &&
            ((b = d) == null ? void 0 : b.commandID) != null
          ) {
            b = g.getCustomKeyCombination(d.groupID, d.commandID)
            if (
              b == null ||
              areKeyCombinationsEqual(b, (b = d) == null ? void 0 : b.command)
            )
              return d
            else d = null
          }
          b = g.getCustomCommandsMap().get(a)
          if (b != null && b.groupID != null && b.commandID != null) {
            a = r(x, b.groupID, b.commandID)
            a != null && (d = a)
          }
          return d
        },
        [g, x],
      ),
      z = useMemo(
        function () {
          return {
            addCommands: function (a: any, b: any) {
              a.forEach(function (a: any) {
                var d = a.command
                if (d != null) {
                  d = createKeyCommand(d)
                  var e = x.has(d),
                    g = e && b === !0
                  g = g || !e || b === void 0
                  g && (x.set(d, a), f && f.notifyCommandUpdate())
                }
              })
              return function () {
                a.forEach(function (a: any) {
                  var b = a.command
                  b = createKeyCommand(b)
                  var d = x.get(b)
                  d === a && x['delete'](b)
                }),
                  f && f.notifyCommandUpdate()
              }
            },
            applyCommand: function (a: any, b: any) {
              var e,
                f = y(a)
              if (f == null) return !1
              var h: any = /^[a-z0-9]$/
              if (
                _3598 &&
                // c('gkx')('3598') &&
                ((e = f.command) == null ? void 0 : e.alt) === !0 &&
                g.getModifiedKeyboardShortcutsPreference() === 1
              )
                return !0
              if (
                (!f.triggerFromInputs && p(b.target)) ||
                (q(b.target) && h.test(a))
              )
                return !1
              if (
                b.type === 'keyup' &&
                f.triggerOnKeyUp !== !0 &&
                f.triggerOnKeyUpAndKeyDown !== !0
              )
                return !1
              if (b.type === 'keydown' && f.triggerOnKeyUp === !0) return !1
              e = f.handler
              if (f.shouldPreventDefault !== !1) {
                if (
                  s(b.target, f) &&
                  g.getModifiedKeyboardShortcutsPreference() === 3
                )
                  return !0
                e && b.preventDefault()
              }
              if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1
              if (e != null) {
                if (
                  f.command != null &&
                  s(b.target, f) &&
                  g.getModifiedKeyboardShortcutsPreference() === 4
                ) {
                  w.current(f.command, f.singleCharDescription)
                  return !0
                }
                h = g && g.getAreSingleKeysDisabled()
                b = isSingleCharKey(a)
                if (h === !0 && b) return !0
                if (h === null && b) {
                  v.current(a, f.singleCharDescription)
                  return !0
                }
                e()
                h = f.description
                // c('CometKeyCommandsTypedLoggerLite').log({
                //   key_combo: a,
                //   key_context: d.debugName,
                //   key_description: h,
                // })
                return f.shouldStopPropagation !== !1
              }
              return !1
            },
            debugName: d.debugName,
            getCommandMap: function () {
              return x
            },
            getParent: function () {
              return e
            },
            removeCommand: function (a: any) {
              x['delete'](a), f && f.notifyCommandUpdate()
            },
            setShowModifiedKeyCommandWrapperDialogRef: function (a: any) {
              w.current = a
              return function () {
                w.current = u
              }
            },
            setShowSingleCharacterKeyCommandWrapperDialogRef: function (
              a: any,
            ) {
              v.current = a
              return function () {
                v.current = t
              }
            },
          }
        },
        [g, f, x, e, d.debugName, w, v, y],
      ),
      A = useCallback(
        function () {
          if (!i) {
            recoverableViolation(
              'setActiveWrapper is undefined in ' +
                (d.debugName != null ? d.debugName : 'unknown'),
              'comet_ax',
            )
            return
          }
          i(z)
        },
        [i, z, d.debugName],
      )
    if (a || d.elementType !== void 0) {
      var B
      B = (B = d.elementType) != null ? B : 'div'
      B = jsx(B, {
        className: mergeClasses(
          d.isWrapperFocusable ? classes.wrapperFocusable : void 0,
          d.className,
        ),
        'data-testid': void 0,
        onFocusCapture: a ? A : void 0,
        tabIndex: d.isWrapperFocusable ? -1 : void 0,
        children: d.children,
      })
    } else B = d.children
    b &&
      (B = jsx(b.Provider, {
        value: z,
        children: B,
      }))
    return jsx(CometKeyCommandContext.Provider, {
      value: z,
      children: B,
    })
  }
}
