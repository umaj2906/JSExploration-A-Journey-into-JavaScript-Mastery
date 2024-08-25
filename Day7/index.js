let todo = [];

let req = prompt("please enter  your request");

while(true){
    if(req == "quit"){
        console.log('quitting app')
        break;}
        if(req == "list"){
            console.log('-----------')
            for(task of todo){
                console.log(task);
            }
            console.log("________")
        }
        else if(req == "add")
        {
            let newTask = prompt("please enter new task");
            todo.push(newTask);
            console.log("Task Added");
            break;
        }
        
        else if(req=="delete")
        {
            let delTask = prompt("please enter index of task to delete");    
            todo.splice(delTask , 1);
            console.log("Task Deleted");
        
        }
        else{
            console.log("Invalid Request");
        }

        req = prompt("please enter your request")
        

}