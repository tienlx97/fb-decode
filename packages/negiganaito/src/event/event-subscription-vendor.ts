export class EventSubscriptionVendor {
  private $1: { [key: string]: any[] } = {}

  addSubscription(eventType: string, subscriber: any): any {
    // if (subscriber !== this) {
    //   throw new Error('Invalid subscriber')
    // }

    this.$1[eventType] || (this.$1[eventType] = [])

    const key = this.$1[eventType].length
    this.$1[eventType].push(subscriber)
    subscriber.eventType = eventType
    subscriber.key = key

    return subscriber
  }

  removeAllSubscriptions(eventType?: string): void {
    if (eventType === undefined) {
      this.$1 = {}
    } else {
      delete this.$1[eventType]
    }
  }

  removeSubscription(subscriber: any): void {
    const eventType = subscriber.eventType
    const key = subscriber.key
    const subscriptions = this.$1[eventType]

    if (subscriptions) {
      delete subscriptions[key]
    }
  }

  getSubscriptionsForType(eventType: string): any[] {
    return this.$1[eventType]
  }
}
