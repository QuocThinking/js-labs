// function ClassifyStudent(mark) {
//   let result;
//   if (mark > 8) result = 'Excellence';
//   else if (mark >= 7) result = 'Good';
//   else if (mark >= 4) result = 'Not good';
//   else result = 'bad';
//   return result;
// }
// console.log(ClassifyStudent(8));

// function ClassifyStudent(mark) {
//   let result;

//   if (mark > 8) result = 'Excellence';
//   else if (mark >= 7) result = 'Good';
//   else if (mark >= 4) result = 'Not good';
//   else result = 'Bad';
//   return result;
// }
// console.log(ClassifyStudent(4));

// v2
function ClassifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Not Value';

  let result = 'Bad';
  if (mark > 8) result = 'Good';
  else if (mark >= 7) result = 'Normal';
  else if (mark >= 4) result = 'Not good';

  return result;
}
console.log(ClassifyStudent(10));

// v3
function ClassifyStudent(mark) {
  if (mark < 0 || mark > 10) {
    return ' Not value';
  }
  let result = 'Bad';
  if (mark > 8) return 'Excellence';
  else if (mark > 7) return 'Good';
  else if (mark > 4) return 'Not good';
  return result;
}

console.log(ClassifyStudent(6));
