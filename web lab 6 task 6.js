const countVowelsArrow = (str) => str.split('').filter(char => "aeiouAEIOU".includes(char)).length;
console.log(countVowelsArrow("hello world"));