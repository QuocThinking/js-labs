/**
 * Dùng hàm map(transformFn) để biến đổi các phần tử này sang phần tử khác.
 * Lưu ý số lượng phần tử không thay đổi.
 * Ðiều thay đổi ở đây là mỗi phần tử sẽ bị biến đổi theo một công thức giống nhau.
 * Kết quả trả về là một mảng mới.
 */

function map(arr, mappingfn) {
  if (!Array.isArray(arr) || typeof mappingfn !== 'function') return undefined;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingfn(element, i);
    newArr.push(newElement);
  }
  return newArr;
}
console.log(map([1, 2, 3, 4, 4], (x) => x + 1));
console.log(map([1, 2, 3, 4, 4], (x) => x * 2));

// v2
function map(arr, mappingfn) {
  if (!Array.isArray(arr) || typeof mappingfn !== 'function') return undefined;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElemet = mappingfn(element, i);
    newArr.push(newElemet);
  }
  return newArr;
}

console.log(map([1, 2, 3, 4, 5, 5], (x) => x * 2));

// v3
// Even index : increment by one
// odd index : mutliply with 2

function map(arr, mappingfn) {
  if (!Array.isArray(arr) || typeof mappingfn !== 'function') return undefined;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingfn(element, i);
    newArr.push(newElement);
  }
  return newArr;
}

console.log(map([1, 2, 3, 4, 5, 5], (x, i) => (i % 2 === 0 ? x + 1 : x * 2)));

//  v3

function map(arr, mappingfn) {
  if (!Array.isArray(arr) || typeof mappingfn !== 'function') return undefined;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingfn(element, i);
    newArr.push(newElement);
  }
  return newArr;
}
console.log(map(['Easy', 'FrontEnd'], (x) => x.length));
