export class EventSubscription {
  private subscriber: any

  constructor(subscriber: any) {
    this.subscriber = subscriber
  }

  remove(): void {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this)
      this.subscriber = null
    }
  }
}
