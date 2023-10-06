// Convert hours to seconds
function ConvertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  if (hours === 0) return 0;

  const HOURS_PER_SECONDS = 3600;
  return hours * HOURS_PER_SECONDS;
}

console.log(ConvertHoursToSeconds(2));

// give 3 numbers, find max
// Dung ky thuat linh canh
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}
console.log(findMax(9, 18, 6));

// give 3 number, find max even number
function findMaxEvenNumber(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}
console.log(findMaxEvenNumber(8, 15, 21));

// v1
function findMaxEvenNumber(a, b, c) {
  let max = -1;
  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;
  return max;
}
console.log(findMaxEvenNumber(4, 81, 91));
