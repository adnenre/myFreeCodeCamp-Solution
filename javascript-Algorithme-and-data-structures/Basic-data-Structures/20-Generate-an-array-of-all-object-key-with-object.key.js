

/**
 * Solutino by @adnen_rebai
 */

 let users = {
     Alan : {
         age :27,
         online:false
     },
     Jeff : {
         age : 32,
         online : false
     },
     Sarah : {
         age : 48,
         online : false
     },
     Ryan : {
        age : 19,
        online : true
     }
    }

function getArrayOfUser(obj){
    console.log(Object.keys(obj))

}

console.log(getArrayOfUser(users));