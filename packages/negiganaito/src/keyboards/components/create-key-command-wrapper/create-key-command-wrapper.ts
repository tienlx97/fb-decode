import React, { useCallback, useContext, useMemo, useRef } from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { mergeClasses } from '@griffel/react'
import { useStable } from '@negiganaito/hooks'

import {
  CometKeyCommandContext,
  CometKeyCommandSettingsContext,
  CometKeyCommandUtilsContext,
} from '../../context'
import {
  areKeyCombinationsEqual,
  createKeyCommand,
  isSingleCharKey,
} from '../../util'
import { useStyles } from './styles'
import { recoverableViolation } from '@negiganaito/error'

export default function createKeyCommandWrapper(
  isFocusCapture: boolean,
  context?: any,
) {
  return function (props: any) {
    const classes = useStyles()

    const cometKeyCommandContextValue = useContext(CometKeyCommandContext)
    const cometKeyCommandUtilsContextValue = useContext(
      CometKeyCommandUtilsContext,
    )
    const cometKeyCommandSettingsContextValue = useContext(
      CometKeyCommandSettingsContext,
    )

    const setActiveWrapper =
      cometKeyCommandUtilsContextValue &&
      cometKeyCommandUtilsContextValue.setActiveWrapper

    const commandMap = useStable(function () {
      return new Map()
    })

    const u = useRef(r)
    const v = useRef(s)

    const x = useCallback(
      (a: any) => {
        var b,
          val = commandMap.get(a)
        if (
          (!(b = val) ? void 0 : b.groupID) &&
          (!(b = val) ? void 0 : b.commandID)
        ) {
          b = cometKeyCommandSettingsContextValue.getCustomKeyCombination(
            val.groupID,
            val.commandID,
          )
          if (
            !b ||
            areKeyCombinationsEqual(b, (b = val) == null ? void 0 : b.command)
          ) {
            return val
          } else {
            val = null
          }
        }
        b = cometKeyCommandSettingsContextValue.getCustomCommandsMap().get(a)
        if (b && b.groupID && b.commandID) {
          a = p(commandMap, b.groupID, b.commandID)
          a && (val = a)
        }
        return val
      },
      [CometKeyCommandSettingsContext, commandMap],
    )

    const activeWrapper = useMemo(() => {
      return {
        addCommands: (commandArr: any, b?: any) => {
          commandArr.forEach((commandItem: any) => {
            var command = commandItem.command
            if (command) {
              command = createKeyCommand(command)
              var e = commandMap.has(command),
                g = e && b === !0
              g = g || !e || b === void 0
              g &&
                (commandMap.set(command, commandItem),
                cometKeyCommandUtilsContextValue &&
                  cometKeyCommandUtilsContextValue.notifyCommandUpdate())
            }
          })
          return function () {
            commandArr.forEach((commandItem: any) => {
              var command = commandItem.command
              command = createKeyCommand(command)
              var d = commandMap.get(command)
              d === commandItem && commandMap['delete'](command)
            }),
              cometKeyCommandUtilsContextValue &&
                cometKeyCommandUtilsContextValue.notifyCommandUpdate()
          }
        },

        applyCommand: function (key: string, event: KeyboardEvent) {
          var e,
            f = x(key)
          if (f == null) {
            return !1
          }
          var singleCharRegex = /^[a-z0-9]$/
          // if (
          //   c('gkx')('3598') && // false
          //   ((e = f.command) == null ? void 0 : e.alt) === !0 &&
          //   cometKeyCommandSettingsContextValue.getModifiedKeyboardShortcutsPreference() ===
          //     1
          // ) {
          //   return !0
          // }
          if (
            (!f.triggerFromInputs && n(event.target)) ||
            (o(event.target) && singleCharRegex.test(key))
          ) {
            return !1
          }
          if (
            event.type === 'keyup' &&
            f.triggerOnKeyUp !== !0 &&
            f.triggerOnKeyUpAndKeyDown !== !0
          ) {
            return !1
          }
          if (event.type === 'keydown' && f.triggerOnKeyUp === !0) {
            return !1
          }
          e = f.handler
          if (f.shouldPreventDefault !== !1) {
            if (
              q(event.target, f) &&
              cometKeyCommandSettingsContextValue.getModifiedKeyboardShortcutsPreference() ===
                3
            ) {
              return !0
            }
            e && event.preventDefault()
          }
          if (f.triggerOnRepeats === !1 && event.repeat === !0) {
            return !1
          }
          if (e != null) {
            if (
              f.command != null &&
              q(event.target, f) &&
              cometKeyCommandSettingsContextValue.getModifiedKeyboardShortcutsPreference() ===
                4
            ) {
              v.current(f.command, f.singleCharDescription)
              return !0
            }
            const areSingleKeysDisabled =
              cometKeyCommandSettingsContextValue &&
              cometKeyCommandSettingsContextValue.getAreSingleKeysDisabled()
            const _isSingleCharKey = isSingleCharKey(key)
            if (areSingleKeysDisabled === !0 && _isSingleCharKey) {
              return !0
            }
            if (areSingleKeysDisabled === null && _isSingleCharKey) {
              u.current(key, f.singleCharDescription)
              return !0
            }
            e()
            // const { description } = f
            // c('CometKeyCommandsTypedLoggerLite').log({
            //   key_combo: key,
            //   key_context: props.debugName,
            //   key_description: description,
            // })
            return f.shouldStopPropagation !== !1
          }
          return !1
        },

        debugName: props.debugName,

        getCommandMap: function () {
          return commandMap
        },

        getParent: function () {
          return cometKeyCommandContextValue
        },

        removeCommand: (a: any) => {
          commandMap['delete'](a),
            cometKeyCommandUtilsContextValue &&
              cometKeyCommandUtilsContextValue.notifyCommandUpdate()
        },

        setShowModifiedKeyCommandWrapperDialogRef: (a: any) => {
          v.current = a
          return function () {
            v.current = s
          }
        },

        setShowSingleCharacterKeyCommandWrapperDialogRef: function (a: any) {
          u.current = a
          return function () {
            u.current = r
          }
        },
      }
    }, [
      CometKeyCommandSettingsContext,
      CometKeyCommandUtilsContext,
      commandMap,
      CometKeyCommandContext,
      props.debugName,
      v,
      u,
      x,
    ])

    const onFocusCapture = useCallback(
      function () {
        if (!setActiveWrapper) {
          // throw new Error(
          //   'setActiveWrapper is undefined in ' +
          //     (props.debugName != null ? props.debugName : 'unknown'),
          //   // 'comet_ax',
          // )
          // c('recoverableViolation')(
          //   'setActiveWrapper is undefined in ' +
          //     (props.debugName != null ? props.debugName : 'unknown'),
          //   'comet_ax',
          // )
          return
        }
        setActiveWrapper(activeWrapper)
      },
      [setActiveWrapper, activeWrapper, props.debugName],
    )

    let child: any = undefined

    if (isFocusCapture || props.elementType !== void 0) {
      let elementType = props.elementType

      if (!props.elementType) {
        elementType = 'div'
      }

      child = jsx(elementType, {
        className: mergeClasses(
          props.isWrapperFocusable && classes.wrapperFocusable,
          props.className,
        ),
        'data-testid': void 0,
        onFocusCapture: isFocusCapture ? onFocusCapture : void 0,
        tabIndex: props.isWrapperFocusable ? -1 : void 0,
        children: props.children,
      })
    } else {
      child = props.children
    }

    if (context) {
      child = jsx(context.Provider, {
        value: activeWrapper,
        children: child,
      })
    }

    return jsx(CometKeyCommandContext.Provider, {
      value: activeWrapper,
      children: child,
    })
  }
}

function p(a: any, b: any, c: any) {
  for (
    var d = a,
      e = Array.isArray(d),
      f = 0,
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
      // @ts-ignore
      if (f.done) break
      // @ts-ignore
      g = f.value
    }
    // g = g
    var h = g[0]
    g = g[1]
    if (g.groupID === b && g.commandID === c) return a.get(h)
  }
}

function o(a: any) {
  return a instanceof HTMLElement && a.getAttribute('role') === 'listbox'
    ? !a.getAttribute('aria-disabled')
    : !1
}

function q(a: any, b: any) {
  const c = false
  return (
    c && //c('gkx')('3598') && // false
    b.triggerFromInputs === !0 &&
    n(a) &&
    ((a = b.command) == null ? void 0 : a.alt) === !0
  )
}

function n(a: any) {
  if (a instanceof HTMLInputElement)
    return a.type !== 'hidden' && a.type !== 'file' && !a.disabled
  return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement
    ? !a.disabled
    : a instanceof HTMLElement && a.isContentEditable
}

var r = function (a: any, b: any) {
    recoverableViolation(
      'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
      'comet_ax',
    )

    // c('recoverableViolation')(
    //   'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
    //   'comet_ax',
    // )
  },
  s = function (a: any, b: any) {
    recoverableViolation(
      'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
      'comet_ax',
    )
    // c('recoverableViolation')(
    //   'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
    //   'comet_ax',
    // )
  }

// __d(
//   'createKeyCommandWrapper',
//   [
//     'CometKeyCommandContext',
//     'CometKeyCommandSettingsContext',
//     'CometKeyCommandUtilsContext',
//     'CometKeyCommandsTypedLoggerLite',
//     'areKeyCombinationsEqual',
//     'createKeyCommand',
//     'gkx',
//     'isSingleCharKey',
//     'react',
//     'recoverableViolation',
//     'stylex',
//     'useStable',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var useCallback = b.useCallback,
//       useContext = b.useContext,
//       useMemo = b.useMemo,
//       useRef = b.useRef,
//       stylexx = {
//         wrapperFocusable: {
//           ':focus_outline': 'x1uvtmcs',
//           $$css: !0,
//         },
//       }
//     function n(a) {
//       if (a instanceof HTMLInputElement)
//         return a.type !== 'hidden' && a.type !== 'file' && !a.disabled
//       return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement
//         ? !a.disabled
//         : a instanceof HTMLElement && a.isContentEditable
//     }
//     function o(a) {
//       return a instanceof HTMLElement && a.getAttribute('role') === 'listbox'
//         ? !a.getAttribute('aria-disabled')
//         : !1
//     }
//     function p(a, b, c) {
//       for (
//         var d = a,
//           e = Array.isArray(d),
//           f = 0,
//           d = e
//             ? d
//             : d[
//                 typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
//               ]();
//         ;

//       ) {
//         var g
//         if (e) {
//           if (f >= d.length) break
//           g = d[f++]
//         } else {
//           f = d.next()
//           if (f.done) break
//           g = f.value
//         }
//         g = g
//         var h = g[0]
//         g = g[1]
//         if (g.groupID === b && g.commandID === c) return a.get(h)
//       }
//     }
//     function q(a, b) {
//       return (
//         c('gkx')('3598') &&
//         b.triggerFromInputs === !0 &&
//         n(a) &&
//         ((a = b.command) == null ? void 0 : a.alt) === !0
//       )
//     }
//     var r = function (a, b) {
//         c('recoverableViolation')(
//           'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
//           'comet_ax',
//         )
//       },
//       s = function (a, b) {
//         c('recoverableViolation')(
//           'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
//           'comet_ax',
//         )
//       }
//     function createKeyCommandWrapper(isFocusCapture, context) {
//       return function (props) {
//         var CometKeyCommandContext = useContext(c('CometKeyCommandContext')),
//           CometKeyCommandUtilsContext = useContext(
//             c('CometKeyCommandUtilsContext'),
//           ),
//           CometKeyCommandSettingsContext = useContext(
//             c('CometKeyCommandSettingsContext'),
//           ),
//           setActiveWrapper =
//             CometKeyCommandUtilsContext &&
//             CometKeyCommandUtilsContext.setActiveWrapper,
//           u = useRef(r),
//           v = useRef(s),
//           commandMap = c('useStable')(function () {
//             return new Map()
//           }),
//           x = useCallback(
//             function (a) {
//               var b,
//                 d = commandMap.get(a)
//               if (
//                 ((b = d) == null ? void 0 : b.groupID) != null &&
//                 ((b = d) == null ? void 0 : b.commandID) != null
//               ) {
//                 b = CometKeyCommandSettingsContext.getCustomKeyCombination(
//                   d.groupID,
//                   d.commandID,
//                 )
//                 if (
//                   b == null ||
//                   c('areKeyCombinationsEqual')(
//                     b,
//                     (b = d) == null ? void 0 : b.command,
//                   )
//                 )
//                   return d
//                 else d = null
//               }
//               b = CometKeyCommandSettingsContext.getCustomCommandsMap().get(a)
//               if (b != null && b.groupID != null && b.commandID != null) {
//                 a = p(commandMap, b.groupID, b.commandID)
//                 a != null && (d = a)
//               }
//               return d
//             },
//             [CometKeyCommandSettingsContext, commandMap],
//           ),
//           activeWrapper = useMemo(
//             function () {
//               return {
//                 addCommands: function (commandArr, b) {
//                   commandArr.forEach(function (commandItem) {
//                     var command = commandItem.command
//                     if (command != null) {
//                       command = c('createKeyCommand')(command)
//                       var e = commandMap.has(command),
//                         g = e && b === !0
//                       g = g || !e || b === void 0
//                       g &&
//                         (commandMap.set(command, commandItem),
//                         CometKeyCommandUtilsContext &&
//                           CometKeyCommandUtilsContext.notifyCommandUpdate())
//                     }
//                   })
//                   return function () {
//                     commandArr.forEach(function (commandItem) {
//                       var command = commandItem.command
//                       command = c('createKeyCommand')(command)
//                       var d = commandMap.get(command)
//                       d === commandItem && commandMap['delete'](command)
//                     }),
//                       CometKeyCommandUtilsContext &&
//                         CometKeyCommandUtilsContext.notifyCommandUpdate()
//                   }
//                 },
//                 applyCommand: function (key, event) {
//                   var e,
//                     f = x(key)
//                   if (f == null) {
//                     return !1
//                   }
//                   var singleCharRegex = /^[a-z0-9]$/
//                   if (
//                     c('gkx')('3598') && // false
//                     ((e = f.command) == null ? void 0 : e.alt) === !0 &&
//                     CometKeyCommandSettingsContext.getModifiedKeyboardShortcutsPreference() ===
//                       1
//                   ) {
//                     return !0
//                   }
//                   if (
//                     (!f.triggerFromInputs && n(event.target)) ||
//                     (o(event.target) && singleCharRegex.test(key))
//                   ) {
//                     return !1
//                   }
//                   if (
//                     event.type === 'keyup' &&
//                     f.triggerOnKeyUp !== !0 &&
//                     f.triggerOnKeyUpAndKeyDown !== !0
//                   ) {
//                     return !1
//                   }
//                   if (event.type === 'keydown' && f.triggerOnKeyUp === !0) {
//                     return !1
//                   }
//                   e = f.handler
//                   if (f.shouldPreventDefault !== !1) {
//                     if (
//                       q(event.target, f) &&
//                       CometKeyCommandSettingsContext.getModifiedKeyboardShortcutsPreference() ===
//                         3
//                     ) {
//                       return !0
//                     }
//                     e && event.preventDefault()
//                   }
//                   if (f.triggerOnRepeats === !1 && event.repeat === !0) {
//                     return !1
//                   }
//                   if (e != null) {
//                     if (
//                       f.command != null &&
//                       q(event.target, f) &&
//                       CometKeyCommandSettingsContext.getModifiedKeyboardShortcutsPreference() ===
//                         4
//                     ) {
//                       v.current(f.command, f.singleCharDescription)
//                       return !0
//                     }
//                     singleCharRegex =
//                       CometKeyCommandSettingsContext &&
//                       CometKeyCommandSettingsContext.getAreSingleKeysDisabled()
//                     event = c('isSingleCharKey')(key)
//                     if (singleCharRegex === !0 && event) {
//                       return !0
//                     }
//                     if (singleCharRegex === null && event) {
//                       u.current(key, f.singleCharDescription)
//                       return !0
//                     }
//                     e()
//                     singleCharRegex = f.description
//                     c('CometKeyCommandsTypedLoggerLite').log({
//                       key_combo: key,
//                       key_context: props.debugName,
//                       key_description: singleCharRegex,
//                     })
//                     return f.shouldStopPropagation !== !1
//                   }
//                   return !1
//                 },
//                 debugName: props.debugName,
//                 getCommandMap: function () {
//                   return commandMap
//                 },
//                 getParent: function () {
//                   return CometKeyCommandContext
//                 },
//                 removeCommand: function (a) {
//                   commandMap['delete'](a),
//                     CometKeyCommandUtilsContext &&
//                       CometKeyCommandUtilsContext.notifyCommandUpdate()
//                 },
//                 setShowModifiedKeyCommandWrapperDialogRef: function (a) {
//                   v.current = a
//                   return function () {
//                     v.current = s
//                   }
//                 },
//                 setShowSingleCharacterKeyCommandWrapperDialogRef: function (a) {
//                   u.current = a
//                   return function () {
//                     u.current = r
//                   }
//                 },
//               }
//             },
//             [
//               CometKeyCommandSettingsContext,
//               CometKeyCommandUtilsContext,
//               commandMap,
//               CometKeyCommandContext,
//               props.debugName,
//               v,
//               u,
//               x,
//             ],
//           ),
//           onFocusCapture = useCallback(
//             function () {
//               if (!setActiveWrapper) {
//                 c('recoverableViolation')(
//                   'setActiveWrapper is undefined in ' +
//                     (props.debugName != null ? props.debugName : 'unknown'),
//                   'comet_ax',
//                 )
//                 return
//               }
//               setActiveWrapper(activeWrapper)
//             },
//             [setActiveWrapper, activeWrapper, props.debugName],
//           )
//         if (isFocusCapture || props.elementType !== void 0) {
//           var elementType
//           elementType =
//             (elementType = props.elementType) != null ? elementType : 'div'
//           elementType = h.jsx(elementType, {
//             className: c('stylex')(
//               props.isWrapperFocusable ? stylexx.wrapperFocusable : void 0,
//               props.xstyle,
//             ),
//             'data-testid': void 0,
//             onFocusCapture: isFocusCapture ? onFocusCapture : void 0,
//             tabIndex: props.isWrapperFocusable ? -1 : void 0,
//             children: props.children,
//           })
//         } else elementType = props.children
//         context &&
//           (elementType = h.jsx(context.Provider, {
//             value: activeWrapper,
//             children: elementType,
//           }))
//         return h.jsx(c('CometKeyCommandContext').Provider, {
//           value: activeWrapper,
//           children: elementType,
//         })
//       }
//     }
//     g['default'] = a
//   },
//   98,
// )
