
// example of a function for capitalizing  a string
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
// How to export functions.
export { capitalizeString } 

// How to export variables.
export const foo = "bar"; 


// How to export all stamtement into one line.
export { capitalizeString, foo}

// solution for the challenge
export const foo = "bar";
export const bar = "foo";