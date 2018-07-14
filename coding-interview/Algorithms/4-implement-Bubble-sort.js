function bubbleSort(array){
    let isSorted =false;
  
    while(!isSorted){
        isSorted = true;
       for(let i = 0 ; i <array.length; i++){
           if(array[i]>array[i+1]){
             let aux = array[i];
             array[i] = array[i+1];
             array[i+1] = aux;
             isSorted = false;
             console.log(array)
           }
           
       }
      
        
       
    }
    return array;
}

let result = bubbleSort([10,8,6,5,2]);
console.log(result)