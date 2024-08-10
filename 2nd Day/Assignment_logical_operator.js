// Q:-A "god string" is a string  with the letter 'a' & has length >3. Write a program to find a string is good or not

str = "Hello"

if (str[0]==='a'&& str.length>3){
  
        console.log("Good string")
}
else{
    console.log("not a good string")
}
// 2nd
let num = 12;
if ((num%3=== 0) && ((num+1===15) || (num-1 == 11))) {
    console.log("safe");
}
else{
    console.log("unsafe");
}