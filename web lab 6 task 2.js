const findMaxMin = (arr) => {
    let max = arr[0], min = arr[0];
    for (const num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return { max, min };
};
console.log(findMaxMin([10, 20, 5, 3, 25, 18]));