/**
 *  find() : tìm phần tử đầu tiên thỏa điều kiện
 * findindex() : Tìm vị trí phần tử đầu tiên thỏa điều kiện
 */

function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  onFinish(sum);
}
function handleOnFinish(sum) {
  console.log('sum : ' + sum);
}
main(handleOnFinish);

// v2 callback

function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  onFinish(sum);
}
function handleOnFinish(sum) {
  console.log('sum : ' + sum);
}
main(handleOnFinish);

// Cài find function
// v1 Kỹ thuật lính canh, tìm phần tử chẵn đầu tiên

function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  let firstEven;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }
  return firstEven;
}

console.log(findFirstEven([2, 3, 6, 7, 8]));

// v2

function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      return number;
    }
  }
}
console.log(findFirstEven([2, 3, 6, 7, 8]));

// v3

function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    return numberList[i] % 2 === 0;
  }
  return numberList[i];
}
console.log(findFirstEven([2, 3, 6, 7, 8]));

// v4 find(callbackfn)

function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([7, 8, 5, 6, 4], isEven));

// v5

function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}
function isEven(number) {
  return number % 2 === 0;
}
console.log(findFirstEven([1, 3, 5, 6, 8, 9], isEven));

// v6
function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}

console.log(
  findFirstEven([3, 3, 6, 5, 7, 8], function (number) {
    return number % 2 === 0;
  }),
);

// v5
function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}

console.log(
  findFirstEven([1, 1, 2, 3, 4], function (number) {
    return number % 2 === 0;
  }),
);

// arraow function
function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}

console.log(findFirstEven([1, 1, 2, 4, 5, 5], (number) => number % 2 === 0));
console.log(findFirstEven([1, 1, 6, 4, 5, 5], (number) => number % 2 === 0));

// v5

function findFirstEven(numberList, callbackfn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackfn(number)) {
      return number;
    }
  }
  return undefined;
}
console.log(findFirstEven([1, 2, 5, 6, 7, 8, 9], (number) => number > 3));
