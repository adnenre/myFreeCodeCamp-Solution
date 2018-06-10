

/**
 *  Solution by @adnen_rebai
 */

 function quickCheck(arr, elem){
   
    return arr.indexOf(elem) !=-1;
 }

 console.log(quickCheck(['squash','onions','shallots'],'mushrooms'));
 console.log(quickCheck(["squash", "onions", "shallots"], "onions"));
 console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
 console.log(quickCheck([true, false, false], undefined));