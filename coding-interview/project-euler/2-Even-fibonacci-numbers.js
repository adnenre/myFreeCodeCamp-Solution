function fibonacci(num){
    var a = 1, b = 0, temp;
    let sum = [];
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      
      num--;
      if(a%2==0){
          sum.push(a);
      }
    }
  
    return sum.reduce((a,b) => a+b);
  }

  console.log(fibonacci(10))