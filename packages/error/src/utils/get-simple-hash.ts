const characters: string = 'abcdefghijklmnopqrstuvwxyz012345'

function getSimpleHash(...inputStrings: (string | null | undefined)[]): string {
  let hashValue: number = 0

  for (let i = 0; i < inputStrings.length; i++) {
    const currentString: string | null | undefined = inputStrings[i]

    if (currentString != null) {
      const stringLength: number = currentString.length

      for (let j = 0; j < stringLength; j++) {
        hashValue =
          (hashValue << 5) - hashValue + (currentString.charCodeAt(j) || 0)
      }
    }
  }

  let hashResult: string = ''

  for (let k = 0; k < 6; k++) {
    hashResult = characters.charAt(hashValue & 31) + hashResult
    hashValue >>= 5
  }

  return hashResult
}

export { getSimpleHash }
