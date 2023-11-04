export function ge(
  a: string | HTMLElement,
  b?: HTMLElement,
  c?: string,
): HTMLElement | null {
  if (typeof a !== 'string') {
    return a
  } else if (!b) {
    return document.getElementById(a)
  } else {
    return findElementById(a, b, c)
  }
}

function findElementById(
  id: string,
  element: HTMLElement,
  tag?: string,
): HTMLElement | null {
  if (getIdAttribute(element) === id) {
    return element
  } else if (element.getElementsByTagName) {
    const elements: any = element.getElementsByTagName(tag || '*')
    for (let i = 0; i < elements.length; i++) {
      if (getIdAttribute(elements[i]) === id) {
        return elements[i]
      }
    }
  } else {
    const children = element.childNodes
    for (let i = 0; i < children.length; i++) {
      const foundElement = findElementById(id, children[i] as HTMLElement, tag)
      if (foundElement) {
        return foundElement
      }
    }
  }
  return null
}

function getIdAttribute(element: HTMLElement): string | null {
  return element.getAttribute ? element.getAttribute('id') : null
}
