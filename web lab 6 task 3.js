const convertToUpperCase = (arr) => {
    const upperCaseArr = [];
    for (const str of arr) {
        upperCaseArr.push(str.toUpperCase());
    }
    return upperCaseArr;
};
console.log(convertToUpperCase(["hello", "world"]));