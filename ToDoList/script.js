const taskNameInput = document.getElementById("tasknameinput")
const submitNewTask = document.getElementById("submit")
const tasksDiv = document.getElementById("tasksDiv")



function loadTasksFromStorage(){
    
}

function writeTaskToStorage(){

}

function createTask(){
    let taskname = taskNameInput.value
    taskNameInput.value = ""
    console.log(taskname)
    let task = document.createElement("div")
    //task.addEventListener()
    //task.innerHTML = 


    tasksDiv.appendChild(task)
}

function deleteTask(task){

}
function editTask(task){

}
function checkIfTicked(task){

}