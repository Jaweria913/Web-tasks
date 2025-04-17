var name = "Jaweria";
console.log(name); // Output: Aleeza

var name = "Aleeza"; // Redeclaring allowed
console.log(name); // Output: Ahad

name = "Umaima"; // Updating allowed
console.log(name); // Output: Subbi

if (true) {
    var test = "Inside block";
}
console.log(test); // Output: Inside block (not block-scoped) 
let age = 25;
console.log(age); // Output: 25

age = 30; // Updating allowed
console.log(age); // Output: 30

if (true) {
    let insideBlock = "Hello";
    console.log(insideBlock); // Output: Hello
}
// console.log(insideBlock); //  Error: insideBlock is not defined
const pi = 3.1416;
console.log(pi); // Output: 3.1416

// pi = 3.14;  Error: Assignment to constant variable

if (true) {
    const city = "Lahore";
    console.log(city); // Output: Lahore
}
// console.log(city); //  Error: city is not defined

//Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

//Conditional Statements
let score = 80;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Loops
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}