export class MWXThreadThemeColor {
  color: any

  constructor(a: any) {
    this.color = a
  }
}

export const mwxThreadThemeColor = (a: string) => new MWXThreadThemeColor(a)
