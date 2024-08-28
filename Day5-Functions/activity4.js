
// Activity 4: Function Parameters and Default Values
// + Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter:



const multiply = (num1, num2 = 1 )=>{
    return num1 * num2
}

console.log(multiply(5,10))
console.log(multiply(7))





// + Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (name, age = 22) => {
    return `Namaste ${name}, you are ${age} years old`;
}

console.log(greet('Alice'));





