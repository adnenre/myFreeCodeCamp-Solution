
/**
 * solution by @rebai_adnen
 */

 function destroyer(arr){
     let argumentList =[];
     let newArry = [];
     for (let i = 1;i<arguments.length; i++){
         argumentList.push(arguments[i]);
     }
     for(let i = 0 ; i <arr.length ; i++){
        if(argumentList.indexOf(arr[i]) == -1) {
           newArry.push(arr[i]); 
        } 
    }
     
     
     arr = newArry;
     return arr;
 }


 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
 console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
 console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
 console.log(destroyer([2, 3, 2, 3], 2, 3));
 console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
 console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));