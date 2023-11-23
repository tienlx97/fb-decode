// import { JSResourceEvents } from './js-resource-events'
// import { PromiseAnnotate } from './promise-annotate'

// type Callback = (arg: any) => void

// const j = function (a: any) {
//   return a
// }

// let l: any = null
// const k: Callback[] = []

// function m(a: any) {
//   l ? a(l) : k.push(a)
// }

// const n = 'JSResource: unknown caller'

// export class JSResourceReferenceImpl {
//   private $1: any
//   private $2: any
//   static $3: any

//   constructor(a: any) {
//     this.$1 = a
//   }

//   static setBootloader(a: any) {
//     l = a
//     for (let i = 0; i < k.length; i++) {
//       const callback = k[i]
//       callback(l)
//     }
//     k.length = 0
//   }

//   getModuleId() {
//     return this.$1
//   }

//   getModuleIdAsRef() {
//     return this.$1
//   }

//   load() {
//     const a = this
//     const c = this.$2
//     JSResourceEvents.notify(this.$1, c, 'LOADED')
//     const e = new Promise(b => {
//       m((e: any) => {
//         return e.loadModules(
//           [a.getModuleIdAsRef()],
//           function (e: any) {
//             JSResourceEvents.notify(a.$1, c, 'PROMISE_RESOLVED')
//             b(e)
//           },
//           (e = a.$2) != null ? e : n,
//         )
//       })
//     })

//     PromiseAnnotate.setDisplayName(e, `Bootload(${this.getModuleId()})`)
//     return e
//   }

//   preload() {
//     var a,
//       b = this,
//       c = (a = this.$2) != null ? a : n
//     m((a: any) => {
//       return a.loadModules([b.getModuleIdAsRef()], () => {}, 'preload: ' + c)
//     })
//   }

//   equals(a: any) {
//     return this === a || this.$1 == a.$1
//   }

//   getModuleIfRequireable() {
//     JSResourceEvents.notify(this.$1, this.$2, 'ACCESSED')
//     return c('ifRequireable').call(null, this.$1, j)
//   }

//   getModuleIfRequired() {
//     JSResourceEvents.notify(this.$1, this.$2, 'ACCESSED')
//     return c('ifRequired').call(null, this.$1, j)
//   }

//   // eslint-disable-next-line camelcase
//   static disableForSSR_DO_NOT_USE() {
//     this.$3 = !1
//   }

//   // eslint-disable-next-line camelcase
//   isAvailableInSSR_DO_NOT_USE() {
//     return JSResourceReferenceImpl.$3
//   }

//   __setRef(a: any) {
//     this.$2 = a
//     JSResourceEvents.notify(this.$1, this.$2, 'CREATED')
//     return this
//   }

//   static loadAll(resources: any, callback: Callback) {
//     const c: { [key: string]: boolean } = {}
//     let e = false

//     for (const resource of resources) {
//       const j = resource.$2
//       if (j) {
//         e = true
//         c[j] = true
//       }
//       JSResourceEvents.notify(resource.$1, j, 'LOADED')
//     }

//     m((d: any) => {
//       return d.loadModules(
//         resources.map(function (resource: any) {
//           return resources.getModuleId()
//         }),
//         callback,
//         e ? Object.keys(c).join(':') : 'JSResource: unknown caller',
//       )
//     })
//   }
// }
