
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

______________________________________________________________________________________


function wVowel(word) {
  for(const char of word) {
    if ("aeiouy".includes(char.toLowerCase())) {
    }
  }
  return word;
} 
  

function countWords(str) {
  let count = 0;
  str = str.split(/\s/);
  
  for(const word of str) {
    (wVowel(word)) && count++; 
  }
  return count;
}

______________________________________________________________________________________


