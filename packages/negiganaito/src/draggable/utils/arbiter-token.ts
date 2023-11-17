class ArbiterToken {
  private $1: any
  private $2: Array<any>

  private unsubscribe: any

  constructor(instance: any, listeners: Array<any>) {
    this.unsubscribe = function () {
      for (var a = 0; a < this.$2.length; a++) this.$2[a].remove()
      this.$2.length = 0
    }

    this.$1 = instance
    this.$2 = listeners
  }

  // unsubscribe(): void {
  //   for (let i = 0; i < this.$2.length; i++) {
  //     this.$2[i].remove()
  //   }
  //   this.$2.length = 0
  // }

  isForArbiterInstance(instance: any): boolean {
    if (!this.$1) {
      throw new Error('Invalid state: $1 is undefined')
    }
    return this.$1 === instance
  }
}

export default ArbiterToken
