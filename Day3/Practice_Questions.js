// let num = 100
// if(num%10==0){
//     console.log("Number is good")
// }
// else{
//     console.log("Number is bad")
// }
//2nd solution

// Name=prompt("Enter your Name")
// age=prompt("Enter your age")

// alert(`${Name} is  ${age} year old`)

let Quarter = prompt("Enter Quarter number")

switch(Quarter){
    case Quarter=1:{
       alert("January,february,march")
        break;
    }
    case Quarter=2:{
        alert("April,may,june")
        break;
    }
    case Quarter=3:{
       alert("July,August,September")
        break;
    }
    case Quarter=4:{
        alert("October,November,December")
        break;
    }
    default:{
        alert("not a quarter");
    }
}