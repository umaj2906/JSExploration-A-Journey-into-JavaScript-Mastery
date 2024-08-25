let fruits = ['Apple','Banana','Grapes','Mango','Kiwi']
for(i=0;i<fruits.length;i++){
    console.log(i , fruits[i]);
}  
//Nested loop with nested Arrays
let heroes = [["ironman","spiderman" , "Thor"],[ "superman" , "Wonder Woman"]]

for(let i=0; i <heroes.length;i++)
{
    console.log(`list ${i}`)
    for(let j=0; j<heroes[i].length; j++)
    {
        console.log(heroes[i][j]);
    }
}

let student = [["Aman" , 95 ] , ["Uma" , 78], ["Kajal" , 89]];
for(let i=0; i<student.length;i++)
{
    console.log(`list ${i}`)
    for(let j=0; j<student[i].length;j++)
    {
        console.log(student[i][j]);
    }
}



