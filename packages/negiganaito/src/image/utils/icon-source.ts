export class IconSource {
  $$typeof: string
  src: any
  size: number

  constructor(domain: any, src: any, size: number) {
    this.$$typeof = 'fb.iconsource'
    this.src = src
    this.size = size
  }
}
