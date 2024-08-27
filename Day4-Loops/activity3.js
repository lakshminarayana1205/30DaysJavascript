// Activity 3: Do... While Loop
// + Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1
do {
    console.log(i)
    i++
} while (i<=5);


// + Task 6: Write a program to calculate the factorial of a number Using to  do... while loop.
let num = 5
fact = 1

do {
    fact *= num
    num--
} while (num>0);
console.log(`The Factorial of 5 is ${fact}`)