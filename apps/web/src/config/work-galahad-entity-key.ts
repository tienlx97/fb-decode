const i = {
  DIFFERENT: 0,
  EQUAL: 1,
  SUBKEY: 2,
}

function j(pathA: string, pathB: string) {
  pathA = pathA.toLowerCase()
  pathB = pathB.toLowerCase()
  return pathA === pathB
    ? i.EQUAL
    : pathA.indexOf(pathB) === 0 && pathA[pathB.length] === '/'
    ? i.SUBKEY
    : i.DIFFERENT
}

function $(a: string, b: string) {
  let c = !1
  for (let d = 0; d < b.length; d++) {
    let e = b[d]
    e !== void 0 ? /*c && invariant(0, 832),*/ (a += '/' + e) : (c = !0)
  }
  return a
}
