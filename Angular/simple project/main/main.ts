// function log(msg) {
//   console.log(msg);
// }
// let message = "Hello World";

// log(message);

// let count: number = 5;
// let b: boolean = true;
// let c: string = "hello";
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, "string"];

// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let backgroundColor = Color.Blue;

// let string = "string";
// let endsWithG = (<string>string).endsWith("g");
// let endsWithGAlternative = (string as string).endsWith("g");

// interface Point {
//   x: number;
//   y: number;
// }

// class ClassPoint {
//   private x: number; //can't be called outside the class
//   y: number;
//   //? --> optional
//   constructor(x?: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   draw() {
//     console.log("X: " + this.x + " Y: " + this.y);
//   }
// }

class Point {
  constructor(private _x: number, public _y: number) {}
  draw() {
    console.log("X: " + this._x + " Y: " + this._y);
  }

  get x() {
    return this.x;
  }
  set x(val) {
    if (val < 0) {
      throw new Error("NEW ERROR");
    }
    this.x = val;
  }
}

let point = new Point(1, 2);
// point.x = 1; // canoot be changed, x is private
// point.y = 2;
let x = point.x;
point.x = 10;
point.draw();
