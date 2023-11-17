export function createObjectFrom(keys: any, value?: any) {
  // If the value is not provided, default it to true
  if (value === undefined) return createObjectFrom(keys, true)

  // Initialize an empty object
  const result: Record<string, any> = {}

  // If the value is an array, create an object by matching keys with array values
  if (Array.isArray(value)) {
    for (let index = keys.length - 1; index >= 0; index--) {
      result[keys[index]] = value[index]
    }
  }
  // If the value is not an array, create an object with the same value for all keys
  else {
    for (let index = keys.length - 1; index >= 0; index--) {
      result[keys[index]] = value
    }
  }

  return result
}
