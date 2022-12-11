export interface IKeyAttributes {
  pressed: boolean;
}

export interface IKeysInfo {
  keyA: IKeyAttributes,
  keyD: IKeyAttributes,
  keyS: IKeyAttributes,
  keyW: IKeyAttributes,
  lastKey: string,
}

export interface Point {
  x: number,
  y: number,
}

export default class Boundary {
  position: Point;
  width: number;
  height: number;
  constructor(position: Point, width: number, height: number) {
    this.position = position
    this.width = width
    this.height = height
  }
}

export function rectangularCollision(rectangle1: Boundary, rectangle2: Point) {
  return (
    (rectangle1.position.x + rectangle1.width >= rectangle2.x) &&
    (rectangle1.position.x <= rectangle2.x) &&
    (rectangle1.position.y + rectangle1.height >= rectangle2.y) &&
    (rectangle1.position.y <= rectangle2.y)
  )
}

export function eulerDistance(a: number,b: number) {
  return Math.round(Math.sqrt(a*a + b*b) * 10) / 10
}