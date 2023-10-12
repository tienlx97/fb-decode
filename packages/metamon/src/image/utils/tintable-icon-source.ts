import { IconSource } from './icon-source'

export class TintableIconSource extends IconSource {
  constructor(domain: any, src: any, size: number) {
    super(domain, src, size)
    this.$$typeof = 'fb.tintableiconsource'
  }
}
