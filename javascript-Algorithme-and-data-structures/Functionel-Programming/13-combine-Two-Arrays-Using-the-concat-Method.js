

/***
 * Solution by @adnen_rebai
 * 
 */
function nonMutatingConcat(original, attach) {
    // Add your code below this line
      
      return original.concat(attach);
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  let result = nonMutatingConcat(first, second);

  console.log(result);