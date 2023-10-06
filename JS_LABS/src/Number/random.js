// Math.random() -> [0, 1)

function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random();
  const result = Math.round(random);

  return result;
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// v2

function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random() * n;
  return Math.round(random);
}

console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
