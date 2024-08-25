//push = add to end
//unshift = add to start
//pop= delete from end & returns it
//shift =  delete from start and returns it
let cars = ["audi",'maruti', 'xuv']
alert(cars.push('toyota'))
alert(cars.unshift('i10'))
alert(cars.pop())
alert(cars)
//
let month = ['january' , 'july' , 'march' , 'august']
month.shift()
month.shift()
month.unshift("june")
month.unshift("July")
console.log(month.indexOf("august"))
console.log(month.includes("june"))
let month2 = ['january','september',]
//Concat Method:merge 2 arrays
alert(month.concat(month2))

//reverse:reverse an array
console.log(month.reverse())

//slice:copies a part of string
alert(month.slice(2,3))

//splice method:It removes / replaces / add elements in place
//splice(start,delete,item1....item)

let colors = ["Red","Blue","Green","Yellow"]
 alert(colors.splice(3))
 alert(colors)
 alert(colors.splice(0,1))
 alert(colors)
alert(colors.push("Red","Blue","Purple"))
alert(colors)
 // Difference b/w slice and splice
//slice changes in the copy of the array whereas splice changes in the original array

// sort method : arranging arrays in ascending or descending order

alert(colors.sort())
// sort method doesn't work in numbers because it first converts an array into string and then sorting 
//we use sort method if we hve characters and string


