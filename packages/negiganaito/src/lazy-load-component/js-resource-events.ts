// import performanceAbsoluteNow from '@negiganaito/utils/common/performance-absolute-now' // Replace './performanceAbsoluteNow' with the correct path to your performanceAbsoluteNow module

// let h: typeof performanceAbsoluteNow

// const i = 50
// const j = new Map<string, Map<string, Map<string, [number, number[]]>>>()

// function notify(a: string, b: string | null | undefined, d: string) {
//   const moduleId = a
//   const ref = b != null ? b : ''
//   let e = j.get(moduleId)
//   if (!e) {
//     j.set(moduleId, (e = new Map()))
//   }
//   let aMap = e.get(ref)
//   if (!aMap) {
//     e.set(ref, (aMap = new Map()))
//   }
//   let entry = aMap.get(d)
//   if (!entry) {
//     aMap.set(d, (entry = [0, []]))
//   }
//   entry[1][entry[0]++ % i] = (h || (h = performanceAbsoluteNow))()
// }

// function getEvents(a: string, b: number, c: number) {
//   const moduleId = a
//   const result: {
//     module: string
//     ref: string | null
//     type: string
//     time: number
//   }[] = []
//   const moduleMap = j.get(moduleId)

//   if (moduleMap) {
//     for (const [ref, typeMap] of moduleMap) {
//       for (const [type, timeArray] of typeMap) {
//         for (const time of timeArray) {
//           // @ts-ignore
//           if (time >= b && time <= c) {
//             result.push({
//               module: moduleId,
//               ref: ref || null,
//               type,
//               // @ts-ignore
//               time,
//             })
//           }
//         }
//       }
//     }
//   }

//   return result.sort((a, b) => a.time - b.time)
// }

// function getAllModuleEvents(a: number, b: number) {
//   const result = new Map<
//     string,
//     { module: string; ref: string | null; type: string; time: number }[]
//   >()

//   for (const moduleId of j.keys()) {
//     const events = getEvents(moduleId, a, b)
//     if (events.length) {
//       result.set(moduleId, events)
//     }
//   }

//   return result
// }

// export const JSResourceEvents = {
//   notify,
//   getEvents,
//   getAllModuleEvents,
// }
