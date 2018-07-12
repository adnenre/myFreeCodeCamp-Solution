let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>/; // Change this line
let result = text.match(myRegex);

/* solution

 - 1 -
 myRegex = /<h1>/

 - 2 -
 myRegex = /<h*1>/

 - 3 -
 myRegex = /<h[1-7]>/

 - 4 -
 myRegex = /<h1*>/
*/