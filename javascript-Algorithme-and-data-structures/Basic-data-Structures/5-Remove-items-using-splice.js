


/**
 * Solution by @adnen_rebai
 */

 function sumOfTen(arr){
     // remove elements from index 1 to index 2
     arr.splice(1,2);
     return arr.reduce((a,b) => a+b);
 }

 console.log(sumOfTen([2,5,1,5,2,1]));