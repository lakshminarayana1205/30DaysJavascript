// Feature Request:

// 1. Number Check Script: Write a scrip that checks f a number is positive, negative, or Zero using if-else statements and logs the result.

let num=-10
if(num>0){
    console.log("positive");
    
}
else if(num<0){
    console.log("Negative");
    
}
else{
    console.log("Zero");
}

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

let age=25
if(age>=18){
    console.log("You are Eligible to vote");
    
}

else{
    console.log("You are Not eligible to vote");
    
}








// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

let day = 4

switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log("Invalid Day")
        break;
}






// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let marks = 76
let grade
switch (true) {
    case (marks>=90 && marks<=100):
        grade = "A - Grade"
        break;
    case (marks>=80 && marks<=90):
        grade = "B - Grade"
        break;
    case (marks>=70 && marks<=80):
        grade = "C - Grade"
        break;
    case (marks>=60 && marks<=70):
        grade = "D - Grade"
        break;
    case (marks<60):
        grade = "F - Grade"
        break;

    default:
        grade = "Invalid Marks"
        break;
}

console.log(grade)







// 5. Leap Year Check Script: Write a script that checks is a year is a leap year using multiple conditions and logs the resuit.

let year=1996
if((year%4===0)&&(year%400===0 ||year%100!==0)){
    console.log(`${year} is a Leap year `);
    
}
else{
    console.log(`${year} is not a Leap year`);
    
}