// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 let countryName = 'Japan';
 // countryName.length;  <-- not allowed

 let lastIndx = countryName.length -1;
 let charAtLastIndx = countryName.charAt(lastIndx);
 let countryLength = countryName.indexOf(charAtLastIndx) +1;
 console.log(countryLength);

 /**
  * Q2: find the number of words in the given sentence2
  */
  const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 
  let sen2Array = sentence2.split(' ');
  let sen2length = sen2Array.length;
  console.log(sen2length)
  

  /**
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you Never waLK ALONe';
 
 // code 
 

 
  sentence3ToUpCase = sentence3.toUpperCase();
  let sen3Array = sentence3ToUpCase.split(' ');
  abbr = sen3Array[0].charAt(0)
  abbr = abbr + sen3Array[1].charAt(0)
  abbr = abbr + sen3Array[2].charAt(0)
  abbr = abbr + sen3Array[3].charAt(0)
 console.log(abbr)

 /**
 * Q4: Convert the string value in to Titlecase
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */
const sentence4 = 'have a GrEAT daY';
let sen4lowCase = sentence4.toLowerCase()
let sentence4Arr = sen4lowCase.split(' ')
let sentence4_Titlecase = sentence4Arr[0].charAt(0).toUpperCase() + sentence4Arr[0].slice(1)
sentence4_Titlecase = sentence4_Titlecase + " " + sentence4Arr[1].charAt(0).toUpperCase() + sentence4Arr[1].slice(1)
sentence4_Titlecase = sentence4_Titlecase + " " + sentence4Arr[2].charAt(0).toUpperCase() + sentence4Arr[2].slice(1)
sentence4_Titlecase = sentence4_Titlecase + " " + sentence4Arr[3].charAt(0).toUpperCase() + sentence4Arr[3].slice(1)
console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day



 
 

 