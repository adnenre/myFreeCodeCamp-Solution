
// String methode

let myString = 'hello world!';

// function chartAt Return the character at the specified index (position)
let result1 = myString.charAt(1);
console.log(result1);

// function chartCodeAt return the unicode of the character at the specified index
let result2 = myString.charCodeAt(1);
console.log(result2);

// function concat joins two or more strings , and returns a new joied strings
let result3 = myString.concat(' how are you ?');
console.log(result3);

// function endWith checks whether a string ends with specified string/characters
let result4 = myString.endsWith('world!');
console.log(result4);

// function fromCharCode converts unicode values to characters
let result5 = String.fromCharCode(19);
console.log(result5);

// function include check what ever a string containe a specific word
let result6 = myString.includes('hello');
console.log(result6);

// function indexOf return the position of the first found occurence of a specified value in a string
let result7 = myString.indexOf('w');
console.log(result7);

// function lastIndexOf returns the position of the last found occurrence of a specified value in a string
let result8 = myString.lastIndexOf('l');



