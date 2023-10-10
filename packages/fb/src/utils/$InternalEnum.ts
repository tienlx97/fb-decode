const g = Object.prototype.hasOwnProperty
const h = typeof WeakMap === 'function' ? new WeakMap() : new Map()

function i(a: any) {
  const b = h.get(a)
  if (b !== undefined) {
    return b
  }

  const c = new Map()
  Object.getOwnPropertyNames(a).forEach(function (b: string) {
    c.set(a[b], b)
  })
  try {
    h.set(a, c)
  } catch (a) {
    //
  }

  return c
}

const j = Object.freeze(
  Object.defineProperties(Object.create(null), {
    isValid: {
      value: function (a: any) {
        return i(this).has(a)
      },
    },
    cast: {
      value: function (a: any) {
        return this.isValid(a) ? a : undefined
      },
    },
    members: {
      value: function () {
        return i(this).keys()
      },
    },
    getName: {
      value: function (a: any) {
        return i(this).get(a)
      },
    },
  }),
)

function a(a: any) {
  const b = Object.create(j)
  for (const c in a) {
    if (g.call(a, c)) {
      Object.defineProperty(b, c, {
        value: a[c],
      })
    }
  }

  return Object.freeze(b)
}

const k = Object.freeze(
  Object.defineProperties(Object.create(null), {
    isValid: {
      value: function (a: string) {
        return typeof a === 'string' && g.call(this, a)
      },
    },
    cast: {
      value: j.cast,
    },
    members: {
      value: function () {
        return Object.getOwnPropertyNames(this).values()
      },
    },
    getName: {
      value: function (a: string) {
        return a
      },
    },
  }),
)

a.Mirrored = function (a: any[]) {
  const b = Object.create(k)
  for (let c = 0, d = a.length; c < d; ++c) {
    Object.defineProperty(b, a[c], {
      value: a[c],
    })
  }

  return Object.freeze(b)
}

Object.freeze(a.Mirrored)

export const InternalEnum = Object.freeze(a)
