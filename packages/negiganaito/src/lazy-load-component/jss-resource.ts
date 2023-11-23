/**
 * A cache of resources to avoid loading the same module twice. This is important
 * because Webpack dynamic imports only expose an asynchronous API for loading
 * modules, so to be able to access already-loaded modules synchronously we
 * must have stored the previous result somewhere.
 */
const resourceMap = new Map<string, any>()

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
class Resource<T> {
  private _error: any
  private _loader: any
  private _promise: any
  private _result: any
  private _moduleId: string

  constructor(moduleId: string, loader: () => Promise<{ default: T }>) {
    this._loader = loader
    this._moduleId = moduleId
  }

  /**
   * Returns the module's id
   */
  getModuleId(): string {
    return this._moduleId
  }

  /**
   * Gets a module if it is already loaded, undefined otherwise.
   */
  getModuleIfRequired() {
    const result = this._result
    if (result) {
      return result
    }
  }

  /**
   * Loads the resource if necessary.
   */
  load(): Promise<T> {
    let promise = this._promise
    if (promise == null) {
      promise = this._loader()
        .then((result: any) => {
          if (result.default) {
            result = result.default
          }
          this._result = result
          return result
        })
        .catch((error: any) => {
          this._error = error
          throw error
        })
      this._promise = promise
    }
    return promise
  }

  /**
   * Returns the result, if available. This can be useful to check if the value
   * is resolved yet.
   */
  get(): T | undefined {
    if (this._result != null) {
      return this._result
    }
  }

  /**
   * This is the key method for integrating with React Suspense. Read will:
   * - "Suspend" if the resource is still pending (currently implemented as
   *   throwing a Promise, though this is subject to change in future
   *   versions of React)
   * - Throw an error if the resource failed to load.
   * - Return the data of the resource if available.
   */
  read(): T {
    if (this._result != null) {
      return this._result
    } else if (this._error != null) {
      throw this._error
    } else if (this._promise === null) {
      this._promise = this.load()
      throw this._promise
    } else {
      throw this._promise
    }
  }
}

/**
 * A helper method to create a resource, intended for dynamically loading code.
 *
 * Example:
 * ```
 *    // Before rendering, ie in an event handler:
 *    const resource = JSResource('Foo', () => import('./Foo.js'));
 *    resource.load();
 *
 *    // in a React component:
 *    const Foo = resource.read();
 *    return <Foo ... />;
 * ```
 *
 * @param {*} moduleId A globally unique identifier for the resource used for caching
 * @param {*} loader A method to load the resource's data if necessary
 */
export function JSResource<T>(
  moduleId: string,
  loader: () => Promise<{ default: T }>,
): Resource<T> {
  let resource = resourceMap.get(moduleId)
  if (resource == null) {
    resource = new Resource(moduleId, loader)
    resourceMap.set(moduleId, resource)
  }
  return resource
}
