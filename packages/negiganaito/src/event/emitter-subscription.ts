import { EventSubscription } from './event-subscription'

export class EmitterSubscription extends EventSubscription {
  listener: any
  context: any

  constructor(b: any, c: any, d: any) {
    super(b)
    this.listener = c
    this.context = d
  }
}
