
/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
 let numbers = [23, 12, 43, 10, 5, -10];

 let numbersarr2 = [1,2,3,4,5,6,7,9];
 let sumOfVar2 = 0;
 for (let i=0 ; i <= numbersarr2.length-1 ; i++){
     sumOfVar2 = numbersarr2[i]  + sumOfVar2;
     // console.log(sumOfVar )
 }
 console.log(sumOfVar2/numbersarr2.length);

 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day'   // day great a have
 let reverseStr2 = '';
 // code
 console.log(`reverseStr2 -> ${reverseStr2}`);   // day great a have
 
 let sen1 = 'This homework is fun';
let sen1Arr = sen1.split(' ');
let sen2 = '';


for(let index = sen1Arr.length - 1; index >= 0; index--) {
 sen2 = sen2 + ' ' + sen1Arr[index];

}

console.log(sen2);



 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
 let str3 = 'let me know';
 let abbr = 'LMK';
 // code
 console.log(`abbr -> ${abbr}`);