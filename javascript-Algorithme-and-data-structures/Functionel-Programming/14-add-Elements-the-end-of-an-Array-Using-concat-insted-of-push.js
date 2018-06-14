

/**
 *  Solution by @adnen_rebai
 */

 function nonMutatingPush(original,newItem){
     
     let newArray =original.concat(newItem);
    
     return newArray;
 }

 var first = [1,2,3];
 var second = [4,5];

 let result = nonMutatingPush(first,second);

 console.log(result);