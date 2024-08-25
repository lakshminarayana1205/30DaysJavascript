
// Feature Request:
// 1. Arithmetic Operations Script: Write a scrip that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);




// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.



let val1 = 8;
let val2 = 12;

//? for comparison

let isGreaterThan = val1 > val2;
let isLessThan = val1 < val2;
let isEqual = val1 == val2;
let isNotEqual = val1 != val2;

let orResult = isGreaterThan || isLessThan
let andResult = isGreaterThan && isLessThan
let notResult = !isEqual


console.log(`Greater Than : ${isGreaterThan}`)
console.log(`Less Than : ${isLessThan}`)
console.log(`Equal : ${isEqual}`)
console.log(`Not Equal : ${isNotEqual}`)

console.log(`Comparing with OR: ${orResult}`)
console.log(`Comparing with AND: ${andResult}`)
console.log(`Comparing with NOT: ${notResult}`)




// 3. Ternary Operator Script: Virite a script that uses the terary operator to determine if a number is positive or negative and logs the result.
let num = 10
let result = (num>0) ? "The number is Positive" : "The number is Negative"
console.log(result)