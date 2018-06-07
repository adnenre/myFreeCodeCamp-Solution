/**
 * solution by @rebai_adnen
 */

 function diffArray(arr1,arr2){
     let newArry=[];
     

    for(let i = 0 ; i <arr1.length ; i++){
        if(arr2.indexOf(arr1[i]) == -1) {
           newArry.push(arr1[i]); 
        } 
    }
    for(let i = 0 ; i <arr2.length ; i++){
        if(arr1.indexOf(arr2[i]) == -1) {
           newArry.push(arr2[i]); 
        } 
    }
    return newArry;
 }



 console.log( Object.prototype.toString.call(diffArray([1,2,3,5],[1,2,3,4,5])));   // checking type of that object ... typeof will return Object ... Array is a type of Object
 console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
 console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1);
 console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
 console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2);
 console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
 console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length ===0);
 console.log( diffArray([1,2,3,5],[1,2,3,4,5]));
/* .
 .
 .
 */
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).length === 6);
