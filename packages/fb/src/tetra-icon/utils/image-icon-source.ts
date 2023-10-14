export class ImageIconSource {
  $$typeof: string
  src: any
  width: number
  height: number
  resizeStrategy: any

  constructor(
    imgOption: any,
    width: number,
    height: number,
    resizeStrategy?: any,
  ) {
    this.$$typeof = 'fb.imageiconsource'
    this.src = imgOption
    this.width = width
    this.height = height
    this.resizeStrategy = resizeStrategy ?? 'cover'
  }
}
