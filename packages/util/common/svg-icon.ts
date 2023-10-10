export class SVGIcon {
  component: any

  constructor(a: any) {
    this.component = a
  }
}

export class EmojiIcon {
  codepoints: any

  constructor(a: any) {
    this.codepoints = a
  }
}

export class LegacySVGIcon {
  component: any

  constructor(a: any) {
    this.component = a
  }
}

export function legacySVGIcon(a: any): LegacySVGIcon {
  return new LegacySVGIcon(a)
}

export function svgIcon(a: any): SVGIcon {
  return new SVGIcon(a)
}
