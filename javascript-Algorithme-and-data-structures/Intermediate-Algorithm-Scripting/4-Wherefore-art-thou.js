function whatIsInAName(collection,source){
    // what's in a name?
    var arr = [];
  arr =  collection.filter(col =>{
       for(let i in source){
         console.log(col[i]);
         if(col[i]!=source[i]){
             return false;
         }
       }
       return true;
    })
   
    return arr;
}

whatIsInAName([{first:'hello',last:'how are you'}],{first:'test'})
