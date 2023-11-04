export class FbtResultBase {
  private $1: any
  private __errorListener: any
  private $3: any
  private $2: any

  constructor(a: any, b: any) {
    this.$1 = a
    this.__errorListener = b
    this.$3 = !1
    this.$2 = null
  }

  flattenToArray() {
    return FbtResultBase.flattenToArray(this.$1)
  }

  getContents() {
    return this.$1
  }
  toString() {
    if (Object.isFrozen(this)) return this.$4()
    if (this.$3) return '<<Reentering fbt.toString() is forbidden>>'
    this.$3 = !0
    try {
      return this.$4()
    } finally {
      this.$3 = !1
    }
  }
  $4() {
    if (this.$2 != null) return this.$2
    var b = '',
      c = this.flattenToArray()
    for (var d = 0; d < c.length; ++d) {
      var e = c[d]
      if (typeof e === 'string' || e instanceof FbtResultBase) b += e.toString()
      else {
        var f
        ;(f = this.__errorListener) == null
          ? void 0
          : f.onStringSerializationError == null
          ? void 0
          : f.onStringSerializationError(e)
      }
    }
    Object.isFrozen(this) || (this.$2 = b)
    return b
  }
  toJSON() {
    return this.toString()
  }

  static flattenToArray(b: any) {
    var c = []
    for (var d = 0; d < b.length; ++d) {
      var e = b[d]
      Array.isArray(e)
        ? c.push.apply(c, FbtResultBase.flattenToArray(e))
        : e instanceof FbtResultBase
        ? c.push.apply(c, e.flattenToArray())
        : c.push(e)
    }
    return c
  }
}

;[
  'anchor',
  'big',
  'blink',
  'bold',
  'charAt',
  'charCodeAt',
  'codePointAt',
  'contains',
  'endsWith',
  'fixed',
  'fontcolor',
  'fontsize',
  'includes',
  'indexOf',
  'italics',
  'lastIndexOf',
  'link',
  'localeCompare',
  'match',
  'normalize',
  'repeat',
  'replace',
  'search',
  'slice',
  'small',
  'split',
  'startsWith',
  'strike',
  'sub',
  'substr',
  'substring',
  'sup',
  'toLocaleLowerCase',
  'toLocaleUpperCase',
  'toLowerCase',
  'toUpperCase',
  'trim',
  'trimLeft',
  'trimRight',
].forEach(function (a: any) {
  // @ts-ignore
  FbtResultBase.prototype[a] = function () {
    var b
      // @ts-ignore
    ;(b = this.__errorListener) == null
      ? void 0
      : b.onStringMethodUsed == null
      ? void 0
      : b.onStringMethodUsed(a)
    for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
      d[e] = arguments[e]
    // @ts-ignore
    return String.prototype[a].apply(this, d)
  }
})
