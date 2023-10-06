// 1 . Write a function to calculate the area of a rectangle
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

console.log(calcAreaOfRectangle(5, 6));
console.log(calcAreaOfRectangle(0, 6));
// v2
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  const result = a * b;
  return result;
}

// write a function to calculate perimeter of a rectangle

function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  return (a + b) * 2;
}

console.log(calcPerimeterOfRectangle(5, 6));

// write a function to calculate the area of circle

function calcAreaOfCircle(a) {
  if (a <= 0) {
    return -1;
  }
  return a * a * Math.PI;
}
console.log(calcAreaOfCircle(5));
