
function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.square = function isSquare() {
  const { a, b, c, d } = this;
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    if (a === b && b === c && c === d) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
};

const square1 = new Square(2, 2, 2, 3);
square1.square();
const square2 = new Square(2, 2, 2, 2);
square2.square();
