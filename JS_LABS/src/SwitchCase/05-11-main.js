function getErrorMessage(errorMessage) {
  let message = '';

  switch (errorMessage) {
    case 'E01':
      message = 'Invalid username or password';
      break;
    case 'E02':
      message = 'Too many attempts';
      break;
    case 'E03':
      message = 'Missind Data';
      break;
    default:
      message = 'Some thing went wrong';
      break;
  }

  return message;
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));

// v2

function getErrorMessage(errorMessage) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing Data',
  };

  const message = errorMap[errorMessage] ? errorMap[errorMessage] : 'Some thing wrong';
  return message;
}

console.log(getErrorMessage('E04'));

// v3
function getErrorMessage(errorMessage) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many Attempts',
    E03: 'Missing Data',
  };

  const message = errorMap[errorMessage] || 'Some thing wrong';
  return message;
}

console.log(getErrorMessage('E01'));

// v4
function getErrorMessage(errorMessage) {
  const errorMap = {
    E01: 'Invaild username or password',
    E02: 'Too many attempts',
    E03: 'Missing Data',
  };
  return errorMap[errorMessage] || 'Something with wrong';
}
console.log(getErrorMessage('E06'));

let count = 1;
const n = count++;
console.log(n);
console.log(count);
