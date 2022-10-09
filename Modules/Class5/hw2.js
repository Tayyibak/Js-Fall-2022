/**
 * Due date : Oct-9 (Sun) eod
 */  const sentence1 = 'Hello Dear, how are you doing?';
  let result1 = 0
 /**
  * if the length of sentence1 is greater than or equals to 10
  *      assign 15 in the result1
  * otherwise
  *      assign 10 in the result1
  */
  result1 = sentence1.length <= 10 ? 15 : 10;

  console.log(`result1 -> ${result1}`);
  
 
 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 /**
  * replace all instances of a or A with 'Alpha', print the result in console.
  */

  let sentence2_replace = sentence2.replace(/a/gi, 'Alpha');

  console.log(sentence2_replace);
 
 
 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 console.log(`\n\nresult3 -> ${result3}`);
 let result3 = 5
 /**
  * print the result in console:
  * 1. the length of sentence-3
  * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  * 3. does sentence-3 contains with 'Body' (ignore cases)
  * 4. index of 'BoDy' in sentence3  (ignore cases)
  * 5. the last-character in sentence-3
  * 6. word 'BoDy' is present only once. (true or false)
  */

// Printing length of sentence3 below.

let sentence3_length = sentence3.length

console.log(`The length of sentence3 is ${sentence3_length}`);



// figuring out if sentence3 starts with 'health' below ignoring cases below.

let sentence3tolowercase = sentence3.toLowerCase();

let sentence3_startsWith = sentence3tolowercase.startsWith('health');

console.log(`does sentence 3 start with "health" ? --> ${sentence3_startsWith}`);



// figuring out if sentence 3 contains body ignoring cases below

let sentence3_contain = sentence3tolowercase;

let sentence3_contains = sentence3tolowercase.includes('body');

console.log(`Does sentence3 contain the word body --> ${sentence3_contains}`);



//figuring out the index of 'Body' in sentence 3 ignoring cases below

let sentence3_bodyIndex = sentence3tolowercase.indexOf('body');

console.log(`what is index of "Body in sentence3" --> ${sentence3_bodyIndex}`);



//the last character of sentence3 below

let sentence3_lastIndex = sentence3.length - 1;

let sentence3_lastchar = sentence3.charAt(sentence3_lastIndex);

console.log(`the last character of sentence 3 is ${sentence3_lastchar}`);



// verifying word Body is only present once

let sentence3BodyOccurence = sentence3tolowercase.includes('body') <= 1

console.log(`\nThe word Body occurs only once ? --> ${sentence3BodyOccurence}`);