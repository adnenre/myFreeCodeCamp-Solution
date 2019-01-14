function insertionSort(array){
     
    for(let i = 0; i < array.length; i++){
        
        for(let j = i+1; j < array.length; j++){
           
            if(array[j]<array[i]){
             let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            console.log(array);
            }
            
           
        }
    }
    return array;
}

insertionSort([14,1,4,2,10,11,4,2,0,1])