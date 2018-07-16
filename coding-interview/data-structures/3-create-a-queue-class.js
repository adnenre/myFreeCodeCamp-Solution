
// Queue with function constructor ES5
function Queue () { 
    let collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.dequeue= function () {
        return collection.shift();
    }
    this.enqueue = function (element) {
        return collection.push(element);
    }
    this.front= function () {
        return collection[0];
    }
    this.isEmpty = function () {
        return collection.length > 0 ? false : true;
    }
    this.size = function () {
        return collection.length ;
    }
}

// Queue with class ES6
class Queue {
    constructor(collection) {
        this.collection = collection || [];
        this.print = function () {
            console.log(this.collection);
        };
        this.dequeue = function () {
            return this.collection.shift();
        };
        this.enqueue = function (element) {
            return this.collection.push(element);
        };
        this.front = function () {
            return this.collection[0];
        };
        this.isEmpty = function () {
            return this.collection.length > 0 ? false : true;
        };
        this.size = function () {
            return this.collection.length;
        };
    }
}