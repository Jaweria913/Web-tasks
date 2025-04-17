const findEvenNumbers = (arr) => {
    const evens = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
};
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));