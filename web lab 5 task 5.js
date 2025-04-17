let number = parseInt(prompt("Enter a number:"));

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else if (number % 3 === 0) {
    console.log(`${number} is a multiple of 3.`);
} else {
    console.log(`${number} is not a multiple of 3.`);
}
