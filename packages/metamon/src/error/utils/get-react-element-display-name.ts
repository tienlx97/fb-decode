import { getReactComponentDisplayName } from './get-react-component-display-name'

function getReactElementDisplayName(element: any) {
  if (!element) {
    return '#empty'
  }

  if (
    typeof element === 'string' ||
    typeof element === 'number' ||
    typeof element === 'boolean'
  ) {
    return '#text'
  }
  if (!element.type) {
    return 'ReactComponent'
  }

  return typeof element.type === 'string'
    ? element.type
    : getReactComponentDisplayName(element.type)
}

export { getReactElementDisplayName }
