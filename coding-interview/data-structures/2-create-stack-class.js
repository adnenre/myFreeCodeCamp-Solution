
// stach with function constructor
// function Stack() { 
//     let collection = [];
//     this.print = function(){
//         console.log(collection);
//     }
//     this.pop = function(){
//         return collection.pop();
//     }
//     this.push = function(element){
//        return collection.push(element);
//     }
//     this.peek = function(){
//         return collection[collection.length-1];
//     }
//     this.isEmpty = function(){
//       return collection.length>0?false:true;
//     }
//     this.clear = function(){
//       return collection.length=0;
//     }
// }


// es6 version
class Stack{
    /**
     * 
     * @param {Array} collection 
     */
    constructor(collection){
      this.collection = collection || [];
    }
     
    print(){
        console.log(this.collection);
    }
    pop(){
        return this.collection.pop();
        
    }
    push(element){
       return this.collection.push(element);
    }
    peek(){
        return this.collection[this.collection.length-1];
    }
    isEmpty(){
      return this.collection.length>0?false:true;
    }
    clear(){
      return this.collection.length=0;
    }
}

let col = new Stack(['a','b','c','d']);
let col1  = new Stack();
console.log(col);
console.log(col1.push('test'));