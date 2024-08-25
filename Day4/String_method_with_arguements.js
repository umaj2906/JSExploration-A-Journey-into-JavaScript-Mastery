//String method with arguements
//Arguement is some value that we pass to method
/*---------------------------------- Index of method---------------------------------------*/
//Indexof returns the first index of occurence of some value in the string. or gives-1 if not found.

let str="Ilovecoding";

str.indexOf("love")

// method chaining
// method chaining is a technique where we call multiple methods on the same object in a single line 
// it is used to reduce the number of lines of code and make the code more readable
let Str="Ilovecoding";
console.log(Str.trim().toUpperCase());

// /slice method: Returns a part of original string as a new string.
// string.slice(startingIndex,endIndex)
let string= "Ilovecoding"
console.log(string.slice(5))

//if we pass a -ve value then string.slice(-5) = string.length-1
console.log(string.slice(-1))

//replace method
//searches a value in the string & returns a new string with the value replaced.
let msg = "helo_People"
alert(msg.replace("People","Uma"));

//Repeat_method
//returns a new string with the number of copies of the string

alert(msg.repeat(5))