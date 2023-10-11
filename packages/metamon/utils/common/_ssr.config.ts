import type { MutableRefObject } from 'react'

const isClient = typeof window !== 'undefined'

export const _window = /* #__PURE__ */ isClient ? window : undefined
export const _document = /* #__PURE__ */ isClient ? window.document : undefined
export const _navigator = /* #__PURE__ */ isClient
  ? window.navigator
  : undefined
export const _location = /* #__PURE__ */ isClient ? window.location : undefined

/**
 * Any function
 */
export type Fn = () => void

/**
 * Maybe it's a react ref, or a dom node.
 *
 * ```ts
 * type MaybeRef<T> = T | MutableRefObject<T>
 * ```
 */
export type MaybeRef<T> = T | MutableRefObject<T>

export const noop = () => {}

/**
 * Check if object is a react ref
 */
export const isRef = (obj: unknown): boolean =>
  obj !== null &&
  typeof obj === 'object' &&
  Object.prototype.hasOwnProperty.call(obj, 'current')

/**
 * Accepts either a ref object or a dom node and returns a dom node
 *
 * @param target - ref or a dom node
 * @returns dom noe
 */
export function unRef<T = HTMLElement>(target: MaybeRef<T>): T {
  const element = isRef(target)
    ? (target as MutableRefObject<T>).current
    : (target as T)

  return element
}
