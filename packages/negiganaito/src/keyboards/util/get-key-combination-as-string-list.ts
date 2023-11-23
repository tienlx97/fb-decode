import { getKeyboardKeyAsString } from './get-keyboard-key-as-string'

const modifierKeys = ['alt', 'command', 'shift']

export function getKeyCombinationAsStringList(command: any) {
  let key = (!command ? void 0 : command.key) ? command.key.toLowerCase() : null
  key = key ? getKeyboardKeyAsString(key) : null

  const keysWithoutModifiers: any = []
  const keysWithModifiers: any = []

  modifierKeys
    .filter(modifier => {
      return (!command ? void 0 : command[modifier]) === !0
    })
    .map(modifier => getKeyboardKeyAsString(modifier))
    .concat(key ? [key] : [])
    .forEach((keyData: any) => {
      // const firstChar = keyData[0]
      // const fullKey = keyData[1]

      const [firstChar, fullKey] = keyData

      keysWithoutModifiers.push(firstChar)
      keysWithModifiers.push(fullKey ?? firstChar)
    })

  return [keysWithoutModifiers, keysWithModifiers]
}
