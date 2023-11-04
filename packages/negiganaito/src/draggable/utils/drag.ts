import { Vector } from '@negiganaito/vector'
import { Arbiter } from './arbiter'
import Event from './event'
import { Style } from './style'
import { DOM } from './dom'

var g: any = {}
g.currentDraggable = null

g.grab = function (a: any) {
  g.currentDraggable && g._onmouseup(),
    (a.lastDragOver = null),
    g.attachDragEvents(),
    (g.currentDraggable = a)
}
g.attachDragEvents = function () {
  document.onselectstart = function () {
    document.onselectstart = null
    return !1
  }
  if (g.dragEventsAttached) return
  g.dragEventsAttached = !0
  Arbiter.subscribe('scroller/scroll', g._onmousemove)
  // @ts-ignore
  Event.listen(document, {
    mousemove: g._onmousemove,
    mouseup: g._onmouseup,
  })
}
g.droppables = {}
g.addDroppable = function (a: any, b: any) {
  ;(g.droppables[a] = g.droppables[a] || []).push(b)
}
g.removeDroppable = function (a: any, b: any) {
  g.droppables[a] = g.droppables[a].filter(function (a: any) {
    return a != b
  })
}
g.getOffsetParent = function (a: any) {
  if (DOM.isNodeOfType(a, ['body', 'html'])) return document.body
  while ((a = a.parentNode) && a !== document.body)
    if (Style.get(a, 'position') !== 'static') return a
  return document.body
}
g._onmousemove = function (a: any, c: any) {
  if (!g.currentDraggable) return
  c = c || Vector.getEventPosition(a)
  a = g.currentDraggable
  var d = g.droppables[a.namespace]
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
    j && j != i && (j.ondragover(a), g.currentDraggable.adjustCursorPosition())
    j && j.ondragmove(a, c.sub(Vector.getElementPosition(j.dom)))
    a.lastDragOver = j
  }
  g.currentDraggable._onmousemove(c)
}
g._onmouseup = function (a: any) {
  ;(document.onselectstart = null),
    g.currentDraggable &&
      (g.currentDraggable._ondrop(), (g.currentDraggable = null))
}

export const Drag = g
