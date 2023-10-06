// Write a function to parameterize a string
// Eg : parameterize(Code js IS fun) - > code-js-is-fun
// 1 . toLowerCase
// 2 . replaceAll(' ', '-')
function parameterize(str) {
  if (str === '') return 'Not value';

  const lowerCase = str.toLowerCase();
  return lowerCase.replaceAll(' ', '-');
}
console.log(parameterize('Code js IS fuN'));

// v2 : split and join
function parameterize(str) {
  if (str === '') return 'Not value';

  const lowerCase = str.toLowerCase();

  // conver string to array
  const splitStr = lowerCase.split(' '); // [a, b, c, d]
  return (joinStr = splitStr.join('-')); // (a-b-c-d)
}

console.log(parameterize('Code JS Is Fun'));
