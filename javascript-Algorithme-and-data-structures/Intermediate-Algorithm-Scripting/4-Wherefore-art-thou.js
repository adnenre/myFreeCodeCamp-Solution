function whatIsInAName(collection,source){
    // what's in a name?
    var arr = [];
  arr =  collection.filter(col =>{
       for(let i in source){
         
         if(col[i]!=source[i]){
             return false;
         }
       }
       return true;
    })
   
    return arr;
}

let collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
let source = { last: "Capulet" };

let result = whatIsInAName(collection,source);
console.log(result)

