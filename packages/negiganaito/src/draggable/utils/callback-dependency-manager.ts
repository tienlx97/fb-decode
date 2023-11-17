import ErrorGuard from '@negiganaito/error/errorguard/error-guard'

export class CallbackDependencyManager {
  private $1: Map<any, Map<any, number>>
  private $2: Map<any, { $8: Function; $7: number }>
  private $3: number
  private $4: Map<any, number>

  constructor() {
    this.$1 = new Map()
    this.$2 = new Map()
    this.$3 = 1
    this.$4 = new Map()
  }

  private $5(a: any, b: any): number {
    let c = 0
    const d = new Set<any>(b)
    for (const dependency of d) {
      if (this.$4.get(dependency)) continue
      c++
      let g = this.$1.get(dependency)
      if (g === undefined) {
        g = new Map()
        this.$1.set(dependency, g)
      }
      g.set(a, (g.get(a) || 0) + 1)
    }
    return c
  }

  private $6(a: any): void {
    const dependencies = this.$1.get(a)
    if (!dependencies) return
    for (const [h, count] of dependencies.entries()) {
      const f = count - 1
      dependencies.set(h, f)
      if (f <= 0) {
        dependencies.delete(h)
        const callback = this.$2.get(h)
        if (callback !== undefined) {
          callback.$7--
          if (callback.$7 <= 0) {
            const func = callback.$8
            this.$2.delete(h)
            ErrorGuard.applyWithGuard(func, null, [])
          }
        }
      }
    }
  }

  addDependenciesToExistingCallback(a: any, b: any): any {
    const callback = this.$2.get(a)
    if (!callback) return null
    const added = this.$5(a, b)
    callback.$7 += added
    return a
  }

  isPersistentDependencySatisfied(a: any): boolean {
    return !!this.$4.get(a)
  }

  satisfyPersistentDependency(a: any): void {
    this.$4.set(a, 1)
    this.$6(a)
  }

  satisfyNonPersistentDependency(a: any): void {
    const isPersistent = this.$4.get(a) === 1
    if (!isPersistent) {
      this.$4.set(a, 1)
    }
    this.$6(a)
    if (!isPersistent) {
      this.$4.delete(a)
    }
  }

  registerCallback(a: Function, c: any): any {
    const d = this.$3
    this.$3++
    const count = this.$5(d, c)
    if (count === 0) {
      ErrorGuard.applyWithGuard(a, null, [])
      return null
    }
    this.$2.set(d, {
      $8: a,
      $7: count,
    })
    return d
  }
}
