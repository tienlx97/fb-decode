function setDisplayName(a: any, b: any) {
  a.displayName = b
  return a
}

function getDisplayName(a: any) {
  a = a.displayName
  if (typeof a === 'string') {
    return a
  } else {
    return null
  }
}

export const PromiseAnnotate = {
  setDisplayName,
  getDisplayName,
}
