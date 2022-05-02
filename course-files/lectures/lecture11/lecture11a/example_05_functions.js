// ES6 Syntax:
const add_two_nums = (num1, num2) => {
    return num1 + num2;
}

console.log(add_two_nums(3, 5));
console.log(add_two_nums(30, 5));
console.log(add_two_nums(123, 456));

// Older Syntax #1 (works the same way):
var add_two_nums_1 = function (num1, num2) {
    return num1 + num2;
};

console.log(add_two_nums_1(3, 5));
console.log(add_two_nums_1(30, 5));
console.log(add_two_nums_1(123, 456));


// Older Syntax #2 (works the same way):
function add_two_nums_2(num1, num2) {
    return num1 + num2;
}

console.log(add_two_nums_2(3, 5));
console.log(add_two_nums_2(30, 5));
console.log(add_two_nums_2(123, 456));