function spinalCase(str){
   
    str = str.toLowerCase().split(' ').join('-');
    return str;
}

let result = spinalCase('Hello Everyone How Are You');
console.log(result)