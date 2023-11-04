import { BaseEventEmitter } from '@negiganaito/event'

export class EventEmitter extends BaseEventEmitter {
  constructor() {
    // @ts-ignore
    super(arguments)
  }
}
