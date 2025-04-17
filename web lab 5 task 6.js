function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 89) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 50 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "Invalid score";
    }
}

// Get user input
let score = parseInt(prompt("Enter your score:"));

if (isNaN(score)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`Your grade is: ${getGrade(score)}`);
}
