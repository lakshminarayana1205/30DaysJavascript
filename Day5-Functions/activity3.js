// Activity 3: Arrow Functions
// + Task 5: Write an arrow function to calculate the sum of two numbers and return the result.


const calculateSum = (num1, num2)=>{
    return num1 + num2
   }
   
console.log(calculateSum(5,5))



// + Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsSpecialCharacter = (str) => {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharacters.test(str);
};

console.log(containsSpecialCharacter("Hello, World!")); 
console.log(containsSpecialCharacter("HelloWorld"));  







