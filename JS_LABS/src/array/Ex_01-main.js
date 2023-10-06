// khai báo mãng rỗng
const numberList = [];

const numberList = [1, 2, 3];

const stringList = ['Quoc', 'Le'];

const flagList = [true, false];

// a list of student

const studentList = [
  { id: 1, name: 'Quoc', age: 18 },
  { id: 2, name: 'Quoc', age: 20 },
];

// a list of list
const board = [
  [1, 2],
  ['a', 'b', 'c'],
  [true, false, true, false],
];

//  Truy xuat phần tử của mảng
const numberList_1 = [1, 3, 5, 7];

numberList_1[0]; // 1
numberList_1[1]; // 3
numberList_1[2]; // 5
numberList_1[3]; // 7

numberList_1.length; // 4

numberList_1[numberList_1.length - 1]; // 7 (get last elemen

// Mảng 2 chiều
const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

board[0]; // 1 , 2 , 3
board[1]; // 4 , 5 , 6
board[2]; // 5 , 6 , 7

board[0][1]; // 2
board[1][2]; // 6

/**
 * 2) kiểm arr có phải là mảng ko
 *
 */

Array.isArray(123); //false
Array.isArray('Easy'); // false
Array.isArray(true); // false
Array.isArray([1, 2, 3]); // true

['Easy', 'Quoc'].join('-'); // Easy-Quoc
[1, 2, 3].reverse(); // [3 , 2, 1]

/**
 *  3) Array Destructuring
 */

const numberList_2 = [3, 5, 7];

const [first, second, third] = numberList;

/**
 *  4) Clone Array
 *  -> Array là kiểu tham chiếu, nên ta gán 1 mảng cho 1 mảng khác thì 2 thằng đểu trỏ cùng 1 địa chỉ trong
 *  vùng nhớ, nên khi thay đổi mảng kia, thì màng cũ thay đổi theo
 */

const numberList_3 = [4, 5, 6];
const anotherList = numberList_3;

anotherList[0] = 10;

console.log(numberList_3); // [10,5,6]

// => Solution : clone array trc khi thực hiện thay đổi
// rest : gom list - array
// spread : 1 array -> list
const numberList_4 = [5, 6, 8];
const anotherList_1 = [...numberList_4];
anotherList_1[0] = 100;

console.log(anotherList_1);
console.log(numberList_4); // 5 , 6 , 8
