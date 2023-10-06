/**
 *  Lọc theo mảng với điều kiện cho trước, lọc ra mảng mới, mảng cũ ko ảnh hưởng
 */

function filter(arr, callbackfn) {
  if (!Array.isArray(arr) || typeof callbackfn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackfn(element, i)) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(filter([3, 4, 5, 6, 7, 8], (x) => x % 2 == 0));
console.log(filter([3, 4, 5, 6, 7, 8], (x, i) => x % 2 == 0 && x >= 2));

// v1
function filter(arr, callbackfn) {
  if (!Array.isArray(arr) || typeof callbackfn !== 'function') return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackfn(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(filter([8, 9, 3, 2, 4, 5, 12, 3, 4], (x) => x % 2 == 0 && x >= 4));

// v2
const studentList = ['Quoc', 'Nhan', 'LeThanhQuoc'];
console.log(studentList.filter((x) => x.length > 5));
console.log(studentList.filter((x) => x.startsWith('Q')));
