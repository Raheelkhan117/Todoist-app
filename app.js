let command = prompt("What do you want to do");
let task;
let taskArray = [];

while(command!=='quit'){
    if(command==='new'){
        task = prompt("Enter task");
        taskArray.push(task);

    }
    else if(command==='delete'){
        let index = parseInt(prompt("Enter the task index for deleting"));
        const deletes =taskArray.splice(index,1);
        console.log(`ok, deleted, ${deletes[0]}`);
    }
    else if(command==='list'){
        if(!taskArray.length){
            console.log("No tasks yet! please add tasks first!");
        }
        else{
            console.log("***********");
            for(let i =0; i<taskArray.length;i++){
                console.log(`${i}:${taskArray[i]} `); 
            } console.log("***********");
        } 
    }
    else{
        alert("Not a valid command");
    }
    command = prompt("What do you want to do");
}
console.log("You quit the app, bye.");