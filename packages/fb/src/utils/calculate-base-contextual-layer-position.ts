import { CSSProperties } from 'react'

// isRTL()
const h = false

type BaseContextualLayerOption = {
  align: any
  contextRect: any
  contextualLayerSize: any
  fixed: any
  offsetRect: any
  position: any
  screenRect: any
}

export default function calculateBaseContextualLayerPosition({
  align,
  contextRect,
  contextualLayerSize,
  fixed,
  offsetRect,
  position,
  screenRect,
}: BaseContextualLayerOption) {
  const style = {
    height: void 0,
    position: fixed ? 'fixed' : void 0,
    transform: '',
    width: void 0,
  } as CSSProperties

  let i = 0,
    j = 0,
    k: any = 0,
    l: any = 0,
    m: any = (contextRect.bottom + contextRect.top) / 2,
    n = (contextRect.left + contextRect.right) / 2,
    o = h ? 'start' : 'end',
    p = h ? 'end' : 'start'
  switch (position) {
    case 'above':
      j = contextRect.top - offsetRect.top
      l = '-100%'
      break
    case 'below':
      j = contextRect.bottom - offsetRect.top
      break
    case p:
      i = contextRect.left - offsetRect.left
      k = '-100%'
      break
    case o:
      i = contextRect.right - offsetRect.left
      break
  }
  if (position === 'start' || position === 'end')
    switch (align) {
      case 'start':
        j = contextRect.top - offsetRect.top
        break
      case 'middle':
        j = m - offsetRect.top
        l = '-50%'
        break
      case 'end':
        j = contextRect.bottom - offsetRect.top
        l = '-100%'
        break
      case 'stretch':
        j = contextRect.top - offsetRect.top
        style.height = contextRect.bottom - contextRect.top + 'px'
        break
    }
  else if (position === 'above' || position === 'below')
    switch (align) {
      case p:
        i = contextRect.left - offsetRect.left
        break
      case 'middle':
        i = n - offsetRect.left
        k = '-50%'
        break
      case o:
        i = contextRect.right - offsetRect.left
        k = '-100%'
        break
      case 'stretch':
        i = contextRect.left - offsetRect.left
        style.width = contextRect.right - contextRect.left + 'px'
        break
    }
  let adjustment = 0
  if (contextualLayerSize)
    if (position === 'start' || position === 'end') {
      var q = null
      switch (align) {
        case 'start':
          q = contextRect.top
          break
        case 'middle':
          q = m - contextualLayerSize.height / 2
          break
        case 'end':
          q = contextRect.bottom - contextualLayerSize.height
          break
      }
      q &&
        (q < screenRect.top
          ? (adjustment = screenRect.top - q)
          : q + contextualLayerSize.height > screenRect.bottom &&
            (adjustment = screenRect.bottom - q - contextualLayerSize.height))
      j += adjustment
    } else if (position === 'above' || position === 'below') {
      m = null
      switch (align) {
        case p:
          m = contextRect.left
          break
        case 'middle':
          m = n - contextualLayerSize.width / 2
          break
        case o:
          m = contextRect.right - contextualLayerSize.width
          break
      }
      m != null &&
        (m < screenRect.left
          ? (adjustment = screenRect.left - m)
          : m + contextualLayerSize.width > screenRect.right &&
            (adjustment = screenRect.right - m - contextualLayerSize.width))
      i += adjustment
    }
  q = ''
  ;(i !== 0 || j !== 0) &&
    (q += 'translate(' + Math.round(i) + 'px, ' + Math.round(j) + 'px) ')
  ;(k !== 0 || l !== 0) && (q += 'translate(' + k + ', ' + l + ') ')
  style.transform = q
  return {
    adjustment: adjustment,
    style: style,
  }
}
