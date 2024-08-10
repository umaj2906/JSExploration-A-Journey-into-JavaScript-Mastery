// Template literals:- These are used to add embedded expressions in a string.

let pencil_price = 5
let eraser_Price = 5
let output= "The Total Price is:"+ (pencil_price + eraser_Price) +"Rupees"
//kisi string k bich me variable ki value print krane k lie hme bhot se double quote lgane pdte h ya concatenation krna pdta h
// usko sort krne k lie concept aat h Template Literals. for example:
let Output =`Price of pencil is ${pencil_price} rupees` 
// in this we used back tick first and to diplay the value of variable we use ${variable}
console.log(`Price of erasee is ${eraser_Price}`)
console.log(output);
console.log(Output);