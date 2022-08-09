function updateSubarr(arr, step = 0) {
  arr.forEach((char, i) => (arr[i] += step));
  return arr;
}
console.log(updateSubarr([4, 14, 67], 3));

/*P: Function inputs are an array plus default parament variable.
  R: Function returns an array.
  E: Each subarray is update by the step variable value
  P: Function loops through each subarray and reassigns their value by the concatation of the variable. When the loop ends, the changed subarrays populate the original array.*/