// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called "name" and set it equal to the string "Dane".
// Then we create a conditional statement. If the value of "name" is equal to the string "Mary",
// then we log the string "Hi, Mary!" to the console.
// Otherwise, we log the string "How do you do?".
// In this example, since "name" is equal to "Dane", not "Mary", we will console log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "secret", but do not set it's value to anything.
// We create a variable called "code" and set it equal to the number 123.
// We create a conditional. If the value stored in "code" is equal to the number 123,
// then we set "secret" equal to the string "super" and "code" equal to itself times 2. (In other words, we double code's value.)
// We create another conditional. If the value stored in code is greater than 250,
// then we set the variable "secret" equal to the string "duper".
// Finally, we console log "secret", which is equal to "super," thus causing the console to display the string "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable "isStudent" and set it equal to the boolean value of true.
// We declare the variable "age" and set it equal to the number 34.
// We declare the variable "zip" and set it equal to the number 55407.
// We create a conditional. If the value stored in "isStudent" is equal to true AND the variable "zip" is greater than the number 80000,
// Then we console log the string "You're a student on the West Coast!"
// Otherwise, if "isStudent" is false, or "age" is less than 30,
// Then we console log the string "What are your hobbies?" Only one of the above conditions has to evaluate to true for this string to be logged.
// Otherwise, if "isStudent" is true (no other condition necessary),
// Then we console log the string "Welcome to Prime!"
// Otherwise, if none of the above expressions evaluate to true, then
// The computer is at a loss for conversation and console logs "How about the weather?"
// In this case, the computer will log "Welcome to Prime!" to the console as the current variable values cause the first two expressions to evaluate false.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX: colorOne is set to "red" and colorTwo is set to "blue", but instructions asked for opposite
// should be colorOne = "blue";
//           colorTwo = "red";
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX: we should set colorTwo to "purple" as well after setting colorOne, as that is what the instructions want.
//should be : colorTwo = "purple";
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX: okay, so this would technically still work with the current values of the variables...
// HOWEVER, based on the instructions, the expression in the if statement is incorrect and could evaluate incorrectly with different variable values.
// The if statement currently includes an "or" operator rather than "and".
// should be: if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX: The if statement is currently set up exactly how it is worded in the instructions.
// However, to get it to evaluate for the results we want, we need to alter it.
// Currently, the "no entry" statement will print even if the minAge is equal to Age because the "less than or equal to" operator is inclusive. 
// However, we want it to be exclusive so that "enter" is logged if minAge is equal to age.
// should be if(minAge < age)
// This will ensure that if minAge is equal to or greater than age, the second console.log statement will print rather than the first.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

