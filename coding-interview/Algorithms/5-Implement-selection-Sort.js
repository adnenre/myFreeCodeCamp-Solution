function selectionSort(array){

    for(let i = 0; i < array.length; i++){
        let min = i;
       for(let j = i+1; j<array.length;j++){
           
          if(array[j]<array[min]){
           
              min = j;
            
          }

       }
        if (min != i) {
            //After each pass, if the current min num != initial min num, exchange the position.
            //Swap the numbers 
            var tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
            console.log(array)
        }
       
    }
    
    return array;
}

let result = selectionSort([1, 4, 2, 8, 1, 234, 92]);

console.log(result);



