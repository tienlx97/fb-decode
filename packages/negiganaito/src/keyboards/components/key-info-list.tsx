/*
__d("KeyInfoList.react", 
["fbt", 
"CometScreenReaderText.react", 
"KeyInfo.react", 
"isSingleCharKey", "react"], (function(a, b, c, d, e, f, g, h) {
*/

import { CometScreenReaderText } from '@negiganaito/text'
import React from 'react'

// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

type KeyInfoListProps = {
  commands?: any
  isFullTable?: any
}

export function KeyInfoList({ commands: b, isFullTable: d }: KeyInfoListProps) {
  const e = [],
    f = -1
  if (b != null) {
    var g = Array.from(b.keys()),
      i = Array.from(b.values())
    i = i.some(function (a) {
      return 'order' in a[0]
    })
    i
      ? g.sort(function (a, c) {
          a = (a = b.get(a)) != null ? a : [{}]
          c = (c = b.get(c)) != null ? c : [{}]
          a = (a = a[0].order) != null ? a : 99999
          c = (c = c[0].order) != null ? c : 99999
          return a - c
        })
      : g.sort(function (a, b) {
          if (a < b) return -1
          return b > a ? 1 : 0
        })
    g.forEach(function (h, i) {
      var k = b.get(h)
      k &&
        k.forEach(function (b, l) {
          f++
          if (
            b.isHiddenCommand ||
            b.command == null ||
            (a.hideSingleCharKeys === !0 && c('isSingleCharKey')(h))
          )
            return
          var m = i === g.length - 1 && l === k.length - 1
          return e.push(
            j.jsx(
              c('KeyInfo.react'),
              {
                command: b.command,
                commandID: b.commandID,
                description: b.description,
                disabled: a.disabled,
                displayType: d ? 'full' : 'compact',
                editable: a.editable,
                groupID: b.groupID,
                index: l,
                isEndOfList: m,
                keyCommand: h,
              },
              f,
            ),
          )
        })
    })
  }
  return jsx('table', {
    cellSpacing: '0',
    className: 'xh8yej3',
    children: jsxs('tbody', {
      children: [
        jsxs('tr', {
          children: [
            jsx('th', {
              children: jsx(CometScreenReaderText, {
                text: 'To Do This',
              }),
            }),
            jsx('th', {
              children: jsx(CometScreenReaderText, {
                text: 'Use Command',
              }),
            }),
          ],
        }),
        e,
      ],
    }),
  })
}
