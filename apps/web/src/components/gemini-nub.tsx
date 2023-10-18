import React from 'react'
import { WorkGalahadNavFocusableItem } from './channel-gemini-nav-focusable-group'
import { CometTooltip } from '@negiganaito/tooltip'

type GeminiNubProps = {
  children?: any
  title?: string
}

export const GeminiNub = ({ children, title }: GeminiNubProps) => {
  return (
    <WorkGalahadNavFocusableItem>
      <div className="xamitd3 x1e56ztr x1xmf6yo" role="row">
        <CometTooltip align="start" tooltip={title}>
          <div role="gridcell">{children}</div>
        </CometTooltip>
      </div>
    </WorkGalahadNavFocusableItem>
  )
}

/*
__d(
  'GeminiNub.react',
  ['ChannelGeminiNavFocusableGroup.react', 'CometTooltip.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h,
      i = h || d('react')
    function a(a) {
      var b = a.children
      a = a.title
      return i.jsx(
        d('ChannelGeminiNavFocusableGroup.react').WorkGalahadNavFocusableItem,
        {
          children: i.jsx('div', {
            className: 'xamitd3 x1e56ztr x1xmf6yo',
            role: 'row',
            children: i.jsx(c('CometTooltip.react'), {
              align: 'start',
              tooltip: a,
              children: i.jsx('div', {
                role: 'gridcell',
                children: b,
              }),
            }),
          }),
        },
      )
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)


*/
