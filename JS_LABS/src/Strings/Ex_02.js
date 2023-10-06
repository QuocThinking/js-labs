// Check if a String contains an email address with 'a@gmail.com' or not
function hasEmail(str) {
  if (str.includes('@gmail.com')) {
    return true;
  }
  return false;
}

console.log(hasEmail(' abc abc@gmail.com def'));
console.log(hasEmail(' abc abc@gmailcom def'));

// v1
function hasEmail(str) {
  return str.indexOf('@gmail.com') >= 0;
}

console.log(hasEmail('abc abc@gmail.com def'));
console.log(hasEmail('abc abcgmail.com def'));
console.log(hasEmail('abc abc@gmailcom def'));

// v2
function hasEmail(str) {
  return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
console.log(hasEmail('abc abcgmail.com def'));
console.log(hasEmail('abc abc@gmailcom def'));
