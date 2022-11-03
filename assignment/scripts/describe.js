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
// We create a variable called name and set it to Dane as a string.
// We check if the name variable is equal to Mary using a strict equality operator
// This returns a false so the console doesn't log 'Hi, Mary!' and moves on to the else
// The else requires nothing so we console.log 'How do you do'

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
// We create a variable called 'secret' with no value.
// We create a variable called 'code' with a value of 123.
// We check to see if the 'code' variable is equal to 123 using a strick equality operator.
//'code' is equal to 123 so we assign the string 'super' to the variable 'secret'.
// and we multiply 'code' by 2. 'code' now has a value of 246.
// We check to see if 'code' is greater than 250
// 'code' is not greater than 250 so we do not assign 'secret' the string 'duper'
// We console.log 'secret' and our console will give us the string 'super'

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
// We create a variable 'isStudent' and set it to 'true'
// We create a variable 'age' and give it the value 34.
// We create a variable 'zip' and give it the value 55407.
// We check to see if 'isStudent' equal to 'true' and if 'zip' is greater than 80000
// 'isStudent' is true but 'zip' is less than 80000 so we do not console.log 'You're a student on the West Coast!'
// We then check if 'isStudent' equal to false or if 'age' is less than 30.
// 'isStudent' is not equal to false and 'age' is greater than 30 so we do not console.log 'What are your hobbies?'
// We then check if 'isStudent' is equal to true.
// 'isStudent' is equal to true so we console.log 'Welcome to Prime!' and our console will read 'Welcome to Prime!'
// Since 'isStudent' is true we will not execute any further code and 'How about the weather' will not read in our console.

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

// FIX - colorOne is set to 'red' and colorTwo is set to 'blue'
// colorOne should be set to 'blue and colorTwo should be set to 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - 'mix' is true so we should be setting colorOne and colorTwo to 'purple'
// colorTwo should be set to 'purple'

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - 'time' is a const and should be a variable.
// should be let time not const time.

let temp = 40;
const time = 4;

// FIX - The if statement is checking if 'temp' is greather than 39 or time is greater or equal to 4.
// The if statement should be checking if both are correct using logical && operator.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*

// FIX - 'minAge' is a const and not a variable. 
// it should be let minAge = 21;   //Note I believe this is correct as the description says we start with two variables.

let age = 21;
const minAge = 21;

// FIX - The if statement is checking if 'minAge' is less than or equal to 'age'
// it should be checking 'age' is greater than or equal to 'minAge'
// FIX - The statement will console.log 'no entry' if 'age' is greater than or equal to 'minAge'
// The executed code should be switched so that it console.log 'enter' when
// 'age' is greater than or equal to 'minAge'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

