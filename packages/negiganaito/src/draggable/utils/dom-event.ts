export class DOMEvent {
  event: any
  target: any

  constructor(event: any) {
    this.event = event || window.event
    // typeof this.event.srcElement !== 'unknown' || h(0, 5798)
    this.target = this.event.target || this.event.srcElement
  }

  preventDefault() {
    const event = this.event
    if (event.preventDefault) {
      event.preventDefault()
      if (!('defaultPrevented' in event)) {
        event.defaultPrevented = true
      }
    } else {
      event.returnValue = false
    }
    return this
  }

  isDefaultPrevented(p: any) {
    const event: any = this.event
    return 'defaultPrevented' in event
      ? event.defaultPrevented
      : event.returnValue === false
  }

  stopPropagation() {
    const event = this.event
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
    return this
  }

  kill() {
    this.stopPropagation().preventDefault()
    return this
  }

  static killThenCall(callback: any) {
    return function (event: any) {
      new DOMEvent(event).kill()
      return callback()
    }
  }
}

export default DOMEvent
