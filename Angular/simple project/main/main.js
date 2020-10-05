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
var ClassPoint = /** @class */ (function () {
    function ClassPoint() {
    }
    ClassPoint.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return ClassPoint;
}());
var point = new ClassPoint();
point.x = 1;
point.y = 2;
point.draw();
