let tasks=[];

//add tasks

function addTask(){
    let input =document.getElementById("taskInput");
    let taskText=input.value;
    if(taskText==="") return;

    tasks.push(taskText);
    input.value="";
    renderTasks();
}

//render tasks
function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `
            ${tasks[i]}
            <button onClick="deleteTask(${i})">X</button>
        `;
        list.appendChild(li);
    }
}


//delete task

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}


//mark as completed
function toggleComplete(event) {
    event.target.classList.toggle("completed");
}
