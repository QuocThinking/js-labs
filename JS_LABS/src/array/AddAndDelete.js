/**
 * 1) Push : thêm cuối mảng
 * 2) Pop : xóa cuối mảng
 * 3) shift : xóa đầu mảng
 * 4) unshift : Thêm đầu mảng
 * 5) splice(start, deleteCount, item1,...itemN)
 */

const numberList = [1, 2, 4, 5]; // 1,2,6,7,5
numberList.splice(2, 1, 6, 7);
console.log(numberList);

// v1 : pop
const numberList_1 = [1, 2, 3, 4, 5];
numberList_1.pop();
numberList_1.pop();
console.log(numberList_1);

// v2 add
const addNumberList = [1, 4, 5, 6, 7]; // 1 , 3 , 4 , 5, 6, 7
addNumberList.splice(1, 0, 3);
console.log(addNumberList);

// v3 : delete and replace

const addNumberList_1 = [1, 4, 5, 6, 7]; // 1,3,5,6,7
addNumberList_1.splice(0, 0, 1, 3);
console.log(addNumberList_1);
