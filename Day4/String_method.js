//Methods: Actions that can be performed on objects
//Format:
// stringName.Method()
//!st method: Trim
// Trim method trims whitespaces from both ends of string & returns a new one.

let wohoooo= " hey "
alert(wohoooo);
wohoooo.trim();
alert(wohoooo);
let password = prompt("Enter your Password")
alert(password.trim())
// Strings are immutable in string trim se string k andar change nhi aata ye ek nayi string create krta h jisme change hota h

//ToUpperCase && ToLowerCase Method
//string.toUpperCase is used to change letters to upper case and .toLowerCase is used to change letter to lower case

let hlo = prompt("Enter a word")
alert(hlo.toUpperCase());
alert(hlo.toLowerCase());
