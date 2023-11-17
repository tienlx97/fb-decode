import { Vector } from '@negiganaito/vector'
import { Arbiter } from './arbiter'
import Event from './event'
import { Style } from './style'
import { DOM } from './dom'

let drag: any = {}
drag.currentDraggable = null

drag.grab = function (a: any) {
  drag.currentDraggable && drag._onmouseup(),
    (a.lastDragOver = null),
    drag.attachDragEvents(),
    (drag.currentDraggable = a)
}
drag.attachDragEvents = function () {
  document.onselectstart = function () {
    document.onselectstart = null
    return !1
  }
  if (drag.dragEventsAttached) return
  drag.dragEventsAttached = !0
  Arbiter.subscribe('scroller/scroll', drag._onmousemove)
  // @ts-ignore
  Event.listen(document, {
    mousemove: drag._onmousemove,
    mouseup: drag._onmouseup,
  })
}
drag.droppables = {}
drag.addDroppable = function (a: any, b: any) {
  ;(drag.droppables[a] = drag.droppables[a] || []).push(b)
}
drag.removeDroppable = function (a: any, b: any) {
  drag.droppables[a] = drag.droppables[a].filter(function (a: any) {
    return a != b
  })
}
drag.getOffsetParent = function (a: any) {
  if (DOM.isNodeOfType(a, ['body', 'html'])) return document.body
  while ((a = a.parentNode) && a !== document.body)
    if (Style.get(a, 'position') !== 'static') return a
  return document.body
}
drag._onmousemove = function (a: any, c: any) {
  if (!drag.currentDraggable) return
  c = c || Vector.getEventPosition(a)
  a = drag.currentDraggable
  var d = drag.droppables[a.namespace]
  if (a.namespace && a.active && d) {
    let e: any = {}
    d.forEach(function (a: any) {
      e[a.zIndex] = a.zIndex
    })
    var f = []
    for (var h in e) f.push(e[h])
    f.sort()
    var i = a.lastDragOver,
      j = null
    for (var k = f.length - 1; k >= 0; k--)
      if (i && i.dom != null && i.zIndex == f[k] && i.isDraggedOver(c)) {
        j = i
        break
      } else {
        i && i.ondragout && i.ondragout(a)
        // @ts-ignore
        for (h = 0; h < d.length; h++) {
          if (f[k] != d[h].zIndex) continue
          if (i != d[h] && a.dom != d[h].dom && d[h].isDraggedOver(c)) {
            j = d[h]
            k = -1
            break
          }
        }
      }
    j &&
      j != i &&
      (j.ondragover(a), drag.currentDraggable.adjustCursorPosition())
    j && j.ondragmove(a, c.sub(Vector.getElementPosition(j.dom)))
    a.lastDragOver = j
  }
  drag.currentDraggable._onmousemove(c)
}
drag._onmouseup = function (a: any) {
  ;(document.onselectstart = null),
    drag.currentDraggable &&
      (drag.currentDraggable._ondrop(), (drag.currentDraggable = null))
}

export const Drag = drag
