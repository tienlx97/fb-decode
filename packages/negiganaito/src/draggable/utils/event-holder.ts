export class EventHolder {
  private $1: { [eventType: string]: any[] }
  private $2: Array<{ eventType: string; index: number }>

  constructor() {
    this.$1 = {}
    this.$2 = []
  }

  holdEvent(eventType: string, ...args: any[]) {
    this.$1[eventType] = this.$1[eventType] || []
    const eventList = this.$1[eventType]
    const eventIndex = eventList.length
    eventList.push(args)
    const eventInfo = {
      eventType: eventType,
      index: eventIndex,
    }
    return eventInfo
  }

  emitToListener(eventType: string, callback: Function, context: any) {
    const eventList = this.$1[eventType]
    if (!eventList) return

    eventList.forEach((eventArgs, index) => {
      if (!eventArgs) return

      this.$2.push({
        eventType: eventType,
        index: index,
      })

      callback.apply(context, eventArgs)

      this.$2.pop()
    })
  }

  releaseCurrentEvent() {
    if (this.$2.length === 0) {
      // Assuming the behavior when trying to release an event with no events held
      throw new Error('Invalid state: No events are held to release.')
    }
    this.releaseEvent(this.$2[this.$2.length - 1])
  }

  releaseEvent(eventInfo: { eventType: string; index: number }) {
    if (this.$1[eventInfo.eventType]) {
      delete this.$1[eventInfo.eventType][eventInfo.index]
    }
  }

  releaseEventType(eventType: string) {
    this.$1[eventType] = []
  }
}
