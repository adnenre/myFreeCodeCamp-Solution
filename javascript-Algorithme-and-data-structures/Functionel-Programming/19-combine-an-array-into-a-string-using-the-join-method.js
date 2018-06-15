

/**
 * Solution by @adnen_rebai
 */

 function sentensify(str){

    return str.split(/\W/).join(' ');
 }

 let result = sentensify('May-the-force-be-with-you');
 console.log(result);