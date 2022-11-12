Line by line dissection:

//updateSubarr is assigned the function definition
function updateSubarr(arr, step = 0) {
  arr.forEach((char, i) => arr[i] += step); // forEach is a higher order array fxn that reassigns given variables.
/*1st loop 4 is incremented by 3 (in place) to 7
  2nd loop 14 is incremented by 3 to 18
  3rd loop 67 is incremented by 3 to 70*/
  return arr;
}
//updateArr value will be the evaluated result of passing arguments into updateSubarr.
const updateArr = updateSubarr([4, 14, 67], 3);

//updateArr will be logged (via log method) to the console object.
console.log(updateArr); //[7, 17, 70]

/* Function inputs are an array plus default 
     parament, variable.
   Function returns an array.
   Each subarray is updated by the step 
     variable's value.
   Function loops through each subarray and
     reassigns their value by the 
     concatenation of the variable. When the 
     loop ends, the changed subarrays populate 
     the original array (modified the array in place (the subarrays will always be within bounds).).*/

___________________________________________________________________________________

//wVowel is assigned the function definition
function wVowel(word) {
//Loop thru string to compare each letter
  for (const char of word) {
//Determine if any letter is a vowel-like
    if ("aeiouy".includes(char.toLowerCase())) {
//Do anything because returning will thwart the loop
    }
  }
//Return word if truthy
  return word;
} 
  
//countWords is assigned the function definition
function countWords(str) {
//Declare a variable
  let count = 0;
/*Create an array from the str (sentence) placing
array commas at the whitespace separating each word
in the str (sentence)*/
  str = str.split(/\s+/);

//Loop thru str (sentence) to compare each word
  for (const word of str) wVowel(word) && count++; 
//Call helper function with word arguments and
//tally word if truthy
    
//return tally
  return count;
}
//defSubArr value will be the evaluated result of passing arguments into countWords.
const defSubArr = countWords("  ce0$,   , are  ") 

//The result of invoking the function is logged to the console.
console.log(defSubArr); //2

__________________________________________________________________________________

//shortcut is assigned the function definition
function shortcut(string) {
  let woVowel = "";

  for (const char of string) !"aeiou".includes(char.toLowerCase()) && (woVowel += char);
    /*1st loop d is searched for in vowels string then added to empty string, "d"
      2nd loop o is searched for in vowels string then excluded
      3rd loop n is searched for in vowels string then added to string, "dn"
      4th loop e is searched for in vowels string then excluded*/
    return woVowel;
}
//voweLess will be assigned result of passing arguments into shortcut.
const voweLess = shortcut("done");

//The function call value is logged.
console.log(voweLess); //"dn"

______________________________________________

//factorial is assigned the function definition
function factorial(num, acc = 1) {
  if (num === 1) return acc; //When the num variable decrements to the value of 1, stop the recursion (calls to factorial fxn) and return the acc variable value.
  return factorial (num - 1, acc * num);
  /*1st call to factorial, parameter num is paired to argument 4. The acc variable is reassigned to 1 × 4, and num is decremented by 1 and reassigned to 3.
    2nd call to factorial, parameter num is paired to argument 3. The acc variable is reassigned to 1 × 4 × 3, and num is reassigned to 2.
    3rd call to factorial, parameter num is paired to argument 2. The acc variable is reassigned to 1 × 4 × 3 × 2, and num is reassigned to 1.
    4th call to factorial, parameter num is paired to argument 1. The acc variable is returned with the value of 1 × 4 × 3 × 2.*/
}
//accumulator value will be the evaluated result of passing arguments into factorial.
const accumulator = factorial(4);

//accumulator will be logged (via log method) to the console object.
console.log(accumulator); //24

_______________________________________________

function getLength(array, count = 0, p = 0) {
  if (!array[p]) return count;
  else {
    count++;
  }
  return getLength(array, count, p + 1);
  /*1st call to getLength, parameter(s) is paired to argument. The count variable is reassigned from 0 to 1 after else code block, and p is reassigned to 1 because if statement is bypassed since array[0] is subarray 1 and !1 is falsy.
    2nd call to getLength, parameter(s) is paired to argument. The count variable is reassigned to 2, and p is reassigned to 2.
    3rd call to getLength, parameter(s) is paired to argument. The count variable is reassigned to 3, and p is reassigned to 3.
    4th call to getLength, parameter(s) is paired to argument. The count variable is 4, and p is 4. 
    5th call to getLength, parameter(s) is paired to argument. The count variable is 5, and p is 5.
    6th call to getLength, parameter(s) is paired to argument. The count variable of 5 is returned because p is an index of 5 which is not a subarray (the now false condition is made true with !).*/

}
const arrLen = getLength([1, 2, 3, 4, 5];

console.log(arrLen); //5

_TLDR_(tangents)__________________________________________________________

Group similar code strategy:
____________________________
=> [...array1].test(char);
return fxName.pop([...array1]); //new Set()

Practicing:
___________
[...Array(n + ).keys()].slice(1) //consecutive array
...

Number.isInteger(n) //U
Number.isFinite(n)
n.constructor === Number
n.constructor.name == "Number"
...

FYI:
____

Code and Tell:
_____________
Math.sign(small - big) //?
small < big ? -1 : 1 //?
...
_______________________________________________
Code edge case(s):
__________________
keyword givenFunName = (givenParams || ) => givenFunRename(givenParams || )
keyword reName2GivenFxn = function(givenParams){
  return givenFxnRename(givenParams);
}
...
______________________________________________
Gr8 Practice:
_____________
Built-in methods
Memorization
____________________________________________________________
Lookup - daily hwk:
___________________
return Math.imul(subarr, arr.length) //?
require('lodash').sum(arr) //?
...

require('ramda')  //point free fxn
...

Obj.getOwnPropertyNames?
...
