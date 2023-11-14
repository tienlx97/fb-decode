export class SVGIcon {
  component: any

  constructor(component: any) {
    this.component = component
  }
}

export class EmojiIcon {
  codepoints: any

  constructor(codepoints: any) {
    this.codepoints = codepoints
  }
}

export class LegacySVGIcon {
  component: any

  constructor(component: any) {
    this.component = component
  }
}

export function legacySVGIcon(component: any): LegacySVGIcon {
  return new LegacySVGIcon(component)
}

export function svgIcon(component: any): SVGIcon {
  return new SVGIcon(component)
}
