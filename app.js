// //asking the question
// let question = prompt("How was your day?");
// let question2 = prompt("Did you go anywhere?");
//
//
// //global variables
// let result;
// let result2;
// let result3;
//
// //conditional statements
//
// //first question
// if(question === "Good"||question ==="good"){
//     result="A good day."
// }
// else if(question==="awful"||question==="Awful"){
//     result="I'm sorry you had a bad day."
// }
// else if(question==="fantastic"||question==="Fantastic"){
//     result="Sweet! That is great!"
// }
// else{
//     result="I'm sorry that your day was not good."
// }
// //second question
// if(question2 === "outside"||question2==="Outside"){
//     result2="Hooray! Outdoors."
// }
// else{
//     result2="Go touch grass."
// }
//
// //final question
// if(question==="good"&&question2==="outside"){
//     result3="It's probably a good idea to go outside to have a good day."
// }
// else{
//     result3="Go exercise."
// }
// //write answer into the body tag
// document.body.innerHTML=result+" "+result2+" "+result3;

// if (userNumber1Check === "good" && userOperatorCheck === "good" && userNumber2Check === "good") {
//     // userCalculator = userNumber1 userOperator userNumber2;
// }
// else {
//     userCalculator = "Could not calculate."
// }

//Assignment Directions
// isNaN() <-- used | w3schools.com (use this to look it up)
// isNaN returns true if it is not a number (NaN means Not a Number)
// w3schools.com/jsref/jsref_isnan.asp
// do not end program, just send an error message

let userNumber1 = Number(prompt("Please enter a number."));
let userOperator = prompt("Please enter a basic operator.");
let userNumber2 = Number(prompt("Please enter a second number."));
let result1;
let result2;
let result3;
let calculations;

if (isNaN(userNumber1)){
    result1="Error. User did not input a first number."
}
else {
    result1="User successfully input the first number."
    userNumber1Check = "good";
}
if (userOperator ==="+" || userOperator ==="-" || userOperator ==="*" || userOperator ==="/"){
    result2="User successfully entered a basic operator."
}
else {
    result2="Error. User did not input a basic operator."
}
if (isNaN(userNumber2)){
    result3="Error. User did not input a second number."
}
else {
    result3="User successfully input the second number."
}

if (userOperator ==="+") {
    calculations = userNumber1+userNumber2
}
else if (userOperator ==="-") {
    calculations = userNumber1-userNumber2
}
else if (userOperator ==="*") {
    calculations = userNumber1*userNumber2
}
else if (userOperator ==="/") {
    calculations = userNumber1/userNumber2
}
else {
    calculations = "Could not calculate."
}


document.body.innerHTML=result1+"\n"+result2+"\n"+result3+"\n Calculations:"+calculations;