function getReactComponentDisplayName(comp: any): string {
  if (comp.displayName) {
    return comp.displayName
  }

  return comp.name ?? 'ReactComponent'
}

export { getReactComponentDisplayName }
