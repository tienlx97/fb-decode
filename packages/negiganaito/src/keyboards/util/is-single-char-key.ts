// Define a regular expression to match single characters (lowercase letters, digits, and '/')
const singleCharRegex = /^[a-z0-9/]$/

// Define a function to check if a given input is a single character key
export default function isSingleCharKey(input: any) {
  // Check if the input 'input' is not null
  if (input !== null) {
    // Test if 'input' matches the regular expression 'singleCharRegex'
    return singleCharRegex.test(input) // Returns true if it's a single character key, otherwise false
  } else {
    // If 'input' is null, return false
    return false
  }
}
