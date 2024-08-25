// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let nums = 999
let sub = "Javascript"
let boolean_Value = true
let books ={
    title: "Javascript",
    author: "Chai Aur Code"
}

let courses = ['Javascript', 'Python','NodeJS']

console.log(`${nums} and Type: ${typeof(nums)}`)
console.log(`${sub} and Type: ${typeof(sub)}`)
console.log(`${boolean_Value} and Type: ${typeof(boolean_Value)}`)
console.log(`${books.title} and Type: ${typeof(books)}`)
console.log(`${courses} and Type: ${typeof(courses)}`)





// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let iniVal = 10
const iniValue = 20
console.log(iniVal)
console.log(iniValue)

// reassignment 
iniVal = 50
console.log(iniVal)

iniValue = 100
// console.log(iniValue) //!!ERROR 