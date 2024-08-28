// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`
    } else {
        return `${num} is Odd`
    }
}
console.log(checkEvenOdd(5))
console.log(checkEvenOdd(10))



// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and return: the result.

function square(num) {
    return num * num
}

console.log(square(5))






// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
const concatStr = function(str1, str2) {
    return str1 + str2
}
console.log(concatStr("Hi! ", "Coders"))








// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const calculateSum = (num1, num2)=>{
    return num1 + num2
}
console.log(calculateSum(5,10))









// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function greet() {
    console.log("Hello!");
}

callNTimes(greet, 5); 








