// write a function to check if a number a positive even number
// if yes , return true , otherwise return false

// flag

// v1
function isPositiverEvenNumber(n) {
  let isValid;
  if (n >= 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}
console.log(isPositiverEvenNumber(5));

// v2

function isPositiverEvenNumber(n) {
  let isValid = false;
  if (n >= 0 && n % 2 === 0) {
    isValid = true;
  }
  return isValid;
}

console.log(isPositiverEvenNumber(10));

// v3

function isPositiverEvenNumber(n) {
  if (n >= 0 && n % 2 === 0) {
    return true;
  }
  return false;
}

// v4
function isPositiverEvenNumber(n) {
  return n >= 0 && n % 2 === 0;
}
