// Write a function to transform a String
// - The first letter in uppercase
// - the rest in lowercase
// - eg : capitalize('easY FrontEnd') -> Easy frontend
// p1.toUpperCase
// p2.toLowerCase

function capitalize(str) {
  if (str === '') return 'Not value';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
console.log(capitalize('le Thanh '));
console.log(capitalize(''));

// v1
function capitalize(str) {
  if (str === '') return 'Not value';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
console.log(capitalize(''));
console.log(capitalize('le Quoc'));
