// 1)
//v1
const student = {};
student.age = 18;
student.name = 'Le Quoc';
console.log(student);

// v2
const student = {
  id: 18,
  name: 'Le Quoc',
  name: 'Le Thanh Quoc',
  age: 20,
};
console.log(student);

/**
 * Check if an object is empty
 */

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));

/**
 * 3. Get average mark of an object
 */
function calcAvgMark(mark) {
  if (!mark) return -1;

  const length = Object.keys(mark).length;
  let sum = 0;

  for (let key in mark) {
    const value = mark[key];
    sum += value;
  }
  return (sum / length).toFixed(1);
}
console.log(calcAvgMark({ Math: 8.7, English: 10 }));
