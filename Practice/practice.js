let arr =[7,9,0,-2]
let n = 3
let ans = arr.slice(0,n)
console.log(ans)
let ans2 = arr.slice(arr.length-n)
console.log(ans2)
// \end{code}
//check whether a stirng is blank or not
str = prompt("Enter a String")

if (str.length = 0)
{
    alert("String is emptyy")
}
else{
    alert(`String is ${str}`)
}
//  Write a JavaScript program to test whether the character at the given (character) index is lower case

let char = prompt("enter a value")

if(char= char.toLowerCase){
    alert("Character is lower case")
}
 else{
    alert("Character is UpperCase")
 }

// Write a JavaScript program to strip leading and trailing spaces from a string.

let iname = "helo     "
console.log(`original ${iname}`)
console.log(`without spaces ${iname.trim()}`)
// console.log(iname.trim())

//  Qs6. Write a JavaScript program to check if an element exists in an array or not.
let box = [1,2,3,4,5,6,7,8]
let num3 = 5
if (box.indexOf(num3) != -1){
    console.log("it exists in array")
}
else{
    console.log("it does not exist in array")
}
    
