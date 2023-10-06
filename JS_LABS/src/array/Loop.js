// before
const numberList = [2, 4, 6];
for (let i = 0; i < numberList.length; i++) {
  const value = numberList[i];

  console.log(value);
}

// ES5 : arrow function

const numberList_1 = [2, 4, 6];
numberList_1.forEach((x) => console.log(x));

// ES6 for...of ( ko lấy dc index)

const numberList_2 = [3, 5, 6];
for (let key of numberList_2) {
  console.log(key);
}

// Bo sung
// v1
const arrayList = [2, 4, 5, 6];
arrayList.forEach((number, index) => {
  console.log(index, number);
});

// v2
const arrayList_1 = [2, 4, 6];
arrayList_1.forEach((number) => console.log(number));
