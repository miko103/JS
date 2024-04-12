const taskNameInput = document.getElementById("tasknameinput")
const submitNewTask = document.getElementById("submit")
const tasksDiv = document.getElementById("tasksDiv")

var taskid = 1

class Task {
    constructor(name,completed=false,id=localStorage.length+1){
        this.name = name
        this.completed = completed
        this.id = id
    }
    changeName(newName){
        this.name=newName
    }
    changeCompleted(){
        if (this.completed == false){
            this.completed = true
        }
        else if (this.completed == true){
            this.completed == false
        }
    }
    writeTaskToStorage(data){
        localStorage.setItem(this.id, data)
    }
    deleteTask(){
        localStorage.removeItem(this.id)
    }
}


function createTask(name,checked){
    if (name){
        var taskname = name
    }
    else{
        var taskname = taskNameInput.value
    }


    let task = new Task(taskname)
    build(task,checked)


    if (task.completed == true){
        var data = `${taskname}1`
    }
    else {
        var data = `${taskname}0`
    }
    if(localStorage.getItem(data)===null) {
        task.writeTaskToStorage(data)
     }
}

function build(task,checked){
    let div = document.createElement("div");
    div.setAttribute("class", "task")
    
    //label
    let label = document.createElement("p")
    label.textContent = task.name

    //checkbox
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type","checkbox")
    checkBox.setAttribute("id","doneCheckbox")
    checkBox.setAttribute("onclick", task.changeCompleted())
    if (checked == 1){
        checkBox.checked = true
    }
    else{
        checkBox.checked = false
    }
    
    //delete button
    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("onclick",task.deleteTask())
    deleteButton.textContent = 'Delete'

    //edit button
    let editButton = document.createElement("button")
    editButton.setAttribute("onclick", task.changeName())
    editButton.textContent = "Edit"
    
    //bundling it all together
    label.appendChild(checkBox)
    label.appendChild(deleteButton)
    label.appendChild(editButton)
    div.appendChild(label)
    tasksDiv.append(div)
}


function createExampleTask(){
    let taskname = "example task"
    createTask(taskname)
}

function loadTasksFromStorage(){
    for (let i=1; i < localStorage.length;i++){
        console.log(localStorage)
        stored_t_data = localStorage[i]
        console.log(stored_t_data)
        parsed_data = [stored_t_data.substr(0, stored_t_data.length - 1), stored_t_data.substr(stored_t_data.length - 1)]
        build(parsed_data[0], parsed_data[1])
        console.log(`task with name ${parsed_data[0]} created`)
    }
}
