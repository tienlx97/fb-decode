export class EventEmitterWithHolding {
  private $2: any
  private $3: any
  private $1: any | null
  private $5: boolean[]
  private $4: number

  constructor(listener: any, emitter: any) {
    this.$2 = listener
    this.$3 = emitter
    this.$1 = null
    this.$5 = []
    this.$4 = 0
  }

  addListener(eventType: string, callback: Function, context?: any) {
    return this.$2.addListener(eventType, callback, context)
  }

  once(eventType: string, callback: Function, context?: any) {
    return this.$2.once(eventType, callback, context)
  }

  addRetroactiveListener(eventType: string, callback: Function, context?: any) {
    const listener = this.$2.addListener(eventType, callback, context)
    const eventStack = this.$5
    eventStack.push(false)
    this.$4++
    this.$3.emitToListener(eventType, callback, context)
    this.$4--
    eventStack[eventStack.length - 1] && listener.remove()
    eventStack.pop()
    return listener
  }

  removeAllListeners(eventType: string) {
    this.$2.removeAllListeners(eventType)
  }

  removeCurrentListener() {
    if (this.$4) {
      const eventStack = this.$5
      eventStack[eventStack.length - 1] = true
    } else {
      this.$2.removeCurrentListener()
    }
  }

  listeners(eventType: string) {
    return this.$2.listeners(eventType)
  }

  emit(eventType: string, ...args: any[]) {
    this.$2.emit(eventType, ...args)
  }

  emitAndHold(eventType: string, ...args: any[]) {
    this.$1 = this.$3.holdEvent(eventType, ...args)
    this.$2.emit(eventType, ...args)
    this.$1 = null
  }

  releaseCurrentEvent() {
    if (this.$1 !== null) {
      this.$3.releaseEvent(this.$1)
    } else if (this.$4 > 0) {
      this.$3.releaseCurrentEvent()
    }
  }

  releaseHeldEventType(eventType: string) {
    this.$3.releaseEventType(eventType)
  }
}
