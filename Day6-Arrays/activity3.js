// Activity 3: Array Methods (Intermediate)

// + Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const numbers = [1,2,3,4,5]
const newArr = numbers.map(num => num * 2)
console.log(newArr)




// + Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const number = [1,2,3,4,5]
const arr = numbers.filter(num => num % 2==0)
console.log(arr)



// + Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sumOfAllNumbers = numbers.reduce((acc, currentVal)=>{
    return acc + currentVal
},0)
console.log(sumOfAllNumbers)





