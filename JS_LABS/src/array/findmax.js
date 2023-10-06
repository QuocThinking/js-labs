// national
function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return false;

  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }
  return max;
}

const numberList = [2, 3, 4, 5, 11];
console.log(findMax(numberList));

// use foreach

function findMaxEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let max = numberList[0];
  numberList.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });
  return max;
}
console.log(findMaxEach([9, 7, 3, 2, 11, 33]));
// dùng reduce

function findMaxReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0);

  return numberList.reduce((accumulator, currentValue) =>
    currentValue > accumulator ? currentValue : accumulator,
  );
}
/**
 *  8 5 -> 8 > 5 => get: 8
 *  22 8 -> 22 > 8 => get : 22
 *
 */

console.log(findMaxReduce([8, 5, 3, 22, 3, 4, 5]));
