/**
 *  Sử dụng reduce để duyệt mảng và tính toán
 */

const numberList = [3, 4, 5, 6, 7];
const result = numberList.reduce((accumulator, currentValue, currentIndex, numberList) => {
  return accumulator + currentValue;
  /**
   *  3  - 4 -> 7
   *  7  - 5 -> 12
   *  12 - 6 -> 18
   *  18 - 7 -> 25
   */
});
console.log(result);

const numberList_1 = [3, 4, 5, 6, 7];
const result_1 = numberList_1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
/**
 * 10 - 3 -> 13
 * 13 - 4 -> 17
 * 17 - 5 -> 22
 * 22 - 6 -> 28
 * 28 - 7 -> 35
 */
console.log(result_1);

// v2
const numberList_2 = [3, 5, 6, 7, 8];
const result_2 = numberList_2.reduce((sum, number) => sum + number);
console.log(result_2);

// v3 - cách hoạt động
/**
 * - check có phải là mảng và function
 * - Nếu mảng = 0 && initialValue = 0 => error
 * - Nếu mảng = 0 && initialVaule != undefined => return initialValue
 * - kiểm tra hasInitialValue = initialValue != undefined
 * - let accumulator = hasInitialValue ? initialValue : arr[0]
 * - check currentIndex => const startIndex = hasInitialValue ? 0 : 1
 *  (Nếu có InitialValue tức là nó sẽ lấy accumulator là InitialValue làm first value của lần lặp đầu tiên,
 *  cho nên vị trí currentValue = index[0], currentIndex = index[0])
 *  (Ngược lại ko có , nó sẽ lấy accumulator là currentValue[0] làm first value của lần lặp đầu tiên,
 * tiếp đó nó lấy currentValue[1] = index[1], currentIndex = index[1])
 *  - Sau đó , duyệt từ startIndex bằng for
 *  - tính giá trị mới cho thằng newAccumulator bằng cách
 *  + gọi 1 function trong function
 *  + let newAccumulator = callbackfb(accumulator, arr[i], i)
 *  + accumulator = newAccumulator
 *  + return accumulator
 */

function reducer(arr, callbackfn, initialValue) {
  if (!Array.isArray(arrList) || typeof callbackfn !== 'function') {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === 0) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  const startIndex = hasInitialValue ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackfn(accumulator, arr[i], i);
  }
  return accumulator;
}

function calcSum(preAcc, number) {
  return preAcc + number;
}
const arrList = [2, 4, 6];
const result_3 = reducer(arrList, (preAcc, number) => preAcc + number);
console.log(result_3);

// v2
function reducer_1(arr, callbackfn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackfn !== 'function') {
    throw new Error('Invalid parameters');
  }
  if (arr.length === 0) {
    if (initialValue === 0) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackfn(accumulator, arr[i], i);
  }
  return accumulator;
}
const arrList_1 = [5, 6, 7];
const result_4 = reducer_1(arrList_1, (preAcc, number) => preAcc + number);
console.log(result_4);

// v4
const array = [2, 3, 4, 5];
function reducers(accumulator, currentValue, currentIndex) {
  const returns = accumulator + currentValue;
  console.log(`accumulator : ${accumulator}, currentValue : ${currentValue}, 
    currentIndex: ${currentIndex}`);
  return returns;
}
const results = array.reduce(reducers);
console.log(results);
