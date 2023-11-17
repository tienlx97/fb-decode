/**
 * Memoizes a function by caching its results based on the provided cache key function.
 * @param {Function} computationFunction - The function to be memoized.
 * @param {Function} cacheKeyFunction - A function that computes a unique cache key for given function arguments.
 * @param {Function} memoizedFunction - An internal function that handles the memoization.
 * @returns {Function} - A memoized version of the original function.
 */
export default function memoizeWithArgs(
  computationFunction,
  cacheKeyFunction,
  memoizedFunction = undefined,
) {
  var cache

  memoizedFunction = function () {
    cache || (cache = {})
    var cacheKey = cacheKeyFunction.apply(void 0, arguments)

    if (!Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
      cache[cacheKey] = computationFunction.apply(void 0, arguments)
    }

    return cache[cacheKey]
  }

  return memoizedFunction
}
