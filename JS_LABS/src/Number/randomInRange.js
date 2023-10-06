function randomNumberInRange(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  return (result = Math.round(random) + a);
}

console.log(randomNumberInRange(10, 99));
console.log(randomNumberInRange(10, 99));
console.log(randomNumberInRange(10, 99));
console.log(randomNumberInRange(100, 999));
console.log(randomNumberInRange(100, 999));
console.log(randomNumberInRange(1000, 9999));
