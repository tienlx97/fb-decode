const g = /^[a-z0-9/]$/

// Define a function to check if a given input is a single character key
export default function isSingleCharKey(a: any) {
  return a ? g.test(a) : !1
}
