// 1 . Get the ones of a number having 3 digits ( đơn vị)
function extractTheOnes(n) {
  // convert to string
  if (n.toString().length !== 3) return -1;

  // 123 % 10 = 3

  return n % 10;
}

console.log(extractTheOnes(334));

// 2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;

  // 123 % 100 = 23 -> 23 / 10 = 2.333 - Math.round()

  return Math.trunc((n % 100) / 10);
}

console.log(extractTheTens(123));
// v1
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;
  return Math.trunc((n % 100) / 10);
}
console.log(extractTheTens(229));

// 3. give the hundres of a number having 3 digits

function extractTheHundres(n) {
  if (n.toString().length !== 3) {
    return -1;
  }
  return Math.trunc(n / 100);
}
console.log(extractTheHundres(523));

// Sum all digits of a number having 3 digits
function sumAllDigits(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100) + Math.trunc((n % 100) / 10) + Math.trunc(n % 10);
}
console.log(sumAllDigits(999));
