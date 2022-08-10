function updateSubarr(arr, step = 0) {
  arr.forEach((char, i) => arr[i] += step);
  return arr;
}

const updateArr = updateSubarr([4, 14, 67], 3);
console.log(updateArr);

/*P: Function inputs are an array plus default parament, variable.
  R: Function returns an array.
  E: Each subarray is updated by the step variable value.
  P: Function loops through each subarray and reassigns their value 
     by the concatenation of the variable. When the loop ends, the changed 
     subarrays populate the original array.*/
