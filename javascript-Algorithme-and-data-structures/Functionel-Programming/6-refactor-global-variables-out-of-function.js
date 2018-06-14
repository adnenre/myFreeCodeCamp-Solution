// the global variable
var bookList = ["The Hound of the Baskervilles",
 "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
   "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(arr, bookName) {
    let newArray = arr.slice(0);
        newArray.push(bookName);
    return newArray;

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr , bookName) {
      let newArray = arr.slice(0);
      let index = newArray.indexOf(bookName);
    if (index >= 0) {
        newArray.splice(index,1);
        // Add your code above this line
    }
    return newArray;
}

var newBookList = add(bookList, 'A Brief History of Time');

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
 var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);