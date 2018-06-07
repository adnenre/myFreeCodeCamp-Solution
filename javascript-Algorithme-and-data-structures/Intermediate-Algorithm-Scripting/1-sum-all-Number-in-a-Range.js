
/**
 * solution by @rebai_adnen
 */

function sumAll(arr){
    
    let max,
    min,
    sum = 0;
    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }else{
        min=arr[0];
        max=arr[1];
    } 
    for(let i=min; i<= max ; i++){
        sum +=i;
    }
    

    return sum;
}
console.log(typeof sumAll([4,1]));
console.log(sumAll([4,1]));
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));
console.log(sumAll([10,5]));