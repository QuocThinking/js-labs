/**
 * 1) Every : kiểm tra tất cả phần tử thỏa điều kiện
 */

// v1

function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    const value = numberList[i];
    if (value % 2 !== 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}
console.log(checkIfAllEven([2, 4, 5, 6]));
console.log(checkIfAllEven([2, 4, 8, 6]));

// v2
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
console.log(checkIfAllEven([2, 4, 5, 6]));
console.log(checkIfAllEven([2, 4, 8, 6]));
