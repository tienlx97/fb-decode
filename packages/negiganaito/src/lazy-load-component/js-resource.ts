// /**
//  * A cache of resources to avoid loading the same module twice. This is important
//  * because Webpack dynamic imports only expose an asynchronous API for loading
//  * modules, so to be able to access already-loaded modules synchronously we
//  * must have stored the previous result somewhere.
//  */
// const resourceMap: any = {}

// function set(moduleId: string, resource: any) {
//   resourceMap[moduleId] = resource
// }
// function get(moduleId: string) {
//   return resourceMap[moduleId]
// }

// export const JSResource = (moduleId: string) => {
//   let resource = get(moduleId)

//   if (resource) {
//     return resource
//   }

//   resource = new JSResourceReferenceImpl(moduleId)

//   set(moduleId, resource)

//   return resource
// }
