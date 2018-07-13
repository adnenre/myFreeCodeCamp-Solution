function multiplesOf3and5(number) {
    let array = [];
    for(let i = 0 ; i < number ;i++){
      if ( i % 5 == 0 || i % 3 == 0){
        array.push(i);
      }
    }
    let result = array.reduce((a,b) => a+b);
    console.log(result);
    return result;
  }
  
  multiplesOf3and5(1000);