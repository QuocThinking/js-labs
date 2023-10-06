// print number : 1-> 10
function printNumbers() {
  for (let i = 0; i <= 10; i++) console.log(i);
}
printNumbers();

// print even number : 2 4 6 8 10
function printEvenNumber() {
  for (let i = 2; i <= 10; i += 2) console.log(i);
}
printEvenNumber();

// print even number but less than n
function printEvenNumberN(n) {
  if (n < 2) return;
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}
printEvenNumberN(1);
