
/**
 * Soluction by @adnen_rebai
 */

 // the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  let num = fixedValue;
  return ++num;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4