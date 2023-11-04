const g: Record<string, Function> = {}

export function wrapFunction(a: Function, b: string, c: any) {
  const d = b in g ? g[b](a, c) : a
  return function (...args: any[]) {
    // @ts-ignore
    return d.apply(this, args)
  }
}

wrapFunction.setWrapper = function (a: Function, b: string) {
  g[b] = a
}
