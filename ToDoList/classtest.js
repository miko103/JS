class Task {
    constructor(name,completed=false){
        this.name = name
        this.completed = completed
    }
    changeName(newName){
        this.name= newName
    }
    changeCompleted(){
        if (this.completed == false){
            this.completed = true
        }
        else if (this.completed == true){
            this.completed == false
        }
    }
}


task1 = new Task("Larry's Task")
console.log(task1.name, task1.completed)

task1.changeName("Bobby's Task")
console.log(task1.name, task1.completed)

task1.changeCompleted()
console.log(task1.name, task1.completed)