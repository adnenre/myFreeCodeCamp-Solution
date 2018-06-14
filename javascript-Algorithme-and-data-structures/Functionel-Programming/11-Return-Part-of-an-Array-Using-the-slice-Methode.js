


/**
 * Solution by @adnen_rebai
 */


function sliceArray(anim, beginSlice, endSlice) {
  
    if (arguments.length == 3) {
        return anim.slice(beginSlice, endSlice)
    } else {
        return anim.slice(0);
    }

}
/**
 * solution two
 */
function sliceArray2(anim, beginSlice, endSlice) {

    return arguments.length == 3 ? anim.slice(beginSlice, endSlice) : anim.slice(0);
}



var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

console.log(sliceArray(inputAnim, 1, 3));
console.log(sliceArray2(inputAnim, 1, 3));