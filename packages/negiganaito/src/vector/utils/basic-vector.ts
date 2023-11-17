export class BasicVector {
  public x: any
  public y: any

  constructor(a: any, b: any) {
    this.x = a
    this.y = b
  }

  derive(b: any, c: any) {
    return new BasicVector(b, c)
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }

  add(a: any, b?: any) {
    b === void 0 && ((b = a.y), (a = a.x))
    a = parseFloat(a)
    b = parseFloat(b)
    return this.derive(this.x + a, this.y + b)
  }

  mul(a: any, b: any) {
    b === void 0 && (b = a)
    return this.derive(this.x * a, this.y * b)
  }

  div(a: any, b: any) {
    b === void 0 && (b = a)
    return this.derive((this.x * 1) / a, (this.y * 1) / b)
  }

  sub(a: any, b?: any) {
    if (arguments.length === 1) return this.add(a.mul(-1))
    else return this.add(-a, -b)
  }

  distanceTo(a: any) {
    return this.sub(a).magnitude()
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  rotate(a: any) {
    return this.derive(
      this.x * Math.cos(a) - this.y * Math.sin(a),
      this.x * Math.sin(a) + this.y * Math.cos(a),
    )
  }
}
