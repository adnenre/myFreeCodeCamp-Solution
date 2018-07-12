let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // g for multiple result and i for ignore case sensitive
let result = quoteSample.match(alphabetRegex);