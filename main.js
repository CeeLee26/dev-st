
//updateSubarr is assigned the function definition
function updateSubarr(arr, step = 0) {
  arr.forEach((char, i) => arr[i] += step);
  return arr;
}
//updateArr value will be the evaluated result of passing arguments into updateSubarr.
const updateArr = updateSubarr([4, 14, 67], 3);

//updateArr will be logged (via log method) to the console object.
console.log(updateArr); //[7, 17, 70]

/*P: Function inputs are an array plus default 
     parament, variable.
  R: Function returns an array.
  E: Each subarray is updated by the step 
     variable's value.
  P: Function loops through each subarray and
     reassigns their value by the 
     concatenation of the variable. When the 
     loop ends, the changed subarrays populate 
     the original array (modified the array in place).*/
___________________________________________________________________________________

function wVowel(word) {
//Loop thru string to compare each letter
  for(const char of word) {
//Determine if any letter is a vowel-like
    if ("aeiouy".includes(char.toLowerCase())) {
//Do anything because returning will thwart the loop
    }
  }
//Return word if truthy
  return word;
} 
  

function countWords(str) {
//Declare a variable
  let count = 0;
/*Create an array from the str (sentence) placing
array commas at the whitespace separating each word
in the str (sentence)*/
  str = str.split(/\s/);

//Loop thru str (sentence) to compare each word
  for(const word of str) {
//Call helper function with word arguments and
//tally word if truthy
    wVowel(word) && count++; 
  }
//return tally
  return count;
}
__________________________________________________________________________________

function shortcut (string) {
  let woVowel = "";

  for(const char of string) {
    !"aeiou".includes(char.toLowerCase()) && (woVowel += char);
  } 
  return woVowel;
}
const voweLess = shortcut("done");
console.log(voweLess);
