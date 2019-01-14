

  // create 100 doors 
 function Doors(n){
   let arr = [];
   for (let i = 0; i<n;i++){
     arr.push({id : i+1 , state :'closed'})
   }
   return arr;
 }
let result = Doors(100);
result = ['result','qsdf'].reduce((curr,prev,index) => {
       curr.push(prev.includes('re')?index:'null')
       return curr;
},[])
console.log(result)

