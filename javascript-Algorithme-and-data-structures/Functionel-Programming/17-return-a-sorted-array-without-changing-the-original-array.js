

/**
 * Solution by @adnen_rebai
 */

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this 
  let newArray = [];
  newArray = newArray.concat(arr);
  return newArray.sort((a,b) => a-b);
  
  // Add your code above this line
}
nonMutatingSort(globalArray);