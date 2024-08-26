// Activity 3: Switch Case

// + Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 2

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













// + Task 5: Write a program that uses a switch case to assign a grade (A,B, C, D, ) based on a score and log the grade to the console.
let marks = 95
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