const n = parseInt(prompt("Enter a number: "));
const numArray = Array.from({ length: n }, (_, i) => i + 1);
console.log(numArray);